import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFinal from "@/components/CTAFinal";
import type { Landing } from "@/lib/landing";

// Page index d'une famille de pages d'atterrissage (métiers ou zones)
export default function HubPage({
  kicker,
  h1,
  intro,
  basePath,
  items,
}: {
  kicker: string;
  h1: string;
  intro: string;
  basePath: string;
  items: Landing[];
}) {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <section className="pt-28 pb-8 sm:pt-36 sm:pb-10 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">{kicker}</div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6 max-w-3xl">{h1}</h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>
      <section className="pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`${basePath}/${it.slug}`}
              className="card-hover flex flex-col rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-5 sm:p-6"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wide text-faint mb-2">{it.kicker}</div>
              <h2 className="font-sans font-semibold tracking-tight text-lg leading-snug mb-2">{it.name}</h2>
              <p className="text-sm text-muted leading-relaxed flex-grow line-clamp-3">{it.description}</p>
              <span className="mt-4 text-sm font-medium text-emerald-dark">Voir la page →</span>
            </Link>
          ))}
        </div>
      </section>
      <CTAFinal />
      <Footer />
    </main>
  );
}
