import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs CreaLeads pour artisans du bâtiment : setup unique 1 490 € puis 490, 890 ou 1 290 €/mois selon les agents activés. Sans engagement, budget pub payé à part. Comparatif détaillé des offres DÉCOLLAGE, COPILOTE et AUTOPILOTE.",
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
