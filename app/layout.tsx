import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";
import { SITE_URL, CONTACT, LEGAL, AUTHOR } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CreaLeads — Trouver des clients et des chantiers quand on est artisan du bâtiment",
    template: "%s — CreaLeads",
  },
  description:
    "CreaLeads trouve des clients aux artisans du bâtiment : publicité Facebook et Instagram ciblée sur votre zone, demandes de devis qualifiées et suivi jusqu'au chantier signé dans un tableau de bord. 497 €/mois, sans engagement.",
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: "CreaLeads",
  publisher: "CreaLeads",
  applicationName: "CreaLeads",
  category: "Marketing",
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
    title: "CreaLeads — Des chantiers, pas des contacts",
    description:
      "Publicité Meta ciblée, demandes qualifiées et suivi jusqu'au chantier signé : le système d'acquisition clé en main des artisans du bâtiment.",
    url: SITE_URL,
    siteName: "CreaLeads",
    locale: "fr_FR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreaLeads — Des chantiers, pas des contacts",
    description: "Le système d'acquisition clé en main des artisans du bâtiment.",
    images: [OG_IMAGE.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "CreaLeads",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "CreaLeads",
      legalName: LEGAL.name,
      description:
        "Acquisition de clients pour artisans du bâtiment : publicité Meta (Facebook, Instagram) ciblée par zone et par métier, qualification des demandes de devis et suivi jusqu'au chantier signé.",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-192.png`, width: 192, height: 192 },
      image: `${SITE_URL}/og-image.jpg`,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      taxID: LEGAL.siren.replace(/ /g, ""),
      vatID: LEGAL.vat,
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 rue François Ier",
        postalCode: "75008",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
      areaServed: { "@type": "Country", name: "France" },
      priceRange: "€€",
      founder: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
      sameAs: [AUTHOR.url, "https://www.instagram.com/crealeads"],
      knowsAbout: [
        "Publicité Facebook et Instagram pour artisans",
        "Génération de leads bâtiment",
        "Acquisition de clients pour artisans",
        "Qualification de demandes de devis",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Offre CreaLeads",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Abonnement CreaLeads",
            price: "497",
            priceCurrency: "EUR",
            description:
              "Système d'acquisition complet : campagnes Meta ciblées sur votre zone et votre métier, visuels renouvelés, qualification automatique des demandes 24h/24, tableau de bord et bilan hebdomadaire. Sans frais de mise en place, sans engagement. Budget publicitaire à part, versé directement à Meta.",
            url: `${SITE_URL}/offres`,
          },
          {
            "@type": "Offer",
            name: "Site vitrine professionnel",
            price: "490",
            priceCurrency: "EUR",
            description: "Site vitrine professionnel livré clé en main. Paiement unique.",
            url: `${SITE_URL}/offres`,
          },
        ],
      },
    },
  ],
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
        <ChatWidget />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
