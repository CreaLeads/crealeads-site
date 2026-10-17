import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL, CONTACT } from "@/lib/site";

export const metadata = pageMeta({
  title: "Conditions générales de vente",
  description: "Conditions générales de vente de l'abonnement CreaLeads et des prestations ponctuelles pour les artisans du bâtiment.",
  path: "/cgv",
});

export default function CGVPage() {
  return (
    <LegalPage
      kicker="Conditions générales de vente"
      title="Conditions générales de vente"
      updated="16 octobre 2026"
      sections={[
        {
          h: "1. Objet et champ d'application",
          p: [
            `Les présentes conditions régissent les prestations vendues par ${LEGAL.name} (SIREN ${LEGAL.siren}, ${LEGAL.address}), ci-après « CreaLeads », à des clients professionnels, ci-après « le Client ». Toute commande implique l'acceptation des présentes conditions.`,
          ],
        },
        {
          h: "2. Prestations",
          p: [
            "L'abonnement CreaLeads comprend la mise en place et le pilotage d'un système d'acquisition de clients : création et gestion de campagnes publicitaires Meta (Facebook, Instagram) sur la zone et le métier du Client, création et renouvellement des visuels, qualification automatique des demandes, accès au tableau de bord et bilan périodique.",
            "Des options mensuelles et des prestations ponctuelles (site vitrine, audit publicitaire) peuvent être ajoutées ; leur contenu et leur prix sont précisés sur le devis.",
          ],
        },
        {
          h: "3. Prix et budget publicitaire",
          p: [
            `Les prix sont indiqués hors taxes sur le devis accepté par le Client. ${LEGAL.vatNote}.`,
            "Le budget publicitaire n'est pas inclus dans l'abonnement : il est réglé directement par le Client à Meta, depuis son propre compte publicitaire, dont il reste propriétaire.",
          ],
        },
        {
          h: "4. Durée et résiliation",
          p: [
            "L'abonnement est mensuel, sans durée minimale d'engagement. Le Client peut y mettre fin à tout moment par simple e-mail adressé à " + CONTACT.email + ". La résiliation prend effet à la fin du mois en cours, qui reste dû. Aucune pénalité n'est appliquée.",
          ],
        },
        {
          h: "5. Facturation et paiement",
          p: [
            "Les factures sont payables à réception. Aucun escompte n'est accordé en cas de paiement anticipé.",
            "Tout retard de paiement entraîne de plein droit des pénalités égales à trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 € (article L441-10 du Code de commerce). CreaLeads peut suspendre les campagnes en cas d'impayé.",
          ],
        },
        {
          h: "6. Exclusivité",
          p: [
            "CreaLeads s'engage à ne pas accompagner simultanément un autre client exerçant le même métier sur la même zone, telle que définie au devis, pendant toute la durée de l'abonnement.",
          ],
        },
        {
          h: "7. Obligations des parties",
          p: [
            "CreaLeads est tenue à une obligation de moyens : le nombre de demandes, de rendez-vous et de chantiers signés dépend notamment du métier, de la zone, du budget publicitaire et du traitement des demandes par le Client. Aucun volume de chantiers n'est garanti.",
            "Le Client s'engage à fournir des informations exactes, des visuels dont il détient les droits, et à traiter les demandes reçues dans un délai raisonnable. Il reste seul responsable des devis, des rendez-vous et de la réalisation des travaux.",
          ],
        },
        {
          h: "8. Propriété",
          p: [
            "Le compte publicitaire Meta et les données des prospects appartiennent au Client. Les visuels créés pour le Client lui sont cédés pour son usage propre pendant et après l'abonnement. La plateforme, ses outils et ses méthodes restent la propriété de CreaLeads.",
          ],
        },
        {
          h: "9. Données personnelles",
          p: [
            "Dans le cadre de la gestion des demandes de prospects, CreaLeads agit en qualité de sous-traitant du Client au sens du RGPD. Les modalités sont décrites dans la politique de confidentialité.",
          ],
        },
        {
          h: "10. Droit applicable et litiges",
          p: [
            "Les présentes conditions sont soumises au droit français. À défaut de résolution amiable, tout litige relèvera de la compétence des tribunaux de Paris.",
          ],
        },
      ]}
    />
  );
}
