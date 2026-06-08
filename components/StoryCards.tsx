"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function StoryCards() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".s-card");
      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-28 bg-ink-05 border-y border-ink-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald mb-3">
            Pendant ce temps
          </div>
          <h2 className="font-display text-display-md">
            Votre machine à clients tourne,{" "}
            <span className="text-emerald">même sur le chantier.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {/* Carte 1 : notification lead */}
          <div className="s-card card-hover rounded-2xl border border-ink-10 bg-bg p-5">
            <div className="flex items-center gap-2 text-xs text-ink-60 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              Notification · à l&apos;instant
            </div>
            <div className="rounded-xl bg-ink-05 border border-ink-10 p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald/15 flex items-center justify-center text-lg">🔔</div>
                <div className="min-w-0">
                  <div className="text-sm font-bold">Nouveau lead</div>
                  <div className="text-[13px] text-ink-60 leading-snug">Mohamed K. — Résine — Paris 15</div>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald/15 text-emerald-dark text-[10px] font-bold px-2 py-0.5">
                    <Check className="w-3 h-3" /> Qualifié
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carte 2 : campagne Meta */}
          <div className="s-card card-hover rounded-2xl border border-ink-10 bg-bg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold">Campagne Meta</div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" /> En cours
              </span>
            </div>
            <div className="space-y-3">
              {[
                ["Impressions", "12 480"],
                ["Clics", "342"],
                ["Coût par lead", "4,10 €"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between text-[13px]">
                  <span className="text-ink-60">{k}</span>
                  <span className="font-bold tabular-nums">{v}</span>
                </div>
              ))}
              <div className="h-2 rounded-full bg-ink-10 overflow-hidden mt-1">
                <div className="h-full w-3/4 rounded-full bg-emerald" />
              </div>
            </div>
          </div>

          {/* Carte 3 : CRM */}
          <div className="s-card card-hover rounded-2xl border border-ink-10 bg-bg p-5">
            <div className="text-sm font-bold mb-4">CRM · Pipeline</div>
            <div className="space-y-2.5">
              {[
                ["Karim B.", "Plomberie", "Devis envoyé"],
                ["Sarah M.", "Résine", "À rappeler"],
                ["Thomas R.", "Électricité", "Signé"],
              ].map(([n, m, s], i) => (
                <div key={n} className="flex items-center justify-between rounded-lg bg-ink-05 border border-ink-10 px-3 py-2">
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold truncate">{n}</div>
                    <div className="text-[11px] text-ink-40">{m}</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${i === 2 ? "bg-emerald/15 text-emerald-dark" : "bg-ink-10 text-ink-60"}`}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
