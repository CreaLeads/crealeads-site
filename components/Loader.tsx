"use client";

import { useEffect, useState } from "react";

// Signale aux autres composants (ex : compteur du hero) que le loader a disparu
function fireLoaded() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { __clLoaded?: boolean };
  if (w.__clLoaded) return;
  w.__clLoaded = true;
  window.dispatchEvent(new Event("cl:loaded"));
}

export default function Loader() {
  const [pct, setPct] = useState(0);

  // Compteur 0→100 via requestAnimationFrame (léger, sans librairie)
  useEffect(() => {
    let raf = 0;
    let startT: number | null = null;
    const dur = 2000;
    const delay = 150;
    const tick = (t: number) => {
      if (startT === null) startT = t;
      const e = t - startT - delay;
      if (e < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(e / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2); // ease-out
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Fallback : signale « loader fini » même si l'animation CSS est en pause
    const fb = setTimeout(fireLoaded, 3300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fb);
    };
  }, []);

  return (
    <div
      className="cl-loader fixed inset-0 z-[100] flex items-center justify-center bg-ink text-bg"
      aria-hidden
      onAnimationEnd={fireLoaded}
    >
      {/* Le retrait du loader est piloté en CSS pur : fiable même si le JS est lent/désactivé */}
      <style>{`
        .cl-loader {
          animation: clOut 0.7s cubic-bezier(0.7,0,0.3,1) forwards 2.35s;
        }
        @keyframes clOut {
          to { opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-1.5%); }
        }
        .cl-line { position: absolute; background: rgba(255,255,255,0.07); }
      `}</style>

      {/* Crosshair */}
      <div className="cl-line left-0 right-0 top-1/2 h-px" />
      <div className="cl-line top-0 bottom-0 left-1/2 w-px" />

      <div className="relative flex flex-col items-center">
        <div className="relative border border-white/15 rounded-2xl px-10 sm:px-16 py-9 sm:py-12 flex flex-col items-center gap-6">
          {/* coins emerald façon viseur */}
          <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-emerald rounded-tl-2xl" />
          <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-emerald rounded-tr-2xl" />
          <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-emerald rounded-bl-2xl" />
          <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-emerald rounded-br-2xl" />

          <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Crea<span className="text-emerald">Leads</span>
          </div>
          <div className="font-display text-5xl sm:text-6xl font-bold text-emerald tabular-nums leading-none">
            {pct}
            <span className="text-2xl sm:text-3xl align-top">%</span>
          </div>
        </div>

        <div className="mt-8 text-[10px] sm:text-xs tracking-[0.45em] uppercase text-white/40">
          Chargement
        </div>
      </div>
    </div>
  );
}
