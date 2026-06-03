"use client";

import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-6">
          Prêt à passer à la vitesse supérieure ?
        </div>

        <h2 className="font-display text-display-lg mb-8">
          Ton prochain chantier
          <br />
          <span className="text-emerald">est déjà sur Facebook.</span>
          <br />
          On va le chercher.
        </h2>

        <p className="text-lg text-bg/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          30 minutes en visio pour comprendre ton activité. Aucun engagement. Et si on n'est pas faits pour s'entendre, on te dira honnêtement.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://cal.eu/enzo-crealeads/20min"
            className="bg-emerald text-ink hover:bg-emerald-light px-8 py-4 text-base font-bold rounded-full transition-colors"
          >
            Réserver mon appel découverte
          </Link>
          <Link
            href="mailto:contact.crealeads@gmail.com"
            className="border border-bg/20 text-bg hover:bg-bg/5 px-8 py-4 text-base font-semibold rounded-full transition-colors"
          >
            Nous écrire
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-sm text-bg/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>30 min en visio</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Aucun engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Honnêteté garantie</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald/10 rounded-full blur-3xl" />
    </section>
  );
}
