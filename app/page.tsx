import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import AdToChantier from "@/components/AdToChantier";
import Platform from "@/components/Platform";
import ProductPreview from "@/components/ProductPreview";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import MetiersGrid from "@/components/MetiersGrid";
import OffersOverview from "@/components/OffersOverview";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "CreaLeads — Trouver des clients et des chantiers quand on est artisan du bâtiment",
  description:
    "CreaLeads trouve des clients aux artisans du bâtiment : publicité Facebook et Instagram ciblée sur votre zone, 50 à 100 demandes de devis qualifiées par mois et suivi jusqu'au chantier signé. 497 €/mois, sans engagement.",
  path: "/",
  ogTitle: "CreaLeads — Des chantiers en plus chaque mois, pour les artisans du bâtiment",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      {/* 1. Promesse + preuve */}
      <Hero />
      <Clients />
      {/* 2. Le problème que l'on résout */}
      <AdToChantier />
      {/* 3. Le produit */}
      <Platform />
      <ProductPreview />
      {/* 4. Les résultats */}
      <CaseStudy />
      <Testimonials />
      {/* 5. Pour qui, combien, qui */}
      <MetiersGrid />
      <OffersOverview />
      <Founder />
      {/* 6. Lever les doutes, passer à l'action */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
