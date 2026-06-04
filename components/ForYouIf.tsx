"use client";

const items = [
  {
    title: "Vous vivez du bouche-à-oreille",
    desc: "Ça fonctionne, mais c'est imprévisible. Vous ne savez jamais combien de chantiers vous aurez le mois prochain.",
    path: "M7 8h10M7 12h6m-6 4h10M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z",
  },
  {
    title: "Vous ne savez pas comment vous y prendre",
    desc: "Le marketing digital, c'est flou. Vous avez essayé un site, des flyers, les Pages Jaunes. Rien de concret.",
    path: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Vous manquez de temps pour démarcher",
    desc: "Vous travaillez 10 h par jour sur vos chantiers. Vous n'avez plus l'énergie de gérer votre communication.",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Vous voulez grandir sans embaucher",
    desc: "Vous pourriez faire deux fois plus de chantiers, mais le flux manque. Et gérer des salariés ne vous tente pas.",
    path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Vous voulez des leads qualifiés",
    desc: "Pas des curieux. Pas des indécis. Des gens qui ont un vrai projet et un vrai budget.",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Vous ne voulez pas devenir marketeur",
    desc: "Vous voulez poser votre résine, votre carrelage, votre peinture. Le reste, vous voulez qu'on s'en occupe.",
    path: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
];

export default function ForYouIf() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            On est faits pour s'entendre si...
          </div>
          <h2 className="font-display text-display-md">
            Vous reconnaissez au moins une de ces situations.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="card-hover bg-bg border border-ink-10 rounded-2xl p-6 sm:p-8"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald/10 flex items-center justify-center mb-4 sm:mb-5">
                <svg className="w-6 h-6 text-emerald-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                </svg>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2.5 sm:mb-3">{item.title}</h3>
              <p className="text-ink-60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
