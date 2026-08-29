"use client";

import { useEffect, useRef, useState } from "react";

const CAL = "https://cal.eu/enzo-crealeads/20min";

/**
 * System prompt de référence de l'assistant CreaLeads.
 * Sert de socle aux réponses scriptées ci-dessous, et sera envoyé tel quel
 * au backend LLM (n8n) le jour où on branche les questions libres.
 */
export const SYSTEM_PROMPT = `Tu es l'assistant de CreaLeads, une agence qui installe un système d'acquisition de clients pour les artisans du bâtiment.

OFFRE (unique, ne jamais inventer d'autre formule) :
- Une seule offre : 497 €/mois.
- Zéro frais de mise en place (zéro setup).
- Budget publicitaire à part : environ 300 €/mois, versé directement à Meta depuis le compte du client. Jamais inclus dans l'abonnement.
- Sans engagement : le client arrête quand il veut, par simple e-mail. Aucune durée minimale, aucune pénalité. (Conseil : laisser au moins 30 jours aux campagnes Meta, le temps que l'algorithme apprenne.)
- 4 agents inclus : Théo (campagne Meta Ads), Iris (visuels IA), Lucie (qualification automatique des demandes 24h/24), Victor (reporting + optimisation).
- Options récurrentes : Retargeting +97 €/mois, Contenu réseaux Marco +147 €/mois, Zone supplémentaire +97 €/mois, Google Ads +197 €/mois, Agent perso Amandine +97 €/mois.
- Options ponctuelles : Site vitrine pro 490 €, Audit de pubs existantes 290 €.
- Exclusivité : un seul artisan par métier et par zone.

ARGUMENT ROI : 497 € + ~300 € de pub = ~797 €/mois. Un chantier de résine se facture 3 000 à 8 000 €. Le premier chantier signé rembourse ~4 mois d'abonnement.

RÈGLES :
- Tu peux confirmer le prix de 497 €/mois et l'appuyer par le ROI.
- Ne JAMAIS négocier, ne jamais accorder de remise, ne jamais inventer de prix. Le prix est unique et le même pour tout le monde.
- Réponses courtes, concrètes, ton direct et chaleureux. Pas de blabla corporate.
- Objectif : donner envie de réserver un appel de 20 min avec Enzo. Propose la réservation dès que c'est pertinent.
- Si tu ne sais pas, renvoie vers l'appel plutôt que d'inventer.`;

type Msg = { from: "bot" | "user"; text: string; cta?: boolean };

const GREETING =
  "Bonjour 👋 Je suis l'assistant CreaLeads. Prix, fonctionnement, engagement… posez votre question, ou choisissez ci-dessous.";

const QUICK = [
  { label: "C'est combien ?", key: "prix" },
  { label: "Comment ça marche ?", key: "how" },
  { label: "Y a-t-il un engagement ?", key: "engagement" },
  { label: "Réserver un appel", key: "book" },
];

