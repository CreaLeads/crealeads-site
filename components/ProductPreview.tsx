"use client";

import { useState } from "react";

/**
 * Section produit — aperçu INTERACTIF du tableau de bord client.
 * Reprend le design system du dashboard (dashboard/src/components/*),
 * porté fidèlement (mêmes tokens/classes), alimenté en données démo.
 * 5 onglets cliquables : le visiteur explore les fonctionnalités réelles.
 * Sans recharts/framer → léger sur mobile.
 */

const euros = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

/* ─── Badge (porté depuis ui/badge.tsx) ─── */
type BadgeVariant = "warning" | "info" | "brand" | "success" | "neutral";
const BADGE: Record<BadgeVariant, string> = {
  warning: "bg-warning/15 text-warning",
  info: "bg-info/10 text-info",
  brand: "bg-brand-50 text-brand-700",
  success: "bg-brand-500 text-white",
  neutral: "bg-stroke text-muted",
};
function Badge({ variant, children }: { variant: BadgeVariant; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-[12px] font-semibold leading-5 ${BADGE[variant]}`}>
      {children}
    </span>
  );
}

/* ─── StatCard (porté depuis ui/stat-card.tsx) ─── */
function StatCard({ label, value, delta, invertDelta = false, highlight = false }: {
  label: string; value: React.ReactNode; delta?: number | null; invertDelta?: boolean; highlight?: boolean;
}) {
  const up = (delta ?? 0) >= 0;
  const good = invertDelta ? !up : up;
  return (
    <div className={`rounded-[20px] p-4 sm:p-5 shadow-ds-sm ${highlight ? "bg-brand-400 text-white" : "border border-stroke bg-surface"}`}>
      <span className={`text-[11px] sm:text-[12px] font-medium uppercase tracking-wide ${highlight ? "text-white/80" : "text-faint"}`}>{label}</span>
      <div className={`tnum mt-2 text-[22px] sm:text-[28px] font-semibold leading-none tracking-[-0.02em] ${highlight ? "text-white" : "text-foreground"}`}>{value}</div>
      {delta != null ? (
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className={`tnum inline-flex items-center gap-0.5 rounded-pill px-1.5 py-0.5 text-[12px] font-semibold ${highlight ? "bg-white/20 text-white" : good ? "bg-brand-50 text-brand-700" : "bg-danger/10 text-danger"}`}>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d={up ? "M7 17L17 7M8 7h9v9" : "M7 7l10 10M17 8v9H8"} /></svg>
            {Math.abs(delta)}%
          </span>
          <span className={`text-[11px] ${highlight ? "text-white/70" : "text-faint"}`}>vs mois dernier</span>
        </div>
      ) : null}
    </div>
  );
}

function Avatar({ children }: { children: React.ReactNode }) {
  return <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">{children}</span>;
}

function Icon({ d, className = "h-[18px] w-[18px]" }: { d: string; className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>;
}

/* ─── Onglets ─── */
const TABS = [
  { key: "overview", label: "Vue d'ensemble", d: "M4 13h7V4H4v9zm9 7h7v-9h-7v9zM4 20h7v-5H4v5zM13 4v5h7V4h-7z" },
  { key: "campagnes", label: "Campagnes", d: "M3 11l19-9-9 19-2-8-8-2z" },
  { key: "rdv", label: "Rendez-vous", d: "M8 7V3M16 7V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" },
  { key: "relances", label: "Relances", d: "M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-15-2M4 15a8 8 0 0015 2" },
  { key: "devis", label: "Devis", d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6" },
] as const;
type TabKey = (typeof TABS)[number]["key"];

/* ─── Données démo ─── */
const KPIS = [
  { label: "Demandes reçues", value: "42", delta: 18 },
  { label: "Coût par demande", value: "9,40 €", delta: -12, invertDelta: true },
  { label: "Visites calées", value: "11", delta: 22 },
  { label: "Chantiers signés", value: euros(21300), delta: 8, highlight: true },
];

const STATUT: Record<string, { label: string; variant: BadgeVariant }> = {
  rappeler: { label: "À rappeler", variant: "warning" },
  visite: { label: "Visite calée", variant: "info" },
  devis: { label: "Devis envoyé", variant: "brand" },
  signe: { label: "Signé", variant: "success" },
};
const DEMANDES = [
  { ini: "JD", nom: "Jean Dupont", ville: "Melun (77)", projet: "Résine de sol — garage", recu: "il y a 2 h", statut: "rappeler", montant: null as number | null },
  { ini: "SB", nom: "Sophie Bernard", ville: "Versailles (78)", projet: "Béton ciré — terrasse", recu: "hier", statut: "visite", montant: null },
  { ini: "KH", nom: "Karim Haddad", ville: "Créteil (94)", projet: "Ravalement de façade", recu: "hier", statut: "devis", montant: null },
  { ini: "LM", nom: "Laure Mercier", ville: "Cergy (95)", projet: "Béton ciré — séjour", recu: "il y a 2 j", statut: "signe", montant: 7200 },
  { ini: "TP", nom: "Thomas Petit", ville: "Meaux (77)", projet: "Résine — cour", recu: "il y a 3 j", statut: "signe", montant: 12400 },
];

const CAMPAGNES = [
  { nom: "Résine de sol — Île-de-France", statut: "active" as const, budget: "20 €/j", cpl: "9,40 €", leads: 28, bars: [40, 55, 45, 70, 60, 82, 100] },
  { nom: "Retargeting — visiteurs 30 j", statut: "active" as const, budget: "8 €/j", cpl: "4,10 €", leads: 14, bars: [30, 45, 40, 55, 50, 62, 72] },
  { nom: "Béton ciré — Google Ads", statut: "apprentissage" as const, budget: "12 €/j", cpl: "—", leads: 3, bars: [10, 18, 14, 24, 30, 26, 34] },
];

const RDV = [
  { j: "Jeu.", h: "14:00", ini: "SB", nom: "Sophie Bernard", ville: "Versailles (78)", projet: "Béton ciré — terrasse" },
  { j: "Ven.", h: "09:30", ini: "KH", nom: "Karim Haddad", ville: "Créteil (94)", projet: "Ravalement de façade" },
  { j: "Ven.", h: "16:00", ini: "JD", nom: "Jean Dupont", ville: "Melun (77)", projet: "Résine — garage" },
  { j: "Lun.", h: "10:00", ini: "NC", nom: "Nadia Colin", ville: "Cergy (95)", projet: "Béton ciré — séjour" },
];

const RELANCES = [
  { ini: "LF", nom: "Luc Fabre", ville: "Meaux (77)", depuis: "il y a 5 jours", tel: "06 12 34 56 78" },
  { ini: "AP", nom: "Anne Petit", ville: "Cergy (95)", depuis: "il y a 6 jours", tel: "06 98 76 54 32" },
  { ini: "HB", nom: "Hugo Blanc", ville: "Melun (77)", depuis: "il y a 8 jours", tel: "06 55 66 77 88" },
];

const DEVIS = [
  { num: "DV-0042", ini: "LM", nom: "Laure Mercier", montant: 7200, statut: "accepte" as const },
  { num: "DV-0041", ini: "KH", nom: "Karim Haddad", montant: 6800, statut: "envoye" as const },
  { num: "DV-0040", ini: "TP", nom: "Thomas Petit", montant: 12400, statut: "accepte" as const },
  { num: "DV-0039", ini: "SB", nom: "Sophie Bernard", montant: null as number | null, statut: "brouillon" as const },
];
const DEVIS_BADGE: Record<string, { label: string; variant: BadgeVariant }> = {
  accepte: { label: "Accepté", variant: "success" },
  envoye: { label: "Envoyé", variant: "info" },
  brouillon: { label: "Brouillon", variant: "neutral" },
};

/* ─── Vues ─── */
function CardBox({ title, icon, children, right }: { title: string; icon: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="rounded-[20px] border border-stroke bg-surface p-4 sm:p-[18px] shadow-ds-sm">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-brand-500"><Icon d={icon} className="h-4 w-4" /></span>
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

function OverviewView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {KPIS.map((k) => <StatCard key={k.label} {...k} />)}
      </div>
      <CardBox title="Vos dernières demandes" icon="M13 2L3 14h7l-1 8 10-12h-7l1-8z">
        {/* Desktop */}
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
                  <td className="py-2.5 pr-2"><span className="flex items-center gap-2.5"><Avatar>{d.ini}</Avatar><span className="min-w-0"><span className="block truncate font-medium">{d.nom}</span><span className="block text-[11px] text-faint">{d.ville}</span></span></span></td>
                  <td className="max-w-[180px] truncate px-2 py-2.5 text-muted">{d.projet}</td>
                  <td className="whitespace-nowrap px-2 py-2.5 text-muted">{d.recu}</td>
                  <td className="px-2 py-2.5"><Badge variant={STATUT[d.statut].variant}>{STATUT[d.statut].label}</Badge></td>
                  <td className="tnum whitespace-nowrap py-2.5 pl-2 text-right font-medium">{d.montant ? euros(d.montant) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile */}
        <div className="space-y-2 sm:hidden">
          {DEMANDES.map((d, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-[14px] border border-stroke p-2.5">
              <Avatar>{d.ini}</Avatar>
              <span className="min-w-0 flex-1"><span className="block truncate text-[13px] font-medium">{d.nom}</span><span className="block truncate text-[11px] text-faint">{d.ville} · {d.projet}</span></span>
              <span className="flex shrink-0 flex-col items-end gap-1"><Badge variant={STATUT[d.statut].variant}>{STATUT[d.statut].label}</Badge>{d.montant ? <span className="tnum text-[12px] font-semibold">{euros(d.montant)}</span> : null}</span>
            </div>
          ))}
        </div>
      </CardBox>
    </div>
  );
}

function CampagnesView() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard label="Budget du mois" value="920 €" />
        <StatCard label="Coût par lead" value="7,80 €" delta={-9} invertDelta />
        <StatCard label="Leads générés" value="45" delta={16} highlight />
      </div>
      {CAMPAGNES.map((c, i) => (
        <div key={i} className="rounded-[20px] border border-stroke bg-surface p-4 shadow-ds-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm truncate">{c.nom}</span>
                <Badge variant={c.statut === "active" ? "success" : "warning"}>{c.statut === "active" ? "Active" : "Apprentissage"}</Badge>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-[12px] text-muted tnum">
                <span>Budget <span className="text-foreground font-medium">{c.budget}</span></span>
                <span>CPL <span className="text-foreground font-medium">{c.cpl}</span></span>
                <span><span className="text-foreground font-medium">{c.leads}</span> leads ce mois</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-9 shrink-0">
              {c.bars.map((v, j) => (
                <span key={j} style={{ height: `${v}%` }} className={`w-1.5 rounded-full ${j === c.bars.length - 1 ? "bg-brand-500" : "bg-brand-200"}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <p className="text-[12px] text-faint px-1">Théo pilote vos campagnes et ajuste les enchères chaque semaine pour faire baisser le coût par demande.</p>
    </div>
  );
}

