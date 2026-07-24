import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offre",
  description:
    "Une offre unique à 350 €/mois pour les artisans du bâtiment. Quatre agents inclus : campagne Meta Ads, visuels IA, chatbot SMS de qualification 24h/24 et reporting. Zéro frais de mise en place, engagement 3 mois puis mois par mois. Options à la carte.",
  alternates: { canonical: "/offres" },
  openGraph: {
    title: "L'offre CreaLeads — 350 €/mois",
    description:
      "Une offre, toute une équipe. Quatre agents IA au travail pour remplir votre agenda, sans frais de mise en place.",
    url: "https://crealeads.fr/offres",
  },
};

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return children;
}
