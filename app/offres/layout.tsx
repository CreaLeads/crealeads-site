import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Tarif et offre : 497 €/mois pour trouver des clients artisan",
  description:
    "L'offre CreaLeads pour artisans du bâtiment : 497 €/mois, sans frais de mise en place ni engagement. Campagnes Meta ciblées, demandes qualifiées 24h/24, tableau de bord et bilan hebdo. Options à la carte.",
  path: "/offres",
  ogTitle: "L'offre CreaLeads — 497 €/mois, sans engagement",
});

export default function OffresLayout({ children }: { children: React.ReactNode }) {
  return children;
}
