"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAL = "https://cal.eu/enzo-crealeads/20min";
const WA =
  "https://wa.me/33663675254?text=" +
  encodeURIComponent("Bonjour, je veux plus de chantiers 👋");

/* ─────────────────────────────────────────────────────────────── */

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.252l-.999 3.648 3.965-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────── */

const STEPS = [
  { n: "01", t: "On cadre", d: "Appel découverte : votre métier, votre zone, votre objectif. On définit la cible exacte." },
  { n: "02", t: "On lance les pubs ciblées", d: "Campagnes Meta Ads optimisées, formulaire instantané, visuels créés sur mesure." },
  { n: "03", t: "Les demandes tombent", d: "Des prospects qualifiés arrivent directement sur votre téléphone, sous 24 à 48 h." },
  { n: "04", t: "Vous signez", d: "Vous rappelez, vous chiffrez, vous signez. On optimise pour faire grimper le volume." },
];

const OFFERS = [
  {
    name: "DÉCOLLAGE",
    tag: "Vous partez seul",
    price: "1 500 €",
    detail: "Paiement unique · sans engagement",
    features: ["1 campagne Meta Ads", "Formulaire + CRM", "Notifications de leads", "2-3 visuels créés", "Formation incluse"],
    highlight: false,
  },
  {
    name: "COPILOTE",
    tag: "On avance ensemble",
    price: "2 500 €",
    detail: "+ 500 €/mois · engagement 3 mois",
    features: ["Tout DÉCOLLAGE +", "3 campagnes coordonnées", "Google My Business géré", "Optimisation mensuelle", "Rapport + suivi dédié"],
    highlight: true,
  },
  {
    name: "AUTOPILOTE",
    tag: "L'IA pilote pour vous",
    price: "6 000 €",
    detail: "+ 1 200 €/mois · engagement 6 mois",
    features: ["Tout COPILOTE +", "Agent IA 24h/24", "Qualification automatique", "Devis sous 5 min", "Support prioritaire 1 h"],
    highlight: false,
  },
];

/* Compteur isolé — ses re-renders n'affectent pas le hero (sinon les
   animations CSS du hero redémarrent en boucle et restent invisibles). */
