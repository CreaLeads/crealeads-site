import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AGENTS = [
  {
    i: "T", name: "Théo", role: "Acquisition Meta", tier: "Inclus", included: true,
    short: "Lance et optimise vos publicités Facebook & Instagram.",
    long: "Théo construit et pilote votre campagne Meta géolocalisée, ciblée sur votre métier et votre zone. Il teste les audiences, fait tourner les visuels et ajuste les enchères pour faire baisser le coût par demande et monter le volume, semaine après semaine.",
  },
  {
    i: "I", name: "Iris", role: "Studio créa", tier: "Inclus", included: true,
    short: "Crée et renouvelle vos visuels et vidéos publicitaires.",
    long: "Iris produit les créations qui arrêtent le scroll : visuels avant/après, vidéos de chantier, formats adaptés à chaque réseau. Elle renouvelle vos créas automatiquement par IA pour éviter l'usure publicitaire.",
  },
  {
    i: "L", name: "Lucie", role: "Réceptionniste 24/7", tier: "Inclus", included: true,
    short: "Répond à vos prospects en moins d'1 min, 24h/24.",
    long: "Lucie engage chaque nouvelle demande par SMS en moins d'une minute, à toute heure. Elle pose les bonnes questions, écarte les curieux, garde les prospects sérieux et cale directement les visites dans votre agenda. Week-ends et jours fériés compris.",
  },
  {
    i: "V", name: "Victor", role: "Analyste", tier: "Inclus", included: true,
    short: "Surveille vos chiffres et vous envoie un bilan chaque mois.",
    long: "Victor suit en continu vos indicateurs : nombre de demandes, coût par lead, budget consommé, RDV calés. Il optimise vos campagnes chaque semaine et vous envoie automatiquement un bilan mensuel clair et lisible — aucune zone d'ombre, vous savez toujours où va votre argent.",
  },
  {
    i: "A", name: "Amandine", role: "Votre bras droit", tier: "Option +97 €/mois", included: false,
    short: "Vous lui demandez où en est votre business, elle répond.",
    long: "Amandine est votre interlocutrice directe. Vous lui écrivez un message — « combien de RDV cette semaine ? », « où en est ma campagne ? » — et elle vous répond avec les vrais chiffres. Le pilotage de votre acquisition au bout des doigts. En option, à ajouter à votre abonnement quand vous le souhaitez.",
  },
  {
    i: "M", name: "Marco", role: "Contenu réseaux", tier: "Option +147 €/mois", included: false,
    short: "Alimente vos réseaux sociaux pour renforcer votre image.",
    long: "Marco publie régulièrement sur vos réseaux pour renforcer votre crédibilité et votre image de marque. En option, pour les artisans et réseaux qui veulent une présence forte au-delà de la publicité.",
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
                  <span className={`ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${a.included ? "bg-emerald/15 text-emerald-dark" : "bg-ink-05 text-ink-60"}`}>
                    {a.included ? "✓ Inclus" : a.tier}
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

      {/* Inclus vs options */}
      <section className="py-12 sm:py-16 bg-ink-05 border-y border-ink-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="font-display text-display-sm text-center mb-8 sm:mb-10">
            Une seule offre, tout est clair.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Link
              href="/offres"
              className="rounded-2xl p-6 sm:p-8 bg-ink text-bg transition-all hover:opacity-95"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald mb-2">
                Inclus dans l&apos;abonnement — 350 €/mois
              </div>
              <div className="font-display font-bold text-lg mb-2">Théo · Iris · Lucie · Victor</div>
              <div className="text-sm text-bg/70">Les quatre agents qui lancent vos pubs, qualifient vos leads et suivent vos résultats — sans frais de mise en place.</div>
            </Link>
            <Link
              href="/tarifs"
              className="rounded-2xl p-6 sm:p-8 bg-bg border border-ink-10 transition-all hover:border-ink/25"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-2">
                En option, quand vous voulez
              </div>
              <div className="font-display font-bold text-lg mb-2">Amandine <span className="text-ink-60 font-normal text-sm">+97 €/mois</span> · Marco <span className="text-ink-60 font-normal text-sm">+147 €/mois</span></div>
              <div className="text-sm text-ink-60">Votre bras droit joignable par message, et le contenu réseaux publié automatiquement. À ajouter au fil de votre croissance.</div>
            </Link>
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
