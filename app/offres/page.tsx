"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offers = [
  {
    id: "starter",
    name: "STARTER",
    tagline: "On allume la machine",
    price: "197 €/mois",
    priceDetail: "Sans frais de mise en place · Sans engagement",
    agents: "Théo + Iris",
    pitch: "Le point de départ. Théo lance votre campagne Meta, Iris crée vos visuels, et un chatbot SMS qualifie chaque demande avant qu'elle n'arrive dans votre téléphone.",
    forWho: "L'artisan qui veut lancer son acquisition digitale sans avance de frais, tester le canal Meta et récupérer ses premières demandes qualifiées.",
    included: [
      "Théo — 1 campagne Meta de prospection automatique (ciblage zone + métier)",
      "Iris — visuels publicitaires créés sur mesure",
      "Chatbot SMS qui qualifie vos leads automatiquement",
      "CRM automatisé — chaque demande classée sans rien saisir",
      "Site vitrine inclus",
      "Notification à chaque nouvelle demande",
      "Exclusivité sur votre zone et votre métier",
    ],
    notIncluded: [
      "Lucie, la réceptionniste IA 24/7",
      "Victor, le reporting automatique",
      "Retargeting et audiences lookalike",
      "Google My Business et Google Ads",
    ],
    promise: "Vos premiers prospects sous 24 à 72 heures après le lancement. Volume estimé : 10 à 30 prospects sur les 30 premiers jours.",
    highlight: false,
  },
  {
    id: "pro",
    name: "PRO",
    tagline: "On avance ensemble",
    price: "397 €/mois",
    priceDetail: "Sans frais de mise en place · Sans engagement",
    agents: "Théo · Iris · Lucie · Victor",
    pitch: "Le plus choisi. Lucie répond à vos prospects en moins d'une minute, 24h/24. Victor vous envoie le bilan chaque mois. Vos visuels se renouvellent tout seuls.",
    forWho: "L'artisan qui ne veut plus rappeler ses prospects lui-même, et qui veut un flux régulier de demandes traitées, qualifiées et suivies.",
    included: [
      "Tout ce que comprend l'offre STARTER",
      "Lucie — réceptionniste IA 24/7 : répond en moins d'une minute, qualifie et écarte les curieux",
      "Victor — reporting mensuel automatique",
      "Théo — 2 campagnes coordonnées (prospection + retargeting)",
      "Iris — visuels IA renouvelés automatiquement",
      "CRM avancé avec pipeline et alertes",
      "Optimisation continue des campagnes",
      "Support prioritaire",
    ],
    notIncluded: [
      "Amandine, votre bras droit",
      "Marco, le contenu réseaux",
      "Audiences lookalike",
      "Google My Business et Google Ads",
    ],
    promise: "Une croissance régulière de vos prospects, mois après mois. Volume estimé : 30 à 80 prospects par mois selon votre budget publicitaire.",
    highlight: true,
  },
  {
    id: "scale",
    name: "SCALE",
    tagline: "L'équipe au complet",
    price: "697 €/mois",
    priceDetail: "Sans frais de mise en place · Sans engagement",
    agents: "Théo · Iris · Lucie · Victor · Amandine · Marco",
    pitch: "L'écosystème complet. Amandine devient votre bras droit, Marco alimente vos réseaux, et votre acquisition s'étend à Google et à plusieurs zones à la fois.",
    forWho: "L'artisan ambitieux qui veut passer de 3 à 10 chantiers par mois sans embaucher, et couvrir plusieurs secteurs ou plusieurs métiers en parallèle.",
    included: [
      "Tout ce que comprend l'offre PRO",
      "Amandine — votre bras droit : vous lui demandez où en est votre business par message, elle vous répond",
      "Marco — contenu réseaux publié automatiquement",
      "Audiences lookalike : Meta va chercher les jumeaux de vos meilleurs clients",
      "Fiche Google My Business gérée de A à Z",
      "Google Ads automatique",
      "Multi-zone et multi-métier",
      "Support prioritaire (réponse sous 1 h)",
    ],
    notIncluded: [
      "Le budget publicitaire Meta et Google — versé directement aux régies, depuis votre compte",
    ],
    promise: "Un scaling autonome de votre acquisition. Volume estimé : 60 à 150 prospects par mois. Gain de temps quotidien estimé : 1 à 2 heures.",
    highlight: false,
  },
];

