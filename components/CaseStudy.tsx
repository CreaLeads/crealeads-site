"use client";

const CASES = [
  {
    metric: "×2",
    name: "Eirlly",
    loc: "Lyon",
    desc: "A doublé son chiffre d'affaires, recruté une secrétaire et un commercial. Plus de 400 contacts en 2 mois.",
  },
  {
    metric: "40 k€",
    name: "SurfaceBéton",
    loc: "Île-de-France",
    desc: "Lancée de zéro à 40 000 € de chiffre d'affaires mensuel grâce au système d'acquisition.",
  },
  {
    metric: "×3",
    name: "Adame",
    loc: "Applicateur résine",
    desc: "A triplé ses rendez-vous mensuels. Un agenda rempli en continu, mois après mois.",
  },
  {
    metric: "10→50",
    name: "Réseau franchise",
    loc: "Dax",
    desc: "Développement d'un réseau d'applicateurs : de 10 vers un objectif de 50 partout en France.",
  },
];

export default function CaseStudy() {
  return (
    <section id="resultats" className="section-dark py-16 sm:py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/30 mb-5 sm:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-xs font-medium text-emerald uppercase tracking-wider">
              Résultats réels
            </span>
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-5">
            Ils ont changé d&apos;échelle.
            <br />
            <span className="text-emerald">Et ça se voit sur le compte en banque.</span>
          </h2>
          <p className="text-base sm:text-lg text-bg/70 leading-relaxed">
            Des chiffres issus de campagnes réelles menées pour nos clients — pas des promesses en l&apos;air.
          </p>
        </div>

        {/* 2 colonnes mobile, 4 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {CASES.map((c) => (
            <div key={c.name} className="bg-bg/5 border border-bg/10 rounded-2xl p-5 sm:p-7 flex flex-col">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald mb-3 sm:mb-4 leading-none">
                {c.metric}
              </div>
              <div className="font-display font-bold text-base sm:text-lg leading-none">{c.name}</div>
              <div className="text-[11px] sm:text-xs text-emerald uppercase tracking-wider font-semibold mt-1 mb-3">{c.loc}</div>
              <p className="text-[12.5px] sm:text-sm text-bg/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
