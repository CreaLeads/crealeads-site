"use client";

import Link from "next/link";

const offers = [
  {
    icon: "✈️",
    name: "DÉCOLLAGE",
    tagline: "Tu pars seul",
    price: "1 500€",
    priceDetail: "Paiement unique. Sans engagement.",
    desc: "Le terrain d'essai. Un setup pro pour tester l'acquisition digitale sans engagement mensuel. Tu repars avec tout.",
    features: [
      "1 campagne Meta Ads complète",
      "CRM Google Sheets",
      "Notification WhatsApp",
      "2-3 visuels publicitaires",
      "Formation 1h",
      "Support email 30 jours",
    ],
    highlight: false,
    href: "/offres#decollage",
    ctaLabel: "Découvrir l'offre",
  },
  {
    icon: "🛬",
    name: "COPILOTE",
    tagline: "On vole ensemble",
    price: "2 500€",
    priceDetail: "+ 500€/mois · Engagement 3 mois",
    desc: "Le best-seller. Un partenaire de croissance qui optimise tes campagnes chaque mois. Pour scaler durablement.",
    features: [
      "Tout DÉCOLLAGE +",
      "3 campagnes (prospection + retargeting + lookalike)",
      "CRM Airtable avancé",
      "Compte Renalto inclus",
      "Optimisation mensuelle",
      "Rapport mensuel détaillé",
      "Appel mensuel 30 min",
      "Support WhatsApp prioritaire",
    ],
    highlight: true,
    href: "/offres#copilote",
    ctaLabel: "Voir le détail",
  },
  {
    icon: "🛸",
    name: "AUTOPILOTE",
    tagline: "L'IA pilote pour toi",
    price: "6 000€",
    priceDetail: "+ 1 200€/mois · Engagement 6 mois",
    desc: "L'écosystème complet. Des agents IA qui qualifient tes prospects 24/7, te briefent chaque matin, automatisent ton devis.",
    features: [
      "Tout COPILOTE +",
      "Agent IA Qualif Leads 24/7",
      "Agent IA Monitoring matinal",
      "Renalto en API (devis sous 5 min)",
      "WhatsApp Business dédié",
      "Appel hebdomadaire",
      "Co-pilotage stratégique",
      "Support sous 1h",
    ],
    highlight: false,
    href: "/offres#autopilote",
    ctaLabel: "Découvrir l'IA",
  },
];

export default function OffersOverview() {
  return (
    <section id="offres" className="py-24 lg:py-32 bg-ink-05">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
            Nos offres
          </div>
          <h2 className="font-display text-display-md mb-6">
            3 niveaux d'accompagnement.
            <br />
            <span className="text-emerald">Un seul objectif.</span>
          </h2>
          <p className="text-base lg:text-lg text-ink-60 leading-relaxed">
            Que tu veuilles tester sans risque, scaler sereinement ou industrialiser ton acquisition avec l'IA, on a une offre pour toi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`relative card-hover rounded-3xl p-8 lg:p-10 flex flex-col ${
                offer.highlight
                  ? "bg-ink text-bg border-2 border-emerald lg:scale-105"
                  : "bg-bg border border-ink-10"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider">
                  Le plus choisi
                </div>
              )}

              <div className="text-4xl mb-4">{offer.icon}</div>
              <div className="font-display text-2xl font-bold mb-1">{offer.name}</div>
              <div className={`text-sm mb-6 ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>
                {offer.tagline}
              </div>

              <div className="mb-2">
                <span className={`font-display text-4xl font-bold ${offer.highlight ? "text-emerald" : ""}`}>
                  {offer.price}
                </span>
              </div>
              <div className={`text-xs mb-6 pb-6 border-b ${offer.highlight ? "text-bg/60 border-bg/10" : "text-ink-60 border-ink-10"}`}>
                {offer.priceDetail}
              </div>

              <p className={`text-sm mb-6 leading-relaxed ${offer.highlight ? "text-bg/80" : "text-ink-60"}`}>
                {offer.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {offer.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={offer.highlight ? "text-bg/90" : "text-ink"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
                  offer.highlight
                    ? "bg-emerald text-ink hover:bg-emerald-light"
                    : "bg-ink text-bg hover:bg-ink/90"
                }`}
              >
                {offer.ctaLabel}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors"
          >
            Comparer les 3 offres en détail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
