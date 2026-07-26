import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On démarre ensemble",
  description:
    "Formulaire d'onboarding client CreaLeads pour les artisans du bâtiment. Quelques minutes pour tout nous transmettre et lancer vos campagnes.",
  alternates: { canonical: "/onboarding" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
