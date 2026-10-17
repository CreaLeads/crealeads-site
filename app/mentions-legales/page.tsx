import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL, CONTACT, SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Mentions légales",
  description: "Mentions légales du site CreaLeads : éditeur, hébergeur, propriété intellectuelle et contact.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      kicker="Informations légales"
      title="Mentions légales"
      updated="16 octobre 2026"
      sections={[
        {
          h: "Éditeur du site",
          p: [
            `Le site ${SITE_URL.replace("https://", "")} est édité par ${LEGAL.name}, ${LEGAL.form.toLowerCase()}.`,
            [
              `Adresse : ${LEGAL.address}`,
              `SIREN : ${LEGAL.siren}`,
              `Code NAF : ${LEGAL.naf}`,
              `N° de TVA intracommunautaire : ${LEGAL.vat} — ${LEGAL.vatNote}`,
              `Téléphone : ${CONTACT.phoneDisplay}`,
              `E-mail : ${CONTACT.email}`,
            ],
            `Directeur de la publication : ${LEGAL.director}.`,
          ],
        },
        {
          h: "Hébergement",
          p: [
            "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com.",
          ],
        },
        {
          h: "Propriété intellectuelle",
          p: [
            "L'ensemble des contenus du site (textes, visuels, interface, logo, marque CreaLeads) est la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.",
          ],
        },
        {
          h: "Responsabilité",
          p: [
            "Les informations publiées sur le site sont fournies à titre indicatif. Les résultats présentés (volumes de demandes, chiffre d'affaires, rendez-vous) sont issus de campagnes réelles mais ne constituent pas une garantie de résultat : ils dépendent du métier, de la zone, du budget publicitaire et de la capacité de chaque artisan à conclure.",
          ],
        },
        {
          h: "Données personnelles",
          p: [
            "Le traitement des données personnelles collectées sur le site est détaillé dans notre politique de confidentialité, accessible depuis le pied de page.",
          ],
        },
        {
          h: "Contact",
          p: [`Pour toute question relative au site : ${CONTACT.email}.`],
        },
      ]}
    />
  );
}
