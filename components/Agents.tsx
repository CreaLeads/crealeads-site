"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AGENTS = [
  { i: "T", name: "Théo", role: "Acquisition Meta", desc: "Lance et optimise vos pubs Facebook & Instagram, ciblées métier et zone.", tier: "dès DÉCOLLAGE" },
  { i: "I", name: "Iris", role: "Studio créa", desc: "Crée et renouvelle vos visuels et vidéos publicitaires qui arrêtent le scroll.", tier: "dès DÉCOLLAGE" },
  { i: "L", name: "Lucie", role: "Réceptionniste 24/7", desc: "Répond à vos prospects en moins d'1 min, les qualifie et cale les visites.", tier: "dès COPILOTE" },
  { i: "V", name: "Victor", role: "Analyste", desc: "Surveille vos chiffres et vous envoie un bilan clair chaque semaine.", tier: "dès COPILOTE" },
  { i: "A", name: "Amandine", role: "Votre bras droit", desc: "Vous lui demandez où en est votre business par message, elle vous répond.", tier: "dès AUTOPILOTE" },
  { i: "M", name: "Marco", role: "Contenu réseaux", desc: "Alimente vos réseaux sociaux pour renforcer votre image et votre crédibilité.", tier: "Écosystème" },
];

export default function Agents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".agent-card");
      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="agents" className="py-16 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {AGENTS.map((a) => (
            <div key={a.name} className="agent-card card-hover rounded-2xl border border-ink-10 bg-bg p-6">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald/15 flex items-center justify-center font-display font-extrabold text-lg text-emerald-dark flex-shrink-0">
                  {a.i}
                </div>
                <div className="min-w-0">
                  <div className="font-display font-bold text-lg leading-none">{a.name}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald mt-1">{a.role}</div>
                </div>
              </div>
              <p className="text-sm text-ink-60 leading-relaxed mb-4">{a.desc}</p>
              <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ink-05 text-ink-60">
                {a.tier}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-10 text-sm sm:text-base text-ink font-medium">
          <span className="text-emerald font-bold">Lucie</span> parle à vos clients.{" "}
          <span className="text-emerald font-bold">Amandine</span> parle à vous.
        </p>
      </div>
    </section>
  );
}
