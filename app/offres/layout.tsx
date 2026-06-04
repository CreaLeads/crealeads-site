import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Trois niveaux d'accompagnement pour les artisans du bâtiment : DÉCOLLAGE (1 500 €), COPILOTE (2 500 € + 500 €/mois) et AUTOPILOTE. Campagnes Meta Ads, leads qualifiés, CRM et gestion Google My Business.",
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
