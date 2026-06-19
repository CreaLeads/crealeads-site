import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AGENTS = [
  {
    i: "T", name: "Théo", role: "Acquisition Meta", tier: "dès DÉCOLLAGE",
    short: "Lance et optimise vos publicités Facebook & Instagram.",
    long: "Théo construit et pilote vos campagnes Meta géolocalisées, ciblées sur votre métier et votre zone. Il teste les audiences, fait tourner les visuels et ajuste les enchères pour faire baisser le coût par demande et monter le volume, semaine après semaine.",
  },
  {
    i: "I", name: "Iris", role: "Studio créa", tier: "dès DÉCOLLAGE",
    short: "Crée et renouvelle vos visuels et vidéos publicitaires.",
    long: "Iris produit les créations qui arrêtent le scroll : visuels avant/après, vidéos de chantier, formats adaptés à chaque réseau. En COPILOTE et au-delà, elle renouvelle vos créas chaque mois pour éviter l'usure publicitaire.",
  },
  {
    i: "L", name: "Lucie", role: "Réceptionniste 24/7", tier: "dès COPILOTE",
    short: "Répond à vos prospects en moins d'1 min, 24h/24.",
    long: "Lucie engage chaque nouvelle demande en moins d'une minute, à toute heure. Elle pose les bonnes questions, écarte les curieux, garde les prospects sérieux et cale directement les visites dans votre agenda. En AUTOPILOTE, elle passe aussi au téléphone.",
  },
  {
    i: "V", name: "Victor", role: "Analyste", tier: "dès COPILOTE",
    short: "Surveille vos chiffres et vous envoie un bilan chaque semaine.",
    long: "Victor suit en continu vos indicateurs : nombre de demandes, coût par lead, budget consommé, RDV calés. Chaque semaine, il vous envoie un bilan clair et lisible — aucune zone d'ombre, vous savez toujours où va votre argent.",
  },
  {
    i: "A", name: "Amandine", role: "Votre bras droit", tier: "dès AUTOPILOTE",
    short: "Vous lui demandez où en est votre business, elle répond.",
    long: "Amandine est votre interlocutrice directe. Vous lui écrivez un message — « combien de RDV cette semaine ? », « où en est ma campagne ? » — et elle vous répond avec les vrais chiffres. Le pilotage de votre acquisition au bout des doigts.",
  },
  {
    i: "M", name: "Marco", role: "Contenu réseaux", tier: "Écosystème",
    short: "Alimente vos réseaux sociaux pour renforcer votre image.",
    long: "Marco publie régulièrement sur vos réseaux pour renforcer votre crédibilité et votre image de marque. Réservé à l'offre Écosystème, pour les artisans et réseaux qui veulent une présence forte au-delà de la publicité.",
  },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 sm:pt-36 sm:pb-12 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Votre équipe IA
          </div>
          <h1 className="font-display text-display-lg mb-4 sm:mb-6">
            Six agents au travail pour vous.
          </h1>
          <p className="text-base sm:text-lg text-ink-60 max-w-2xl mx-auto leading-relaxed">
            Pas un logiciel de plus. Une équipe d&apos;agents intelligents, orientés bâtiment, qui lancent vos pubs, répondent à vos prospects et vous tiennent au courant — pendant que vous êtes sur le chantier.
          </p>
        </div>
      </section>

      {/* Agents detail */}
      <section className="pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {AGENTS.map((a) => (
              <div key={a.name} className="rounded-3xl border border-ink-10 bg-bg p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-emerald/15 flex items-center justify-center font-display font-extrabold text-xl text-emerald-dark flex-shrink-0">
                    {a.i}
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold leading-none">{a.name}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald mt-1.5">{a.role}</div>
                  </div>
                  <span className="ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full bg-ink-05 text-ink-60 whitespace-nowrap">
                    {a.tier}
                  </span>
                </div>
                <p className="text-sm text-ink-60 leading-relaxed">{a.long}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 sm:mt-12 text-lg sm:text-xl font-display font-bold">
            <span className="text-emerald">Lucie</span> parle à vos clients.{" "}
            <span className="text-emerald">Amandine</span> parle à vous.
          </p>
        </div>
      </section>

      {/* Tier mapping */}
      <section className="py-12 sm:py-16 bg-ink-05 border-y border-ink-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm text-center mb-8 sm:mb-10">
            Quels agents dans quelle offre ?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "DÉCOLLAGE", agents: "Théo + Iris", href: "/offres#decollage" },
              { name: "COPILOTE", agents: "Théo · Iris · Lucie · Victor", href: "/offres#copilote", highlight: true },
              { name: "AUTOPILOTE", agents: "Théo · Iris · Lucie · Victor · Amandine", href: "/offres#autopilote" },
            ].map((o) => (
              <Link
                key={o.name}
                href={o.href}
                className={`rounded-2xl p-6 text-center transition-all ${o.highlight ? "bg-ink text-bg" : "bg-bg border border-ink-10 hover:border-ink/25"}`}
              >
                <div className={`font-display font-bold text-lg mb-2 ${o.highlight ? "text-emerald" : ""}`}>{o.name}</div>
                <div className={`text-sm ${o.highlight ? "text-bg/80" : "text-ink-60"}`}>{o.agents}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-display-md mb-5">
            Prêt à mettre votre équipe IA <span className="text-emerald">au travail ?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/#contact" className="btn-primary px-8 py-4 text-base font-semibold rounded-full">
              <span>Réserver un appel</span>
            </Link>
            <Link href="/offres" className="px-8 py-4 text-base font-semibold rounded-full border border-ink-20 hover:border-ink transition-colors">
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
