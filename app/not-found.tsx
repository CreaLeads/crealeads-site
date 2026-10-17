import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <section className="pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-xl mx-auto px-5 text-center">
          <div className="tnum font-display text-6xl font-extrabold text-brand-300 mb-4">404</div>
          <h1 className="font-display text-display-md mb-4">Cette page n&apos;existe pas (ou plus).</h1>
          <p className="text-muted mb-8 leading-relaxed">
            Le lien est peut-être ancien. Voici par où reprendre :
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/" className="btn-primary px-7 py-3.5 text-sm font-semibold rounded-full">
              <span>Retour à l&apos;accueil</span>
            </Link>
            <Link href="/metiers" className="px-7 py-3.5 text-sm font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors">
              Voir les métiers accompagnés
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
