const STEPS = [
  { t: "Publicité", s: "Meta, ciblée sur votre zone", d: "M3 11l19-9-9 19-2-8-8-2z" },
  { t: "Demande", s: "Karim · Créteil (94)", d: "M4 4h16v12H5.17L4 17.17V4z" },
  { t: "Visite calée", s: "Jeudi 14h, sur place", d: "M8 7V3M16 7V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" },
  { t: "Devis envoyé", s: "À vos prix, en 2 min", d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6" },
  { t: "Chantier signé", s: "12 400 €", d: "M20 6L9 17l-5-5", signed: true },
];

function Connector() {
  return (
    <div className="flex items-center justify-center rotate-90 sm:rotate-0 text-stroke-strong shrink-0" aria-hidden>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export default function AdToChantier() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-dark mb-3">
            Du premier clic au chantier
          </div>
          <h2 className="font-display text-display-md mb-4">
            La seule qui sait quelle publicité a payé quel chantier.
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Les plateformes de leads vous vendent des contacts sans jamais savoir ce qu&apos;ils deviennent. Les logiciels de gestion voient vos devis sans savoir d&apos;où viennent vos clients. Nous suivons la même demande, du clic jusqu&apos;à la signature.
          </p>
        </div>

        {/* Le fil : une même demande, du clic à la signature */}
        <div className="rounded-[24px] border border-stroke bg-bg p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0">
            {STEPS.map((step, i) => (
              <div key={i} className="contents sm:flex sm:flex-1 sm:items-center">
                <div className={`flex sm:flex-col items-center gap-3 sm:gap-2.5 sm:text-center sm:flex-1 rounded-[16px] p-3 sm:p-4 ${step.signed ? "bg-brand-50" : ""}`}>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${step.signed ? "bg-brand-500 text-white" : "bg-surface border border-stroke text-emerald-dark"}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.9">
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.d} />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-display font-bold text-sm ${step.signed ? "text-brand-700" : "text-ink"}`}>{step.t}</span>
                    <span className={`block text-[12px] tnum ${step.signed ? "text-brand-600 font-semibold" : "text-faint"}`}>{step.s}</span>
                  </span>
                </div>
                {i < STEPS.length - 1 ? <Connector /> : null}
              </div>
            ))}
          </div>
        </div>

        {/* La ligne à tenir */}
        <div className="mt-6 sm:mt-8 rounded-[24px] bg-ink text-bg p-6 sm:p-10">
          <p className="font-display text-lg sm:text-2xl lg:text-[26px] leading-snug font-bold">
            Les autres vous aident à facturer ce que vous avez déjà vendu.
            <br className="hidden sm:block" />{" "}
            <span className="text-emerald">CreaLeads vous amène ce que vous allez vendre</span> — et vous montre ce que ça rapporte.
          </p>
        </div>
      </div>
    </section>
  );
}
