import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ce que votre système automatise",
  description:
    "Ce que le système CreaLeads fait pour vous, automatiquement : lancer vos pubs Meta, qualifier les demandes 24/7, préparer vos devis et suivre vos résultats. Chaque fonction porte un nom, pour que vous sachiez qui fait quoi. Pour les artisans du bâtiment.",
  keywords: [
    "acquisition clients automatisée artisan",
    "qualification automatique leads",
    "automatisation marketing bâtiment",
    "agent IA acquisition clients",
    "publicité Meta artisan automatique",
    "tableau de bord artisan bâtiment",
  ],
  alternates: { canonical: "/agents" },
  openGraph: {
    title: "Ce que votre système automatise — CreaLeads",
    description:
      "Lancer vos pubs, qualifier vos demandes, préparer vos devis, suivre vos résultats — automatiquement. Pendant que vous êtes sur le chantier.",
    url: "https://crealeads.fr/agents",
  },
};

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