// Base de connaissances scriptée (sans backend)
const ANSWERS: Record<string, string> = {
  prix: "L'offre CreaLeads, c'est 497 €/mois — et zéro frais de mise en place. À côté, vous gardez votre budget publicitaire (~300 €/mois), versé directement à Meta depuis votre compte. Pour situer : un seul chantier de résine (3 000 à 8 000 €) rembourse environ 4 mois d'abonnement.",
  how: "Quatre agents IA travaillent pour vous : Théo lance vos pubs Meta ciblées sur votre zone et votre métier, Iris crée vos visuels, Lucie qualifie vos demandes automatiquement, 24h/24, et Victor optimise et vous envoie le bilan. Vous recevez des demandes qualifiées — vous n'avez plus qu'à faire les devis.",
  engagement: "Aucun engagement. Pas de durée minimale, pas de pénalité : vous arrêtez quand vous voulez, par simple e-mail. Un conseil quand même — laissez au moins 30 jours aux campagnes Meta, le temps que l'algorithme apprenne et livre son plein potentiel.",
  budget: "Le budget publicitaire (~300 €/mois conseillé) reste sur VOTRE compte Meta et est versé directement à Meta. On n'y touche jamais, vous gardez la main et la propriété du compte. Il n'est jamais inclus dans les 497 €.",
  agents: "Inclus dans les 497 € : Théo (pubs Meta), Iris (visuels IA), Lucie (qualification automatique 24h/24) et Victor (reporting + optimisation). En option : Amandine, votre bras droit (+97 €/mois), et Marco pour le contenu réseaux (+147 €/mois).",
  options: "En option, à ajouter quand vous voulez : Retargeting +97 €/mois, Contenu réseaux (Marco) +147 €/mois, Zone supplémentaire +97 €/mois, Google Ads +197 €/mois, Agent perso Amandine +97 €/mois. Et en une fois : site vitrine pro 490 € ou audit de vos pubs actuelles 290 €.",
  setup: "Aucun frais de mise en place. Tout le build — campagne Meta, visuels, formulaire, qualification automatique et CRM — est intégré dans l'abonnement de 497 €/mois. Vous ne payez rien au démarrage.",
  results: "Vos premiers prospects arrivent en général sous 24 à 72 h après le lancement des campagnes, puis le volume monte au fil des semaines à mesure que l'algorithme s'optimise.",
  exclu: "On travaille en exclusivité : un seul artisan par métier et par secteur. Une fois votre zone prise, on ne la propose plus à un concurrent.",
  negociate: "Le prix est unique et transparent : 497 €/mois, le même pour tout le monde. C'est ce qui garantit l'équité entre artisans — donc pas de négociation. Le mieux, c'est d'en parler 20 min avec Enzo pour voir si c'est fait pour vous.",
  who: "On accompagne les artisans du bâtiment : résine, peinture, maçonnerie, rénovation, ravalement… Un seul métier et une seule zone par client, en exclusivité.",
};

