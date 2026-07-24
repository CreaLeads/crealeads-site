import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs CreaLeads pour artisans du bâtiment : une offre unique à 350 €/mois, quatre agents inclus, zéro frais de mise en place. Engagement 3 mois puis mois par mois, budget pub payé à part. Options à la carte : retargeting, Google Ads, contenu réseaux, site vitrine.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs — CreaLeads",
    description: "Une offre claire à 350 €/mois, sans surprise. Quatre agents inclus, options à la carte.",
    url: "https://crealeads.fr/tarifs",
  },
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
