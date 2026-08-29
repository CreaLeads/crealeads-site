import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES, getArticle, type Block } from "@/lib/blog";

const CAL = "https://cal.eu/enzo-crealeads/20min";
const SITE = "https://crealeads.fr";

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
function frDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.description,
      url: `${SITE}/blog/${a.slug}`,
      type: "article",
      publishedTime: a.date,
    },
  };
}

function CtaCard({ text }: { text?: string }) {
  return (
    <div className="my-8 rounded-[20px] bg-ink text-bg p-6 sm:p-8">
      <p className="text-sm sm:text-base text-bg/85 leading-relaxed mb-5">
        {text ??
          "Vous êtes artisan et vous voulez un flux régulier de demandes qualifiées ? Réservez 20 minutes avec CreaLeads : on regarde ensemble ce qu'on peut faire pour votre zone et votre métier."}
      </p>
      <a
        href={CAL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-emerald text-ink font-bold text-sm px-6 py-3.5 rounded-full hover:bg-emerald-light transition-colors"
      >
        Réserver un appel de 20 min
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "h2":
      return <h2 key={i} className="font-display text-xl sm:text-2xl font-bold mt-8 mb-3 scroll-mt-24">{b.text}</h2>;
    case "p":
      return <p key={i} className="text-[15.5px] sm:text-base text-ink/80 leading-[1.75] mb-4">{b.text}</p>;
    case "ul":
      return (
        <ul key={i} className="space-y-2.5 mb-6">
          {b.items.map((it, j) => (
            <li key={j} className="flex items-start gap-2.5 text-[15px] text-ink/80 leading-relaxed">
              <svg className="w-5 h-5 text-emerald-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-6 border-l-[3px] border-emerald pl-5 py-1 font-display text-lg sm:text-xl leading-snug text-ink">
          {b.text}
        </blockquote>
      );
    case "cta":
      return <CtaCard key={i} text={b.text} />;
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "CreaLeads" },
    publisher: {
      "@type": "Organization",
      name: "CreaLeads",
      logo: { "@type": "ImageObject", url: `${SITE}/favicon-32x32.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${a.slug}` },
    keywords: a.keywords.join(", "),
  };

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <article className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Fil d'ariane */}
          <nav className="flex items-center gap-1.5 text-[13px] text-muted mb-6">
            <Link href="/" className="hover:text-emerald-dark transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-dark transition-colors">Blog</Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {a.geo ? (
              <span className="inline-flex items-center gap-1 rounded-pill bg-brand-50 text-brand-700 px-2.5 py-0.5 text-[11px] font-semibold">📍 {a.geo}</span>
            ) : null}
            <span className="text-[12px] text-faint">{frDate(a.date)} · {a.readingTime} de lecture</span>
          </div>

          <h1 className="font-display text-display-md mb-4">{a.title}</h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 pb-8 border-b border-stroke">{a.excerpt}</p>

          <div>{a.blocks.map(renderBlock)}</div>

          {/* Autres articles */}
          {others.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stroke">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-4">À lire aussi</div>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((o) => (
                  <Link key={o.slug} href={`/blog/${o.slug}`} className="card-hover rounded-[16px] border border-stroke bg-surface shadow-ds-sm p-4">
                    <div className="font-sans font-semibold tracking-tight text-[15px] leading-snug mb-1">{o.title}</div>
                    <div className="text-[12px] text-muted line-clamp-2">{o.excerpt}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald-dark transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Tous les articles
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Footer />
    </main>
  );
}
