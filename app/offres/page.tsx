import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CAL = "https://cal.eu/enzo-crealeads/20min";

const AGENTS_INCLUS = [
  { i: "T", name: "Théo", role: "Acquisition Meta", desc: "Lance et pilote votre campagne Meta Ads automatique, ciblée sur 1 zone et 1 métier. Il teste les audiences et ajuste les enchères pour faire baisser le coût par demande." },
  { i: "I", name: "Iris", role: "Studio créa", desc: "Crée vos visuels publicitaires et les renouvelle automatiquement par IA, pour éviter l'usure et garder des pubs qui arrêtent le scroll." },
  { i: "L", name: "Lucie", role: "Réceptionniste 24/7", desc: "Chatbot SMS qui engage et qualifie chaque nouvelle demande en moins d'une minute, 24h/24. Elle écarte les curieux et garde les prospects sérieux." },
  { i: "V", name: "Victor", role: "Analyste", desc: "Vous envoie un reporting mensuel automatique et optimise vos campagnes chaque semaine. Vous savez toujours où va votre argent." },
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
  { name: "Agent IA personnel — Amandine", price: "+97 €/mois", desc: "Votre bras droit : vous lui demandez où en est votre business, elle répond." },
];

const ONESHOT = [
  { name: "Site vitrine pro", price: "490 €", desc: "Un site qui inspire confiance, livré clé en main." },
  { name: "Audit de vos pubs existantes", price: "290 €", desc: "On passe vos campagnes au crible et on vous dit quoi corriger." },
];

export default function OffresPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Notre offre
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Une offre. Toute une équipe.
          </h1>
          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed">
            Un seul abonnement à 497 €/mois, quatre agents au travail pour vous. Zéro frais de mise en place, sans engagement. Vous renforcez le système avec des options quand vous en avez besoin.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Bloc offre */}
          <div className="bg-bg border border-ink-10 rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b border-ink-10">
              <div>
                <div className="text-sm text-ink-60 mb-1">L&apos;offre CreaLeads</div>
                <div className="font-display text-display-md">Le système complet</div>
                <div className="inline-flex items-center gap-2 text-xs font-bold mt-3 px-3 py-1.5 rounded-full bg-emerald/10 text-emerald-dark">
                  <span aria-hidden>🤖</span> Théo · Iris · Lucie · Victor
                </div>
              </div>
              <div className="sm:text-right">
                <div className="font-display text-4xl sm:text-5xl font-bold text-emerald">497 €<span className="text-lg text-ink-60 font-normal">/mois</span></div>
                <div className="text-xs text-ink-60 mt-1">Zéro setup · Sans engagement</div>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed mb-8">
              Théo lance votre campagne Meta, Iris crée et renouvelle vos visuels, Lucie répond à chaque prospect en moins d&apos;une minute 24h/24, et Victor vous envoie le bilan chaque semaine — le tout dans votre tableau de bord. Un système qui tourne pendant que vous êtes sur le chantier.
            </p>

            <div className="bg-ink-05 rounded-2xl p-5 sm:p-6 mb-8">
              <div className="text-xs font-semibold text-emerald uppercase tracking-wider mb-2">
                Pour qui ?
              </div>
              <p className="text-sm sm:text-base text-ink-60 leading-relaxed">
                L&apos;artisan du bâtiment qui veut un flux régulier de demandes qualifiées sans courir après les clients ni gérer lui-même ses publicités. Un seul métier, une seule zone, en exclusivité.
              </p>
            </div>

            {/* Agents détaillés */}
            <div className="font-display font-bold text-base mb-4">Vos 4 agents inclus</div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {AGENTS_INCLUS.map((a) => (
                <div key={a.name} className="rounded-2xl border border-ink-10 bg-bg p-5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-full bg-emerald/15 flex items-center justify-center font-display font-extrabold text-base text-emerald-dark flex-shrink-0">
                      {a.i}
                    </div>
                    <div>
                      <div className="font-display font-bold text-base leading-none">{a.name}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald mt-1">{a.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-ink-60 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Également inclus */}
            <div className="font-display font-bold text-base mb-4">Également inclus</div>
            <ul className="space-y-2.5 mb-8">
              {INCLUS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-ink text-bg rounded-2xl p-5 sm:p-6 mb-8">
              <div className="text-xs font-semibold text-emerald uppercase tracking-wider mb-2">
                Notre promesse
              </div>
              <p className="text-sm sm:text-base text-bg/80 leading-relaxed">
                Vos premiers prospects sous 24 à 72 heures après le lancement, puis une croissance régulière mois après mois. Le volume dépend de votre budget publicitaire et de votre zone — on le définit ensemble lors de l&apos;appel.
              </p>
            </div>

            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-primary px-8 py-4 text-base font-semibold rounded-full"
            >
              <span>Réserver un appel</span>
            </a>
          </div>

          {/* Options */}
          <div className="mt-14 sm:mt-20">
            <div className="text-center mb-8">
              <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-2">
                Options à la carte
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Renforcez le système, quand vous voulez.
              </h2>
              <p className="text-sm sm:text-base text-ink-60 mt-3 max-w-xl mx-auto leading-relaxed">
                Tout est optionnel. On commence par l&apos;offre à 497 € et on ajoute au fil de votre croissance.
              </p>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              À ajouter à l&apos;abonnement
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {RECURRENTS.map((u) => (
                <div key={u.name} className="rounded-2xl border border-ink-10 bg-bg p-4 sm:p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="font-display font-bold text-sm leading-tight">{u.name}</div>
                    <div className="font-display font-extrabold text-sm text-emerald whitespace-nowrap">{u.price}</div>
                  </div>
                  <div className="text-xs text-ink-60 leading-relaxed">{u.desc}</div>
                </div>
              ))}
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              Prestations ponctuelles (paiement unique)
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {ONESHOT.map((u) => (
                <div key={u.name} className="rounded-2xl border border-ink-10 bg-bg p-4 sm:p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="font-display font-bold text-sm leading-tight">{u.name}</div>
                    <div className="font-display font-extrabold text-sm text-emerald whitespace-nowrap">{u.price}</div>
                  </div>
                  <div className="text-xs text-ink-60 leading-relaxed">{u.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Garanties communes */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: "Zéro frais de mise en place", d: "Tout le build est intégré dans l'abonnement. Vous ne payez rien au démarrage." },
              { t: "Budget pub à part", d: "~300 €/mois conseillé, versé directement à Meta depuis votre compte — jamais inclus dans l'abonnement." },
              { t: "Sans engagement", d: "Aucune durée minimale — vous arrêtez quand vous voulez, par simple e-mail. Aucune pénalité." },
              { t: "Exclusivité", d: "Un seul artisan par métier et par zone." },
            ].map((g, i) => (
              <div key={i} className="bg-ink-05 rounded-2xl p-5">
                <div className="font-display font-bold text-sm mb-1.5">{g.t}</div>
                <div className="text-xs text-ink-60 leading-relaxed">{g.d}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors"
            >
              Voir le tableau des tarifs et options
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
