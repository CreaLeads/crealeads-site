import { CAL_URL, CONTACT, DASHBOARD_URL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

// Servie sur "/" par le middleware tant que le site est en construction.
const meta = pageMeta({
  title: "CreaLeads — Des chantiers signés, pas des contacts",
  description:
    "CreaLeads trouve des clients aux artisans du bâtiment : publicité Facebook et Instagram ciblée sur votre zone, demandes de devis qualifiées et suivi jusqu'au chantier signé. Nouveau site en construction.",
  path: "/",
});

export const metadata = { ...meta, title: { absolute: "CreaLeads — Des chantiers signés, pas des contacts" } };

const points = [
  "Pub Facebook & Instagram ciblée sur votre zone",
  "Demandes de devis qualifiées 24h/24",
  "Un seul artisan par métier et par zone",
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-dark flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
    </svg>
  );
}

export default function Construction() {
  return (
    <main className="relative min-h-screen flex flex-col bg-canvas overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[520px] sm:w-[900px] h-[520px] sm:h-[900px] bg-emerald/20 rounded-full blur-3xl" />

      <header className="relative z-10 px-3 sm:px-5 pt-3 sm:pt-4">
        <nav className="max-w-5xl mx-auto flex items-center justify-between gap-4 h-14 sm:h-16 pl-5 pr-2 sm:pl-6 sm:pr-3 rounded-full border border-ink-10/60 bg-bg/70 backdrop-blur-md shadow-lg shadow-ink/[0.03]">
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            Crea<span className="text-emerald">Leads</span>
          </span>
          <a
            href={DASHBOARD_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full border border-ink-10 bg-surface text-ink hover:border-emerald hover:text-emerald-dark transition-colors"
          >
            <LoginIcon />
            Se connecter
          </a>
        </nav>
      </header>

      <section className="relative z-10 flex-1 flex items-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 sm:mb-8 rounded-full border border-ink-10 bg-surface text-xs sm:text-sm font-semibold text-ink-60">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald" />
            </span>
            Nouveau site en construction
          </div>

          <h1 className="font-display text-display-xl mb-6">
            Des chantiers signés, <span className="text-emerald-dark">pas des contacts.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed mb-8">
            CreaLeads trouve des clients aux artisans du bâtiment, de la pub jusqu&apos;au chantier signé. Pendant que
            vous êtes sur le chantier.
          </p>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2.5 sm:gap-x-6 mb-10 text-sm font-medium text-ink">
            {points.map((p) => (
              <li key={p} className="flex items-center justify-center gap-2">
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 sm:px-8 py-4 text-sm sm:text-base font-bold rounded-full"
            >
              <span>Réserver un appel de 20 min</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="px-7 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-full border border-stroke-strong bg-surface hover:border-ink transition-colors"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 text-sm text-ink-40">Gratuit et sans engagement.</p>
        </div>
      </section>

      <footer className="relative z-10 px-5 pb-6 text-center text-xs text-ink-40">
        © {new Date().getFullYear()} CreaLeads ·{" "}
        <a href="/mentions-legales" className="hover:text-ink transition-colors">Mentions légales</a> ·{" "}
        <a href="/privacy" className="hover:text-ink transition-colors">Confidentialité</a> ·{" "}
        <a href="/cgv" className="hover:text-ink transition-colors">CGV</a>
      </footer>
    </main>
  );
}
