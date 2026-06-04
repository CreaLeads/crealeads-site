import Link from "next/link";

export const metadata = {
  title: "Confidentialité",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-4">
          Politique de confidentialité
        </div>
        <h1 className="font-display text-display-md mb-6">
          Page en <span className="text-emerald">construction</span>
        </h1>
        <p className="text-ink-60 mb-10 leading-relaxed">
          Cette page sera disponible prochainement.
        </p>
        <Link
          href="/"
          className="px-8 py-4 text-base font-semibold rounded-full border border-ink-20 hover:border-ink transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
