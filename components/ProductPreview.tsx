"use client";

/**
 * Section produit — rend la VRAIE interface du tableau de bord client
 * (miroir fidèle de dashboard/src/components/client-portal/accueil-content.tsx),
 * alimentée par un jeu de données de démonstration. Mêmes tokens, mêmes classes,
 * mêmes composants (StatCard / Badge / table des demandes) que le produit réel.
 * Volontairement sans recharts / framer-motion pour rester léger sur mobile.
 */

const euros = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

/* ─── Icônes inline (équivalents lucide, sans dépendance) ─── */
function IArrowUp() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}
function IArrowDown() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7l10 10M17 8v9H8" />
    </svg>
  );
}
function IArrowUpRight() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/* ─── Primitive : StatCard (portée depuis ui/stat-card.tsx) ─── */
function StatCard({
  label,
  value,
  delta,
  deltaLabel = "vs mois dernier",
  invertDelta = false,
  highlight = false,
}: {
  label: string;
  value: React.ReactNode;
  delta?: number | null;
  deltaLabel?: string;
  invertDelta?: boolean;
  highlight?: boolean;
}) {
  const up = (delta ?? 0) >= 0;
  const good = invertDelta ? !up : up;
  return (
    <div className={`rounded-[20px] p-5 shadow-ds-sm ${highlight ? "bg-brand-400 text-white" : "border border-stroke bg-surface"}`}>
      <span className={`text-[12px] font-medium uppercase tracking-wide ${highlight ? "text-white/80" : "text-faint"}`}>
        {label}
      </span>
      <div className={`tnum mt-2 text-[26px] sm:text-[30px] font-semibold leading-none tracking-[-0.02em] ${highlight ? "text-white" : "text-foreground"}`}>
        {value}
      </div>
      {delta != null ? (
        <div className="mt-2.5 flex items-center gap-2">
          <span
            className={`tnum inline-flex items-center gap-0.5 rounded-pill px-1.5 py-0.5 text-[12px] font-semibold ${
              highlight ? "bg-white/20 text-white" : good ? "bg-brand-50 text-brand-700" : "bg-danger/10 text-danger"
            }`}
          >
            {up ? <IArrowUp /> : <IArrowDown />}
            {Math.abs(delta)}%
          </span>
          <span className={`text-[12px] ${highlight ? "text-white/70" : "text-faint"}`}>{deltaLabel}</span>
        </div>
      ) : null}
    </div>
  );
}

