import HubPage from "@/components/HubPage";
import { ZONES } from "@/lib/landing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trouver des clients artisan par zone : Île-de-France, Paris, Lyon",
  description:
    "CreaLeads accompagne les artisans du bâtiment en Île-de-France (75, 77, 78, 91, 92, 94, 95), à Lyon et partout en France, avec un ciblage par commune et l'exclusivité par secteur.",
  path: "/zones",
});

export default function ZonesPage() {
  return (
    <HubPage
      kicker="Zones d'intervention"
      h1="Des chantiers dans votre secteur, pas à l'autre bout de la région."
      intro="La publicité se cible commune par commune, sur votre rayon d'intervention réel. Et un seul artisan par métier et par secteur : vos demandes ne sont qu'à vous. Nous accompagnons des artisans partout en France."
      basePath="/zones"
      items={ZONES}
    />
  );
}
