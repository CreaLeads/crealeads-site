import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { LEGAL, CONTACT } from "@/lib/site";

export const metadata = pageMeta({
  title: "Politique de confidentialité",
  description: "Comment CreaLeads collecte, utilise et protège vos données personnelles, et comment exercer vos droits (RGPD).",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="RGPD"
      title="Politique de confidentialité"
      updated="16 octobre 2026"
      sections={[
        {
          h: "Responsable du traitement",
          p: [`${LEGAL.name}, ${LEGAL.address} — SIREN ${LEGAL.siren}. Contact : ${CONTACT.email}.`],
        },
        {
          h: "Données collectées et finalités",
          p: [
            [
              "Formulaire de contact et assistant de discussion : nom, e-mail, téléphone, message — pour répondre à votre demande et vous recontacter (base légale : mesures précontractuelles à votre demande).",
              "Prise de rendez-vous (Cal.com) : nom, e-mail, créneau choisi — pour organiser l'appel découverte.",
              "Formulaire d'onboarding client : informations sur votre entreprise, vos zones et vos visuels — pour exécuter le contrat d'abonnement (base légale : exécution du contrat).",
              "Mesure d'audience (Vercel Analytics) : statistiques de visite agrégées et anonymes, sans cookie publicitaire.",
            ],
            "Nous ne vendons ni ne louons vos données. Elles ne sont jamais utilisées à d'autres fins que celles listées ci-dessus.",
          ],
        },
        {
          h: "Destinataires et sous-traitants",
          p: [
            "Vos données sont traitées par l'éditeur et par des sous-traitants techniques qui agissent sur instruction : Vercel (hébergement), Supabase (base de données et stockage), Make (automatisation des formulaires), Resend (envoi d'e-mails), Cal.com (prise de rendez-vous). Certains de ces prestataires peuvent héberger des données hors de l'Union européenne ; les transferts sont encadrés par les clauses contractuelles types de la Commission européenne.",
          ],
        },
        {
          h: "Durée de conservation",
          p: [
            [
              "Prospects : 3 ans à compter du dernier contact.",
              "Clients : pendant la durée du contrat, puis selon les durées légales (10 ans pour les pièces comptables).",
            ],
          ],
        },
        {
          h: "Vos droits",
          p: [
            `Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour l'exercer, écrivez à ${CONTACT.email}. Nous répondons sous un mois.`,
            "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (cnil.fr).",
          ],
        },
        {
          h: "Cookies",
          p: [
            "Le site n'utilise pas de cookie publicitaire. Seuls des éléments techniques nécessaires au fonctionnement (par exemple la mémorisation de l'écran d'accueil pendant la session) sont stockés dans votre navigateur.",
          ],
        },
      ]}
    />
  );
}