function RdvView() {
  return (
    <CardBox title="Prochains rendez-vous" icon="M8 7V3M16 7V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" right={<span className="text-[12px] text-faint">{RDV.length} visites</span>}>
      <ul className="space-y-2">
        {RDV.map((r, i) => (
          <li key={i} className="flex items-center gap-3 rounded-[14px] border border-stroke p-2.5 sm:p-3">
            <span className="flex flex-col items-center justify-center rounded-[10px] bg-brand-50 px-2.5 py-1.5 text-brand-700 shrink-0">
              <span className="text-[10px] font-semibold uppercase leading-none">{r.j}</span>
              <span className="tnum text-[15px] font-bold leading-tight">{r.h}</span>
            </span>
            <Avatar>{r.ini}</Avatar>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] sm:text-sm font-medium">{r.nom}</span>
              <span className="block truncate text-[11px] text-faint">{r.ville} · {r.projet}</span>
            </span>
            <span className="hidden sm:inline"><Badge variant="info">Visite</Badge></span>
          </li>
        ))}
      </ul>
    </CardBox>
  );
}

function RelancesView() {
  return (
    <CardBox title="À relancer" icon="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-15-2M4 15a8 8 0 0015 2" right={<span className="text-[12px] text-faint">{RELANCES.length} contacts</span>}>
      <ul className="space-y-2">
        {RELANCES.map((r, i) => (
          <li key={i} className="flex items-center gap-2.5 rounded-[14px] border border-stroke p-2.5 sm:p-3">
            <Avatar>{r.ini}</Avatar>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] sm:text-sm font-medium">{r.nom}</span>
              <span className="block truncate text-[11px] text-faint">{r.ville} · sans nouvelle {r.depuis}</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stroke text-muted"><Icon d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9 11a16 16 0 006 6l1.36-1.25a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" className="h-3.5 w-3.5" /></span>
              <span className="hidden sm:flex h-7 items-center rounded-pill bg-brand-500 px-3 text-[11px] font-semibold text-white">Relancer</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[12px] text-faint">Lucie repère les contacts sans réponse et vous dit qui relancer ; vous n&apos;intervenez que sur les contacts chauds.</p>
    </CardBox>
  );
}

function DevisView() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Signé ce mois" value={euros(19600)} delta={12} highlight />
        <StatCard label="En attente" value={euros(6800)} />
      </div>
      <CardBox title="Vos devis" icon="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6" right={<span className="hidden sm:inline text-[12px] font-medium text-brand-600">+ Nouveau devis</span>}>
        <ul className="divide-y divide-stroke">
          {DEVIS.map((d, i) => (
            <li key={i} className="flex items-center gap-2.5 py-2.5">
              <Avatar>{d.ini}</Avatar>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] sm:text-sm font-medium">{d.nom}</span>
                <span className="tnum block text-[11px] text-faint">{d.num}</span>
              </span>
              <span className="tnum text-sm font-semibold w-[70px] text-right">{d.montant ? euros(d.montant) : "—"}</span>
              <span className="w-[86px] text-right"><Badge variant={DEVIS_BADGE[d.statut].variant}>{DEVIS_BADGE[d.statut].label}</Badge></span>
            </li>
          ))}
        </ul>
      </CardBox>
      <p className="text-[12px] text-faint px-1">Au retour de visite, dictez ce que vous avez vu — le devis se prépare à vos prix, prêt à envoyer.</p>
    </div>
  );
}

