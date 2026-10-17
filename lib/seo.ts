import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "CreaLeads — Acquisition de clients pour artisans du bâtiment",
};

// Next fusionne les métadonnées de façon superficielle : un `openGraph` défini
// sur une page remplace entièrement celui du layout (image comprise). Ce helper
// garantit canonique + Open Graph complets sur chaque page.
export function pageMeta({
  title,
  description,
  path,
  ogTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle ?? title,
      description,
      url,
      siteName: "CreaLeads",
      locale: "fr_FR",
      type,
      images: [OG_IMAGE],
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
