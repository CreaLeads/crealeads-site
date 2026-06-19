"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AGENTS = [
  { i: "T", name: "Théo", role: "Acquisition Meta", desc: "Lance et optimise vos pubs Facebook & Instagram, ciblées métier et zone.", tier: "dès DÉCOLLAGE" },
  { i: "I", name: "Iris", role: "Studio créa", desc: "Crée et renouvelle vos visuels et vidéos qui arrêtent le scroll.", tier: "dès DÉCOLLAGE" },
  { i: "L", name: "Lucie", role: "Réceptionniste 24/7", desc: "Répond à vos prospects en moins d'1 min, les qualifie et cale les visites.", tier: "dès COPILOTE" },
  { i: "V", name: "Victor", role: "Analyste", desc: "Surveille vos chiffres et vous envoie un bilan clair chaque semaine.", tier: "dès COPILOTE" },
  { i: "A", name: "Amandine", role: "Votre bras droit", desc: "Vous lui demandez où en est votre business par message, elle répond.", tier: "dès AUTOPILOTE" },
  { i: "M", name: "Marco", role: "Contenu réseaux", desc: "Alimente vos réseaux pour renforcer votre image et votre crédibilité.", tier: "Écosystème" },
];

export default function Agents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".agent-card");
      gsap.set(items, { opacity: 0, y: 28 });
      gsap.to(items, {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.07,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="agents" className="py-16 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald mb-3">
            Votre équipe IA
          </div>
          <h2 className="font-display text-display-md mb-4">
            Six agents au travail <span className="text-emerald">pour vous.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Pas un logiciel de plus. Une équipe d&apos;agents intelligents, orientés bâtiment, qui lancent vos pubs, répondent à vos prospects et vous tiennent au courant — pendant que vous êtes sur le chantier.
          </p>
        </div>

        {/* 2 colonnes sur mobile, 3 sur desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {AGENTS.map((a) => (
            <div key={a.name} className="agent-card card-hover rounded-2xl border border-ink-10 bg-bg p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald/15 flex items-center justify-center font-display font-extrabold text-base sm:text-lg text-emerald-dark flex-shrink-0">
                  {a.i}
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-base sm:text-lg leading-none truncate">{a.name}</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-emerald mt-1 leading-tight">{a.role}</div>
                </div>
              </div>
              <p className="text-[12.5px] sm:text-sm text-ink-60 leading-relaxed mb-3 sm:mb-4">{a.desc}</p>
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full bg-ink-05 text-ink-60">
                {a.tier}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-sm sm:text-base text-ink font-medium flex-1">
            <span className="text-emerald font-bold">Lucie</span> parle à vos clients.{" "}
            <span className="text-emerald font-bold">Amandine</span> parle à vous.
          </p>
          <Link
            href="/agents"
            className="inline-flex items-center justify-center gap-2 bg-ink text-bg font-semibold text-sm px-6 py-3 rounded-full hover:bg-ink/90 transition-colors whitespace-nowrap"
          >
            Découvrir chaque agent
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
