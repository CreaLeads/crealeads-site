"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FEATURES = [
  {
    tag: "Acquisition",
    title: "Campagnes Meta pilotées",
    desc: "Des publicités ciblées sur votre zone et votre métier, qui tournent et s'optimisent en continu — sans que vous y touchiez.",
    d: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 8a4 4 0 100 8 4 4 0 000-8zM12 11a1 1 0 100 2 1 1 0 000-2z",
  },
  {
    tag: "Réception",
    title: "Qualification 24h/24",
    desc: "Chaque demande est captée et qualifiée automatiquement dès son arrivée, jour et nuit, week-ends compris.",
    d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  },
  {
    tag: "Agenda",
    title: "Rendez-vous calés",
    desc: "Les visites qualifiées se posent directement dans votre agenda. Vous ne courez plus après personne.",
    d: "M8 7V3M16 7V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z",
  },
  {
    tag: "Suivi",
    title: "Relances automatiques",
    desc: "Aucun prospect oublié : les relances partent toutes seules tant que le contact n'a pas répondu.",
    d: "M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-15-2M4 15a8 8 0 0015 2",
  },
  {
    tag: "Devis",
    title: "Devis assistés",
    desc: "Au retour de visite, dictez ce que vous avez vu — le devis se monte à vos prix, prêt à envoyer.",
    d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M9 13h6M9 17h4",
  },
  {
    tag: "Pilotage",
    title: "Bilan chaque lundi",
    desc: "Ce que la semaine a coûté, ce qu'elle a rapporté, les chantiers signés. Vos chiffres, noir sur blanc.",
    d: "M4 19V10M9 19V4M14 19v-7M19 19v-4M3 21h18",
  },
];

export default function Platform() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".pf-card");
      gsap.set(items, { opacity: 0, y: 26 });
      gsap.to(items, {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06,
        scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-dark mb-3">
            Une plateforme, pas une prestation
          </div>
          <h2 className="font-display text-display-md mb-4">
            Avant, on lançait vos pubs.{" "}
            <span className="text-emerald-dark">Aujourd&apos;hui, on gère tout.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Campagnes, demandes, rendez-vous, relances, devis, bilan — tout votre business d&apos;acquisition tient dans un seul tableau de bord. Vous arrêtez de jongler entre dix outils et un carnet de chantier.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="pf-card card-hover rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[14px] bg-brand-50 text-emerald-dark">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.d} />
                  </svg>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-faint">{f.tag}</span>
              </div>
              <h3 className="font-sans font-semibold tracking-tight text-[15px] sm:text-lg mb-1.5 sm:mb-2 leading-tight">{f.title}</h3>
              <p className="text-[12.5px] sm:text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-5 sm:p-6">
          <p className="flex-1 text-sm sm:text-base">
            <span className="font-semibold">Un seul abonnement à 497 €/mois.</span>{" "}
            <span className="text-muted">Toute la plateforme, sans frais de mise en place et sans engagement.</span>
          </p>
          <a
            href="#produit"
            className="inline-flex items-center justify-center gap-2 bg-ink text-bg font-semibold text-sm px-6 py-3 rounded-full hover:bg-ink/90 transition-colors whitespace-nowrap"
          >
            Explorer le tableau de bord
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
