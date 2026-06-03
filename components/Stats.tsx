"use client";

const stats = [
  { value: "5", label: "artisans accompagnés", suffix: "" },
  { value: "60", label: "leads en 5 jours sur SurfaceBéton", suffix: "+" },
  { value: "72h", label: "pour tes premiers leads", suffix: "" },
  { value: "100%", label: "propriété de ton système", suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-ink-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="font-display text-display-md text-emerald mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm lg:text-base text-ink-60 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