const VIEWS: Record<TabKey, () => React.ReactElement> = {
  overview: OverviewView,
  campagnes: CampagnesView,
  rdv: RdvView,
  relances: RelancesView,
  devis: DevisView,
};

export default function ProductPreview() {
  const [active, setActive] = useState<TabKey>("overview");
  const View = VIEWS[active];

  return (
    <section id="produit" className="py-16 sm:py-24 lg:py-28 bg-bg scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-dark mb-3">
            Votre tableau de bord
          </div>
          <h2 className="font-display text-display-md mb-4">
            Tout au même endroit. <span className="text-emerald-dark">Cliquez, explorez.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Campagnes, demandes, rendez-vous, relances, devis : votre acquisition entière tient dans un seul écran. Voici le vrai produit — parcourez-le comme vos clients le feront.
          </p>
        </div>

        {/* Cadre application */}
        <div className="rounded-[24px] md:rounded-[30px] bg-canvas p-2 sm:p-3 shadow-lift border border-stroke">
          <div className="overflow-hidden rounded-[18px] md:rounded-[22px] bg-surface border border-stroke">
            {/* Topbar */}
            <div className="flex h-14 items-center justify-between gap-3 border-b border-stroke px-4 sm:px-5">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="font-display text-base font-bold tracking-tight">Crea<span className="text-emerald-dark">Leads</span></span>
                <span className="hidden sm:inline text-[12px] text-faint truncate">dashboard.crealeads.fr</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-surface-alt text-faint">
                  <Icon d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" className="h-4 w-4" />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-brand-400 ring-2 ring-surface" />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">ÉG</span>
              </div>
            </div>

            {/* Corps */}
            <div className="flex">
              {/* Rail cliquable (desktop) */}
              <div className="hidden lg:flex w-16 shrink-0 flex-col items-center gap-1.5 border-r border-stroke py-4">
                {TABS.map((t) => (
                  <button key={t.key} onClick={() => setActive(t.key)} aria-label={t.label} title={t.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] transition-colors ${active === t.key ? "bg-brand-50 text-brand-600" : "text-faint hover:text-muted hover:bg-surface-alt"}`}>
                    <Icon d={t.d} />
                  </button>
                ))}
              </div>

              {/* Contenu */}
              <div className="min-w-0 flex-1 p-4 sm:p-5">
                {/* En-tête page */}
                <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h3 className="text-[19px] sm:text-[23px] font-semibold leading-tight tracking-[-0.01em]">Bonjour, <span className="font-normal text-faint">Éric</span></h3>
                    <p className="mt-0.5 text-[13px] text-muted">Epoxy Design France · Île-de-France</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-pill border border-stroke bg-surface px-3 py-1.5 text-[12px] font-medium text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> 01 – 31 août
                  </span>
                </div>

                {/* Barre d'onglets */}
                <div className="-mx-4 sm:-mx-5 mb-4 border-b border-stroke px-4 sm:px-5">
                  <div className="flex gap-1 overflow-x-auto pb-px" role="tablist">
                    {TABS.map((t) => (
                      <button key={t.key} onClick={() => setActive(t.key)} role="tab" aria-selected={active === t.key}
                        className={`relative flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-2.5 text-[13px] font-medium transition-colors ${active === t.key ? "text-brand-700" : "text-muted hover:text-foreground"}`}>
                        <Icon d={t.d} className="h-4 w-4" />
                        {t.label}
                        {active === t.key ? <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-brand-500" /> : null}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vue active */}
                <View />
              </div>
            </div>
          </div>
        </div>

        {/* Indice d'interactivité */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[13px] text-faint">
          <Icon d="M15 15l-2 5L9 9l11 4-5 2zM4 4l3 3M9 4v3M4 9h3" className="h-4 w-4 text-emerald-dark" />
          Cliquez sur les onglets pour explorer chaque partie du tableau de bord
        </div>

        {/* 3 points */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { t: "La demande arrive seule", d: "Avec la ville, le projet et le délai annoncé. Vous savez qui rappeler et pour quoi, sans rien saisir." },
            { t: "Le devis se prépare tout seul", d: "Au retour de visite, vous dictez ce que vous avez vu — le devis se monte à vos prix, prêt à envoyer." },
            { t: "Le lundi, vous avez le bilan", d: "Ce que la semaine a coûté, ce qu'elle a rapporté, et les chantiers signés. Noir sur blanc." },
          ].map((p, i) => (
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
