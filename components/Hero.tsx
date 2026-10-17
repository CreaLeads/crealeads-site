import Link from "next/link";

const euros = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

// Résultats clients réels — la preuve dès le premier écran
const PROOF = [
  { v: "40 k€", l: "de CA mensuel", who: "SurfaceBéton, résine (IDF)" },
  { v: "60", l: "demandes en 5 jours", who: "SurfaceBéton, au lancement" },
  { v: "×2", l: "de chiffre d'affaires", who: "Eirlly, Lyon" },
  { v: "×3", l: "de rendez-vous par mois", who: "Adame, résine (93)" },
];

/* Fenêtre « application » : la vraie interface du tableau de bord, en réduction */
function MiniDash() {
  const rows = [
    { ini: "JD", nom: "Jean Dupont", ville: "Melun (77)", label: "À rappeler", cls: "bg-warning/15 text-warning", montant: null as number | null },
    { ini: "SB", nom: "Sophie Bernard", ville: "Versailles (78)", label: "Visite calée", cls: "bg-info/10 text-info", montant: null },
    { ini: "LM", nom: "Laure Mercier", ville: "Cergy (95)", label: "Signé", cls: "bg-brand-500 text-white", montant: 7200 },
  ];
  return (
    <div className="relative" aria-label="Aperçu du tableau de bord CreaLeads (données de démonstration)">
      <div className="rounded-[22px] border border-stroke bg-surface shadow-lift overflow-hidden">
        <div className="flex items-center justify-between h-11 px-4 border-b border-stroke">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-display text-sm font-bold">Crea<span className="text-emerald-dark">Leads</span></span>
            <span className="hidden sm:inline text-[11px] text-faint truncate">dashboard.crealeads.fr</span>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-[10px] font-semibold text-brand-700">ÉG</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-[15px] font-semibold leading-none">Bonjour, <span className="text-faint font-normal">Éric</span></div>
              <div className="text-[11px] text-muted mt-1">Résine de sol · Île-de-France</div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-stroke px-2.5 py-1 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> ce mois-ci
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[16px] border border-stroke p-3">
              <div className="text-[10px] uppercase tracking-wide text-faint">Demandes reçues</div>
              <div className="tnum text-[24px] font-semibold leading-none mt-1.5">42</div>
              <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-pill bg-brand-50 text-brand-700 px-1.5 py-0.5 text-[11px] font-semibold tnum">↗ 18%</div>
            </div>
            <div className="rounded-[16px] bg-brand-400 text-white p-3">
              <div className="text-[10px] uppercase tracking-wide text-white/80">Chantiers signés</div>
              <div className="tnum text-[24px] font-semibold leading-none mt-1.5">{euros(21300)}</div>
              <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-pill bg-white/20 px-1.5 py-0.5 text-[11px] font-semibold tnum">↗ 8%</div>
            </div>
          </div>
          <div className="rounded-[16px] border border-stroke p-3">
            <div className="text-[11px] font-semibold mb-2">Dernières demandes</div>
            <div className="space-y-2">
              {rows.map((r) => (
                <div key={r.ini} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[10px] font-semibold text-brand-700">{r.ini}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-medium">{r.nom}</span>
                    <span className="block text-[10px] text-faint">{r.ville}</span>
                  </span>
                  {r.montant ? <span className="tnum text-[11px] font-semibold shrink-0">{euros(r.montant)}</span> : null}
                  <span className={`shrink-0 rounded-pill px-2 py-0.5 text-[10px] font-semibold ${r.cls}`}>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 left-3 sm:-left-3 inline-flex items-center gap-2 rounded-pill bg-surface border border-stroke shadow-lift px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-[11px] font-semibold">Nouvelle demande · qualifiée</span>
      </div>
      <p className="mt-3 text-center text-[11px] text-faint">Tableau de bord réel, données de démonstration</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
          <div>
            <p className="font-display text-lg sm:text-xl text-muted mb-4">
              Le bouche-à-oreille a une <span className="italic">limite</span>. Nous, on n&apos;en a pas.
            </p>

            <h1 className="font-display text-display-lg mb-5 sm:mb-6">
              Des chantiers en plus chaque mois, <span className="text-emerald-dark">pour les artisans du bâtiment.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted mb-8 max-w-xl leading-relaxed">
              On lance vos publicités Facebook et Instagram sur votre zone, on trie les demandes pour vous, et vous suivez tout jusqu&apos;au chantier signé dans un seul tableau de bord.{" "}
              <strong className="text-ink font-semibold">50 à 100 demandes qualifiées par mois</strong>, rien qu&apos;à vous.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="#contact" className="btn-primary px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-full text-center">
                <span>Vérifier si mon secteur est libre</span>
              </Link>
              <Link href="#produit" className="px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors text-center">
                Voir le tableau de bord
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-sm text-muted">
              {["Premières demandes sous 72 h", "Un seul artisan par métier et par zone", "497 €/mois, sans engagement"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-2">
            <MiniDash />
          </div>
        </div>

        {/* Preuve immédiate */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 rounded-[24px] border border-stroke bg-surface shadow-ds-sm overflow-hidden">
          {PROOF.map((p, i) => (
            <div key={p.l} className={`p-5 sm:p-6 ${i % 2 === 1 ? "border-l border-stroke" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-stroke" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
              <div className="tnum font-display text-3xl sm:text-4xl font-extrabold text-emerald-dark leading-none mb-2">{p.v}</div>
              <div className="text-sm font-medium leading-snug">{p.l}</div>
              <div className="text-[12px] text-faint mt-1">{p.who}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
