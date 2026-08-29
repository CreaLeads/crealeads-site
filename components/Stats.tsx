const stats = [
  { value: "+20", label: "entreprises accompagnées" },
  { value: "400+", label: "contacts générés en 2 mois (Eirlly)" },
  { value: "40 k€", label: "de CA mensuel (SurfaceBéton)" },
  { value: "×3", label: "de RDV mensuels (Adame)" },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-canvas border-y border-stroke">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-[20px] bg-surface border border-stroke shadow-ds-sm p-5 sm:p-6">
              <div className="tnum font-sans text-[28px] sm:text-[34px] font-bold tracking-[-0.02em] text-emerald-dark leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[12.5px] sm:text-sm text-muted leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
