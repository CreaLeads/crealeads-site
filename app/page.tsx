"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAL_URL = "https://cal.eu/enzo-crealeads/20min";

const openFunnel = () =>
  typeof document !== "undefined" &&
  document.dispatchEvent(new CustomEvent("open-funnel"));

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Comment ça marche", href: "#process" },
    { label: "Offres", href: "#offres" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1E3D]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tight select-none text-white">
          Crea<span className="text-[#00C896]">Leads</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#A0B4C8] hover:text-white transition-colors duration-200 font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openFunnel}
          className="hidden md:inline-flex items-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-200"
        >
          Prendre rendez-vous
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 bg-[#0B1E3D]/98 backdrop-blur-md" : "max-h-0"}`}>
        <div className="px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-[#A0B4C8] hover:text-white font-semibold" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); openFunnel(); }}
            className="inline-flex justify-center bg-[#00C896] text-[#0B1E3D] font-bold text-sm px-5 py-3 rounded-full"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });

      // Badge pill : pop depuis le haut avec overshoot
      tl.fromTo(".hero-badge",
        { opacity: 0, y: -24, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.8)" }
      )
      // Titre H1 : sweep puissant depuis le bas
      .fromTo(".hero-title",
        { opacity: 0, y: 72 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
        "-=0.15"
      )
      // Sous-titre : suit le titre
      .fromTo(".hero-sub",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.55"
      )
      // CTAs : léger overshoot back.out
      .fromTo(".hero-cta",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.5)" },
        "-=0.45"
      )
      // Badge preuve : pop avec overshoot + légère échelle
      .fromTo(".hero-proof",
        { opacity: 0, y: 20, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "back.out(1.7)" },
        "-=0.35"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00C896]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#00C896]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-5 py-24 text-center relative z-10">
        <div className="hero-badge inline-flex items-center gap-2 bg-[#00C896]/10 border border-[#00C896]/30 text-[#00C896] text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#00C896] rounded-full animate-pulse" />
          Agence d&apos;acquisition digitale pour artisans du bâtiment
        </div>

        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
          Des clients qualifiés directement sur{" "}
          <span className="text-[#00C896]">votre téléphone.</span>
        </h1>

        <p className="hero-sub text-lg sm:text-xl text-[#A0B4C8] leading-relaxed max-w-2xl mx-auto mb-10">
          CreaLeads met en place votre système Lead Ads Meta clé en main —
          formulaires instantanés, CRM, notifications WhatsApp. Vous recevez vos
          premiers leads en 24 à 72h.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            type="button"
            onClick={openFunnel}
            className="inline-flex items-center justify-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-base px-8 py-4 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#00C896]/25"
          >
            Prendre rendez-vous gratuitement
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-[#00C896] hover:text-[#00C896] transition-all duration-200"
          >
            Voir comment ça marche
          </a>
        </div>

        <div className="hero-proof inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
          <span className="text-2xl">⚡</span>
          <p className="text-sm text-[#A0B4C8] text-left">
            <span className="text-white font-semibold">Premiers leads en 24 à 72h après lancement</span>
            {" "}— garanti par contrat
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── PROBLÈME / SOLUTION ─────────────────────────────────────────────────────

function ProblemeSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".ps-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".ps-title", start: "top 85%" },
      });
      gsap.fromTo(".prob-col", { opacity: 0, x: -60 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".prob-col", start: "top 85%" },
      });
      gsap.fromTo(".sol-col", { opacity: 0, x: 60 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".sol-col", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const problems = [
    "Pas le temps de prospecter entre deux chantiers",
    "Les sites web seuls n'apportent pas de trafic avant 6 à 12 mois",
    "Les leads achetés à des plateformes sont partagés entre 5 concurrents",
  ];
  const solutions = [
    "Système automatisé : les leads arrivent pendant que vous travaillez",
    "Premiers résultats en 24 à 72h grâce aux Lead Ads Meta",
    "Exclusivité zone + métier — un seul artisan par secteur",
  ];

  return (
    <section ref={sectionRef} className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="ps-title text-3xl sm:text-4xl font-black text-center text-white mb-16">
          Pourquoi les artisans peinent à{" "}
          <span className="text-[#00C896]">trouver des clients en ligne</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="prob-col bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 font-black text-lg">✗</div>
              <h3 className="text-lg font-bold text-white">Le problème actuel</h3>
            </div>
            <ul className="space-y-5">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-3 text-[#A0B4C8]">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold">✗</span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sol-col bg-[#00C896]/5 border border-[#00C896]/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#00C896]/15 flex items-center justify-center text-[#00C896] font-black text-lg">✓</div>
              <h3 className="text-lg font-bold text-white">La solution CreaLeads</h3>
            </div>
            <ul className="space-y-5">
              {solutions.map((s, i) => (
                <li key={i} className="flex gap-3 text-[#A0B4C8]">
                  <span className="text-[#00C896] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PREUVE SOCIALE ───────────────────────────────────────────────────────────

function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2.4,
          ease: "power4.out",
          onUpdate: () => setValue(Math.floor(obj.val)),
          onComplete: () => setValue(end), // snap exact au chiffre final
        });
      },
    });
    return () => st.kill();
  }, [end]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
}

