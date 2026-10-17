import Link from "next/link";
import { CAL_URL } from "@/lib/site";

const INCLUS = [
  "Campagnes Facebook et Instagram ciblées sur votre métier et votre zone",
  "Visuels publicitaires créés et renouvelés en continu",
  "Qualification automatique des demandes, 24h/24",
  "Tableau de bord : demandes, rendez-vous, relances, devis",
  "Notification instantanée à chaque nouvelle demande",
  "Optimisation chaque semaine et bilan chaque lundi",
  "Exclusivité de votre métier sur votre zone",
];

const OPTIONS = [
  { name: "Google Ads", price: "+197 €/mois" },
  { name: "Retargeting", price: "+97 €/mois" },
  { name: "Zone supplémentaire", price: "+97 €/mois" },
  { name: "Contenu réseaux sociaux", price: "+147 €/mois" },
  { name: "Site vitrine pro", price: "490 € une fois" },
];

export default function OffersOverview() {
  return (
    <section id="offres" className="py-16 sm:py-24 lg:py-28 bg-canvas scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3 sm:mb-4">Tarif</div>
            <h2 className="font-display text-display-md mb-4 sm:mb-5">
              Un prix. Tout compris. <span className="text-emerald-dark">Sans engagement.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
              Pas de frais de mise en place, pas de palier à décoder, pas de contrat de 12 mois. Un chantier de quelques milliers d&apos;euros rembourse plusieurs mois d&apos;abonnement.
            </p>
            <div className="rounded-[20px] border border-stroke bg-surface p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-faint mb-3">Options, si vous voulez aller plus loin</div>
              <ul className="space-y-2">
                {OPTIONS.map((o) => (
                  <li key={o.name} className="flex items-center justify-between gap-3 text-sm">
                    <span>{o.name}</span>
                    <span className="tnum font-semibold text-emerald-dark whitespace-nowrap">{o.price}</span>
                  </li>
                ))}
              </ul>
              <Link href="/offres" className="mt-4 inline-block text-sm font-medium text-ink hover:text-emerald-dark">
                Détail de l&apos;offre et des options →
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] bg-ink text-bg p-6 sm:p-9 shadow-lift border-2 border-emerald">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="tnum font-display text-5xl sm:text-6xl font-extrabold text-emerald">497 €</span>
              <span className="text-bg/60">/mois</span>
            </div>
            <div className="text-sm text-bg/60 mb-6">Zéro frais de mise en place · Arrêt par simple e-mail</div>
            <ul className="space-y-3 mb-7">
              {INCLUS.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px]">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-bg/90">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-4 rounded-full font-bold bg-emerald text-ink hover:bg-emerald-light transition-colors"
            >
              Réserver un appel de 20 min
            </a>
            <div className="text-center text-xs text-bg/50 mt-3">
              Budget publicitaire à part : ~300 €/mois conseillé, versé directement à Meta depuis votre compte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
