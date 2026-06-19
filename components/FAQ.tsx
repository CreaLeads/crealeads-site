"use client";

import { useState } from "react";

const faqs = [
  {
    q: "C'est cher, non ?",
    a: "Vous facturez environ 7 000 € par chantier. Notre installation COPILOTE coûte 2 500 €, soit 35 % d'un seul chantier signé. Si nous vous amenons un seul chantier de plus par mois, c'est rentabilisé. Si nous vous en amenons trois, c'est quatre fois votre investissement. La vraie question n'est pas le prix, mais notre capacité à vous amener au moins un chantier par mois.",
  },
  {
    q: "J'ai déjà essayé les publicités Facebook, ça n'a pas marché.",
    a: "C'est fréquent. La plupart des artisans qui lancent des publicités Meta seuls les configurent mal : audience trop large, visuels basiques, formulaire non optimisé, absence de retargeting. Nous faisons de la génération de leads ciblée, avec un ciblage métier et zone, trois campagnes coordonnées et un renouvellement régulier des visuels. Ce n'est pas comparable à une publication boostée à 50 € par mois.",
  },
  {
    q: "Pourquoi un engagement de 3 mois sur COPILOTE ?",
    a: "Les campagnes Meta s'optimisent sur trente jours minimum. L'algorithme a besoin de données pour apprendre. Si vous testez un mois et vous arrêtez, vous ne voyez qu'une fraction du potentiel. À trois mois, nous pouvons vous garantir un retour. C'est une protection pour vous, pas pour nous. Si vous préférez aucun engagement, l'offre DÉCOLLAGE est faite pour ça.",
  },
  {
    q: "Pouvez-vous me garantir un nombre de chantiers par mois ?",
    a: "Non, et c'est une réponse honnête. Le résultat dépend de votre métier, de votre panier moyen, de votre budget publicitaire et de votre capacité à conclure en rendez-vous. Nous garantissons la qualité du système et une transparence totale sur les indicateurs. Et nous remboursons 50 % de l'installation si, après 90 jours, vous ne constatez aucune différence (offres COPILOTE et AUTOPILOTE).",
  },
  {
    q: "Avec combien d'artisans travaillez-vous en parallèle ?",
    a: "Nous travaillons en exclusivité par zone et par métier. Un seul applicateur résine par grande ville, un seul peintre par secteur, et ainsi de suite. Si votre concurrent direct est déjà accompagné par nos soins, nous ne vous prendrons pas comme client.",
  },
  {
    q: "Gérez-vous aussi les appels et les rendez-vous physiques ?",
    a: "Non. Nous gérons l'acquisition digitale : publicités Meta et qualification WhatsApp pour l'offre AUTOPILOTE. Les appels et les rendez-vous physiques restent de votre ressort. Avec AUTOPILOTE, l'intelligence artificielle pré-qualifie les prospects pour que vous n'appeliez que les plus sérieux.",
  },
  {
    q: "Quelle est la différence entre COPILOTE et AUTOPILOTE ?",
    a: "Avec COPILOTE, nous pilotons vos campagnes Meta et vous gérez vos prospects manuellement. Avec AUTOPILOTE, nous pilotons les campagnes et une intelligence artificielle répond et qualifie vos prospects sur WhatsApp en moins de trente secondes, 24h/24. C'est l'équivalent d'un commercial junior, pour un coût bien inférieur.",
  },
  {
    q: "Et si je veux arrêter avant la fin de l'engagement ?",
    a: "Un préavis de trente jours, par e-mail, suffit. Vous réglez le mois en cours et le mois suivant, et c'est terminé. Aucune pénalité, aucun blocage. Notre objectif est que vous restiez parce que les résultats sont là, pas parce que vous êtes contraint.",
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
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-ink-05 scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
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
              className="bg-bg border border-ink-10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-sm sm:text-lg font-bold">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ink-05 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
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
