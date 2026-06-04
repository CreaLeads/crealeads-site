import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tableau comparatif clair des offres CreaLeads pour artisans du bâtiment. Des prix transparents, sans coût caché : DÉCOLLAGE, COPILOTE et AUTOPILOTE.",
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
