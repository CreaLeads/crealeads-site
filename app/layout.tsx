import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://crealeads.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CreaLeads — Acquisition de clients pour artisans du bâtiment",
    template: "%s — CreaLeads",
  },
  description:
    "Le bouche-à-oreille a une limite. Nous, on n'en a pas. CreaLeads installe un système d'acquisition de clients clé en main pour les artisans du bâtiment : campagnes Meta Ads, leads qualifiés, CRM et notifications. Premiers prospects sous 24 à 48h.",
  keywords: [
    "acquisition clients artisans",
    "leads artisans bâtiment",
    "publicité Meta artisans",
    "Facebook Ads bâtiment",
    "agence acquisition BTP",
    "trouver des clients artisan",
    "leads qualifiés rénovation",
    "marketing digital artisan",
    "google my business artisan",
  ],
  authors: [{ name: "CreaLeads" }],
  creator: "CreaLeads",
  publisher: "CreaLeads",
  applicationName: "CreaLeads",
  category: "Marketing",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-v2.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "CreaLeads — Acquisition de clients pour artisans du bâtiment",
    description:
      "Le bouche-à-oreille a une limite. Nous, on n'en a pas. Système d'acquisition de clients clé en main pour artisans du bâtiment.",
    url: SITE_URL,
    siteName: "CreaLeads",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "CreaLeads — Acquisition de clients pour artisans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreaLeads — Acquisition de clients pour artisans du bâtiment",
    description: "Le bouche-à-oreille a une limite. Nous, on n'en a pas.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CreaLeads",
  description:
    "Agence d'acquisition de clients pour artisans du bâtiment : campagnes Meta Ads, leads qualifiés, CRM et automatisation.",
  url: SITE_URL,
  email: "contact.crealeads@gmail.com",
  telephone: "+33663675254",
  areaServed: "FR",
  priceRange: "€€",
  image: `${SITE_URL}/og-image.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/enzo-wagner",
    "https://www.instagram.com/crealeads",
  ],
  serviceType: [
    "Publicité Meta Ads",
    "Génération de leads",
    "Gestion Google My Business",
    "Automatisation marketing",
    "Agents IA conversationnels",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Offres CreaLeads",
    itemListElement: [
      {
        "@type": "Offer",
        name: "DÉCOLLAGE",
        price: "490",
        priceCurrency: "EUR",
        description: "490 €/mois + 1 490 € de setup unique, sans engagement. Agents Théo (Acquisition Meta) & Iris (Studio créa).",
        url: `${SITE_URL}/offres`,
      },
      {
        "@type": "Offer",
        name: "COPILOTE",
        price: "890",
        priceCurrency: "EUR",
        description: "890 €/mois + 1 490 € de setup, sans engagement. Théo, Iris, Lucie (Réceptionniste 24/7) et Victor (Analyste).",
        url: `${SITE_URL}/offres`,
      },
      {
        "@type": "Offer",
        name: "AUTOPILOTE",
        price: "1290",
        priceCurrency: "EUR",
        description: "1 290 €/mois + 1 490 € de setup, sans engagement. L'équipe complète dont Amandine, votre bras droit.",
        url: `${SITE_URL}/offres`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
