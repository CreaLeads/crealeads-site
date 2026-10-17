import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFinal from "@/components/CTAFinal";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { CAL_URL } from "@/lib/site";
import { METIERS } from "@/lib/landing";

export const metadata = pageMeta({
  title: "Alternative à Habitatpresto et aux plateformes de leads",
  description:
    "Marre de payer des leads partagés avec trois concurrents ? Comparez les plateformes de mise en relation et un système d'acquisition à vous : demandes exclusives, compte publicitaire à votre nom, coût par chantier mesuré.",
  path: "/alternative-plateformes-leads",
  ogTitle: "Arrêtez de partager vos leads avec vos concurrents",
});

const ROWS: { k: string; plateforme: string; crealeads: string }[] = [
  { k: "À qui va la demande", plateforme: "Souvent transmise à plusieurs artisans en même temps", crealeads: "À vous seul : elle vient de vos propres campagnes" },
  { k: "Concurrence sur votre zone", plateforme: "Tous les inscrits de votre métier et de votre secteur", crealeads: "Exclusivité : un seul artisan par métier et par secteur" },
  { k: "Mode de paiement", plateforme: "Au contact, que le chantier se fasse ou non", crealeads: "Abonnement fixe de 497 €/mois + budget pub versé à Meta" },
  { k: "Votre image", plateforme: "Le client a choisi la plateforme, pas votre entreprise", crealeads: "Le client voit vos chantiers et contacte votre entreprise" },
  { k: "Ce que vous construisez", plateforme: "Rien : si vous arrêtez, le flux s'arrête et rien ne vous reste", crealeads: "Votre compte publicitaire, vos audiences, vos visuels, votre historique" },
  { k: "Suivi des résultats", plateforme: "Un nombre de contacts achetés", crealeads: "Le coût réel par chantier signé, de la pub jusqu'à la signature" },
];

const FAQS = [
  { q: "Faut-il arrêter les plateformes du jour au lendemain ?", a: "Non. Beaucoup d'artisans gardent leur plateforme le temps que le système monte en puissance, puis comparent le coût par chantier signé des deux canaux. Les chiffres décident." },
  { q: "Les leads Meta sont-ils de moins bonne qualité ?", a: "Une demande Meta mal qualifiée, oui. C'est pour ça que chaque demande passe par une qualification (ville, projet, budget, délai) avant d'arriver dans votre tableau de bord. Vous ne voyez que les projets sérieux." },
  { q: "Combien ça coûte par rapport à une plateforme ?", a: "497 €/mois d'abonnement, sans frais de mise en place ni engagement, plus environ 300 €/mois de budget publicitaire versé directement à Meta. Pour 50 à 100 demandes qualifiées par mois, le coût par demande est généralement bien inférieur à celui d'un lead partagé." },
];

export default function AlternativePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Alternative aux plateformes de leads", path: "/alternative-plateformes-leads" },
    ]),
  ];

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      <section className="pt-28 pb-10 sm:pt-36 sm:pb-14 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">
            Alternative aux plateformes de mise en relation
          </div>
          <h1 className="font-display text-display-lg mb-5 sm:mb-6 max-w-4xl">
            Vous payez des leads. <span className="text-emerald-dark">Vos concurrents reçoivent les mêmes.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-3xl leading-relaxed mb-8">
            Habitatpresto, Travaux.com, StarOfService et les autres plateformes de mise en relation ont un point commun : vous achetez un contact que d&apos;autres artisans ont souvent reçu aussi. Résultat, c&apos;est le premier qui rappelle ou le moins cher qui gagne. Il existe une autre façon de faire : avoir votre propre flux de demandes, rien qu&apos;à vous.
          </p>
          <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex btn-primary px-7 py-4 text-sm sm:text-base font-semibold rounded-full">
            <span>Comparer avec mes chiffres actuels</span>
          </a>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm mb-6">Plateforme de leads ou système à vous : la différence</h2>
          <div className="rounded-[24px] border border-stroke bg-surface shadow-ds-sm overflow-hidden">
            <div className="hidden sm:grid grid-cols-[1fr_1.2fr_1.2fr] bg-surface-alt border-b border-stroke text-[12px] font-semibold uppercase tracking-wide text-faint">
              <div className="px-5 py-3">Critère</div>
              <div className="px-5 py-3">Plateforme de mise en relation</div>
              <div className="px-5 py-3 text-emerald-dark">CreaLeads</div>
            </div>
            {ROWS.map((r) => (
              <div key={r.k} className="grid sm:grid-cols-[1fr_1.2fr_1.2fr] border-b border-stroke last:border-b-0">
                <div className="px-5 pt-4 sm:py-4 font-semibold text-[15px]">{r.k}</div>
                <div className="px-5 pt-1.5 sm:py-4 text-[14.5px] text-muted">
                  <span className="sm:hidden text-faint">Plateforme : </span>
                  {r.plateforme}
                </div>
                <div className="px-5 pt-1.5 pb-4 sm:py-4 text-[14.5px] text-ink sm:bg-brand-50/50">
                  <span className="sm:hidden font-semibold text-emerald-dark">CreaLeads : </span>
                  {r.crealeads}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Argumentaire */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 space-y-8 text-[15.5px] text-ink/80 leading-[1.75]">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mb-3">Le vrai coût d&apos;un lead partagé</h2>
            <p>
              Le prix affiché d&apos;un contact ne dit rien. Ce qui compte, c&apos;est le coût par chantier signé. Si une demande est envoyée à plusieurs artisans, vous en signez au mieux une partie, après une course à qui rappellera le premier et une négociation sur le prix. Le coût réel de chaque chantier signé est donc bien plus élevé que le prix du lead.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mb-3">Ce que vous ne construisez pas sur une plateforme</h2>
            <p>
              Sur une plateforme, le client a choisi la plateforme, pas vous. Le jour où vous arrêtez de payer, le flux s&apos;arrête et il ne vous reste rien. Avec votre propre système, le compte publicitaire est à votre nom, les audiences s&apos;affinent mois après mois et vos visuels travaillent pour votre marque.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mb-3">Comment fonctionne l&apos;alternative</h2>
            <p>
              On lance des publicités Facebook et Instagram ciblées sur votre métier et vos communes. Les demandes arrivent dans votre tableau de bord, déjà qualifiées (ville, projet, budget, délai). Vous calez les visites, envoyez vos devis, et chaque lundi vous voyez ce que la semaine a coûté et rapporté. Un seul artisan par métier et par secteur : personne d&apos;autre ne reçoit vos demandes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-[18px] border border-stroke bg-surface shadow-ds-sm">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 sm:px-6 py-4 font-semibold tracking-tight">
                  {f.q}
                  <span className="shrink-0 text-xl text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 text-[15px] text-ink/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {METIERS.map((m) => (
              <Link key={m.slug} href={`/metiers/${m.slug}`} className="rounded-pill border border-stroke bg-surface px-3.5 py-1.5 text-sm hover:border-emerald hover:text-emerald-dark transition-colors">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <Footer />
    </main>
  );
}
