import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vos agents IA",
  description:
    "Théo, Iris, Lucie, Victor, Amandine, Marco : les 6 agents IA de CreaLeads qui lancent vos pubs Meta, répondent à vos prospects 24/7, qualifient les demandes et pilotent votre acquisition. Pensés pour les artisans du bâtiment.",
  keywords: [
    "agent IA artisan",
    "réceptionniste IA bâtiment",
    "qualification automatique leads",
    "agent IA acquisition clients",
    "standardiste virtuelle artisan",
    "IA conversationnelle BTP",
  ],
  alternates: { canonical: "/agents" },
  openGraph: {
    title: "Vos agents IA — CreaLeads",
    description:
      "Six agents IA au travail pour vous : pubs Meta, réception 24/7, qualification, reporting. Pendant que vous êtes sur le chantier.",
    url: "https://crealeads.fr/agents",
  },
};

export default function AgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
