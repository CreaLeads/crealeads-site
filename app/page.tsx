"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAL_URL = "https://cal.eu/enzo-crealeads/20min";

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

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-200"
        >
          Prendre rendez-vous
        </a>

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
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-[#00C896] text-[#0B1E3D] font-bold text-sm px-5 py-3 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Prendre rendez-vous
          </a>
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
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: "power3.out", delay: 0.3 }
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
        <div className="hero-item inline-flex items-center gap-2 bg-[#00C896]/10 border border-[#00C896]/30 text-[#00C896] text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#00C896] rounded-full animate-pulse" />
          Agence d&apos;acquisition digitale pour artisans du bâtiment
        </div>

        <h1 className="hero-item text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
          Des clients qualifiés directement sur{" "}
          <span className="text-[#00C896]">votre téléphone.</span>
        </h1>

        <p className="hero-item text-lg sm:text-xl text-[#A0B4C8] leading-relaxed max-w-2xl mx-auto mb-10">
          CreaLeads met en place votre système Lead Ads Meta clé en main —
          formulaires instantanés, CRM, notifications WhatsApp. Vous recevez vos
          premiers leads en 24 à 72h.
        </p>

        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#00C896] text-[#0B1E3D] font-bold text-base px-8 py-4 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#00C896]/25"
          >
            Prendre rendez-vous gratuitement
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-[#00C896] hover:text-[#00C896] transition-all duration-200"
          >
            Voir comment ça marche
          </a>
        </div>

        <div className="hero-item inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
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
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setValue(Math.floor(obj.val)),
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
    { value: 50, suffix: " leads", label: "qualifiés en 5 jours", small: false },
    { value: 8, suffix: " devis", label: "envoyés la 1ère semaine", small: false },
    { value: 3, suffix: " chantiers", label: "signés la 1ère semaine", small: true },
    { value: 60, suffix: "%", label: "taux de closing", small: false },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div key={i} className="metric-card bg-[#0B1E3D] border border-white/10 rounded-2xl p-6 text-center hover:border-[#00C896]/30 transition-colors duration-300">
              <div className={`font-black text-[#00C896] mb-2 whitespace-nowrap ${m.small ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <div className="text-xs text-[#A0B4C8] font-semibold uppercase tracking-wide">{m.label}</div>
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
      gsap.fromTo(".process-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".process-title", start: "top 85%" },
      });

      const line = lineRef.current;
      if (line) {
        const length = (line as SVGLineElement & { getTotalLength(): number }).getTotalLength?.() ?? 1000;
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: ".process-timeline", start: "top 80%" },
        });
      }

      gsap.fromTo(".step-card", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".process-timeline", start: "top 75%" },
      });
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
                strokeDasharray="10 5"
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
      gsap.fromTo(".offres-title", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7,
        scrollTrigger: { trigger: ".offres-title", start: "top 85%" },
      });
      gsap.fromTo(".offer-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".offer-card", start: "top 85%" },
      });
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
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-[#00C896] text-[#00C896] font-bold text-sm py-3.5 rounded-full hover:bg-[#00C896] hover:text-[#0B1E3D] transition-all duration-200"
            >
              Démarrer avec l&apos;Essentiel
            </a>
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
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#00C896] text-[#0B1E3D] font-black text-sm py-3.5 rounded-full hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#00C896]/30"
            >
              Démarrer avec le Growth
            </a>
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
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-[#00C896] text-[#00C896] font-bold text-sm py-3.5 rounded-full hover:bg-[#00C896] hover:text-[#0B1E3D] transition-all duration-200"
            >
              Démarrer avec le Full
            </a>
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
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-item inline-flex items-center gap-2 bg-[#0B1E3D] text-white font-black text-base px-10 py-5 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-xl"
        >
          Réserver mon appel gratuit
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
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

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#0B1E3D]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
      <Navbar />
      <Hero />
      <ProblemeSolution />
      <PreuveSociale />
      <Process />
      <Offres />
      <Engagements />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
