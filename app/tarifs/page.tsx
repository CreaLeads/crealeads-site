"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rows = [
  { label: "Prix de mise en place", values: ["1 500 €", "2 500 €", "6 000 €"], head: true },
  { label: "Abonnement mensuel", values: ["—", "500 €/mois", "1 200 €/mois"], head: true },
  { label: "Engagement", values: ["Aucun", "3 mois", "6 mois"] },
  { label: "Audit métier et zone", values: [true, true, true] },
  { label: "Campagnes Meta Ads", values: ["1 campagne", "3 campagnes", "3 campagnes + similaire"] },
  { label: "Visuels publicitaires", values: ["2 à 3", "5+ renouvelés/mois", "5+ adaptés par segment"] },
  { label: "Gestion Google My Business", values: [false, true, true] },
  { label: "Retargeting", values: [false, true, true] },
  { label: "Audience similaire", values: [false, true, true] },
  { label: "CRM", values: ["Google Sheets", "Airtable avancé", "Airtable + IA"] },
  { label: "Notification des prospects", values: ["WhatsApp", "WhatsApp + alertes", "Temps réel + IA"] },
  { label: "Rapport mensuel", values: [false, "Standard", "Premium + alertes"] },
  { label: "Appel de suivi", values: [false, "Mensuel", "Hebdomadaire"] },
  { label: "Support", values: ["E-mail 30 jours", "WhatsApp sous 4 h", "Prioritaire sous 1 h"] },
  { label: "Agent IA de qualification 24h/24", values: [false, false, true] },
  { label: "Brief matinal automatique", values: [false, false, true] },
  { label: "Renalto (devis automatique)", values: [false, "Compte inclus", "API intégrée"] },
  { label: "WhatsApp Business dédié", values: [false, false, true] },
  { label: "Exclusivité zone et métier", values: [true, true, true] },
  { label: "Garantie 50 % remboursé à 90 jours", values: [false, true, true] },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-ink mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-ink-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-28 pb-10 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Tarifs
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Des prix clairs, sans surprise.
          </h1>
          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed">
            Comparez nos trois offres en détail. Aucun coût caché, aucune mauvaise surprise. Vous savez exactement ce que vous payez et ce que vous obtenez.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-têtes des offres (sticky en haut du tableau) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 mb-2 sticky top-20 sm:top-24 bg-bg/95 backdrop-blur-sm py-4 z-10 rounded-2xl">
            <div className="hidden sm:block" />
            <div className="text-center">
              <div className="font-display font-bold text-sm sm:text-lg">DÉCOLLAGE</div>
            </div>
            <div className="text-center relative">
              <div className="font-display font-bold text-sm sm:text-lg text-emerald">COPILOTE</div>
              <div className="text-[10px] sm:text-xs text-ink-60">Le plus choisi</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-sm sm:text-lg">AUTOPILOTE</div>
            </div>
          </div>

          {/* Lignes du tableau */}
          <div className="border border-ink-10 rounded-2xl overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 px-3 sm:px-6 py-3.5 sm:py-4 items-center ${
                  row.head ? "bg-emerald/10 font-semibold" : i % 2 === 0 ? "bg-bg" : "bg-emerald/[0.06]"
                }`}
              >
                <div className="col-span-3 sm:col-span-1 text-center sm:text-left text-xs sm:text-sm font-medium mb-1.5 sm:mb-0">
                  {row.label}
                </div>
                {row.values.map((v, j) => (
                  <div key={j} className="text-center">
                    <Cell value={v} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTAs par colonne */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
            <Link href="/#contact" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm border border-ink-20 hover:border-ink transition-colors">
              Choisir DÉCOLLAGE
            </Link>
            <Link href="/#contact" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm bg-emerald text-ink hover:bg-emerald-light transition-colors">
              Choisir COPILOTE
            </Link>
            <Link href="/#contact" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm border border-ink-20 hover:border-ink transition-colors">
              Choisir AUTOPILOTE
            </Link>
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/offres" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors">
              Voir le détail de chaque offre
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
