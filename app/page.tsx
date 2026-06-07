import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import ForYouIf from "@/components/ForYouIf";
import Clients from "@/components/Clients";
import Method from "@/components/Method";
import OffersOverview from "@/components/OffersOverview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Loader />
      <Navbar />
      <Hero />
      <Stats />
      <CaseStudy />
      <ForYouIf />
      <Clients />
      <Method />
      <OffersOverview />
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}
