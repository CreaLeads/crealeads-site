import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Acquisition de clients pour artisans",
  description:
    "Conseils pour trouver des clients et générer des leads qualifiés quand on est artisan du bâtiment : publicité Meta, acquisition, prospects, Île-de-France, Yvelines, Paris.",
  keywords: [
    "trouver des clients artisan",
    "leads qualifiés artisan",
    "acquisition clients bâtiment",
    "prospects artisan Île-de-France",
    "publicité Meta artisan",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog CreaLeads — Acquisition de clients pour artisans",
    description:
      "Trouver des clients, générer des leads qualifiés, réussir sa publicité Meta : le blog pour les artisans du bâtiment.",
    url: "https://crealeads.fr/blog",
  },
};

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
function frDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function BlogIndex() {
  const articles = allArticles();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog CreaLeads",
    description: "Acquisition de clients et génération de leads pour les artisans du bâtiment.",
    url: "https://crealeads.fr/blog",
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      url: `https://crealeads.fr/blog/${a.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <section className="pt-28 pb-8 sm:pt-36 sm:pb-10 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
            Le blog
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6 max-w-3xl">
            Trouver des clients quand on est artisan.
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Acquisition, leads qualifiés, publicité Meta, référencement local : nos conseils concrets pour remplir votre agenda, en Île-de-France comme ailleurs.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card-hover flex flex-col rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-5 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {a.geo ? (
                    <span className="inline-flex items-center gap-1 rounded-pill bg-brand-50 text-brand-700 px-2.5 py-0.5 text-[11px] font-semibold">
                      📍 {a.geo}
                    </span>
                  ) : null}
                  <span className="text-[11px] text-faint">{frDate(a.date)} · {a.readingTime}</span>
                </div>
                <h2 className="font-sans font-semibold tracking-tight text-lg sm:text-xl leading-snug mb-2">{a.title}</h2>
                <p className="text-sm text-muted leading-relaxed flex-grow">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-dark">
                  Lire l&apos;article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Footer />
    </main>
  );
}
