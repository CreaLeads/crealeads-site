"use client";

import Link from "next/link";

const offers = [
  {
    name: "DÉCOLLAGE",
    tagline: "Vous partez seul",
    price: "1 500 €",
    priceDetail: "Paiement unique. Sans engagement.",
    desc: "Le terrain d'essai. Un système professionnel pour tester l'acquisition digitale sans engagement mensuel. Vous repartez avec tout.",
    features: [
      "1 campagne Meta Ads complète",
      "CRM Google Sheets",
      "Notification WhatsApp",
      "2 à 3 visuels publicitaires",
      "Formation d'une heure",
      "Support par e-mail 30 jours",
    ],
    highlight: false,
    href: "/offres#decollage",
    ctaLabel: "Découvrir l'offre",
  },
  {
    name: "COPILOTE",
    tagline: "On avance ensemble",
    price: "2 500 €",
    priceDetail: "+ 500 €/mois · Engagement 3 mois",
    desc: "Le choix le plus populaire. Un partenaire de croissance qui optimise vos campagnes chaque mois pour des résultats durables.",
    features: [
      "Tout DÉCOLLAGE, et en plus :",
      "3 campagnes (prospection, retargeting, similaire)",
      "Gestion de votre page Google My Business",
      "CRM Airtable avancé",
      "Compte Renalto inclus",
      "Optimisation mensuelle",
      "Rapport mensuel détaillé",
      "Appel mensuel de suivi",
      "Support WhatsApp prioritaire",
    ],
    highlight: true,
    href: "/offres#copilote",
    ctaLabel: "Voir le détail",
  },
  {
    name: "AUTOPILOTE",
    tagline: "L'IA pilote pour vous",
    price: "6 000 €",
    priceDetail: "+ 1 200 €/mois · Engagement 6 mois",
    desc: "L'écosystème complet. Des agents intelligents qui qualifient vos prospects en continu, vous informent chaque matin et automatisent vos devis.",
    features: [
      "Tout COPILOTE, et en plus :",
      "Agent IA de qualification 24h/24",
      "Brief matinal automatique",
      "Renalto en API (devis sous 5 min)",
      "WhatsApp Business dédié",
      "Appel hebdomadaire",
      "Co-pilotage stratégique",
      "Support sous 1 heure",
    ],
    highlight: false,
    href: "/offres#autopilote",
    ctaLabel: "Découvrir l'IA",
  },
];

export default function OffersOverview() {
  return (
    <section id="offres" className="py-16 sm:py-24 lg:py-32 bg-ink-05">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Nos offres
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-6">
            Trois niveaux d'accompagnement, un seul objectif.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Que vous vouliez tester sans risque, grandir sereinement ou industrialiser votre acquisition avec l'intelligence artificielle, une offre est faite pour vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 lg:items-start">
          {offers.map((offer, i) => (
            <div
              key={i}
              className={`relative card-hover rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col ${
                offer.highlight
                  ? "bg-ink text-bg border-2 border-emerald lg:-mt-4 lg:pb-14"
                  : "bg-bg border border-ink-10"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Le plus choisi
                </div>
              )}

              <div className="font-display text-xl sm:text-2xl font-bold mb-1 mt-2">{offer.name}</div>
              <div className={`text-sm mb-5 sm:mb-6 ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>
                {offer.tagline}
              </div>

              <div className="mb-2">
                <span className={`font-display text-3xl sm:text-4xl font-bold ${offer.highlight ? "text-emerald" : ""}`}>
                  {offer.price}
                </span>
              </div>
              <div className={`text-xs mb-5 sm:mb-6 pb-5 sm:pb-6 border-b ${offer.highlight ? "text-bg/60 border-bg/10" : "text-ink-60 border-ink-10"}`}>
                {offer.priceDetail}
              </div>

              <p className={`text-sm mb-5 sm:mb-6 leading-relaxed ${offer.highlight ? "text-bg/80" : "text-ink-60"}`}>
                {offer.desc}
              </p>

              <ul className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8 flex-grow">
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

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors"
          >
            Comparer les trois offres en détail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