function PreuveSociale() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".preuve-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".preuve-title", start: "top 85%" },
      });
      gsap.fromTo(".metric-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".metric-card", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: 50, suffix: " leads", label: "qualifiés en 5 jours" },
    { value: 8, suffix: " devis", label: "envoyés la 1ère semaine" },
    { value: 3, suffix: " chantiers", label: "signés la 1ère semaine" },
    { value: 60, suffix: "%", label: "taux de closing" },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-[#0F2547]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="preuve-title inline-flex items-center gap-2 bg-[#00C896]/10 border border-[#00C896]/30 text-[#00C896] text-xs font-semibold px-4 py-2 rounded-full mb-6">
          Résultat réel — cas client
        </div>
        <h2 className="preuve-title text-3xl sm:text-4xl font-black text-white mb-3">
          SurfaceBéton, Île-de-France
        </h2>
        <p className="preuve-title text-[#A0B4C8] mb-14 text-base">
          Applicateur résine — campagne Meta lancée sur une zone ciblée
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="metric-card bg-[#0B1E3D] border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-[#00C896]/30 transition-colors duration-300 overflow-hidden min-w-0">
              <div className="font-black text-[#00C896] mb-2 whitespace-nowrap text-2xl lg:text-4xl">
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <div className="text-xs lg:text-sm text-[#A0B4C8] font-semibold uppercase tracking-wide leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Kickoff call",
    subtitle: "On apprend à vous connaître",
    desc: "Activité, zone, budget Meta, photos de chantiers. Le brief qui crée des campagnes vraiment adaptées.",
  },
  {
    num: "02",
    title: "Signature + acompte",
    subtitle: "C'est parti",
    desc: "Contrat signé électroniquement. 50% du setup versé. Production démarrée sous 24h.",
  },
  {
    num: "03",
    title: "Livraison 7 à 14 jours",
    subtitle: "Votre système est prêt",
    desc: "Formulaire, campagnes, CRM et notifications configurés. Vous validez avant le lancement.",
  },
  {
    num: "04",
    title: "Lancement",
    subtitle: "Vos leads arrivent",
    desc: "Campagnes live. Premiers leads généralement sous 24-72h. Notification WhatsApp à chaque nouveau prospect.",
  },
  {
    num: "05",
    title: "Suivi mensuel",
    subtitle: "Growth & Full",
    desc: "Rapport complet, ajustements campagnes, surveillance du CPL chaque mois.",
  },
];

