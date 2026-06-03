"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-ink-10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight">
          Crea<span className="text-emerald">Leads</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/offres" className="text-sm font-medium hover:text-emerald transition-colors">
            Offres
          </Link>
          <Link href="/tarifs" className="text-sm font-medium hover:text-emerald transition-colors">
            Tarifs
          </Link>
          <Link href="#methode" className="text-sm font-medium hover:text-emerald transition-colors">
            Méthode
          </Link>
          <Link href="#temoignages" className="text-sm font-medium hover:text-emerald transition-colors">
            Témoignages
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-emerald transition-colors">
            FAQ
          </Link>
        </div>

        <Link
          href="https://cal.eu/enzo-crealeads/20min"
          className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm font-semibold rounded-full"
        >
          <span>Réserver un appel</span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg border-t border-ink-10 px-6 py-6 space-y-4">
          <Link href="/offres" className="block text-base font-medium" onClick={() => setMobileOpen(false)}>Offres</Link>
          <Link href="/tarifs" className="block text-base font-medium" onClick={() => setMobileOpen(false)}>Tarifs</Link>
          <Link href="#methode" className="block text-base font-medium" onClick={() => setMobileOpen(false)}>Méthode</Link>
          <Link href="#temoignages" className="block text-base font-medium" onClick={() => setMobileOpen(false)}>Témoignages</Link>
          <Link href="#faq" className="block text-base font-medium" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link
            href="https://cal.eu/enzo-crealeads/20min"
            className="block btn-primary px-5 py-3 text-sm font-semibold rounded-full text-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <span>Réserver un appel</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
