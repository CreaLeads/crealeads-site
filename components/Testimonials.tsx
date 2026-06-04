"use client";

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
    <section id="temoignages" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Témoignages clients
          </div>
          <h2 className="font-display text-display-md">
            Ce que disent les artisans que nous accompagnons.
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover bg-bg border border-ink-10 rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 lg:items-center"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-1 mb-5 sm:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display text-lg sm:text-xl lg:text-2xl leading-snug mb-6 sm:mb-8">
                  «&nbsp;{t.quote}&nbsp;»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald/20 flex items-center justify-center font-display font-bold text-emerald-dark flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base">{t.name}</div>
                    <div className="text-xs sm:text-sm text-ink-60">{t.company} · {t.location}</div>
                    <div className="text-xs text-ink-60">{t.role}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                {t.stats.map((s, j) => (
                  <div
                    key={j}
                    className="bg-ink-05 rounded-2xl p-4 sm:p-5 text-center"
                  >
                    <div className="font-display text-2xl sm:text-3xl font-bold text-emerald mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs text-ink-60 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
