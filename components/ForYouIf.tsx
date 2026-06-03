"use client";

const items = [
  {
    icon: "🔁",
    title: "Tu vis du bouche-à-oreille",
    desc: "Ça marche, mais c'est imprévisible. Tu sais jamais combien de chantiers tu auras le mois prochain.",
  },
  {
    icon: "📵",
    title: "Tu sais pas comment t'y prendre",
    desc: "Le marketing digital, c'est flou. T'as essayé un site web, des flyers, des Pages Jaunes. Rien de concret.",
  },
  {
    icon: "⏰",
    title: "Tu manques de temps pour démarcher",
    desc: "Tu bosses 10h/jour sur tes chantiers. T'as pas l'énergie en plus pour gérer ta com ou répondre aux prospects.",
  },
  {
    icon: "📈",
    title: "Tu veux scaler sans embaucher",
    desc: "Tu pourrais faire 2x plus de chantiers mais t'as pas le flux. Et t'as pas envie de gérer des salariés.",
  },
  {
    icon: "🎯",
    title: "Tu veux des leads QUALIFIÉS",
    desc: "Pas des curieux. Pas des indécis. Des gens qui ont vraiment un projet et un budget.",
  },
  {
    icon: "🛠️",
    title: "Tu veux pas devenir marketeur",
    desc: "Tu veux poser ta résine, ton carrelage, ta peinture. Le reste, tu veux qu'on s'en occupe pour toi.",
  },
];

export default function ForYouIf() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
            On est fait pour s'entendre si...
          </div>
          <h2 className="font-display text-display-md">
            Tu reconnais
            <br />
            <span className="text-emerald">au moins une</span> de ces situations.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="card-hover bg-bg border border-ink-10 rounded-2xl p-8"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-ink-60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
