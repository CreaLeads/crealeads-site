"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="text-sm font-medium text-ink-60">
            Système d'acquisition clients pour artisans du bâtiment
          </span>
        </div>

        {/* Hero title - le slogan */}
        <h1 className="font-display text-display-xl mb-6 max-w-5xl animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Le bouche-à-oreille
          <br />
          a une <span className="italic font-light">limite.</span>
          <br />
          <span className="text-emerald">Nous, on n'en a pas.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-ink-60 mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Un système clé en main qui te ramène <strong className="text-ink font-semibold">30 à 60 prospects qualifiés par mois</strong>, directement sur ton WhatsApp. Pensé par un fils d'artisan, pour les artisans.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <Link
            href="https://cal.eu/enzo-crealeads/20min"
            className="btn-primary px-8 py-4 text-base font-semibold rounded-full"
          >
            <span>Réserver un appel découverte</span>
          </Link>
          <Link
            href="#methode"
            className="px-8 py-4 text-base font-semibold rounded-full border border-ink-20 hover:border-ink transition-colors"
          >
            Comment ça marche ?
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 text-sm text-ink-60 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Premiers leads sous 72h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Exclusivité zone + métier</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Garantie 50% remboursé à 90j</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