export default function OffresPage() {
  const [active, setActive] = useState("pro");
  const current = offers.find((o) => o.id === active)!;

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Nos offres
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Trois façons de remplir votre agenda.
          </h1>
          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed">
            Choisissez le niveau d'accompagnement qui correspond à votre ambition. Un abonnement mensuel, sans frais de mise en place et sans engagement.
          </p>
        </div>
      </section>

      {/* Onglets */}
      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8 sm:mb-12 p-1.5 sm:p-2 bg-ink-05 rounded-2xl">
            {offers.map((offer) => (
              <button
                key={offer.id}
                onClick={() => setActive(offer.id)}
                className={`flex-1 px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-display font-bold text-sm sm:text-base transition-all ${
                  active === offer.id
                    ? "bg-ink text-bg shadow-lg"
                    : "text-ink-60 hover:text-ink"
                }`}
              >
                {offer.name}
                {offer.highlight && (
                  <span className="hidden sm:inline ml-2 text-xs text-emerald">★</span>
                )}
              </button>
            ))}
          </div>

          {/* Active offer detail */}
          <div className="bg-bg border border-ink-10 rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b border-ink-10">
              <div>
                <div className="text-sm text-ink-60 mb-1">{current.tagline}</div>
                <div className="font-display text-display-md">{current.name}</div>
                <div className="inline-flex items-center gap-2 text-xs font-bold mt-3 px-3 py-1.5 rounded-full bg-emerald/10 text-emerald-dark">
                  <span aria-hidden>🤖</span> {current.agents}
                </div>
              </div>
              <div className="sm:text-right">
                <div className="font-display text-3xl sm:text-4xl font-bold text-emerald">
                  {current.price}
                </div>
                <div className="text-xs text-ink-60 mt-1">{current.priceDetail}</div>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed mb-8">{current.pitch}</p>

            <div className="bg-ink-05 rounded-2xl p-5 sm:p-6 mb-8">
              <div className="text-xs font-semibold text-emerald uppercase tracking-wider mb-2">
                Pour qui ?
              </div>
              <p className="text-sm sm:text-base text-ink-60 leading-relaxed">{current.forWho}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="font-display font-bold text-base mb-4">Ce qui est inclus</div>
                <ul className="space-y-2.5">
                  {current.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-display font-bold text-base mb-4">Non inclus</div>
                <ul className="space-y-2.5">
                  {current.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-60">
                      <svg className="w-5 h-5 text-ink-20 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-ink text-bg rounded-2xl p-5 sm:p-6 mb-8">
              <div className="text-xs font-semibold text-emerald uppercase tracking-wider mb-2">
                Notre promesse
              </div>
              <p className="text-sm sm:text-base text-bg/80 leading-relaxed">{current.promise}</p>
            </div>

            <a
              href="https://cal.eu/enzo-crealeads/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-primary px-8 py-4 text-base font-semibold rounded-full"
            >
              <span>Réserver un appel</span>
            </a>
          </div>

          {/* Garanties communes */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: "Aucun frais de mise en place", d: "Tout est intégré dans l'abonnement mensuel. Vous ne payez rien au démarrage." },
              { t: "Budget pub à part", d: "Le budget publicitaire est versé directement à Meta, depuis votre compte — jamais inclus dans l'abonnement." },
              { t: "Sans engagement", d: "Aucune durée minimale. On arrête quand vous voulez." },
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
              Voir le tableau comparatif complet
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
