import HubPage from "@/components/HubPage";
import { METIERS } from "@/lib/landing";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Trouver des chantiers par métier du bâtiment",
  description:
    "Résine, peinture, carrelage, maçonnerie, façade, toiture, rénovation : comment CreaLeads trouve des clients et des chantiers qualifiés pour chaque métier du bâtiment.",
  path: "/metiers",
});

export default function MetiersPage() {
  return (
    <HubPage
      kicker="Métiers accompagnés"
      h1="Un système réglé sur votre métier, pas un modèle générique."
      intro="Un applicateur résine et un couvreur n'ont ni les mêmes clients, ni les mêmes visuels, ni les mêmes questions à poser. Choisissez votre métier pour voir comment on remplit votre planning."
      basePath="/metiers"
      items={METIERS}
    />
  );
}