function Counter() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const obj = { v: 0 };
    const tw = gsap.to(obj, {
      v: 60,
      duration: 2,
      delay: 0.6,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.v)),
      onComplete: () => setDone(true),
    });
    return () => { tw.kill(); };
  }, []);

  return (
    <span className="text-4xl sm:text-5xl font-extrabold text-[#00C896] tabular-nums">
      {done ? "30–60" : count}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────── */

export default function HomeV3() {
  const root = useRef<HTMLDivElement>(null);

  // Fond navy sur <body> tant que la home est montée (restauré au démontage)
  useEffect(() => {
    const prevBody = document.body.style.backgroundColor;
    const prevHtml = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = "#0B1E3D";
    document.documentElement.style.backgroundColor = "#0B1E3D";
    return () => {
      document.body.style.backgroundColor = prevBody;
      document.documentElement.style.backgroundColor = prevHtml;
    };
  }, []);

  // Animations au scroll (below-fold uniquement)
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.set(el, { opacity: 0, y: 36 });
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(".s-item");
        gsap.set(items, { opacity: 0, y: 30 });
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    animationDelay: `${delay}s`,
  });

  return (
    <main
      ref={root}
      className="font-poppins bg-[#0B1E3D] text-[#FAFAF8] overflow-x-hidden antialiased"
    >
      {/* Animations d'entrée above-fold — CSS pur, visible même sans JS */}
      <style>{`
        .hv3 { opacity: 0; animation: hv3up 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes hv3up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hv3 { opacity: 1; animation: none; }
        }
      `}</style>

      {/* ───────── NAV ───────── */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#top" className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Crea<span className="text-[#00C896]">Leads</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#methode" className="hover:text-white transition-colors">Méthode</a>
            <a href="#preuve" className="hover:text-white transition-colors">Résultats</a>
            <a href="#offres" className="hover:text-white transition-colors">Offres</a>
          </nav>
          <a
            href={CAL}
            className="inline-flex items-center gap-1.5 bg-[#00C896] text-[#0B1E3D] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:brightness-110 transition-all"
          >
            Plus de chantiers
          </a>
        </div>
      </header>

      {/* ───────── HERO ───────── */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-16 sm:pt-28">
        {/* halos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-[-10%] w-[460px] h-[460px] rounded-full bg-[#00C896]/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-15%] w-[420px] h-[420px] rounded-full bg-[#00C896]/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#FAFAF8 1px, transparent 1px), linear-gradient(90deg, #FAFAF8 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full">
          <div
            className="hv3 inline-flex items-center gap-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-[#00C896] mb-6"
            style={fade(0)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] animate-pulse" />
            Acquisition clients — artisans du bâtiment
          </div>

          <h1
            className="hv3 font-extrabold leading-[1.04] tracking-tight text-[2.5rem] sm:text-6xl lg:text-7xl max-w-4xl"
            style={fade(0.1)}
          >
            Plus de chantiers.
            <br />
            <span className="text-[#00C896]">Sans démarcher.</span>
          </h1>

          <p
            className="hv3 mt-5 sm:mt-6 text-base sm:text-lg text-white/65 max-w-xl leading-relaxed"
            style={fade(0.2)}
          >
            On installe votre système d'acquisition clé en main. Vous restez sur vos chantiers,
            les demandes de devis arrivent toutes seules.
          </p>

          {/* compteur */}
          <div
            className="hv3 mt-7 sm:mt-8 flex items-center gap-4"
            style={fade(0.3)}
          >
            <div className="flex items-baseline gap-1">
              <Counter />
            </div>
            <span className="text-sm sm:text-base text-white/60 leading-tight max-w-[180px]">
              demandes de devis qualifiées <span className="text-white/90 font-semibold">par mois</span>
            </span>
          </div>

          {/* CTA */}
          <div
            className="hv3 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={fade(0.4)}
          >
            <a
              href={CAL}
              className="group inline-flex items-center justify-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-sm sm:text-base px-7 py-4 rounded-full hover:brightness-110 transition-all shadow-lg shadow-[#00C896]/20"
            >
              Je veux plus de chantiers
              <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full hover:border-[#00C896] hover:text-[#00C896] transition-all"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
              WhatsApp
            </a>
          </div>

          <div
            className="hv3 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/50"
            style={fade(0.5)}
          >
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#00C896]" /> Premiers leads sous 48 h</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#00C896]" /> Exclusivité zone + métier</span>
          </div>
        </div>
      </section>

      {/* ───────── STORYTELLING CARDS ───────── */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="reveal max-w-2xl mb-12 sm:mb-16">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#00C896] mb-3">
              Pendant ce temps
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Votre machine à clients tourne, <span className="text-[#00C896]">même sur le chantier.</span>
            </h2>
          </div>

          <div data-stagger className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {/* Carte 1 : notification lead */}
            <div className="s-item rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
                Notification · à l'instant
              </div>
              <div className="rounded-xl bg-[#0B1E3D] border border-white/10 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#00C896]/15 flex items-center justify-center text-lg">🔔</div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold">Nouveau lead</div>
                    <div className="text-[13px] text-white/70 leading-snug">Mohamed K. — Résine — Paris 15</div>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#00C896]/15 text-[#00C896] text-[10px] font-bold px-2 py-0.5">
                      <Check className="w-3 h-3" /> Qualifié
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte 2 : campagne Meta */}
            <div className="s-item rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-bold">Campagne Meta</div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#00C896]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] animate-pulse" /> En cours
                </span>
              </div>
              <div className="space-y-3">
                {[
                  ["Impressions", "12 480"],
                  ["Clics", "342"],
                  ["Coût par lead", "4,10 €"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between text-[13px]">
                    <span className="text-white/55">{k}</span>
                    <span className="font-bold tabular-nums">{v}</span>
                  </div>
                ))}
                <div className="h-2 rounded-full bg-white/10 overflow-hidden mt-1">
                  <div className="h-full w-3/4 rounded-full bg-[#00C896]" />
                </div>
              </div>
            </div>

            {/* Carte 3 : CRM */}
            <div className="s-item rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="text-sm font-bold mb-4">CRM · Pipeline</div>
              <div className="space-y-2.5">
                {[
                  ["Karim B.", "Plomberie", "Devis envoyé"],
                  ["Sarah M.", "Résine", "À rappeler"],
                  ["Thomas R.", "Électricité", "Signé"],
                ].map(([n, m, s], i) => (
                  <div key={n} className="flex items-center justify-between rounded-lg bg-[#0B1E3D] border border-white/10 px-3 py-2">
                    <div className="min-w-0">
                      <div className="text-[13px] font-semibold truncate">{n}</div>
                      <div className="text-[11px] text-white/45">{m}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${i === 2 ? "bg-[#00C896]/15 text-[#00C896]" : "bg-white/10 text-white/60"}`}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── COMMENT ÇA MARCHE ───────── */}
      <section id="methode" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="reveal max-w-2xl mb-12 sm:mb-16">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#00C896] mb-3">
              Comment ça marche
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Quatre étapes. <span className="text-[#00C896]">Zéro prise de tête.</span>
            </h2>
          </div>

          <div data-stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="s-item rounded-2xl border border-white/10 bg-[#0B1E3D] p-6">
                <div className="text-4xl font-extrabold text-[#00C896]/30 mb-4">{s.n}</div>
                <h3 className="text-lg font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PREUVE ───────── */}
      <section id="preuve" className="relative py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="reveal rounded-3xl border border-[#00C896]/25 bg-gradient-to-br from-[#00C896]/[0.08] to-transparent p-7 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#00C896] mb-6">
              Cas client · SurfaceBéton
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl mb-3">
              50 leads en 5 jours.
              <span className="block text-[#00C896]">3 chantiers signés la 1ʳᵉ semaine.</span>
            </h2>
            <p className="text-white/60 max-w-xl mb-10 text-sm sm:text-base">
              Applicateur résine en Île-de-France. Campagne Meta lancée un lundi, premiers devis le mercredi.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                ["50", "leads en 5 jours"],
                ["8", "devis envoyés"],
                ["3", "chantiers signés"],
                ["×10", "retour sur investissement"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-[#0B1E3D]/60 border border-white/10 p-4 sm:p-5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#00C896] mb-1 tabular-nums">{v}</div>
                  <div className="text-xs sm:text-sm text-white/55 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── OFFRES ───────── */}
      <section id="offres" className="relative py-20 sm:py-28 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#00C896] mb-3">
              Nos offres
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Trois niveaux. <span className="text-[#00C896]">Un seul objectif.</span>
            </h2>
          </div>

          <div data-stagger className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:items-start">
            {OFFERS.map((o) => (
              <div
                key={o.name}
                className={`s-item relative rounded-3xl p-7 sm:p-8 flex flex-col ${
                  o.highlight
                    ? "bg-[#00C896] text-[#0B1E3D] lg:-mt-4 shadow-2xl shadow-[#00C896]/20"
                    : "bg-[#0B1E3D] border border-white/10"
                }`}
              >
                {o.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0B1E3D] text-[#00C896] text-[11px] font-bold uppercase tracking-wider px-4 py-1 whitespace-nowrap">
                    Le plus choisi
                  </div>
                )}
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${o.highlight ? "text-[#0B1E3D]/70" : "text-[#00C896]"}`}>
                  {o.name}
                </div>
                <div className={`text-sm mb-5 ${o.highlight ? "text-[#0B1E3D]/60" : "text-white/50"}`}>{o.tag}</div>
                <div className="text-4xl font-extrabold mb-1">{o.price}</div>
                <div className={`text-xs mb-6 pb-6 border-b ${o.highlight ? "text-[#0B1E3D]/60 border-[#0B1E3D]/15" : "text-white/50 border-white/10"}`}>
                  {o.detail}
                </div>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${o.highlight ? "text-[#0B1E3D]" : "text-[#00C896]"}`} />
                      <span className={o.highlight ? "text-[#0B1E3D]/90" : "text-white/85"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CAL}
                  className={`block text-center font-bold text-sm px-6 py-3.5 rounded-full transition-all ${
                    o.highlight
                      ? "bg-[#0B1E3D] text-[#FAFAF8] hover:brightness-125"
                      : "bg-[#00C896] text-[#0B1E3D] hover:brightness-110"
                  }`}
                >
                  Choisir {o.name.charAt(0) + o.name.slice(1).toLowerCase()}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA FINAL ───────── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#00C896]/10 blur-[130px]" />
        </div>
        <div className="reveal relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] mb-6">
            Votre prochain chantier <span className="text-[#00C896]">vous attend.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10">
            30 minutes pour voir si on peut remplir votre agenda. Aucun engagement, conseil honnête.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href={CAL}
              className="inline-flex items-center justify-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg shadow-[#00C896]/20"
            >
              Je veux plus de chantiers <Arrow className="w-4 h-4" />
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full hover:border-[#00C896] hover:text-[#00C896] transition-all"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" /> WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#00C896]" /> Exclusivité zone + métier</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#00C896]" /> Garantie 50 % remboursé à 90 j</span>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <div className="text-2xl font-extrabold tracking-tight mb-3">
                Crea<span className="text-[#00C896]">Leads</span>
              </div>
              <p className="text-sm text-white/55 max-w-xs leading-relaxed">
                Acquisition de clients clé en main pour les artisans du bâtiment.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <a href="mailto:contact.crealeads@gmail.com" className="block text-white/70 hover:text-[#00C896] transition-colors">
                contact.crealeads@gmail.com
              </a>
              <a href="tel:+33663675254" className="block text-white/70 hover:text-[#00C896] transition-colors">
                06 63 67 52 54
              </a>
              <div className="flex gap-4 pt-2 text-white/55">
                <a href="/offres" className="hover:text-[#00C896] transition-colors">Offres</a>
                <a href="/tarifs" className="hover:text-[#00C896] transition-colors">Tarifs</a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
            <span>© 2026 CreaLeads. Tous droits réservés.</span>
            <div className="flex gap-5">
              <a href="/mentions-legales" className="hover:text-white/70 transition-colors">Mentions légales</a>
              <a href="/cgv" className="hover:text-white/70 transition-colors">CGV</a>
              <a href="/privacy" className="hover:text-white/70 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
