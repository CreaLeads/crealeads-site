"use client";

const steps = [
  {
    num: "01",
    icon: "📞",
    title: "Appel découverte",
    desc: "30 minutes en visio. On comprend ton métier, ta zone, ton volume actuel et tes objectifs. Pas de bla-bla commercial.",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Audit et stratégie",
    desc: "On définit ta cible précise, on construit ton angle d'attaque, on cale tes audiences Meta avec exclusivité zone + métier.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Setup en 7 jours",
    desc: "On crée tes campagnes, tes visuels, ton formulaire, ton CRM, ton WhatsApp. Tu valides avant le lancement.",
  },
  {
    num: "04",
    icon: "📲",
    title: "Lancement",
    desc: "Tes premiers prospects tombent dans les 24-72h sur ton WhatsApp. Tu rappelles, tu qualifies, tu signes.",
  },
  {
    num: "05",
    icon: "📈",
    title: "Optimisation continue",
    desc: "Chaque mois on analyse, on optimise, on renouvelle les créas. Les campagnes deviennent meilleures avec le temps.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
            Notre méthode
          </div>
          <h2 className="font-display text-display-md">
            De zéro à
            <br />
            <span className="text-emerald">premier chantier signé</span>
            <br />
            en moins de 14 jours.
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-hover grid lg:grid-cols-12 gap-6 lg:gap-12 items-start bg-bg border border-ink-10 rounded-2xl p-8 lg:p-10"
            >
              <div className="lg:col-span-1">
                <div className="font-display text-display-sm text-emerald">{step.num}</div>
              </div>
              <div className="lg:col-span-1">
                <div className="text-4xl">{step.icon}</div>
              </div>
              <div className="lg:col-span-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-ink-60 text-base lg:text-lg leading-relaxed max-w-3xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
