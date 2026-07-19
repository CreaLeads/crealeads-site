import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs CreaLeads pour artisans du bâtiment : 197, 397 ou 697 €/mois selon les agents activés. Sans frais de mise en place, sans engagement, budget pub payé à part. Comparatif détaillé des offres STARTER, PRO et SCALE.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs — CreaLeads",
    description: "Des prix clairs, sans surprise. Comparez nos trois offres en détail.",
    url: "https://crealeads.fr/tarifs",
  },
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