function matchKey(raw: string): string {
  const t = raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  if (/(negoci|remise|reduction|moins cher|rabais|discount|un geste|degressif|baisser le prix)/.test(t)) return "negociate";
  if (/\b(prix|cout|combien|tarif|cher|coute|euro|497|argent|budget total)\b/.test(t)) return "prix";
  if (/(engag|duree|resil|preavis|arreter|stopper|3 mois|trois mois)/.test(t)) return "engagement";
  if (/(comment ca marche|comment ca fonctionne|fonctionne|process|etapes|marche comment)/.test(t)) return "how";
  if (/(budget|pub|publicit|meta|facebook|instagram|ads|300)/.test(t)) return "budget";
  if (/(agent|theo|iris|lucie|victor|amandine|marco|equipe|ia|robot)/.test(t)) return "agents";
  if (/(option|upsell|retarget|google|site|vitrine|audit|zone|supplement|ajout|contenu|reseau)/.test(t)) return "options";
  if (/(setup|mise en place|installation|frais|demarrage|depart)/.test(t)) return "setup";
  if (/(resultat|delai|combien de temps|quand|rapide|premiers|leads|prospects|chantier)/.test(t)) return "results";
  if (/(exclusiv|concurrent|plusieurs artisans|deja un)/.test(t)) return "exclu";
  if (/(quel metier|peintre|macon|resine|carreleur|renovation|plombier|pour mon metier|pour moi)/.test(t)) return "who";
  return "";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apparaît après le loader (évite le clignotement au chargement)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 2600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  // Échap pour fermer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushBot = (text: string, cta = false) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text, cta }]);
    }, 480);
  };

  const openBooking = () => window.open(CAL, "_blank", "noopener,noreferrer");

  const answerFor = (key: string, userText?: string) => {
    if (key === "book") {
      setMessages((m) => [
        ...m,
        ...(userText ? [{ from: "user", text: userText } as Msg] : []),
        { from: "bot", text: "Parfait 👇 Choisissez un créneau de 20 min en visio avec Enzo.", cta: true },
      ]);
      return;
    }
    if (userText) setMessages((m) => [...m, { from: "user", text: userText }]);
    const known = ANSWERS[key];
    if (known) {
      const needCta = key === "prix" || key === "negociate" || key === "results";
      pushBot(known + (needCta ? "\n\nLe plus simple pour votre cas : un appel de 20 min. On regarde ça ensemble ?" : ""), needCta);
    } else {
      pushBot(
        "Bonne question — le plus simple, c'est d'en parler directement avec Enzo lors d'un appel de 20 min. Vous voulez réserver un créneau ?",
        true,
      );
    }
  };

  const onQuick = (q: (typeof QUICK)[number]) => {
    if (q.key === "book") {
      setMessages((m) => [...m, { from: "user", text: q.label }]);
      answerFor("book");
      return;
    }
    answerFor(q.key, q.label);
  };

  const onSend = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const webhook = process.env.NEXT_PUBLIC_CHAT_WEBHOOK;
    if (webhook) {
      // Backend LLM (n8n) branché : on lui envoie la conversation
      setMessages((m) => [...m, { from: "user", text }]);
      setTyping(true);
      try {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: messages.map((m) => ({ role: m.from === "bot" ? "assistant" : "user", content: m.text })),
          }),
        });
        const data = await res.json().catch(() => ({}));
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", text: data.reply || "Désolé, je n'ai pas bien saisi. On en parle de vive voix ?", cta: !data.reply }]);
      } catch {
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", text: "Je n'arrive pas à répondre à l'instant — réservez plutôt un appel de 20 min, c'est plus simple.", cta: true }]);
      }
      return;
    }

    // Sans backend : matching par mots-clés sur la base scriptée
    answerFor(matchKey(text), text);
  };

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      {/* Panneau */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Assistant CreaLeads"
          className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] sm:max-h-[560px] flex flex-col rounded-3xl bg-bg border border-ink-10 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-ink text-bg px-5 py-4 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-emerald/20 flex items-center justify-center font-display font-extrabold text-emerald text-sm">C</div>
            <div className="min-w-0 flex-1">
              <div className="font-display font-bold text-sm leading-none">Assistant CreaLeads</div>
              <div className="text-[11px] text-bg/60 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald inline-block" /> Répond en quelques secondes
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="text-bg/60 hover:text-bg transition-colors p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ink-05">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                    m.from === "user" ? "bg-emerald text-ink rounded-br-sm" : "bg-bg border border-ink-10 text-ink rounded-bl-sm"
                  }`}
                >
                  {m.text}
                  {m.cta && (
                    <button
                      onClick={openBooking}
                      className="mt-2.5 w-full text-center bg-ink text-bg text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-ink/90 transition-colors"
                    >
                      Réserver un appel de 20 min
                    </button>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-bg border border-ink-10 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-40 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-40 animate-bounce" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-1.5 px-4 pt-3 flex-shrink-0 bg-bg">
            {QUICK.map((q) => (
              <button
                key={q.key}
                onClick={() => onQuick(q)}
                className="text-[11.5px] font-medium px-3 py-1.5 rounded-full border border-ink-10 bg-bg hover:border-emerald hover:text-emerald-dark transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSend();
            }}
            className="flex items-center gap-2 p-3 flex-shrink-0 bg-bg border-t border-ink-10"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre question…"
              className="flex-1 bg-ink-05 border border-ink-10 rounded-full px-4 py-2.5 text-[13px] outline-none focus:border-emerald transition-colors"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-emerald text-ink flex items-center justify-center hover:bg-emerald-light transition-colors disabled:opacity-40 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant CreaLeads"}
        className="w-14 h-14 rounded-full bg-emerald text-ink shadow-2xl shadow-emerald/30 flex items-center justify-center hover:bg-emerald-light transition-all hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
