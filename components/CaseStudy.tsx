"use client";

export default function CaseStudy() {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
              <span className="text-xs font-medium text-emerald uppercase tracking-wider">
                Cas client
              </span>
            </div>

            <h2 className="font-display text-display-md mb-6">
              SurfaceBéton.
              <br />
              <span className="text-emerald">60 leads en 5 jours.</span>
            </h2>

            <p className="text-base lg:text-lg text-bg/70 mb-8 leading-relaxed">
              Mars 2026. Un applicateur résine de la région parisienne lance ses premières publicités Meta avec notre système. Voilà ce qui s'est passé.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Jour 1.</strong> Lancement de la campagne. Les premiers prospects tombent dans les 4 heures.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Jour 5.</strong> 60 prospects qualifiés. 8 devis envoyés. Premier chantier signé.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Semaines 2-3.</strong> 2 chantiers supplémentaires signés. ROI dépassé.
                </div>
              </div>
            </div>
          </div>

          {/* Right metrics */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-2">60+</div>
              <div className="text-sm text-bg/60">Leads qualifiés en 5 jours</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-2">8</div>
              <div className="text-sm text-bg/60">Devis envoyés la 1ère semaine</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-2">3</div>
              <div className="text-sm text-bg/60">Chantiers signés en 3 semaines</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-2">×10</div>
              <div className="text-sm text-bg/60">ROI le premier mois</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
