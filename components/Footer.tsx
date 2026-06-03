"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-bold tracking-tight mb-4">
              Crea<span className="text-emerald">Leads</span>
            </div>
            <p className="text-sm text-ink-60 max-w-md leading-relaxed mb-6">
              Système d'acquisition clients clé en main pour les artisans du bâtiment. Pensé par un fils d'artisan, pour les artisans.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/enzo-wagner" target="_blank" className="text-ink-60 hover:text-emerald transition-colors">
                LinkedIn
              </a>
              <span className="text-ink-20">·</span>
              <a href="https://www.instagram.com/crealeads" target="_blank" className="text-ink-60 hover:text-emerald transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-60">
              <li><Link href="/offres" className="hover:text-emerald">Offres</Link></li>
              <li><Link href="/tarifs" className="hover:text-emerald">Tarifs</Link></li>
              <li><Link href="#methode" className="hover:text-emerald">Méthode</Link></li>
              <li><Link href="#temoignages" className="hover:text-emerald">Témoignages</Link></li>
              <li><Link href="#faq" className="hover:text-emerald">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-60">
              <li><a href="tel:+33663675254" className="hover:text-emerald">06 63 67 52 54</a></li>
              <li><a href="mailto:contact.crealeads@gmail.com" className="hover:text-emerald">contact.crealeads@gmail.com</a></li>
              <li><a href="https://cal.eu/enzo-crealeads/20min" className="hover:text-emerald">Prendre RDV</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="text-xs text-ink-60">
            © 2026 CreaLeads. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-xs text-ink-60">
            <Link href="/mentions-legales" className="hover:text-emerald">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-emerald">CGV</Link>
            <Link href="/privacy" className="hover:text-emerald">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
