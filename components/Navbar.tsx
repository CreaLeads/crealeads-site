"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/offres", label: "Offres" },
  { href: "/plateforme", label: "Plateforme" },
  { href: "/agents", label: "Agents" },
  { href: "/blog", label: "Blog" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#contact", label: "Contact" },
];

const DASHBOARD_URL = "https://dashboard.crealeads.fr";

function LoginIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-5">
      <nav className="max-w-5xl mx-auto">
        {/* Pill flottante détachée du haut */}
        <div
          className={`flex items-center justify-between gap-4 h-14 sm:h-16 pl-5 pr-3 sm:pl-6 sm:pr-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-bg/90 backdrop-blur-xl border-ink-10 shadow-xl shadow-ink/5"
              : "bg-bg/70 backdrop-blur-md border-ink-10/60 shadow-lg shadow-ink/[0.03]"
          }`}
        >
          <Link href="/" className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            Crea<span className="text-emerald">Leads</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium hover:text-emerald transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={DASHBOARD_URL}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-60 hover:text-emerald-dark transition-colors"
            >
              <LoginIcon />
              Se connecter
            </a>
            <Link
              href="/#contact"
              className="btn-primary px-5 py-2.5 text-sm font-semibold rounded-full"
            >
              <span>Réserver un appel</span>
            </Link>
          </div>

          {/* Actions mobile */}
          <div className="flex md:hidden items-center gap-1">
            <a
              href={DASHBOARD_URL}
              aria-label="Se connecter à mon espace"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink-10 text-ink-60 hover:text-emerald-dark hover:border-emerald transition-colors"
            >
              <LoginIcon className="w-[18px] h-[18px]" />
            </a>
            <button
              className="flex flex-col gap-1.5 p-2 -mr-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Menu mobile — carte détachée sous la pill */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-bg border border-ink-10 rounded-3xl shadow-xl shadow-ink/5 px-5 py-5 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-base font-medium py-2.5 hover:text-emerald transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block btn-primary px-5 py-3 text-sm font-semibold rounded-full text-center mt-3"
              onClick={() => setMobileOpen(false)}
            >
              <span>Réserver un appel</span>
            </Link>
            <a
              href={DASHBOARD_URL}
              className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-full text-center border border-ink-10 text-ink hover:border-emerald hover:text-emerald-dark transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <LoginIcon />
              Se connecter
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
