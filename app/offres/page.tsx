"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offers = [
  {
    id: "decollage",
    name: "DÉCOLLAGE",
    tagline: "Vous partez seul",
    price: "1 500 €",
    priceDetail: "Paiement unique · Sans engagement",
    pitch: "Le terrain d'essai idéal pour tester l'acquisition digitale sans engagement. Nous construisons votre système, nous vous formons, et vous pilotez ensuite en toute autonomie.",
    forWho: "L'artisan qui veut tester l'acquisition digitale sans s'engager, comprendre le fonctionnement par lui-même, et garder la main sur son marketing.",
    included: [
      "Audit complet de votre métier et de votre zone",
      "1 campagne Meta Ads professionnelle (audience, visuel, texte)",
      "Connexion CRM Google Sheets",
      "Notification WhatsApp à chaque nouveau prospect",
      "2 à 3 visuels publicitaires créés sur mesure",
      "Page de remerciement après formulaire",
      "Formation d'une heure en visio",
      "Support par e-mail pendant 30 jours",
      "Propriété totale des accès et contenus",
    ],
    notIncluded: [
      "Optimisation continue après livraison",
      "Retargeting et audience similaire",
      "Agent intelligence artificielle",
      "Renouvellement mensuel des visuels",
    ],
    promise: "Vos premiers prospects sous 24 à 72 heures après le lancement. Volume estimé : 10 à 30 prospects sur les 30 premiers jours.",
    highlight: false,
  },
  {
    id: "copilote",
    name: "COPILOTE",
    tagline: "On avance ensemble",
    price: "2 500 €",
    priceDetail: "+ 500 €/mois · Engagement 3 mois · Préavis 30 jours",
    pitch: "Un partenaire de croissance qui optimise vos campagnes chaque mois. Nous construisons votre système et nous restons à vos côtés pour le faire progresser durablement.",
    forWho: "L'artisan qui veut un partenaire de croissance sur la durée, déléguer la complexité du marketing tout en gardant le contrôle stratégique.",
    included: [
      "Tout ce que comprend l'offre DÉCOLLAGE",
      "3 campagnes coordonnées (prospection, retargeting, audience similaire)",
      "Gestion et optimisation de votre page Google My Business",
      "5 visuels publicitaires ou plus, renouvelés chaque mois",
      "CRM Airtable avancé avec pipeline et alertes",
      "Compte Renalto inclus pour vos devis",
      "Optimisation continue des campagnes",
      "Rapport mensuel détaillé avec indicateurs",
      "Appel mensuel de suivi avec un expert",
      "Support WhatsApp prioritaire (réponse sous 4 h)",
    ],
    notIncluded: [
      "Agent intelligence artificielle conversationnel",
      "Génération automatique de contenu",
      "Intégration Renalto en API",
    ],
    promise: "Une croissance régulière de vos prospects, mois après mois. Volume estimé : 30 à 80 prospects par mois selon votre budget publicitaire.",
    highlight: true,
  },
  {
    id: "autopilote",
    name: "AUTOPILOTE",
    tagline: "L'IA pilote pour vous",
    price: "6 000 €",
    priceDetail: "+ 1 200 €/mois · Engagement 6 mois · Préavis 30 jours",
    pitch: "Un écosystème complet d'agents intelligents qui qualifient vos prospects en continu, vous informent chaque matin et automatisent vos devis. Pour industrialiser votre acquisition.",
    forWho: "L'artisan ambitieux qui veut passer de 3 à 10 chantiers par mois sans embaucher, et sortir du quotidien marketing pour se concentrer sur ses chantiers.",
    included: [
      "Tout ce que comprend l'offre COPILOTE",
      "Agent IA de qualification des prospects 24h/24",
      "Brief matinal automatique sur WhatsApp",
      "Relances automatiques des prospects sans réponse",
      "Mise à jour des statuts par commande vocale",
      "Intégration Renalto en API (devis sous 5 minutes)",
      "WhatsApp Business dédié à votre activité",
      "Appel hebdomadaire de co-pilotage",
      "Support prioritaire (réponse sous 1 h)",
    ],
    notIncluded: [
      "Prise en charge des appels téléphoniques",
      "Déplacements et rendez-vous physiques",
    ],
    promise: "Un scaling autonome de votre acquisition. Volume estimé : 60 à 150 prospects par mois. Gain de temps quotidien estimé : 1 à 2 heures.",
    highlight: false,
  },
];

export default function OffresPage() {
  const [active, setActive] = useState("copilote");
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
            Choisissez le niveau d'accompagnement qui correspond à votre ambition. De l'essai sans engagement à l'automatisation complète par l'intelligence artificielle.
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

            <Link
              href="/#contact"
              className="block text-center btn-primary px-8 py-4 text-base font-semibold rounded-full"
            >
              <span>Réserver un appel pour cette offre</span>
            </Link>
          </div>

          {/* Garanties communes */}
          <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: "Livraison rapide", d: "7 jours (DÉCOLLAGE, COPILOTE) ou 21 jours (AUTOPILOTE)" },
              { t: "Propriété totale", d: "Tous les accès et contenus créés vous appartiennent" },
              { t: "Transparence", d: "Chaque indicateur est consultable à tout moment" },
              { t: "Exclusivité", d: "Un seul artisan par zone et par métier" },
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