/* ─── Primitive : Badge (portée depuis ui/badge.tsx) ─── */
type BadgeVariant = "warning" | "info" | "brand" | "success";
function Badge({ variant, children }: { variant: BadgeVariant; children: React.ReactNode }) {
  const styles: Record<BadgeVariant, string> = {
    warning: "bg-warning/15 text-warning",
    info: "bg-info/10 text-info",
    brand: "bg-brand-50 text-brand-700",
    success: "bg-brand-500 text-white",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-[12px] font-semibold leading-5 ${styles[variant]}`}>
      {children}
    </span>
  );
}

/* ─── Données de démonstration ─── */
const KPIS = [
  { label: "Demandes reçues", value: "42", delta: 18 },
  { label: "Coût par demande", value: "9,40 €", delta: -12, invertDelta: true },
  { label: "Visites calées", value: "11", delta: 22 },
  { label: "Chantiers signés", value: euros(21300), delta: 8, highlight: true },
];

type Statut = "rappeler" | "visite" | "devis" | "signe";
const STATUT: Record<Statut, { label: string; variant: BadgeVariant }> = {
  rappeler: { label: "À rappeler", variant: "warning" },
  visite: { label: "Visite calée", variant: "info" },
  devis: { label: "Devis envoyé", variant: "brand" },
  signe: { label: "Signé", variant: "success" },
};

const DEMANDES: {
  initials: string;
  nom: string;
  ville: string;
  projet: string;
  recu: string;
  statut: Statut;
  montant: number | null;
}[] = [
  { initials: "JD", nom: "Jean Dupont", ville: "Melun (77)", projet: "Résine de sol — garage", recu: "il y a 2 h", statut: "rappeler", montant: null },
  { initials: "SB", nom: "Sophie Bernard", ville: "Versailles (78)", projet: "Béton ciré — terrasse", recu: "hier", statut: "visite", montant: null },
  { initials: "KH", nom: "Karim Haddad", ville: "Créteil (94)", projet: "Ravalement de façade", recu: "hier", statut: "devis", montant: null },
  { initials: "LM", nom: "Laure Mercier", ville: "Cergy (95)", projet: "Béton ciré — séjour", recu: "il y a 2 j", statut: "signe", montant: 7200 },
  { initials: "TP", nom: "Thomas Petit", ville: "Meaux (77)", projet: "Résine — cour extérieure", recu: "il y a 3 j", statut: "signe", montant: 12400 },
];

const POINTS = [
  { t: "La demande arrive seule", d: "Avec la ville, le projet et le délai annoncé. Vous savez qui rappeler et pour quoi, sans rien saisir." },
  { t: "Le devis se prépare tout seul", d: "Au retour de visite, vous dictez ce que vous avez vu — le devis se monte à vos prix, prêt à envoyer." },
  { t: "Le lundi, vous avez le bilan", d: "Ce que la semaine a coûté, ce qu'elle a rapporté, et les chantiers signés. Noir sur blanc." },
];

/* ─── Cadre « application » ─── */
function RailIcon({ d, active = false }: { d: string; active?: boolean }) {
  return (
    <div className={`flex h-9 w-9 items-center justify-center rounded-[12px] ${active ? "bg-brand-50 text-brand-600" : "text-faint"}`}>
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}

export default function ProductPreview() {
  return (
    <section id="produit" className="py-16 sm:py-24 lg:py-28 bg-bg scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-dark mb-3">
            Votre tableau de bord
          </div>
          <h2 className="font-display text-display-md mb-4">
            Pas une promesse. <span className="text-emerald-dark">Un produit.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Chaque demande que votre publicité génère atterrit ici : la ville, le projet, le statut, le montant. Vous la suivez du premier contact jusqu&apos;au chantier signé. Voici l&apos;écran que vous avez sous les yeux — le vrai.
          </p>
        </div>

        {/* Cadre application */}
        <div className="rounded-[24px] md:rounded-[30px] bg-canvas p-2 sm:p-3 shadow-lift border border-stroke">
          <div className="overflow-hidden rounded-[18px] md:rounded-[22px] bg-surface border border-stroke">
            {/* Topbar */}
            <div className="flex h-14 items-center justify-between gap-3 border-b border-stroke px-4 sm:px-5">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="font-display text-base font-bold tracking-tight">
                  Crea<span className="text-emerald-dark">Leads</span>
                </span>
                <span className="hidden sm:inline text-[12px] text-faint truncate">dashboard.crealeads.fr</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-surface-alt text-faint">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-brand-400 ring-2 ring-surface" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">ÉG</span>
              </div>
            </div>

            {/* Corps : rail + contenu */}
            <div className="flex">
              {/* Rail (desktop) */}
              <div className="hidden lg:flex w-16 shrink-0 flex-col items-center gap-1.5 border-r border-stroke py-4">
                <RailIcon active d="M4 13h7V4H4v9zm9 7h7v-9h-7v9zM4 20h7v-5H4v5zM13 4v5h7V4h-7z" />
                <RailIcon d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                <RailIcon d="M9 12h6M9 16h6M9 8h6M5 4h14v16H5z" />
                <RailIcon d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8l9-5 9 5" />
                <RailIcon d="M4 19V10M9 19V4M14 19v-7M19 19v-4" />
              </div>

              {/* Contenu */}
              <div className="min-w-0 flex-1 p-4 sm:p-5 space-y-4">
                {/* Titre de page */}
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h3 className="text-[20px] sm:text-[24px] font-semibold leading-tight tracking-[-0.01em]">
                      Bonjour, <span className="font-normal text-faint">Éric</span>
                    </h3>
                    <p className="mt-0.5 text-[13px] text-muted">Epoxy Design France · Île-de-France</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-pill border border-stroke bg-surface px-3 py-1.5 text-[12px] font-medium text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> 01 – 31 août
                  </span>
                </div>

                {/* KPIs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {KPIS.map((k) => (
                    <StatCard key={k.label} {...k} />
                  ))}
                </div>

                {/* Demandes */}
                <div className="rounded-[20px] border border-stroke bg-surface p-4 sm:p-[18px] shadow-ds-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-brand-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
                      </span>
                      <h4 className="text-sm font-semibold">Vos dernières demandes</h4>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-stroke text-muted"><IArrowUpRight /></span>
                  </div>

                  {/* Table desktop */}
                  <div className="hidden overflow-x-auto sm:block">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-[11px] uppercase tracking-wide text-faint">
                          <th className="py-2 pr-2 font-semibold">Contact</th>
                          <th className="px-2 py-2 font-semibold">Projet</th>
                          <th className="px-2 py-2 font-semibold">Reçu</th>
                          <th className="px-2 py-2 font-semibold">Statut</th>
                          <th className="py-2 pl-2 text-right font-semibold">Montant</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stroke">
                        {DEMANDES.map((d, i) => (
                          <tr key={i} className="transition-colors hover:bg-brand-50/50">
                            <td className="py-2.5 pr-2">
                              <span className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">{d.initials}</span>
                                <span className="min-w-0">
                                  <span className="block truncate font-medium">{d.nom}</span>
                                  <span className="block text-[11px] text-faint">{d.ville}</span>
                                </span>
                              </span>
                            </td>
                            <td className="max-w-[180px] truncate px-2 py-2.5 text-muted">{d.projet}</td>
                            <td className="whitespace-nowrap px-2 py-2.5 text-muted">{d.recu}</td>
                            <td className="px-2 py-2.5"><Badge variant={STATUT[d.statut].variant}>{STATUT[d.statut].label}</Badge></td>
                            <td className="tnum whitespace-nowrap py-2.5 pl-2 text-right font-medium">{d.montant ? euros(d.montant) : "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Cartes mobile */}
                  <div className="space-y-2 sm:hidden">
                    {DEMANDES.map((d, i) => (
                      <div key={i} className="flex items-center gap-2.5 rounded-[14px] border border-stroke p-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">{d.initials}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[13px] font-medium">{d.nom}</span>
                          <span className="block truncate text-[11px] text-faint">{d.ville} · {d.projet}</span>
                        </span>
                        <span className="flex shrink-0 flex-col items-end gap-1">
                          <Badge variant={STATUT[d.statut].variant}>{STATUT[d.statut].label}</Badge>
                          {d.montant ? <span className="tnum text-[12px] font-semibold">{euros(d.montant)}</span> : null}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 points */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
          {POINTS.map((p, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[13px] font-bold text-brand-700">{i + 1}</span>
              <div>
                <div className="font-display font-bold text-[15px] mb-1">{p.t}</div>
                <p className="text-sm text-muted leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
