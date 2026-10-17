import Link from "next/link";
import { METIERS, ZONES } from "@/lib/landing";
import { CONTACT, AUTHOR } from "@/lib/site";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Produit",
    links: [
      { href: "/plateforme", label: "La plateforme" },
      { href: "/offres", label: "Offre et tarifs" },
      { href: "/agents", label: "Ce qui est automatisé" },
      { href: "/alternative-plateformes-leads", label: "Alternative aux plateformes" },
      { href: "/blog", label: "Blog" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Métiers",
    links: METIERS.map((m) => ({ href: `/metiers/${m.slug}`, label: m.name })),
  },
  {
    title: "Zones",
    links: ZONES.map((z) => ({ href: `/zones/${z.slug}`, label: z.name })),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-10 py-14 sm:py-16 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-display text-2xl font-bold tracking-tight mb-4">
              Crea<span className="text-emerald">Leads</span>
            </Link>
            <p className="text-sm text-ink-60 max-w-sm leading-relaxed mb-5">
              Le système d&apos;acquisition clé en main des artisans du bâtiment. Pensé par un fils d&apos;artisan, pour les artisans.
            </p>
            <ul className="space-y-2 text-sm text-ink-60">
              <li><a href={`tel:${CONTACT.phone}`} className="hover:text-emerald-dark">{CONTACT.phoneDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-dark">{CONTACT.email}</a></li>
              <li className="flex items-center gap-3 pt-1">
                <a href={AUTHOR.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-dark">LinkedIn</a>
                <span className="text-ink-20">·</span>
                <a href="https://www.instagram.com/crealeads" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-dark">Instagram</a>
              </li>
            </ul>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className="font-display font-bold text-sm uppercase tracking-wider mb-4">{col.title}</div>
              <ul className="space-y-2.5 text-sm text-ink-60">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-emerald-dark">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-ink-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="text-xs text-ink-60">© 2026 CreaLeads — Enzo Wagner. Tous droits réservés.</div>
          <div className="flex gap-6 text-xs text-ink-60">
            <Link href="/mentions-legales" className="hover:text-emerald-dark">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-emerald-dark">CGV</Link>
            <Link href="/privacy" className="hover:text-emerald-dark">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
