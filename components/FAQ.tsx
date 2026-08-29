"use client";

import { useState } from "react";

const faqs = [
  {
    q: "C'est cher, non ?",
    a: "Faisons le calcul : 497 € d'abonnement par mois, plus environ 300 € de budget publicitaire versé directement à Meta, soit à peu près 797 € par mois pour un système d'acquisition complet. Un seul chantier de résine se facture entre 3 000 et 8 000 €. Le premier chantier signé vous rembourse donc environ quatre mois d'abonnement. La vraie question n'est pas le prix, mais notre capacité à vous amener au moins un chantier de plus par mois — et c'est exactement ce que le système est fait pour faire.",
  },
  {
    q: "Qu'est-ce qui est compris dans les 497 € par mois ?",
    a: "Tout le système d'acquisition, avec quatre agents inclus : Théo diffuse votre campagne Meta ciblée sur votre zone et votre métier, Iris crée et renouvelle vos visuels par IA, Lucie qualifie vos demandes automatiquement 24h/24, et Victor optimise vos campagnes chaque semaine et vous envoie le bilan chaque mois. S'ajoutent le CRM automatisé, la notification à chaque lead et l'exclusivité sur votre zone. Vous pouvez ensuite renforcer le système avec des options : retargeting (+97 €/mois), contenu réseaux avec Marco (+147 €/mois), zone supplémentaire (+97 €/mois), Google Ads (+197 €/mois) ou votre agent personnel Amandine (+97 €/mois). Et en une fois : un site vitrine pro (490 €) ou un audit de vos pubs actuelles (290 €).",
  },
  {
    q: "Il y a des frais de mise en place ?",
    a: "Non, aucun. Tout le build — campagne Meta, visuels IA, formulaire, qualification automatique des demandes et CRM — est intégré dans l'abonnement mensuel de 497 €. Vous ne payez rien au démarrage. Seul le budget publicitaire reste à part : environ 300 €/mois, versé directement à Meta depuis votre propre compte. Le site vitrine, lui, est disponible en option à 490 €.",
  },
  {
    q: "Il y a un engagement ?",
    a: "Aucun. Pas de durée minimale, pas de pénalité : pour arrêter, un simple e-mail suffit, vous réglez le mois en cours et c'est terminé. Notre objectif est que vous restiez parce que les résultats sont là, pas parce qu'un contrat vous y oblige. Un conseil malgré tout : laissez au moins trente jours aux campagnes Meta — l'algorithme a besoin de ce temps pour apprendre et livrer son plein potentiel. Juger le système après une semaine n'aurait pas de sens.",
  },
  {
    q: "Le budget publicitaire est-il inclus ?",
    a: "Non, et c'est volontaire. Le budget publicitaire — en général autour de 300 €/mois — est versé directement à Meta depuis votre propre compte : nous n'y touchons jamais. Vous gardez la main dessus, vous voyez exactement ce qui est dépensé, et vous restez propriétaire de votre compte publicitaire. Le montant exact dépend de votre zone et de vos objectifs — on le définit ensemble lors de l'appel.",
  },
  {
    q: "J'ai déjà essayé les publicités Facebook, ça n'a pas marché.",
    a: "C'est fréquent. La plupart des artisans qui lancent des publicités Meta seuls les configurent mal : audience trop large, visuels basiques, formulaire non optimisé, absence de retargeting. Nous faisons de la génération de leads ciblée, avec un ciblage métier et zone, des campagnes coordonnées et un renouvellement régulier des visuels. Ce n'est pas comparable à une publication boostée à 50 € par mois.",
  },
  {
    q: "Pouvez-vous me garantir un nombre de chantiers par mois ?",
    a: "Non, et c'est une réponse honnête. Le résultat dépend de votre métier, de votre panier moyen, de votre budget publicitaire et de votre capacité à conclure en rendez-vous. Nous garantissons la qualité du système et une transparence totale sur les indicateurs. Et comme il n'y a aucun frais de mise en place et aucun engagement, vous démarrez sans avance et vous ne prenez aucun risque à essayer.",
  },
  {
    q: "Avec combien d'artisans travaillez-vous en parallèle ?",
    a: "Nous travaillons en exclusivité par zone et par métier. Un seul applicateur résine par grande ville, un seul peintre par secteur, et ainsi de suite. Si votre concurrent direct est déjà accompagné par nos soins, nous ne vous prendrons pas comme client.",
  },
  {
    q: "Gérez-vous aussi les appels et les rendez-vous physiques ?",
    a: "Nous gérons l'acquisition digitale : publicités Meta, qualification automatique des demandes et prise de contact. Lucie, incluse dans l'abonnement, capte chaque demande dès son arrivée, 24h/24, la qualifie et écarte les curieux — pour que vous n'appeliez que les gens sérieux. Les rendez-vous physiques et la signature restent de votre ressort.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-canvas scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
            Questions fréquentes
          </div>
          <h2 className="font-display text-display-md">
            Vous hésitez ? Nous répondons.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface border border-stroke shadow-ds-sm rounded-[20px] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-sans text-sm sm:text-lg font-semibold tracking-tight">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-alt border border-stroke flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-8 pb-5 sm:pb-8 text-sm sm:text-base text-ink-60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
