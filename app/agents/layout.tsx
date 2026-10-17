import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Automatisation de l'acquisition client pour artisans",
  description:
    "Ce que le système CreaLeads automatise pour les artisans du bâtiment : publicité Meta, qualification des demandes 24h/24, relances, devis et bilan. Pendant que vous êtes sur le chantier.",
  path: "/agents",
});

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
