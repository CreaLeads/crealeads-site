"use client";

const steps = [
  {
    num: "01",
    title: "Appel découverte",
    desc: "Trente minutes en visio. On comprend votre métier, votre zone, votre volume actuel et vos objectifs. Sans discours commercial inutile.",
  },
  {
    num: "02",
    title: "Audit et stratégie",
    desc: "On définit votre cible précise, on construit votre angle d'attaque, on cale vos audiences Meta avec exclusivité zone et métier.",
  },
  {
    num: "03",
    title: "Mise en place en 10 jours",
    desc: "On crée vos campagnes, vos visuels, votre formulaire, votre CRM et vos notifications. Vous validez tout avant le lancement.",
  },
  {
    num: "04",
    title: "Lancement",
    desc: "Vos premiers prospects arrivent sous 24 à 48 heures, directement sur votre téléphone. Vous rappelez, vous qualifiez, vous signez.",
  },
  {
    num: "05",
    title: "Optimisation continue",
    desc: "Chaque mois, on analyse, on optimise et on renouvelle les visuels. Les campagnes deviennent plus performantes avec le temps.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16 lg:mb-20">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Notre méthode
          </div>
          <h2 className="font-display text-display-md">
            De zéro à votre premier chantier signé en moins de 14 jours.
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="card-hover flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-8 lg:gap-12 sm:items-start bg-bg border border-ink-10 rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="sm:col-span-2">
                <div className="font-display text-display-sm text-emerald">{step.num}</div>
              </div>
              <div className="sm:col-span-10">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2.5 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-ink-60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
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
