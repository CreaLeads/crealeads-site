import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreaLeads — Leads qualifiés pour artisans du bâtiment",
  description:
    "CreaLeads met en place votre système Lead Ads Meta clé en main — formulaires instantanés, CRM, notifications WhatsApp. Premiers leads en 24 à 72h.",
  keywords: "leads artisans, lead ads meta, acquisition digitale bâtiment, leads qualifiés",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
