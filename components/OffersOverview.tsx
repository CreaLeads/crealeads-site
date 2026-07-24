const CAL = "https://cal.eu/enzo-crealeads/20min";

const AGENTS_INCLUS = [
  { i: "T", name: "Théo", role: "Campagne Meta Ads automatique — 1 zone, 1 métier" },
  { i: "I", name: "Iris", role: "Visuels publicitaires renouvelés par IA" },
  { i: "L", name: "Lucie", role: "Chatbot SMS qui qualifie vos leads 24h/24" },
  { i: "V", name: "Victor", role: "Reporting mensuel + optimisation hebdo" },
];

const INCLUS = [
  "CRM automatisé — chaque demande classée sans rien saisir",
  "Notification instantanée à chaque nouveau lead",
  "Exclusivité totale sur votre zone et votre métier",
];

const UPSELLS_ONESHOT = [
  { name: "Site vitrine pro", price: "490 €", desc: "Un site qui inspire confiance, livré clé en main." },
  { name: "Audit de vos pubs existantes", price: "290 €", desc: "On passe vos campagnes au crible et on vous dit quoi corriger." },
];

const UPSELLS_RECURRENTS = [
  { name: "Retargeting automatique", price: "+97 €/mois", desc: "Relance ceux qui ont vu vos pubs sans passer à l'action." },
  { name: "Contenu réseaux sociaux — Marco", price: "+147 €/mois", desc: "Vos réseaux alimentés automatiquement, chaque semaine." },
  { name: "Zone géographique supplémentaire", price: "+97 €/mois", desc: "Une deuxième zone couverte en parallèle." },
  { name: "Google Ads automatique", price: "+197 €/mois", desc: "Captez aussi la demande déjà présente sur Google." },
  { name: "Agent IA personnel — Amandine", price: "+97 €/mois", desc: "Votre bras droit : vous lui demandez où en est votre business, elle répond." },
];

function AgentRow({ name, role }: { name: string; role: string }) {
  const i = name.charAt(0);
  return (
    <li className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs flex-shrink-0 bg-emerald/20 text-emerald mt-0.5">
        {i}
      </span>
      <span className="text-sm">
        <strong className="text-bg">{name}</strong>
        <span className="text-bg/60"> — {role}</span>
      </span>
    </li>
  );
}

export default function OffersOverview() {
  return (
    <section id="offres" className="py-16 sm:py-24 lg:py-32 bg-ink-05 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Notre offre
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-6">
            Une offre. Toute une équipe.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Un seul abonnement, quatre agents au travail pour vous. Pas de palier à décoder, pas de frais de mise en place. Vous ajoutez des options seulement quand vous en avez besoin.
          </p>
        </div>

        {/* Carte offre unique */}
        <div className="max-w-lg mx-auto">
          <div className="relative card-hover rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col bg-ink text-bg border-2 border-emerald shadow-2xl shadow-emerald/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              L&apos;offre CreaLeads
            </div>

            <div className="text-center mt-2 mb-6">
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-emerald">350 €</span>
                <span className="text-sm text-bg/60">/mois</span>
              </div>
              <div className="text-xs text-bg/60 mt-3">
                Zéro frais de mise en place · Engagement 3 mois puis mois par mois
              </div>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider mb-3 text-emerald">
              Vos 4 agents inclus
            </div>
            <ul className="space-y-3 mb-6">
              {AGENTS_INCLUS.map((a) => (
                <AgentRow key={a.name} name={a.name} role={a.role} />
              ))}
            </ul>

            <ul className="space-y-2.5 mb-7 pt-6 border-t border-bg/10">
              {INCLUS.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-bg/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={CAL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-4 rounded-full font-semibold text-sm bg-emerald text-ink hover:bg-emerald-light transition-all"
            >
              Réserver un appel
            </a>
            <div className="text-center text-xs text-bg/50 mt-3">
              Budget publicitaire à part (~300 €/mois conseillé, sur votre compte Meta)
            </div>
          </div>
        </div>

        {/* Upsells */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-2">
              Options à la carte
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Vous ajoutez, quand vous voulez.
            </h3>
            <p className="text-sm sm:text-base text-ink-60 mt-3 max-w-xl mx-auto leading-relaxed">
              Tout est optionnel. On commence par l&apos;offre à 350 € et on renforce le système au fil de votre croissance.
            </p>
          </div>

          {/* Récurrents */}
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              À ajouter à l&apos;abonnement
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {UPSELLS_RECURRENTS.map((u) => (
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

          {/* One-shot */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-60 mb-3 px-1">
              Prestations ponctuelles (paiement unique)
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {UPSELLS_ONESHOT.map((u) => (
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
        </div>

        {/* Mentions communes */}
        <div className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            { t: "💳 Budget pub à part", d: "Le budget publicitaire (~300 €/mois conseillé) reste sur votre compte Meta et est versé directement à Meta. Jamais inclus dans l'abonnement." },
            { t: "📅 Engagement 3 mois", d: "Trois mois pour laisser l'algorithme apprendre, puis mois par mois. Résiliation par simple e-mail avec 30 jours de préavis." },
            { t: "📍 Exclusivité de zone", d: "Un seul artisan par métier et par secteur. Une fois votre zone prise, elle n'est plus proposée à personne." },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-ink-10 bg-bg p-4 sm:p-5">
              <div className="font-display font-bold text-sm mb-1.5">{m.t}</div>
              <div className="text-xs text-ink-60 leading-relaxed">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="/tarifs" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors">
            Voir le détail de l&apos;offre et des options
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
