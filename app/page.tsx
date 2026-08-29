import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Platform from "@/components/Platform";
import ProductPreview from "@/components/ProductPreview";
import AdToChantier from "@/components/AdToChantier";
import Method from "@/components/Method";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import ForYouIf from "@/components/ForYouIf";
import OffersOverview from "@/components/OffersOverview";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Loader />
      <Navbar />
      <Hero />
      <Clients />
      <Platform />
      <ProductPreview />
      <AdToChantier />
      <Method />
      <Stats />
      <CaseStudy />
      <Testimonials />
      <ForYouIf />
      <OffersOverview />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}
