"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-6 sm:mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-ink-60">
            Acquisition clients pour artisans du bâtiment
          </span>
        </div>

        {/* Hero title - le slogan */}
        <h1 className="font-display text-display-xl mb-5 sm:mb-6 max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Le bouche-à-oreille a une <span className="italic font-light">limite.</span>{" "}
          <span className="text-emerald">Nous, on n'en a pas.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-ink-60 mb-8 sm:mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Un système clé en main qui vous ramène <strong className="text-ink font-semibold">30 à 60 prospects qualifiés par mois</strong>, directement sur votre WhatsApp. Pensé par un fils d'artisan, pour les artisans.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <Link
            href="#contact"
            className="btn-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-center"
          >
            <span>Réserver un appel découverte</span>
          </Link>
          <Link
            href="#methode"
            className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full border border-ink-20 hover:border-ink transition-colors text-center"
          >
            Comment ça marche ?
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-8 sm:gap-y-3 mt-10 sm:mt-12 text-sm text-ink-60 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Premiers leads sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Exclusivité zone et métier</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Garantie 50 % remboursé à 90 jours</span>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
