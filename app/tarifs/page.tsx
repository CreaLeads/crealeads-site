"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CAL = "https://cal.eu/enzo-crealeads/20min";

const AGENTS_INCLUS = [
  { name: "Théo", role: "Campagne Meta Ads automatique — 1 zone, 1 métier" },
  { name: "Iris", role: "Visuels publicitaires renouvelés par IA" },
  { name: "Lucie", role: "Chatbot SMS qui qualifie vos leads 24h/24" },
  { name: "Victor", role: "Reporting mensuel automatique + optimisation hebdo" },
];

const INCLUS = [
  "Votre tableau de bord — demandes, devis, messages et bilan hebdo au même endroit",
  "Notification instantanée à chaque nouvelle demande",
  "Exclusivité totale sur votre zone et votre métier",
];

const RECURRENTS = [
  { name: "Retargeting automatique", price: "+97 €/mois", desc: "Relance ceux qui ont vu vos pubs sans passer à l'action." },
  { name: "Contenu réseaux sociaux — Marco", price: "+147 €/mois", desc: "Vos réseaux alimentés automatiquement, chaque semaine." },
  { name: "Zone géographique supplémentaire", price: "+97 €/mois", desc: "Une deuxième zone couverte en parallèle." },
  { name: "Google Ads automatique", price: "+197 €/mois", desc: "Captez aussi la demande déjà présente sur Google." },
  { name: "Agent IA personnel — Amandine", price: "+97 €/mois", desc: "Votre bras droit, joignable par message quand vous voulez." },
];

const ONESHOT = [
  { name: "Site vitrine pro", price: "490 €", desc: "Un site qui inspire confiance, livré clé en main. Paiement unique." },
  { name: "Audit de vos pubs existantes", price: "290 €", desc: "On passe vos campagnes actuelles au crible et on vous dit quoi corriger. Paiement unique." },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-28 pb-10 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Tarifs
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Une offre claire, sans surprise.
          </h1>
          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed">
            Un seul abonnement à 497 €/mois, quatre agents inclus, zéro frais de mise en place. Vous ajoutez des options seulement quand vous en avez besoin.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Carte offre centrale */}
          <div className="relative rounded-3xl p-6 sm:p-10 bg-ink text-bg border-2 border-emerald shadow-2xl shadow-emerald/10 mb-12 sm:mb-16">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              L&apos;offre CreaLeads
            </div>

            <div className="text-center mt-2 mb-8">
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-emerald">497 €</span>
                <span className="text-sm text-bg/60">/mois</span>
              </div>
              <div className="text-xs text-bg/60 mt-3">
                Zéro frais de mise en place · Sans engagement
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-4 text-emerald">
                  Vos 4 agents inclus
                </div>
                <ul className="space-y-3">
                  {AGENTS_INCLUS.map((a) => (
                    <li key={a.name} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs flex-shrink-0 bg-emerald/20 text-emerald mt-0.5">
                        {a.name.charAt(0)}
                      </span>
                      <span className="text-sm">
                        <strong className="text-bg">{a.name}</strong>
                        <span className="text-bg/60"> — {a.role}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-4 text-emerald">
                  Également inclus
                </div>
                <ul className="space-y-3">
                  {INCLUS.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-bg/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-4 rounded-full font-semibold text-sm bg-emerald text-ink hover:bg-emerald-light transition-all mt-8"
            >
              Réserver un appel
            </a>
          </div>

          {/* Tableau des options */}
          <div className="mb-4 text-center">
            <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-2">
              Options à la carte
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Renforcez le système, quand vous voulez.
            </h2>
          </div>

          {/* Récurrents */}
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              À ajouter à l&apos;abonnement
            </div>
            <div className="border border-ink-10 rounded-2xl overflow-hidden">
              {RECURRENTS.map((u, i) => (
                <div
                  key={u.name}
                  className={`flex items-center justify-between gap-4 px-4 sm:px-6 py-4 ${i % 2 === 0 ? "bg-bg" : "bg-emerald/[0.06]"}`}
                >
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm">{u.name}</div>
                    <div className="text-xs text-ink-60 leading-relaxed mt-0.5">{u.desc}</div>
                  </div>
                  <div className="font-display font-extrabold text-sm sm:text-base text-emerald whitespace-nowrap">{u.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* One-shot */}
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              Prestations ponctuelles (paiement unique)
            </div>
            <div className="border border-ink-10 rounded-2xl overflow-hidden">
              {ONESHOT.map((u, i) => (
                <div
                  key={u.name}
                  className={`flex items-center justify-between gap-4 px-4 sm:px-6 py-4 ${i % 2 === 0 ? "bg-bg" : "bg-emerald/[0.06]"}`}
                >
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm">{u.name}</div>
                    <div className="text-xs text-ink-60 leading-relaxed mt-0.5">{u.desc}</div>
                  </div>
                  <div className="font-display font-extrabold text-sm sm:text-base text-emerald whitespace-nowrap">{u.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentions communes */}
          <div className="mt-8 rounded-2xl border border-ink-10 bg-ink-05 p-5 sm:p-6 text-sm text-ink-60 leading-relaxed space-y-1.5">
            <p><strong className="text-ink">Zéro frais de mise en place</strong> — le build complet (campagnes, visuels, formulaire, chatbot SMS, CRM, agents) est intégré dans l&apos;abonnement de 497 €.</p>
            <p><strong className="text-ink">Budget publicitaire à part</strong> — environ 300 €/mois conseillé, versé directement à Meta depuis votre compte, jamais inclus dans l&apos;abonnement.</p>
            <p><strong className="text-ink">Sans engagement</strong> · résiliable à tout moment · exclusivité par zone et métier.</p>
          </div>

          {/* CTA final */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary px-8 py-4 text-base font-semibold rounded-full"
            >
              <span>Réserver mon appel</span>
            </a>
            <div className="mt-6">
              <Link href="/offres" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors">
                Voir le détail de l&apos;offre
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
