"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const euros = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

/* Compteur isolé (rAF, sans librairie) — monte la borne haute 50 → 100.
   Isolé pour que ses re-renders n'affectent pas le reste du hero. */
function Counter() {
  const [n, setN] = useState(50);
  useEffect(() => {
    let raf = 0;
    let startT: number | null = null;
    let started = false;
    const from = 50, to = 100, dur = 1700;
    const tick = (t: number) => {
      if (startT === null) startT = t;
      const p = Math.min((t - startT) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const start = () => { if (started) return; started = true; raf = requestAnimationFrame(tick); };
    const w = window as unknown as { __clLoaded?: boolean };
    let fb = 0;
    if (w.__clLoaded) start();
    else { window.addEventListener("cl:loaded", start, { once: true }); fb = window.setTimeout(start, 4000); }
    return () => { cancelAnimationFrame(raf); window.removeEventListener("cl:loaded", start); if (fb) clearTimeout(fb); };
  }, []);
  return <>50–{n}</>;
}

/* Fenêtre « application » : la vraie interface du tableau de bord, en réduction */
function MiniDash() {
  const rows = [
    { ini: "JD", nom: "Jean Dupont", ville: "Melun (77)", label: "À rappeler", cls: "bg-warning/15 text-warning", montant: null as number | null },
    { ini: "SB", nom: "Sophie Bernard", ville: "Versailles (78)", label: "Visite calée", cls: "bg-info/10 text-info", montant: null },
    { ini: "LM", nom: "Laure Mercier", ville: "Cergy (95)", label: "Signé", cls: "bg-brand-500 text-white", montant: 7200 },
  ];
  return (
    <div className="relative">
      <div className="rounded-[22px] border border-stroke bg-surface shadow-lift overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between h-11 px-4 border-b border-stroke">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-display text-sm font-bold">Crea<span className="text-emerald-dark">Leads</span></span>
            <span className="hidden sm:inline text-[11px] text-faint truncate">dashboard.crealeads.fr</span>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-[10px] font-semibold text-brand-700">ÉG</span>
        </div>
        {/* Contenu */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-[15px] font-semibold leading-none">Bonjour, <span className="text-faint font-normal">Éric</span></div>
              <div className="text-[11px] text-muted mt-1">Époxy Design · Île-de-France</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-stroke px-2.5 py-1 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> août
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[16px] border border-stroke p-3">
              <div className="text-[10px] uppercase tracking-wide text-faint">Demandes reçues</div>
              <div className="tnum text-[24px] font-semibold leading-none mt-1.5">42</div>
              <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-pill bg-brand-50 text-brand-700 px-1.5 py-0.5 text-[11px] font-semibold tnum">↗ 18%</div>
            </div>
            <div className="rounded-[16px] bg-brand-400 text-white p-3">
              <div className="text-[10px] uppercase tracking-wide text-white/80">Chantiers signés</div>
              <div className="tnum text-[24px] font-semibold leading-none mt-1.5">{euros(21300)}</div>
              <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-pill bg-white/20 px-1.5 py-0.5 text-[11px] font-semibold tnum">↗ 8%</div>
            </div>
          </div>
          <div className="rounded-[16px] border border-stroke p-3">
            <div className="text-[11px] font-semibold mb-2">Dernières demandes</div>
            <div className="space-y-2">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-semibold text-brand-700">{r.ini}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-medium">{r.nom}</span>
                    <span className="block text-[10px] text-faint">{r.ville}</span>
                  </span>
                  {r.montant ? <span className="tnum text-[11px] font-semibold shrink-0">{euros(r.montant)}</span> : null}
                  <span className={`shrink-0 rounded-pill px-2 py-0.5 text-[10px] font-semibold ${r.cls}`}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Puce flottante « nouveau lead » */}
      <div className="absolute -top-3 left-3 sm:-left-3 inline-flex items-center gap-2 rounded-pill bg-surface border border-stroke shadow-lift px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-[11px] font-semibold">Nouveau lead · qualifié</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          {/* Colonne texte */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-6 rounded-pill border border-stroke bg-surface shadow-ds-sm px-3.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-muted">Acquisition clients pour artisans du bâtiment</span>
            </div>

            <h1 className="font-display text-display-lg mb-5 sm:mb-6">
              Le bouche-à-oreille a une <span className="italic font-light">limite.</span>{" "}
              <span className="text-emerald-dark">Nous, on n&apos;en a pas.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Un système clé en main qui vous ramène <strong className="text-ink font-semibold">50 à 100 prospects qualifiés par mois</strong>, directement dans votre tableau de bord. Pensé par un fils d&apos;artisan, pour les artisans.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-emerald-dark tnum leading-none">
                <Counter />
              </span>
              <span className="text-sm text-muted leading-tight max-w-[170px]">
                demandes de devis qualifiées <span className="text-ink font-semibold">par mois</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="#contact" className="btn-primary px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-center">
                <span>Réserver un appel découverte</span>
              </Link>
              <Link href="#produit" className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors text-center">
                Voir le tableau de bord
              </Link>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-8 sm:mt-10 text-sm text-muted">
              {["Premiers leads sous 24h", "Exclusivité zone et métier", "Sans engagement"].map((t) => (
                <div key={t} className="inline-flex items-center gap-2 rounded-pill border border-stroke bg-surface shadow-ds-sm px-3.5 py-2">
                  <svg className="w-5 h-5 text-emerald-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne produit */}
          <div className="lg:pl-2">
            <MiniDash />
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
