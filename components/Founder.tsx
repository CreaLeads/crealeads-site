import { AUTHOR } from "@/lib/site";

// Qui est derrière CreaLeads : un visage et une histoire, pas une agence anonyme
export default function Founder() {
  return (
    <section className="py-16 sm:py-24 bg-surface border-y border-stroke">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start">
          <div className="flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-[28px] bg-brand-50 font-display text-3xl sm:text-4xl font-extrabold text-brand-700">
            EW
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3">Qui est derrière CreaLeads</div>
            <h2 className="font-display text-display-sm mb-4">
              « J&apos;ai grandi en voyant des artisans excellents attendre que le téléphone sonne. »
            </h2>
            <p className="text-[15.5px] text-ink/75 leading-relaxed mb-4">
              Je suis Enzo, fils d&apos;artisan. Autour de moi, le problème n&apos;a jamais été la qualité du travail : c&apos;était le flux de chantiers, irrégulier, dépendant du bouche-à-oreille, et les plateformes qui revendent la même demande à trois concurrents. CreaLeads, c&apos;est le système que j&apos;aurais voulu leur donner : des demandes à eux, triées, et des chiffres clairs sur ce que chaque euro rapporte.
            </p>
            <div className="text-sm">
              <span className="font-semibold">{AUTHOR.name}</span>
              <span className="text-muted"> · {AUTHOR.role} · </span>
              <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" className="text-emerald-dark hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
