const CAL = "https://cal.eu/enzo-crealeads/20min";

const AGENT_ROLE: Record<string, { i: string; role: string }> = {
  Théo: { i: "T", role: "Acquisition Meta" },
  Iris: { i: "I", role: "Studio créa" },
  Lucie: { i: "L", role: "Réceptionniste 24/7" },
  Victor: { i: "V", role: "Analyste" },
  Amandine: { i: "A", role: "Votre bras droit" },
  Marco: { i: "M", role: "Contenu réseaux" },
};

const offers = [
  {
    name: "STARTER",
    tagline: "On allume la machine",
    monthly: "197",
    agents: ["Théo", "Iris"],
    features: [
      "1 campagne Meta prospection automatique",
      "Chatbot SMS de qualification des leads",
      "CRM automatisé + site vitrine",
    ],
    highlight: false,
  },
  {
    name: "PRO",
    tagline: "On avance ensemble",
    monthly: "397",
    agents: ["Théo", "Iris", "Lucie", "Victor"],
    features: [
      "Tout STARTER, et en plus :",
      "2 campagnes (prospection + retargeting)",
      "Visuels IA renouvelés automatiquement",
      "Reporting mensuel automatique",
    ],
    highlight: true,
  },
  {
    name: "SCALE",
    tagline: "L'équipe au complet",
    monthly: "697",
    agents: ["Théo", "Iris", "Lucie", "Victor", "Amandine", "Marco"],
    features: [
      "Tout PRO, et en plus :",
      "Audiences lookalike",
      "Fiche Google My Business gérée",
      "Google Ads automatique",
      "Multi-zone / multi-métier",
    ],
    highlight: false,
  },
];

function AgentRow({ name, dark }: { name: string; dark?: boolean }) {
  const a = AGENT_ROLE[name];
  return (
    <li className="flex items-center gap-3">
      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs flex-shrink-0 ${dark ? "bg-emerald/20 text-emerald" : "bg-emerald/15 text-emerald-dark"}`}>
        {a.i}
      </span>
      <span className="text-sm">
        <strong className={dark ? "text-bg" : "text-ink"}>{name}</strong>
        <span className={dark ? "text-bg/60" : "text-ink-60"}> — {a.role}</span>
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
            Nos offres
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-6">
            Recrutez votre équipe d&apos;agents.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Un abonnement mensuel, sans frais de mise en place. Plus vous montez de palier, plus il y a d&apos;agents au travail pour vous.
          </p>
        </div>

        {/* 3 cartes */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 lg:items-start">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative card-hover rounded-3xl p-6 sm:p-8 flex flex-col ${
                offer.highlight
                  ? "bg-ink text-bg border-2 border-emerald lg:-mt-4 lg:pb-12 shadow-2xl shadow-emerald/10"
                  : "bg-bg border border-ink-10"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Recommandé
                </div>
              )}

              <div className="font-display text-xl sm:text-2xl font-bold mb-1 mt-2">{offer.name}</div>
              <div className={`text-sm mb-5 ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>{offer.tagline}</div>

              <div className="flex items-baseline gap-1.5">
                <span className={`font-display text-4xl sm:text-5xl font-extrabold ${offer.highlight ? "text-emerald" : ""}`}>
                  {offer.monthly} €
                </span>
                <span className={`text-sm ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>/mois</span>
              </div>
              <div className={`text-xs mt-2 mb-5 pb-5 border-b ${offer.highlight ? "text-bg/60 border-bg/10" : "text-ink-60 border-ink-10"}`}>
                Sans frais de mise en place · sans engagement
              </div>

              <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${offer.highlight ? "text-emerald" : "text-emerald-dark"}`}>
                L&apos;équipe incluse
              </div>
              <ul className="space-y-3 mb-6">
                {offer.agents.map((name) => (
                  <AgentRow key={name} name={name} dark={offer.highlight} />
                ))}
              </ul>

              <ul className="space-y-2.5 mb-7 flex-grow">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={offer.highlight ? "text-bg/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
                  offer.highlight
                    ? "bg-emerald text-ink hover:bg-emerald-light"
                    : "bg-ink text-bg hover:bg-ink/90"
                }`}
              >
                Réserver un appel
              </a>
            </div>
          ))}
        </div>

        {/* Mentions communes */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { t: "💳 Budget pub payé à part", d: "Le budget publicitaire Meta n'est pas inclus : il reste sur votre compte et est versé directement à Meta." },
            { t: "🔓 Sans engagement", d: "Aucune durée minimale. Vous arrêtez quand vous voulez." },
            { t: "📍 Exclusivité de zone", d: "Un seul artisan par métier et par secteur. Une fois prise, votre zone n'est plus proposée." },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-ink-10 bg-bg p-4 sm:p-5">
              <div className="font-display font-bold text-sm mb-1.5">{m.t}</div>
              <div className="text-xs text-ink-60 leading-relaxed">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="/tarifs" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors">
            Comparer les offres en détail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
