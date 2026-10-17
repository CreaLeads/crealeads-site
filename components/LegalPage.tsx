import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LegalSection = { h: string; p: (string | string[])[] };

// Gabarit commun des pages légales : titre, date de mise à jour, sections.
// Une entrée `string[]` dans `p` est rendue comme une liste à puces.
export default function LegalPage({
  kicker,
  title,
  updated,
  sections,
}: {
  kicker: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <article className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-xs sm:text-sm font-semibold text-emerald-dark uppercase tracking-wider mb-3">{kicker}</div>
          <h1 className="font-display text-display-md mb-3">{title}</h1>
          <p className="text-sm text-faint mb-10">Dernière mise à jour : {updated}</p>
          <div className="rounded-[24px] border border-stroke bg-surface shadow-ds-sm p-6 sm:p-10 space-y-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-sans font-semibold tracking-tight text-lg sm:text-xl mb-3">{s.h}</h2>
                <div className="space-y-3 text-[15px] text-ink/80 leading-relaxed">
                  {s.p.map((para, i) =>
                    Array.isArray(para) ? (
                      <ul key={i} className="list-disc pl-5 space-y-1.5">
                        {para.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{para}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
