import type { MetadataRoute } from "next";

const SITE_URL = "https://crealeads.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/offres", priority: 0.9 },
    { path: "/tarifs", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/cgv", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
  ];

  // Date fixe (les scripts n'ont pas accès à Date.now au build déterministe)
  const lastModified = new Date("2026-06-01");

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