function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Titre process
      gsap.fromTo(".process-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".process-title", start: "top 85%" },
      });

      // Timeline scrub : ligne se trace d'abord, puis chaque step apparaît
      const line = lineRef.current;
      if (line) {
        const length = 1000; // correspond au viewBox 0 0 1000 24
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 72%",
            end: "bottom 55%",
            scrub: 1.5,
          },
        });

        // Phase 1 : la ligne se trace (60 % de la durée)
        tl.to(line, { strokeDashoffset: 0, ease: "none", duration: 0.6 })
        // Phase 2 : les steps apparaissent en stagger (40 % restants)
          .fromTo(".step-card",
            { opacity: 0, y: 44, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.12, ease: "power3.out", duration: 0.4 },
            "-=0.05"
          );
      } else {
        // Fallback mobile (pas de line ref) : stagger simple
        gsap.fromTo(".step-card", { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".step-card", start: "top 85%" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="process-title text-3xl sm:text-4xl font-black text-center text-white mb-4">
          Comment ça <span className="text-[#00C896]">marche</span>
        </h2>
        <p className="process-title text-center text-[#A0B4C8] mb-16 text-base">
          5 étapes simples pour démarrer votre flux de leads
        </p>

        {/* Desktop */}
        <div className="process-timeline hidden lg:block relative">
          <div className="absolute top-8 left-16 right-16 flex items-center">
            <svg className="w-full h-6" preserveAspectRatio="none" viewBox="0 0 1000 24">
              <line
                ref={lineRef}
                x1="0" y1="12" x2="1000" y2="12"
                stroke="#00C896"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="step-card flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#00C896] text-[#0B1E3D] font-black text-lg flex items-center justify-center mb-4 shadow-lg shadow-[#00C896]/30 flex-shrink-0">
                  {s.num}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                <p className="text-xs text-[#00C896] font-semibold mb-2">{s.subtitle}</p>
                <p className="text-xs text-[#A0B4C8] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative pl-10">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#00C896]/20" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="step-card relative">
                <div className="absolute -left-10 top-4 w-8 h-8 rounded-full bg-[#00C896] text-[#0B1E3D] font-black text-xs flex items-center justify-center shadow-lg shadow-[#00C896]/30">
                  {i + 1}
                </div>
                <div className="bg-[#0F2547] border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-[#00C896] text-xs font-semibold mb-2">{s.subtitle}</p>
                  <p className="text-[#A0B4C8] text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── OFFRES / TARIFS ──────────────────────────────────────────────────────────

function Offres() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Titre : simple fadeUp avant le pin
      gsap.fromTo(".offres-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".offres-title", start: "top 85%" },
      });

      // Cards : section pineé, cards arrivent en stagger au scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=560",
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
        },
      });

      tl.fromTo(".offer-card",
        { opacity: 0, y: 90, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.28, ease: "power3.out", duration: 0.55 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const essentials = [
    "1 campagne Lead Ads Meta",
    "Formulaire instantané configuré",
    "Ciblage zone + métier précis",
    "Notification WhatsApp à chaque lead",
    "CRM Google Sheets template",
    "Page de crédibilité",
    "Vos photos formatées (3 formats)",
    "Support WhatsApp 1 mois",
    "Kickoff call 20 min",
  ];
  const growth = [
    "Tout le pack Essentiel",
    "CRM Google Sheets 100% automatisé",
    "Make.com : lead → CRM en 30 sec",
    "2 campagnes (prospection + retargeting)",
    "2-3 visuels créés par nous",
    "Optimisation mensuelle des campagnes",
    "Rapport mensuel complet",
    "Support WhatsApp 24h continu",
    "Kickoff call 30 min",
  ];
  const full = [
    "Tout le pack Growth",
    "3 campagnes + audience lookalike",
    "5 visuels pro tous formats",
    "CRM avancé + alertes couleurs auto",
    "Rapport premium mensuel",
    "Appel de suivi mensuel inclus",
    "Support WhatsApp prioritaire 4h",
    "Kickoff call 45 min",
  ];

  return (
    <section id="offres" ref={sectionRef} className="py-24 px-5 bg-[#0F2547]">
      <div className="max-w-6xl mx-auto">
        <h2 className="offres-title text-3xl sm:text-4xl font-black text-center text-white mb-3">
          Choisissez votre <span className="text-[#00C896]">pack</span>
        </h2>
        <p className="offres-title text-center text-[#A0B4C8] mb-16 text-base">
          Trois niveaux selon votre budget et vos objectifs.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Essentiel */}
          <div className="offer-card bg-[#0B1E3D] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/25 transition-all duration-300">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#A0B4C8] uppercase tracking-widest mb-2">Essentiel</div>
              <div className="text-4xl font-black text-white mb-1">990<span className="text-xl text-[#A0B4C8]"> €</span></div>
              <div className="text-xs text-[#A0B4C8]">one-shot · sans abonnement</div>
            </div>
            <p className="text-sm text-[#A0B4C8] mb-6 italic">&ldquo;On lance la machine. Vous volez seul.&rdquo;</p>
            <ul className="space-y-3 mb-8 flex-1">
              {essentials.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-[#A0B4C8]">
                  <span className="text-[#00C896] flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#A0B4C8]/60 italic mb-5">
              Pour : artisan sceptique ou budget serré — test à faible risque
            </p>
            <button
              type="button"
              onClick={openFunnel}
              className="block w-full text-center border border-[#00C896] text-[#00C896] font-bold text-sm py-3.5 rounded-full hover:bg-[#00C896] hover:text-[#0B1E3D] transition-all duration-200"
            >
              Démarrer avec l&apos;Essentiel
            </button>
          </div>

          {/* Growth */}
          <div className="offer-card relative bg-[#0B1E3D] border-2 border-[#00C896] rounded-2xl p-8 flex flex-col shadow-2xl shadow-[#00C896]/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C896] text-[#0B1E3D] text-xs font-black px-5 py-1.5 rounded-full whitespace-nowrap">
              Recommandé
            </div>
            <div className="mb-6">
              <div className="text-xs font-bold text-[#00C896] uppercase tracking-widest mb-2">Growth</div>
              <div className="text-4xl font-black text-white mb-1">1 500<span className="text-xl text-[#A0B4C8]"> €</span></div>
              <div className="text-xs text-[#A0B4C8]">setup + 300 €/mois</div>
            </div>
            <p className="text-sm text-[#A0B4C8] mb-6 italic">&ldquo;On lance ET on optimise chaque mois.&rdquo;</p>
            <ul className="space-y-3 mb-8 flex-1">
              {growth.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-[#A0B4C8]">
                  <span className="text-[#00C896] flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#A0B4C8]/60 italic mb-5">
              Pour : artisan motivé qui veut un système clé en main
            </p>
            <button
              type="button"
              onClick={openFunnel}
              className="block w-full text-center bg-[#00C896] text-[#0B1E3D] font-black text-sm py-3.5 rounded-full hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#00C896]/30"
            >
              Démarrer avec le Growth
            </button>
          </div>

          {/* Full */}
          <div className="offer-card bg-[#0B1E3D] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/25 transition-all duration-300">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#A0B4C8] uppercase tracking-widest mb-2">Full</div>
              <div className="text-4xl font-black text-white mb-1">2 200<span className="text-xl text-[#A0B4C8]"> €</span></div>
              <div className="text-xs text-[#A0B4C8]">setup + 650 €/mois</div>
            </div>
            <p className="text-sm text-[#A0B4C8] mb-6 italic">&ldquo;Pour les artisans avec équipe ou fort volume.&rdquo;</p>
            <ul className="space-y-3 mb-8 flex-1">
              {full.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-[#A0B4C8]">
                  <span className="text-[#00C896] flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#A0B4C8]/60 italic mb-5">
              Pour : artisan avec équipe ou fort volume de chantiers
            </p>
            <button
              type="button"
              onClick={openFunnel}
              className="block w-full text-center border border-[#00C896] text-[#00C896] font-bold text-sm py-3.5 rounded-full hover:bg-[#00C896] hover:text-[#0B1E3D] transition-all duration-200"
            >
              Démarrer avec le Full
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[#A0B4C8]/60 mt-10 leading-relaxed">
          Engagement 3 mois minimum pour les packs mensuels · Résiliation préavis 30 jours
          <br />
          Paiement en 2 fois : 50% à la signature, 50% à la livraison
        </p>
      </div>
    </section>
  );
}

// ─── ENGAGEMENTS ─────────────────────────────────────────────────────────────

function Engagements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".engage-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".engage-title", start: "top 85%" },
      });
      gsap.fromTo(".engage-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".engage-card", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const items = [
    { icon: "🗓", title: "Livraison garantie 7 à 14 jours", desc: "Écrit dans le contrat. Pas de vague promesse." },
    { icon: "🔑", title: "Vous êtes propriétaire", desc: "Tous les accès, fichiers et contenus vous appartiennent." },
    { icon: "📊", title: "Transparence totale", desc: "Rapport avec tous vos chiffres, aucune zone d'ombre." },
    { icon: "📍", title: "Exclusivité zone", desc: "Un seul artisan par métier et par zone géographique." },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <h2 className="engage-title text-3xl sm:text-4xl font-black text-center text-white mb-16">
          Nos <span className="text-[#00C896]">engagements</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div key={i} className="engage-card bg-[#0F2547] border border-white/10 rounded-2xl p-6 text-center hover:border-[#00C896]/30 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
              <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
              <p className="text-[#A0B4C8] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATIONS META ──────────────────────────────────────────────────────

function MetaLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Meta">
      {/* Infinity / Meta wordmark stylisé */}
      <path
        d="M6 18c0-3.2 1.6-6 4-7.8C12 8.5 14.5 8 16.5 9c1.2.6 2.2 1.7 3.5 3.5 1.3-1.8 2.3-2.9 3.5-3.5 2-1 4.5-.5 6.5 1.2 2.4 1.8 4 4.6 4 7.8s-1.6 5.6-3.8 7c-1.8 1.1-3.8 1-5.4-.2-1-.7-2-1.9-3.3-3.8-1.3 1.9-2.3 3.1-3.3 3.8-1.6 1.2-3.6 1.3-5.4.2C7.6 23.6 6 21.2 6 18z"
        fill="#0082FB"
      />
      <path
        d="M18 12.5c1 1.4 1.8 2.7 2.6 4a28 28 0 0 0 2.3 3.2c1 1.1 2 1.6 3.1.9 1.4-.9 2-2.7 2-4.6 0-2.4-1.1-4.4-2.8-5.7-1.4-1-2.8-1.1-4 0-.7.6-1.6 1.5-3.2 2.2z"
        fill="#0866FF"
      />
      <path
        d="M18 12.5c-1 1.4-1.8 2.7-2.6 4a28 28 0 0 1-2.3 3.2c-1 1.1-2 1.6-3.1.9C8.6 19.7 8 17.9 8 16c0-2.4 1.1-4.4 2.8-5.7 1.4-1 2.8-1.1 4 0 .7.6 1.6 1.5 3.2 2.2z"
        fill="#0082FB"
      />
    </svg>
  );
}

const certCards = [
  {
    title: "AI and Performance Marketing Specialist",
    desc: "Maîtrise des campagnes Meta optimisées par l'IA pour maximiser le ROI et la qualité des leads.",
  },
  {
    title: "Media Buying Professional",
    desc: "Expert en achat média Facebook & Instagram — ciblage avancé, stratégie d'enchères et optimisation CPL.",
  },
];

function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".cert-title", start: "top 85%" },
      });
      gsap.fromTo(".cert-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".cert-card", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-14">
          <div className="cert-title inline-flex items-center gap-2 bg-[#0082FB]/10 border border-[#0082FB]/25 text-[#0082FB] text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <MetaLogo />
            <span>Certifié Meta Blueprint</span>
          </div>
          <h2 className="cert-title text-3xl sm:text-4xl font-black text-white mb-4">
            Certifié Meta <span className="text-[#00C896]">Blueprint</span>
          </h2>
          <p className="cert-title text-[#A0B4C8] text-base max-w-xl mx-auto leading-relaxed">
            Vos campagnes sont gérées par un expert certifié officiellement par Meta
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {certCards.map((c, i) => (
            <div
              key={i}
              className="cert-card bg-[#0F2547] border border-[#0082FB]/20 rounded-2xl p-7 hover:border-[#0082FB]/50 transition-all duration-300 group"
            >
              {/* Badge META CERTIFIED */}
              <div className="inline-flex items-center gap-2 bg-[#0082FB]/10 border border-[#0082FB]/20 text-[#0082FB] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                <MetaLogo />
                Meta Certified
              </div>

              <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#00C896] transition-colors duration-200">
                {c.title}
              </h3>
              <p className="text-sm text-[#A0B4C8] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Note bas */}
        <p className="cert-title text-center text-xs text-[#A0B4C8]/60 leading-relaxed">
          Certification officielle Meta Blueprint — garantit la maîtrise des Lead Ads,
          du ciblage et de l&apos;optimisation des campagnes Facebook &amp; Instagram
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqData = [
  {
    q: "Comment sont qualifiés les leads ?",
    a: "Via un formulaire instantané Meta pré-rempli depuis le compte Facebook du prospect. Il renseigne son besoin, sa zone et ses coordonnées en 2 clics — sans quitter l'application.",
  },
  {
    q: "Les leads sont-ils exclusifs ?",
    a: "Oui. CreaLeads travaille avec un seul artisan par métier et par zone géographique. Vos leads ne sont jamais partagés avec un concurrent.",
  },
  {
    q: "Sous combien de temps je reçois mes premiers leads ?",
    a: "En général dans les 24 à 72h après le lancement des campagnes. La livraison complète du système prend 7 à 14 jours après la signature.",
  },
  {
    q: "Puis-je changer d'offre en cours de route ?",
    a: "Oui, vous pouvez passer au pack supérieur à tout moment. Un simple échange WhatsApp suffit pour adapter votre setup.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Les packs Growth et Full ont un engagement minimum de 3 mois, puis résiliation avec préavis de 30 jours. Le pack Essentiel est un one-shot sans abonnement.",
  },
];

function FAQItem({ item }: { item: (typeof faqData)[0] }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const content = contentRef.current;
    const inner = innerRef.current;
    if (!content || !inner) return;
    if (!open) {
      gsap.fromTo(content, { height: 0 }, { height: inner.offsetHeight, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(content, { height: 0, duration: 0.3, ease: "power2.in" });
    }
    setOpen(!open);
  };

  return (
    <div className="faq-item border-b border-white/10 last:border-0">
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left" onClick={toggle}>
        <span className="font-semibold text-white text-sm sm:text-base">{item.q}</span>
        <span className={`text-[#00C896] text-2xl flex-shrink-0 transition-transform duration-300 leading-none ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div ref={contentRef} style={{ height: 0, overflow: "hidden" }}>
        <div ref={innerRef} className="pb-5">
          <p className="text-[#A0B4C8] text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".faq-title", start: "top 85%" },
      });
      gsap.fromTo(".faq-item", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".faq-item", start: "top 90%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 px-5 bg-[#0F2547]">
      <div className="max-w-3xl mx-auto">
        <h2 className="faq-title text-3xl sm:text-4xl font-black text-center text-white mb-16">
          Questions <span className="text-[#00C896]">fréquentes</span>
        </h2>
        <div className="bg-[#0B1E3D] rounded-2xl border border-white/10 px-6 sm:px-8">
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────────────────────

function CTAFinal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-item", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-[#00C896]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="cta-item text-3xl sm:text-5xl font-black text-[#0B1E3D] mb-5 leading-tight">
          Prêt à remplir votre agenda de chantiers ?
        </h2>
        <p className="cta-item text-[#0B1E3D]/70 text-lg mb-10 font-semibold">
          Appel découverte gratuit de 20 min — on voit ensemble si CreaLeads
          correspond à votre activité.
        </p>
        <button
          type="button"
          onClick={openFunnel}
          className="cta-item inline-flex items-center gap-2 bg-[#0B1E3D] text-white font-black text-base px-10 py-5 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-xl"
        >
          Réserver mon appel gratuit
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="cta-item mt-5 text-[#0B1E3D]/60 text-sm font-medium">
          Pas de pression, pas d&apos;engagement — juste 20 minutes.
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0B1E3D] border-t border-white/10 py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div>
            <div className="text-2xl font-black mb-2 text-white">
              Crea<span className="text-[#00C896]">Leads</span>
            </div>
            <p className="text-[#A0B4C8] text-sm font-semibold tracking-wide">
              Générez · Convertissez · Développez
            </p>
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-[#A0B4C8] text-sm">
              <a href="tel:0663675254" className="hover:text-white transition-colors">06 63 67 52 54</a>
            </p>
            <p className="text-[#A0B4C8] text-sm">
              <a href="mailto:contact.crealeads@gmail.com" className="hover:text-white transition-colors">
                contact.crealeads@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A0B4C8]/60 text-xs">© 2025 CreaLeads — Tous droits réservés</p>
          <div className="flex gap-5 text-xs text-[#A0B4C8]/60">
            <a href="#" className="hover:text-[#A0B4C8] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#A0B4C8] transition-colors">CGU</a>
            <a href="#" className="hover:text-[#A0B4C8] transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── FUNNEL MODAL ─────────────────────────────────────────────────────────────

const FUNNEL_QUESTIONS: {
  question: string;
  key: string;
  cols2: boolean;
  options: { emoji: string; label: string }[];
}[] = [
  {
    question: "Dans quel secteur exerces-tu ?",
    key: "secteur",
    cols2: true,
    options: [
      { emoji: "🏗️", label: "Résine / Sol industriel" },
      { emoji: "🎨", label: "Peinture / Ravalement" },
      { emoji: "🔧", label: "Plomberie / Chauffage" },
      { emoji: "⚡", label: "Électricité" },
      { emoji: "🌿", label: "Paysagisme / Jardinage" },
      { emoji: "🪚", label: "Menuiserie / Charpente" },
      { emoji: "🏠", label: "Rénovation générale" },
      { emoji: "➕", label: "Autre" },
    ],
  },
  {
    question: "Combien de personnes dans ton entreprise ?",
    key: "employes",
    cols2: false,
    options: [
      { emoji: "👤", label: "Seul(e)" },
      { emoji: "👥", label: "2 à 5 personnes" },
      { emoji: "👥", label: "6 à 15 personnes" },
      { emoji: "🏢", label: "Plus de 15 personnes" },
    ],
  },
  {
    question: "Quel budget envisages-tu pour tes pubs Meta ?",
    key: "budget_pub",
    cols2: false,
    options: [
      { emoji: "💰", label: "Moins de 300 €/mois" },
      { emoji: "💰", label: "Entre 300 et 600 €/mois" },
      { emoji: "💰", label: "Entre 600 et 1 500 €/mois" },
      { emoji: "💰", label: "Plus de 1 500 €/mois" },
    ],
  },
  {
    question: "Quel est ton frein n°1 pour développer ton activité ?",
    key: "probleme",
    cols2: false,
    options: [
      { emoji: "❌", label: "Pas assez de nouveaux clients" },
      { emoji: "🌐", label: "Pas de présence en ligne efficace" },
      { emoji: "⏰", label: "Je n'ai pas le temps de gérer le marketing" },
      { emoji: "❓", label: "Je ne sais pas par où commencer" },
      { emoji: "📉", label: "Mes leads ne convertissent pas en chantiers" },
    ],
  },
];

type Answers = { secteur: string; employes: string; budget_pub: string; probleme: string };
type ContactInfo = { prenom: string; nom: string; email: string; telephone: string };

function FunnelModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({ secteur: "", employes: "", budget_pub: "", probleme: "" });
  const [contact, setContact] = useState<ContactInfo>({ prenom: "", nom: "", email: "", telephone: "" });
  const [errors, setErrors] = useState<Partial<ContactInfo>>({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const stepContentRef = useRef<HTMLDivElement>(null);

  // Écoute l'événement open-funnel
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setStep(1);
      setAnswers({ secteur: "", employes: "", budget_pub: "", probleme: "" });
      setContact({ prenom: "", nom: "", email: "", telephone: "" });
      setErrors({});
      setSendError("");
    };
    document.addEventListener("open-funnel", handler);
    return () => document.removeEventListener("open-funnel", handler);
  }, []);

  // Animate in
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(panelRef.current, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const animateStep = (next: number) => {
    const el = stepContentRef.current;
    if (!el) { setStep(next); return; }
    gsap.to(el, {
      x: -56, opacity: 0, duration: 0.22, ease: "power2.in",
      onComplete: () => {
        setStep(next);
        gsap.fromTo(el, { x: 56, opacity: 0 }, { x: 0, opacity: 1, duration: 0.28, ease: "power3.out" });
      },
    });
  };

  const closeModal = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25 });
    gsap.to(panelRef.current, { opacity: 0, y: 32, duration: 0.25, onComplete: () => setOpen(false) });
  };

  const selectOption = (key: keyof Answers, value: string) =>
    setAnswers(prev => ({ ...prev, [key]: value }));

  const validateContact = (): boolean => {
    const errs: Partial<ContactInfo> = {};
    if (!contact.prenom.trim()) errs.prenom = "Requis";
    if (!contact.nom.trim()) errs.nom = "Requis";
    if (!contact.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
      errs.email = "Email invalide";
    if (!contact.telephone.trim() || contact.telephone.replace(/\D/g, "").length < 8)
      errs.telephone = "Téléphone invalide";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitContact = async () => {
    if (!validateContact()) return;
    setLoading(true);
    setSendError("");
    try {
      const url = process.env.NEXT_PUBLIC_MAKE_WEBHOOK;
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...contact, ...answers, date: new Date().toISOString() }),
        });
      }
      animateStep(6);
    } catch {
      setSendError("Erreur lors de l'envoi. Contacte-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  const currentQ = step >= 1 && step <= 4 ? FUNNEL_QUESTIONS[step - 1] : null;
  const currentAnswer = currentQ ? answers[currentQ.key as keyof Answers] : "";
  const progressPct = Math.round((step / 6) * 100);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
      onClick={e => e.target === e.currentTarget && closeModal()}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-xl max-h-[92dvh] bg-[#0B1E3D] rounded-2xl flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Barre de progression */}
        <div className="h-1 bg-white/10 flex-shrink-0">
          <div className="h-full bg-[#00C896] transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 flex-shrink-0">
          <span className="text-xs font-semibold text-[#A0B4C8]">
            Étape <span className="text-white">{step}</span> <span className="text-white/30">/</span> 6
          </span>
          <button type="button" onClick={closeModal} className="text-[#A0B4C8] hover:text-white transition-colors p-1" aria-label="Fermer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu de l'étape */}
        <div className="flex-1 overflow-y-auto">
          <div ref={stepContentRef} className="px-5 py-7">

            {/* Étapes 1-4 : QCM */}
            {currentQ && (
              <>
                <h2 className="text-lg sm:text-xl font-black text-white mb-6 text-center leading-snug">
                  {currentQ.question}
                </h2>
                <div className={`grid gap-2.5 ${currentQ.cols2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {currentQ.options.map(opt => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => selectOption(currentQ.key as keyof Answers, opt.label)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-150 ${
                        currentAnswer === opt.label
                          ? "bg-[#00C896]/10 border-[#00C896] text-white"
                          : "bg-[#0F2547] border-white/10 text-[#A0B4C8] hover:border-[#00C896]/40 hover:text-white"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0 leading-none">{opt.emoji}</span>
                      <span className="text-sm font-semibold leading-tight">{opt.label}</span>
                      {currentAnswer === opt.label && (
                        <span className="ml-auto text-[#00C896] flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Étape 5 : Coordonnées */}
            {step === 5 && (
              <>
                <h2 className="text-lg sm:text-xl font-black text-white mb-1.5 text-center">Tes coordonnées</h2>
                <p className="text-[#A0B4C8] text-sm text-center mb-6">Pour recevoir ton plan personnalisé et réserver ton créneau</p>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {([
                    { key: "prenom", label: "Prénom", placeholder: "Jean", type: "text" },
                    { key: "nom", label: "Nom", placeholder: "Dupont", type: "text" },
                    { key: "email", label: "Email", placeholder: "jean@example.com", type: "email" },
                    { key: "telephone", label: "Téléphone", placeholder: "06 12 34 56 78", type: "tel" },
                  ] as const).map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-semibold text-[#A0B4C8] mb-1.5">
                        {f.label} <span className="text-[#00C896]">*</span>
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={contact[f.key]}
                        onChange={e => setContact(prev => ({ ...prev, [f.key]: e.target.value }))}
                        className={`w-full bg-[#0F2547] border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-[#00C896] transition-colors ${
                          errors[f.key] ? "border-red-500" : "border-white/15"
                        }`}
                      />
                      {errors[f.key] && <p className="text-red-400 text-xs mt-1">{errors[f.key]}</p>}
                    </div>
                  ))}
                </div>
                {sendError && <p className="mt-4 text-red-400 text-sm text-center">{sendError}</p>}
              </>
            )}

            {/* Étape 6 : Calendrier */}
            {step === 6 && (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00C896]/15 rounded-full mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white mb-1.5">
                  Plus qu&apos;une étape — choisis ton créneau
                </h2>
                <p className="text-[#A0B4C8] text-sm mb-5">Appel découverte 20 min — Google Meet</p>
                <iframe
                  src={CAL_URL}
                  style={{ width: "100%", height: 500, border: "none", borderRadius: 12 }}
                  title="Réserver un créneau"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer navigation */}
        {step < 6 && (
          <div className="flex-shrink-0 flex items-center justify-between gap-3 px-5 py-4 border-t border-white/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => animateStep(step - 1)}
                className="flex items-center gap-1.5 border border-white/20 text-[#A0B4C8] font-semibold text-sm px-4 py-2.5 rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Précédent
              </button>
            ) : <div />}

            {step <= 4 && (
              <button
                type="button"
                onClick={() => currentAnswer && animateStep(step + 1)}
                disabled={!currentAnswer}
                className={`flex items-center gap-1.5 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 ${
                  currentAnswer
                    ? "bg-[#00C896] text-[#0B1E3D] hover:brightness-110"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                Suivant
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            )}

            {step === 5 && (
              <button
                type="button"
                onClick={submitContact}
                disabled={loading}
                className="flex items-center gap-1.5 bg-[#00C896] text-[#0B1E3D] font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-200 disabled:opacity-60"
              >
                {loading && (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {loading ? "Envoi…" : "Choisir mon créneau →"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#0B1E3D]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <FunnelModal />
      <Navbar />
      <Hero />
      <ProblemeSolution />
      <PreuveSociale />
      <Process />
      <Offres />
      <Engagements />
      <Certifications />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
