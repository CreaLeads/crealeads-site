import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Platform from "@/components/Platform";
import ProductPreview from "@/components/ProductPreview";
import OffersOverview from "@/components/OffersOverview";
import CTAFinal from "@/components/CTAFinal";

const DASHBOARD_URL = "https://dashboard.crealeads.fr";
const CAL = "https://cal.eu/enzo-crealeads/20min";

export const metadata: Metadata = {
  title: "La plateforme — Tout votre business dans un tableau de bord",
  description:
    "La plateforme CreaLeads centralise toute votre acquisition : campagnes Meta, demandes qualifiées, rendez-vous, relances, devis et bilan hebdo. Un seul écran, un seul abonnement à 497 €/mois. Découvrez le tableau de bord et les tarifs.",
  keywords: [
    "plateforme acquisition artisan",
    "logiciel acquisition clients bâtiment",
    "tableau de bord artisan",
    "CRM artisan bâtiment",
    "tarifs CreaLeads",
  ],
  alternates: { canonical: "/plateforme" },
  openGraph: {
    title: "La plateforme CreaLeads — 497 €/mois",
    description:
      "Campagnes, demandes, rendez-vous, relances, devis, bilan : toute votre acquisition dans un seul tableau de bord.",
    url: "https://crealeads.fr/plateforme",
  },
};

export default function PlateformePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero produit */}
      <section className="pt-28 pb-8 sm:pt-36 sm:pb-12 lg:pt-40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
            La plateforme
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Toute votre acquisition, <span className="text-emerald-dark">dans un seul écran.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Campagnes publicitaires, demandes qualifiées, rendez-vous, relances, devis et bilan hebdomadaire : CreaLeads réunit tout votre business d&apos;acquisition dans un tableau de bord conçu pour les artisans du bâtiment. Un seul abonnement, sans frais de mise en place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base font-semibold rounded-full">
              <span>Réserver un appel</span>
            </a>
            <a
              href={DASHBOARD_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" /></svg>
              Se connecter
            </a>
          </div>
        </div>
      </section>

      {/* Ce que la plateforme fait */}
      <Platform />

      {/* Le tableau de bord interactif */}
      <ProductPreview />

      {/* Tarifs / offre */}
      <OffersOverview />

      {/* Détail de l'offre */}
      <section className="pb-16 sm:pb-20 -mt-4 text-center">
        <Link href="/offres" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald-dark transition-colors">
          Voir le détail de l&apos;offre, agent par agent
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </section>

      <CTAFinal />
      <Footer />
    </main>
  );
}
