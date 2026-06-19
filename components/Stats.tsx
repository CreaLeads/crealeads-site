"use client";

const stats = [
  { value: "+20", suffix: "", label: "entreprises accompagnées" },
  { value: "400", suffix: "+", label: "contacts générés en 2 mois (Eirlly)" },
  { value: "40 k€", suffix: "", label: "de CA mensuel (SurfaceBéton)" },
  { value: "×3", suffix: "", label: "de RDV mensuels (Adame)" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 border-y border-ink-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="font-display text-display-md text-emerald mb-1.5 sm:mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-ink-60 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
