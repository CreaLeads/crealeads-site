import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Landing } from "@/lib/landing";
import { CAL_URL, SITE_URL } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const Check = () => (
  <svg className="w-5 h-5 text-emerald-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const STEPS = [
  { n: "01", t: "On cible votre secteur", d: "Votre métier, vos communes, votre panier moyen. Les campagnes Meta partent sous quelques jours." },
  { n: "02", t: "Les demandes arrivent triées", d: "Ville, projet, budget, délai : chaque demande est qualifiée avant d'arriver dans votre tableau de bord." },
  { n: "03", t: "Vous signez, on mesure", d: "Visites, devis, chantiers signés. Chaque lundi, le bilan : ce que la pub a coûté, ce qu'elle a rapporté." },
];

export default function LandingPage({
  page,
  section,
  sectionPath,
  links,
  linksTitle,
  extraLinks,
}: {
  page: Landing;
  section: string; // « Métiers » ou « Zones »
  sectionPath: string; // /metiers ou /zones
  links: { href: string; label: string }[];
  linksTitle: string;
  extraLinks?: { href: string; label: string }[];
}) {
  const path = `${sectionPath}/${page.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      serviceType: "Acquisition de clients pour artisans du bâtiment",
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: page.geo ? page.geo.split(" · ").map((name) => ({ "@type": "Place", name })) : { "@type": "Country", name: "France" },
      offers: { "@type": "Offer", price: "497", priceCurrency: "EUR", url: `${SITE_URL}/offres` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: section, path: sectionPath },
      { name: page.name, path },
    ]),
  ];

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted mb-6">
            <Link href="/" className="hover:text-emerald-dark transition-colors">Accueil</Link>
            <span>/</span>
            <Link href={sectionPath} className="hover:text-emerald-dark transition-colors">{section}</Link>
            <span>/</span>
            <span className="text-ink">{page.name}</span>
          </nav>
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">{page.kicker}</div>
          <h1 className="font-display text-display-lg mb-5 sm:mb-6 max-w-4xl">{page.h1}</h1>
          <p className="text-base sm:text-lg text-muted max-w-3xl leading-relaxed mb-8">{page.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4 text-sm sm:text-base font-semibold rounded-full text-center">
              <span>Vérifier si mon secteur est libre</span>
            </a>
            <Link href="/plateforme" className="px-7 py-4 text-sm sm:text-base font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors text-center">
              Voir le tableau de bord
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-8 text-sm text-muted">
            {["Premières demandes sous 24 à 72 h", "Un seul artisan par métier et par secteur", "497 €/mois, sans engagement"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-pill border border-stroke bg-surface px-3.5 py-2">
                <Check />
                {t}
              </span>
            ))}
          </div>
          {page.geo ? (
            <p className="mt-6 text-[13px] text-faint leading-relaxed">
              <span className="font-semibold text-muted">Secteurs couverts :</span> {page.geo}
            </p>
          ) : null}
        </div>
      </section>

      {/* Argumentaire */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8 items-start">
          <div className="space-y-4">
            {page.sections.map((s) => (
              <div key={s.h} className="rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-6 sm:p-7">
                <h2 className="font-sans font-semibold tracking-tight text-lg sm:text-xl mb-2.5">{s.h}</h2>
                <p className="text-[15px] text-ink/75 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 lg:sticky lg:top-28">
            <div className="rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-6 sm:p-7">
              <h2 className="font-sans font-semibold tracking-tight text-lg mb-4">{page.bullets.h}</h2>
              <ul className="space-y-2.5">
                {page.bullets.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[15px] text-ink/80 leading-snug">
                    <Check />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            {page.proof ? (
              <div className="rounded-[20px] bg-ink text-bg p-6 sm:p-7">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald mb-3">Résultat client</div>
                <div className="tnum font-display text-4xl font-extrabold text-emerald leading-none mb-3">{page.proof.metric}</div>
                <div className="font-semibold">{page.proof.name}</div>
                <div className="text-[12px] text-bg/55 mb-3">{page.proof.loc}</div>
                <p className="text-sm text-bg/75 leading-relaxed">{page.proof.desc}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-12 sm:py-16 bg-surface border-y border-stroke">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm mb-8">Comment ça marche</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-[20px] border border-stroke bg-bg p-5 sm:p-6">
                <div className="tnum font-display text-2xl font-extrabold text-brand-300 mb-2">{s.n}</div>
                <h3 className="font-semibold tracking-tight mb-1.5">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="group rounded-[18px] border border-stroke bg-surface shadow-ds-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 sm:px-6 py-4 font-semibold tracking-tight">
                  {f.q}
                  <span className="shrink-0 text-xl text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 text-[15px] text-ink/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-[20px] border border-stroke bg-surface-alt p-6 sm:p-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-4">{linksTitle}</div>
            <div className="flex flex-wrap gap-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-pill border border-stroke bg-surface px-3.5 py-1.5 text-sm hover:border-emerald hover:text-emerald-dark transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            {extraLinks && extraLinks.length > 0 ? (
              <div className="mt-5 pt-5 border-t border-stroke flex flex-col gap-2">
                {extraLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm font-medium text-ink underline decoration-stroke-strong underline-offset-4 hover:text-emerald-dark">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-display-md mb-4">
            Votre secteur est-il <span className="text-emerald">encore libre ?</span>
          </h2>
          <p className="text-bg/70 mb-8 leading-relaxed">
            Un seul artisan par métier et par secteur. 20 minutes en visio pour vérifier la disponibilité et estimer le volume de demandes atteignable.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex bg-emerald text-ink hover:bg-emerald-light px-8 py-4 font-bold rounded-full transition-colors">
            Réserver un appel de 20 min
          </a>
        </div>
      </section>

      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <Footer />
    </main>
  );
}
