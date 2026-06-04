"use client";

export default function CaseStudy() {
  return (
    <section className="section-dark py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 mb-5 sm:mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
              <span className="text-xs font-medium text-emerald uppercase tracking-wider">
                Résultats concrets
              </span>
            </div>

            <h2 className="font-display text-display-md mb-5 sm:mb-6">
              Des chantiers signés,
              <br />
              <span className="text-emerald">dès la première semaine.</span>
            </h2>

            <p className="text-base sm:text-lg text-bg/70 mb-7 sm:mb-8 leading-relaxed">
              Nos campagnes ne mettent pas des mois à produire. Voici un exemple représentatif : un applicateur résine accompagné dès le lancement de son système d'acquisition.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Jour 1.</strong> Lancement de la campagne. Les premiers prospects arrivent dans les heures qui suivent.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Jour 5.</strong> 60 prospects qualifiés. Plusieurs devis envoyés. Premier chantier signé.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-bg/80">
                  <strong className="text-bg">Première semaine.</strong> 2 chantiers signés. Investissement déjà rentabilisé.
                </div>
              </div>
            </div>
          </div>

          {/* Right metrics */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-1.5 sm:mb-2">60+</div>
              <div className="text-xs sm:text-sm text-bg/60">Leads qualifiés en 5 jours</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-1.5 sm:mb-2">2</div>
              <div className="text-xs sm:text-sm text-bg/60">Chantiers signés la 1ère semaine</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-1.5 sm:mb-2">24h</div>
              <div className="text-xs sm:text-sm text-bg/60">Pour les premiers prospects</div>
            </div>
            <div className="bg-bg/5 border border-bg/10 rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="font-display text-display-md text-emerald mb-1.5 sm:mb-2">×10</div>
              <div className="text-xs sm:text-sm text-bg/60">Retour sur investissement le 1er mois</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
