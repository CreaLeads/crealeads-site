"use client";

const steps = [
  {
    num: "01",
    title: "On configure vos agents",
    desc: "Votre métier, votre zone, votre panier moyen, votre façon de parler. Vos agents sont réglés sur VOTRE activité.",
  },
  {
    num: "02",
    title: "Théo lance vos publicités",
    desc: "Vos campagnes Meta géolocalisées partent en ligne. Les premières demandes arrivent sous 24 à 72 h.",
  },
  {
    num: "03",
    title: "Lucie répond et qualifie",
    desc: "En moins d'une minute, 24h/24, elle engage chaque prospect, écarte les curieux et cale les visites.",
  },
  {
    num: "04",
    title: "Vous recevez des RDV qualifiés",
    desc: "Les visites de chantier tombent dans votre agenda. Vous validez et vous déplacez uniquement pour chiffrer.",
  },
  {
    num: "05",
    title: "Victor analyse, Théo optimise",
    desc: "Chaque semaine, un bilan clair. Les campagnes s'ajustent pour faire baisser le coût et monter le volume.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-16 sm:py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Notre méthode
          </div>
          <h2 className="font-display text-display-md">
            Un système, cinq étapes. <span className="text-emerald">Vous n&apos;intervenez qu&apos;à la fin.</span>
          </h2>
        </div>

        {/* 2 colonnes sur mobile, 5 sur desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-hover bg-bg border border-ink-10 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col"
            >
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald/30 mb-2 sm:mb-3">
                {step.num}
              </div>
              <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-ink-60 text-[12.5px] sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 text-sm text-ink-60 max-w-2xl">
          <strong className="text-ink">Pourquoi pas juste un site web ?</strong> Un site seul n&apos;apporte aucun trafic avant 6 à 12 mois de référencement. Avec nos campagnes, les premiers leads tombent en 24 à 72 h.
        </p>
      </div>
    </section>
  );
}
