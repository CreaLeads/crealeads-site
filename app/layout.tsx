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

export const metadata: Metadata = {
  metadataBase: new URL("https://crealeads.fr"),
  title: "CreaLeads — Acquisition clients pour artisans du bâtiment",
  description:
    "Le bouche-à-oreille a une limite. Nous, on n'en a pas. Système d'acquisition clients clé en main pour artisans du BTP.",
  keywords:
    "acquisition clients artisans, leads artisans, meta ads bâtiment, acquisition digitale BTP",
  icons: {
    icon: [
      { url: "/favicon-v2.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "CreaLeads — Acquisition clients pour artisans",
    description: "Le bouche-à-oreille a une limite. Nous, on n'en a pas.",
    url: "https://crealeads.fr",
    siteName: "CreaLeads",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
