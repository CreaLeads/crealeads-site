const testimonials = [
  {
    name: "Serge Wagner",
    company: "SurfaceBéton",
    role: "Applicateur résine décorative",
    location: "Île-de-France",
    quote: "60 leads en 5 jours. Plusieurs devis envoyés. 2 chantiers signés la première semaine. Sans courir après les clients, sans bouche-à-oreille. Le système tourne tout seul.",
    stats: [
      { value: "60+", label: "leads en 5 jours" },
      { value: "2", label: "chantiers signés sem. 1" },
      { value: "×10", label: "ROI le 1er mois" },
    ],
  },
  {
    name: "Paul Mendes",
    company: "Mendes Signature",
    role: "Applicateur résine décorative",
    location: "Troyes et environs",
    quote: "Je suis jeune et je ne connaissais rien au marketing. Tout a été mis en place pour moi, expliqué simplement, et aujourd'hui je signe régulièrement des chantiers. Sans ce système, je serais encore en attente de clients.",
    stats: [
      { value: "21", label: "ans" },
      { value: "100%", label: "des clients via Meta" },
    ],
  },
  {
    name: "Francis Leroy",
    company: "Leroy BTP",
    role: "Résine, moquette de pierre, maçonnerie, ravalement",
    location: "Yvetot et environs",
    quote: "Le bouche-à-oreille fonctionnait, mais c'était plafonné. Maintenant j'ai un flux régulier de prospects qualifiés. Mes journées se remplissent toutes seules.",
    stats: [
      { value: "4", label: "métiers complémentaires" },
      { value: "50 km", label: "rayon d'intervention" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
            Témoignages clients
          </div>
          <h2 className="font-display text-display-md">
            Ce que disent les artisans que nous accompagnons.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-hover bg-surface border border-stroke shadow-ds-sm rounded-[24px] p-6 sm:p-7 flex flex-col">
              <div className="flex gap-2 mb-5">
                {t.stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="flex-1 bg-surface-alt border border-stroke rounded-[14px] px-3 py-2.5">
                    <div className="tnum font-display text-xl font-bold text-emerald-dark leading-none mb-1">{s.value}</div>
                    <div className="text-[11px] text-ink-60 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="font-display text-[17px] sm:text-lg leading-snug mb-6 flex-grow">
                «&nbsp;{t.quote}&nbsp;»
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-stroke">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center font-display font-bold text-brand-700 flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name} · {t.company}</div>
                  <div className="text-xs text-ink-60">{t.role} · {t.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
