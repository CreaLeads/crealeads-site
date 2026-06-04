"use client";

import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="section-dark py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-5 sm:mb-6">
          Prêt à passer à la vitesse supérieure ?
        </div>

        <h2 className="font-display text-display-lg mb-6 sm:mb-8">
          Avant, on cherchait des clients.
          <br />
          <span className="text-emerald">Maintenant, ils nous trouvent.</span>
        </h2>

        <p className="text-base sm:text-lg text-bg/70 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Trente minutes en visio pour comprendre votre activité. Aucun engagement. Et si nous ne sommes pas faits pour travailler ensemble, nous vous le dirons honnêtement.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="#contact"
            className="bg-emerald text-ink hover:bg-emerald-light px-7 sm:px-8 py-4 text-sm sm:text-base font-bold rounded-full transition-colors"
          >
            Réserver mon appel découverte
          </Link>
          <Link
            href="mailto:contact.crealeads@gmail.com"
            className="border border-bg/20 text-bg hover:bg-bg/5 px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-full transition-colors"
          >
            Nous écrire
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-x-8 sm:gap-y-3 mt-10 sm:mt-12 text-sm text-bg/60">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>30 minutes en visio</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Aucun engagement</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Conseil honnête</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-emerald/10 rounded-full blur-3xl" />
    </section>
  );
}
