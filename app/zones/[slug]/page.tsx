import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { METIERS, ZONES, getZone } from "@/lib/landing";
import { ARTICLES } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return ZONES.map((z) => ({ slug: z.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const z = getZone(params.slug);
  if (!z) return {};
  return pageMeta({ title: z.title, description: z.description, path: `/zones/${z.slug}` });
}

// Article de blog géo-ciblé associé à la zone, s'il existe
const ZONE_ARTICLE: Record<string, string> = {
  "ile-de-france": "generer-leads-qualifies-artisans-ile-de-france",
  yvelines: "acquisition-clients-artisan-yvelines-78",
  paris: "acquisition-clients-artisan-paris",
};

export default function ZonePage({ params }: { params: { slug: string } }) {
  const z = getZone(params.slug);
  if (!z) notFound();
  const article = ARTICLES.find((a) => a.slug === ZONE_ARTICLE[z.slug]);
  return (
    <LandingPage
      page={z}
      section="Zones"
      sectionPath="/zones"
      linksTitle={`Les métiers que nous accompagnons — ${z.name}`}
      links={[
        ...METIERS.map((m) => ({ href: `/metiers/${m.slug}`, label: m.name })),
        ...ZONES.filter((x) => x.slug !== z.slug).map((x) => ({ href: `/zones/${x.slug}`, label: x.name })),
      ]}
      extraLinks={[
        ...(article ? [{ href: `/blog/${article.slug}`, label: article.title }] : []),
        { href: "/alternative-plateformes-leads", label: "Pourquoi ne plus acheter de leads partagés sur les plateformes" },
      ]}
    />
  );
}
