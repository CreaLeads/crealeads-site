"use client";

const steps = [
  {
    num: "01",
    title: "On règle le système sur votre activité",
    desc: "Votre métier, votre zone, votre panier moyen, votre façon de parler. Tout est calibré sur VOTRE chantier avant le premier euro dépensé.",
  },
  {
    num: "02",
    title: "Vos publicités partent en ligne",
    desc: "Vos campagnes Meta géolocalisées se lancent. Les premières demandes tombent sous 24 à 72 h.",
  },
  {
    num: "03",
    title: "La demande arrive dans votre tableau de bord",
    desc: "Déjà qualifiée, avec la ville, le projet et le délai. Les curieux sont écartés — vous ne voyez que les demandes sérieuses.",
  },
  {
    num: "04",
    title: "Vous validez, vous chiffrez",
    desc: "La visite se cale dans votre agenda. Au retour, vous dictez ce que vous avez vu et le devis se prépare à vos prix.",
  },
  {
    num: "05",
    title: "Chaque lundi, le bilan tombe",
    desc: "Ce que la semaine a coûté, ce qu'elle a rapporté, les chantiers signés. Et le système s'ajuste pour faire baisser le coût.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-16 sm:py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
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
              className="card-hover bg-surface border border-stroke shadow-ds-sm rounded-[20px] p-4 sm:p-5 lg:p-6 flex flex-col"
            >
              <div className="tnum font-display text-2xl sm:text-3xl font-extrabold text-brand-300 mb-2 sm:mb-3">
                {step.num}
              </div>
              <h3 className="font-sans text-sm sm:text-base lg:text-lg font-semibold tracking-tight mb-1.5 sm:mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-muted text-[12.5px] sm:text-sm leading-relaxed">
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
