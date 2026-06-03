"use client";

const clients = [
  { name: "SurfaceBéton", location: "Île-de-France" },
  { name: "Mendes Signature", location: "Troyes" },
  { name: "Eirlly", location: "Lyon" },
  { name: "Leroy BTP", location: "Yvetot" },
  { name: "Résinov", location: "Asnières-sur-Seine" },
  { name: "Adame", location: "Tremblay-en-France" },
];

export default function Clients() {
  return (
    <section className="py-20 border-y border-ink-10 bg-ink-05">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="text-sm font-semibold text-emerald uppercase tracking-wider mb-3">
            Ils nous font confiance
          </div>
          <h2 className="font-display text-display-sm">
            5 artisans accompagnés
            <br />
            <span className="text-ink-60 font-normal">dans toute la France.</span>
          </h2>
        </div>
      </div>

      <div className="marquee-container overflow-hidden">
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald/20 flex items-center justify-center font-display font-bold text-emerald-dark">
                {client.name.charAt(0)}
              </div>
              <div>
                <div className="font-display font-bold text-base">
                  {client.name}
                </div>
                <div className="text-xs text-ink-60">{client.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
