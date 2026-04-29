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
