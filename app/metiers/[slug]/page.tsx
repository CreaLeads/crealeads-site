import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { METIERS, ZONES, getMetier } from "@/lib/landing";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return METIERS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = getMetier(params.slug);
  if (!m) return {};
  return pageMeta({ title: m.title, description: m.description, path: `/metiers/${m.slug}` });
}

export default function MetierPage({ params }: { params: { slug: string } }) {
  const m = getMetier(params.slug);
  if (!m) notFound();
  return (
    <LandingPage
      page={m}
      section="Métiers"
      sectionPath="/metiers"
      linksTitle="Nous accompagnons aussi"
      links={[
        ...METIERS.filter((x) => x.slug !== m.slug).map((x) => ({ href: `/metiers/${x.slug}`, label: x.name })),
        ...ZONES.slice(0, 4).map((z) => ({ href: `/zones/${z.slug}`, label: `Artisans ${z.name}` })),
      ]}
      extraLinks={[
        { href: "/alternative-plateformes-leads", label: "Pourquoi ne plus acheter de leads partagés sur les plateformes" },
        { href: "/blog/publicite-meta-facebook-instagram-artisans", label: "Publicité Facebook et Instagram pour artisans : le guide" },
      ]}
    />
  );
}
