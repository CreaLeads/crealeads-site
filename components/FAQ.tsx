"use client";

import { useState } from "react";

const faqs = [
  {
    q: "C'est cher non ?",
    a: "Tu factures environ 7 000€ par chantier. Notre setup COPILOTE coûte 2 500€ = 35% d'UN chantier signé. Si on t'amène 1 seul chantier de plus par mois, c'est rentabilisé. Si on t'en amène 3, c'est 4× ton investissement. La question c'est pas est-ce que c'est cher, c'est est-ce que tu crois qu'on est capable de t'en amener au moins 1 par mois.",
  },
  {
    q: "J'ai déjà essayé des pubs Facebook, ça n'a pas marché.",
    a: "Normal. 80% des artisans qui font des pubs Meta seuls les font mal : audience trop large, créa basique, formulaire mal optimisé, pas de retargeting. Nous on fait de la lead gen pure, avec ciblage métier + zone + 3 campagnes orchestrées + renouvellement créa mensuel. C'est pas la même chose qu'un Boost Post à 50€/mois.",
  },
  {
    q: "Pourquoi 3 mois d'engagement sur COPILOTE ?",
    a: "Les campagnes Meta s'optimisent sur 30 jours minimum. L'algorithme a besoin de data pour apprendre. Si tu testes 1 mois et tu pars, tu vois 30% de notre potentiel. À 3 mois on peut te garantir un retour. C'est pour TE protéger, pas nous. Si tu veux 0 engagement, prends DÉCOLLAGE.",
  },
  {
    q: "Vous pouvez me garantir X chantiers par mois ?",
    a: "Non, et c'est honnête. Le résultat dépend de TON métier (résine c'est plus facile que plombier), de TON panier moyen, de TON budget Meta, de TA capacité à closer en RDV. On te garantit la qualité de la machine et la transparence totale des KPIs. Et on rembourse 50% du setup si après 90 jours t'as vu zéro différence (COPILOTE et AUTOPILOTE).",
  },
  {
    q: "Vous travaillez avec combien d'artisans en parallèle ?",
    a: "Exclusivité zone + métier. Un seul applicateur résine par grande ville, un seul peintre par zone, etc. Si ton concurrent direct est déjà chez nous, on ne te prendra pas. Période.",
  },
  {
    q: "Vous gérez aussi les appels téléphoniques et les RDV physiques ?",
    a: "Non. On fait l'acquisition digitale (Meta Ads + WhatsApp pour AUTOPILOTE). Les appels et RDV physiques restent ton boulot. Avec AUTOPILOTE, l'IA pré-qualifie sur WhatsApp pour que tu n'appelles que les prospects chauds.",
  },
  {
    q: "Quelle différence entre COPILOTE et AUTOPILOTE ?",
    a: "COPILOTE = on pilote les campagnes Meta pour toi, tu gères tes prospects à la main. AUTOPILOTE = on pilote les campagnes ET une IA répond/qualifie tes prospects sur WhatsApp en moins de 30 secondes, 24/7. C'est le remplacement d'un commercial junior qui coûterait 3 500€/mois.",
  },
  {
    q: "Et si je veux arrêter avant la fin de l'engagement ?",
    a: "Préavis de 30 jours, par email. Tu paies le mois en cours + le mois suivant, et c'est terminé. Pas de pénalité, pas de blocage, pas de procès. Notre objectif c'est que tu restes parce que ça marche, pas parce que t'es coincé.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-ink-05">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
            Questions fréquentes
          </div>
          <h2 className="font-display text-display-md">
            Tu hésites ?
            <br />
            <span className="text-emerald">On répond.</span>
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
                className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-base lg:text-lg font-bold">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-ink-05 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-ink-60 leading-relaxed">
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
