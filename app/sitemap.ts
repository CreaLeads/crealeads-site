import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";
import { METIERS, ZONES } from "@/lib/landing";
import { SITE_URL } from "@/lib/site";

// Date de dernière refonte du contenu des pages statiques
const UPDATED = new Date("2026-10-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified = UPDATED) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    page("", 1),
    page("/plateforme", 0.9),
    page("/offres", 0.9),
    page("/metiers", 0.9),
    ...METIERS.map((m) => page(`/metiers/${m.slug}`, 0.85)),
    page("/zones", 0.8),
    ...ZONES.map((z) => page(`/zones/${z.slug}`, 0.8)),
    page("/alternative-plateformes-leads", 0.8),
    page("/agents", 0.6),
    page("/blog", 0.7),
    ...ARTICLES.map((a) => page(`/blog/${a.slug}`, 0.6, new Date(a.updated ?? a.date))),
    page("/mentions-legales", 0.2),
    page("/cgv", 0.2),
    page("/privacy", 0.2),
  ];
}
