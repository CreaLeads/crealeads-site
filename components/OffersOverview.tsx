"use client";

import { useState } from "react";

const CAL = "https://cal.eu/enzo-crealeads/20min";
const SETUP = "1 490 €";

const AGENT_ROLE: Record<string, { i: string; role: string }> = {
  Théo: { i: "T", role: "Acquisition Meta" },
  Iris: { i: "I", role: "Studio créa" },
  Lucie: { i: "L", role: "Réceptionniste 24/7" },
  Victor: { i: "V", role: "Analyste" },
  Amandine: { i: "A", role: "Votre bras droit" },
};

const offers = [
  {
    name: "DÉCOLLAGE",
    tagline: "Les fondations",
    monthly: "490",
    agents: ["Théo", "Iris"],
    highlight: false,
  },
  {
    name: "COPILOTE",
    tagline: "On avance ensemble",
    monthly: "890",
    agents: ["Théo", "Iris", "Lucie", "Victor"],
    highlight: true,
  },
  {
    name: "AUTOPILOTE",
    tagline: "L'équipe au complet",
    monthly: "1 290",
    agents: ["Théo", "Iris", "Lucie", "Victor", "Amandine"],
    highlight: false,
  },
];

function AgentRow({ name, dark }: { name: string; dark?: boolean }) {
  const a = AGENT_ROLE[name];
  return (
    <li className="flex items-center gap-3">
      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs flex-shrink-0 ${dark ? "bg-emerald/20 text-emerald" : "bg-emerald/15 text-emerald-dark"}`}>
        {a.i}
      </span>
      <span className="text-sm">
        <strong className={dark ? "text-bg" : "text-ink"}>{name}</strong>
        <span className={dark ? "text-bg/60" : "text-ink-60"}> — {a.role}</span>
      </span>
    </li>
  );
}

export default function OffersOverview() {
  const [eco, setEco] = useState(false);

  return (
    <section id="offres" className="py-16 sm:py-24 lg:py-32 bg-ink-05 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Nos offres
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-6">
            Recrutez votre équipe d&apos;agents.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Vous ne payez pas un logiciel. Vous activez une équipe qui bosse pour vous — plus vous montez en palier, plus il y a d&apos;agents au travail.
          </p>
        </div>

        {/* Bandeau setup commun */}
        <div className="mb-6 sm:mb-8 rounded-2xl bg-ink text-bg p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-baseline justify-center gap-2 sm:flex-shrink-0">
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-emerald">{SETUP}</span>
            <span className="text-sm text-bg/70">de setup unique</span>
          </div>
          <p className="text-sm text-bg/70 leading-relaxed sm:border-l sm:border-bg/15 sm:pl-6">
            Le build complet, payé une seule fois au démarrage : campagnes Meta géolocalisées, formulaire de demande de devis, CRM et agents configurés sur votre activité.
          </p>
        </div>

        {/* Toggle add-on Écosystème */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <button
            type="button"
            onClick={() => setEco((v) => !v)}
            aria-pressed={eco}
            className={`inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${eco ? "border-emerald bg-emerald/10 text-ink" : "border-ink-10 bg-bg text-ink-60 hover:border-ink/25"}`}
          >
            <span className={`relative w-9 h-5 rounded-full transition-colors flex-shrink-0 ${eco ? "bg-emerald" : "bg-ink-20"}`}>
              <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${eco ? "translate-x-4" : ""}`} />
            </span>
            <span>
              Ajouter <strong>Marco</strong> — Contenu réseaux / LinkedIn{" "}
              <span className="text-emerald-dark font-semibold">+ 290 €/mois</span>
            </span>
          </button>
        </div>

        {/* 3 cartes */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 lg:items-start">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative card-hover rounded-3xl p-6 sm:p-8 flex flex-col ${
                offer.highlight
                  ? "bg-ink text-bg border-2 border-emerald lg:-mt-4 lg:pb-12 shadow-2xl shadow-emerald/10"
                  : "bg-bg border border-ink-10"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald text-ink rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Recommandé
                </div>
              )}

              <div className="font-display text-xl sm:text-2xl font-bold mb-1 mt-2">{offer.name}</div>
              <div className={`text-sm mb-5 ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>{offer.tagline}</div>

              <div className="flex items-baseline gap-1.5">
                <span className={`font-display text-4xl sm:text-5xl font-extrabold ${offer.highlight ? "text-emerald" : ""}`}>
                  {offer.monthly} €
                </span>
                <span className={`text-sm ${offer.highlight ? "text-bg/60" : "text-ink-60"}`}>/mois</span>
              </div>
              {eco && (
                <div className="text-sm font-semibold text-emerald-dark mt-1">+ 290 €/mois · Marco</div>
              )}
              <div className={`text-xs mt-2 mb-5 pb-5 border-b ${offer.highlight ? "text-bg/60 border-bg/10" : "text-ink-60 border-ink-10"}`}>
                + {SETUP} de setup unique
              </div>

              <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${offer.highlight ? "text-emerald" : "text-emerald-dark"}`}>
                L&apos;équipe incluse
              </div>
              <ul className="space-y-3 mb-7 flex-grow">
                {offer.agents.map((name) => (
                  <AgentRow key={name} name={name} dark={offer.highlight} />
                ))}
                {eco && (
                  <li className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-xs flex-shrink-0 ${offer.highlight ? "bg-emerald/20 text-emerald" : "bg-emerald/15 text-emerald-dark"}`}>M</span>
                    <span className="text-sm">
                      <strong className={offer.highlight ? "text-bg" : "text-ink"}>Marco</strong>
                      <span className={offer.highlight ? "text-bg/60" : "text-ink-60"}> — Contenu réseaux</span>
                    </span>
                  </li>
                )}
              </ul>

              <a
                href={CAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
                  offer.highlight
                    ? "bg-emerald text-ink hover:bg-emerald-light"
                    : "bg-ink text-bg hover:bg-ink/90"
                }`}
              >
                Réserver un appel
              </a>
            </div>
          ))}
        </div>

        {/* Mentions communes */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { t: "💳 Budget pub payé à part", d: "Le budget publicitaire Meta (~750 €/mois) n'est jamais inclus : il est versé directement à Meta, sur votre compte." },
            { t: "🔓 Sans engagement", d: "Préavis de 30 jours, on arrête quand vous voulez. Aucune durée minimale imposée." },
            { t: "⏱️ Livraison sous 14 jours", d: "Vos campagnes sont en ligne sous deux semaines après le démarrage — garanti." },
            { t: "📍 Exclusivité de zone", d: "Un seul artisan par métier et par secteur. Une fois prise, votre zone n'est plus proposée." },
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-ink-10 bg-bg p-4 sm:p-5">
              <div className="font-display font-bold text-sm mb-1.5">{m.t}</div>
              <div className="text-xs text-ink-60 leading-relaxed">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="/tarifs" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-emerald transition-colors">
            Comparer les offres en détail
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
