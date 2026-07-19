import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Recrutez votre équipe d'agents IA. STARTER 197 €/mois, PRO 397 €/mois, SCALE 697 €/mois. Sans frais de mise en place, sans engagement. Campagnes Meta, réception 24/7 et qualification des leads pour artisans du bâtiment.",
  alternates: { canonical: "/offres" },
  openGraph: {
    title: "Offres — CreaLeads",
    description:
      "Trois façons de remplir votre agenda. De l'essai sans engagement à l'automatisation complète par l'IA.",
    url: "https://crealeads.fr/offres",
  },
};

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return children;
}
