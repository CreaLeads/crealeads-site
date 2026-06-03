import Link from "next/link";

export const metadata = {
  title: "Offres — CreaLeads",
};

export default function OffresPage() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
          Offres
        </div>
        <h1 className="font-display text-display-md mb-6">
          Page en <span className="text-emerald">construction</span>
        </h1>
        <p className="text-ink-60 mb-10 leading-relaxed">
          Le détail complet des 3 offres (DÉCOLLAGE, COPILOTE, AUTOPILOTE) arrive
          très bientôt. En attendant, réserve un appel pour qu&apos;on en parle.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://cal.eu/enzo-crealeads/20min"
            className="btn-primary px-8 py-4 text-base font-semibold rounded-full"
          >
            <span>Réserver un appel</span>
          </Link>
          <Link
            href="/"
            className="px-8 py-4 text-base font-semibold rounded-full border border-ink-20 hover:border-ink transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
