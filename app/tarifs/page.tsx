"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rows = [
  { label: "Abonnement mensuel", values: ["197 €/mois", "397 €/mois", "697 €/mois"], head: true },
  { label: "Frais de mise en place", values: ["Aucun", "Aucun", "Aucun"], head: true },
  { label: "Engagement", values: ["Sans engagement", "Sans engagement", "Sans engagement"] },
  { label: "Théo — acquisition Meta", values: [true, true, true] },
  { label: "Iris — studio créa", values: [true, true, true] },
  { label: "Lucie — réceptionniste 24/7", values: [false, true, true] },
  { label: "Victor — analyste", values: [false, true, true] },
  { label: "Amandine — votre bras droit", values: [false, false, true] },
  { label: "Marco — contenu réseaux", values: [false, false, true] },
  { label: "Campagnes Meta", values: ["1 (prospection)", "2 (prospection + retargeting)", "2 + lookalike"] },
  { label: "Visuels IA", values: ["Visuels de lancement", "Renouvelés automatiquement", "Renouvelés automatiquement"] },
  { label: "Chatbot SMS de qualification", values: [true, true, true] },
  { label: "CRM automatisé", values: [true, true, true] },
  { label: "Site vitrine", values: [true, true, true] },
  { label: "Notification à chaque lead", values: [true, true, true] },
  { label: "Retargeting", values: [false, true, true] },
  { label: "Reporting automatique", values: [false, "Mensuel", "Mensuel"] },
  { label: "Audiences lookalike", values: [false, false, true] },
  { label: "Google My Business géré", values: [false, false, true] },
  { label: "Google Ads automatique", values: [false, false, true] },
  { label: "Multi-zone / multi-métier", values: [false, false, true] },
  { label: "Support", values: ["E-mail", "Prioritaire", "Prioritaire sous 1 h"] },
  { label: "Exclusivité zone et métier", values: [true, true, true] },
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
            Comparez nos trois offres en détail. Aucun frais de mise en place, aucun coût caché. Vous savez exactement ce que vous payez et ce que vous obtenez.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* En-têtes des offres (sticky en haut du tableau) */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 mb-2 sticky top-20 sm:top-24 bg-bg/95 backdrop-blur-sm py-4 z-10 rounded-2xl">
            <div className="hidden sm:block" />
            <div className="text-center">
              <div className="font-display font-bold text-sm sm:text-lg">STARTER</div>
            </div>
            <div className="text-center relative">
              <div className="font-display font-bold text-sm sm:text-lg text-emerald">PRO</div>
              <div className="text-[10px] sm:text-xs text-ink-60">Le plus choisi</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-sm sm:text-lg">SCALE</div>
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

          {/* Mentions communes */}
          <div className="mt-6 rounded-2xl border border-ink-10 bg-ink-05 p-5 sm:p-6 text-sm text-ink-60 leading-relaxed space-y-1.5">
            <p><strong className="text-ink">Aucun frais de mise en place</strong> — le build complet (campagnes, formulaire, CRM, site vitrine, agents) est intégré dans l&apos;abonnement.</p>
            <p><strong className="text-ink">Budget publicitaire payé à part</strong> — versé directement à Meta depuis votre compte, jamais inclus dans l&apos;abonnement.</p>
            <p><strong className="text-ink">Sans engagement</strong> · livraison sous 14 jours · exclusivité par zone et métier.</p>
          </div>

          {/* CTAs par colonne */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
            <a href="https://cal.eu/enzo-crealeads/20min" target="_blank" rel="noopener noreferrer" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm border border-ink-20 hover:border-ink transition-colors">
              Choisir STARTER
            </a>
            <a href="https://cal.eu/enzo-crealeads/20min" target="_blank" rel="noopener noreferrer" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm bg-emerald text-ink hover:bg-emerald-light transition-colors">
              Choisir PRO
            </a>
            <a href="https://cal.eu/enzo-crealeads/20min" target="_blank" rel="noopener noreferrer" className="text-center px-6 py-3.5 rounded-full font-semibold text-sm border border-ink-20 hover:border-ink transition-colors">
              Choisir SCALE
            </a>
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
