import Link from "next/link";
import { METIERS } from "@/lib/landing";

// Accueil : un accès direct à la page de chaque métier
export default function MetiersGrid() {
  return (
    <section className="py-16 sm:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3">Votre métier</div>
            <h2 className="font-display text-display-md">Réglé sur votre métier, pas sur un modèle générique.</h2>
          </div>
          <Link href="/zones" className="text-sm font-medium text-ink hover:text-emerald-dark whitespace-nowrap">
            Voir les zones couvertes →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {METIERS.map((m) => (
            <Link
              key={m.slug}
              href={`/metiers/${m.slug}`}
              className="card-hover group rounded-[20px] border border-stroke bg-surface shadow-ds-sm p-4 sm:p-5 flex flex-col"
            >
              <span className="font-semibold tracking-tight text-[15px] sm:text-base mb-1">{m.name}</span>
              <span className="text-[12px] sm:text-[13px] text-muted leading-snug flex-grow">{m.kicker}</span>
              <span className="mt-3 text-[13px] font-medium text-emerald-dark group-hover:translate-x-0.5 transition-transform">Voir →</span>
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-[20px] border border-dashed border-stroke-strong p-4 sm:p-5 flex flex-col justify-center hover:border-emerald transition-colors"
          >
            <span className="font-semibold tracking-tight text-[15px] sm:text-base mb-1">Un autre métier ?</span>
            <span className="text-[12px] sm:text-[13px] text-muted leading-snug">Menuiserie, plomberie, paysagisme… Parlons-en.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
