"use client";

import Link from "next/link";

const offers = [
  {
    name: "DÉCOLLAGE",
    tagline: "Vous partez seul",
    price: "1 500 €",
    priceDetail: "Paiement unique. Sans engagement.",
    agents: "Théo + Iris",
    desc: "Le terrain d'essai. Vos pubs tournent, les demandes tombent dans votre téléphone. Vous repartez avec tout.",
    features: [
      "Théo — 1 campagne Meta Lead Ads ciblée",
      "Iris — 2 à 3 visuels publicitaires",
      "Ciblage zone + métier précis",
      "Formulaire instantané + notification à chaque lead",
      "CRM Google Sheets automatisé",
      "Kickoff + support 1 mois",
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
    agents: "Théo · Iris · Lucie · Victor",
    desc: "Le plus choisi. Lucie répond à vos prospects, Victor surveille vos chiffres, on optimise chaque mois.",
    features: [
      "Tout DÉCOLLAGE, et en plus :",
      "Lucie — réceptionniste IA 24/7 (répond en < 1 min, qualifie, cale les visites)",
      "Victor — bilan clair chaque semaine",
      "2 à 3 campagnes + retargeting",
      "Visuels pro renouvelés chaque mois",
      "CRM avancé + alertes",
      "Support prioritaire",
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
    agents: "+ Amandine · téléphonie IA",
    desc: "L'écosystème complet. Lucie passe au téléphone, Amandine devient votre bras droit, vous dominez plusieurs zones.",
    features: [
      "Tout COPILOTE, et en plus :",
      "Amandine — votre bras droit (le point business par message)",
      "Lucie + téléphonie IA",
      "Relances + prise de RDV automatiques",
      "Multi-zones : dominez plusieurs secteurs",
      "Redistribution des leads de votre réseau",
      "Pilotage & reporting avancé",
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
              <div className={`text-xs mb-4 pb-5 sm:pb-6 border-b ${offer.highlight ? "text-bg/60 border-bg/10" : "text-ink-60 border-ink-10"}`}>
                {offer.priceDetail}
              </div>

              <div className={`inline-flex items-center gap-2 text-xs font-bold mb-4 px-3 py-1.5 rounded-full self-start ${offer.highlight ? "bg-emerald text-ink" : "bg-emerald/10 text-emerald-dark"}`}>
                <span aria-hidden>🤖</span> {offer.agents}
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

        {/* Écosystème — sur-mesure */}
        <div className="mt-6 sm:mt-8 rounded-2xl border border-ink-10 bg-bg p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-display font-bold text-lg">Écosystème</span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-ink text-bg">Sur-mesure</span>
            </div>
            <p className="text-sm text-ink-60 leading-relaxed">
              Pour les marques et réseaux : site complet, boutique, campagnes nationales, redistribution réseau, contenu (Marco) et <strong className="text-ink">tous vos agents</strong>. Sur devis.
            </p>
          </div>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-ink text-bg font-semibold text-sm px-6 py-3 rounded-full hover:bg-ink/90 transition-colors whitespace-nowrap flex-shrink-0">
            En parler
          </Link>
        </div>

        <p className="text-center text-xs text-ink-60/70 mt-8">
          Exclusivité : un seul artisan par métier et par zone · Budget publicitaire non inclus
        </p>

        <div className="text-center mt-8 sm:mt-10">
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
