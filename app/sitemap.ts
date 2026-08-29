import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog";

const SITE_URL = "https://crealeads.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-01");

  const routes = [
    { path: "", priority: 1 },
    { path: "/plateforme", priority: 0.9 },
    { path: "/offres", priority: 0.9 },
    { path: "/agents", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/cgv", priority: 0.3 },
    { path: "/privacy", priority: 0.3 },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...articles];
}
