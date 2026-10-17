import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES, getArticle, type Block } from "@/lib/blog";
import { SITE_URL as SITE, CAL_URL as CAL, AUTHOR } from "@/lib/site";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

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
  return pageMeta({
    title: a.title,
    description: a.description,
    path: `/blog/${a.slug}`,
    type: "article",
    publishedTime: a.date,
    modifiedTime: a.updated ?? a.date,
    authors: [AUTHOR.name],
  });
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
    dateModified: a.updated ?? a.date,
    inLanguage: "fr-FR",
    image: `${SITE}/og-image.jpg`,
    author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.role },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${a.slug}` },
    keywords: a.keywords.join(", "),
  };

  const crumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: a.title, path: `/blog/${a.slug}` },
  ]);

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <article className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d&apos;Ariane" className="flex items-center gap-1.5 text-[13px] text-muted mb-6">
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
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">{a.excerpt}</p>
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-stroke">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 font-display font-bold text-brand-700">EW</span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold">Par {AUTHOR.name}</span>
              <span className="block text-muted text-[13px]">{AUTHOR.role}, fils d&apos;artisan</span>
            </span>
          </div>

          <div>{a.blocks.map(renderBlock)}</div>

          {a.related && a.related.length > 0 && (
            <div className="mt-10 rounded-[20px] border border-stroke bg-surface p-5 sm:p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-3">Pour aller plus loin</div>
              <ul className="space-y-2">
                {a.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-[15px] font-medium text-ink underline decoration-stroke-strong underline-offset-4 hover:text-emerald-dark hover:decoration-emerald">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 rounded-[20px] bg-surface-alt border border-stroke p-5 sm:p-6 flex gap-4 items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display font-bold text-brand-700">EW</span>
            <div>
              <div className="font-semibold">{AUTHOR.name}</div>
              <div className="text-[13px] text-muted mb-2">{AUTHOR.role}</div>
              <p className="text-sm text-ink/75 leading-relaxed">{AUTHOR.bio}</p>
            </div>
          </div>

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Footer />
    </main>
  );
}
