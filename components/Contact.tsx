"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "enzo-crealeads/20min";
const CAL_ORIGIN = "https://cal.eu";
const CAL_EMBED_JS = "https://app.cal.eu/embed/embed.js";
const CAL_NS = "crealeads-20min";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  // Initialise l'embed Cal.com (instance EU) thémé aux couleurs du site
  useEffect(() => {
    (async () => {
      try {
        const cal = await getCalApi({ namespace: CAL_NS, embedJsUrl: CAL_EMBED_JS });
        cal("ui", {
          theme: "light",
          cssVarsPerTheme: {
            light: { "cal-brand": "#00C896" },
            dark: { "cal-brand": "#00C896" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch {
        /* le lien de secours reste disponible si l'embed échoue */
      }
    })();
  }, []);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailtoFallback = () => {
    const subject = encodeURIComponent("Demande de contact — CreaLeads");
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.tel}\n\n${form.message}`
    );
    window.location.href = `mailto:contact.crealeads@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.email) return;
    setStatus("sending");

    const webhook = process.env.NEXT_PUBLIC_MAKE_WEBHOOK;
    if (!webhook) {
      mailtoFallback();
      setStatus("ok");
      return;
    }
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "site_contact" }),
      });
      setStatus("ok");
      setForm({ nom: "", email: "", tel: "", message: "" });
    } catch {
      mailtoFallback();
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 scroll-mt-24 bg-ink-05">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Contact
          </div>
          <h2 className="font-display text-display-md mb-4 sm:mb-6">
            Parlons de votre projet.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            Réservez directement votre créneau ci-dessous, ou laissez-nous un message : on vous rappelle sous 24 heures. Trente minutes, aucun engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

          {/* Bloc réservation Cal.com (embed officiel, instance EU) */}
          <div className="lg:col-span-3 bg-bg border border-ink-10 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-8 h-8 rounded-full bg-emerald/15 flex items-center justify-center text-sm">📅</span>
              <div className="font-display font-bold text-base sm:text-lg">Réserver un appel découverte</div>
            </div>
            <div className="text-xs text-ink-60 mb-4 pl-10">20 minutes en visio — choisissez votre créneau.</div>

            <div className="flex-grow overflow-hidden rounded-2xl">
              <Cal
                namespace={CAL_NS}
                calLink={CAL_LINK}
                calOrigin={CAL_ORIGIN}
                embedJsUrl={CAL_EMBED_JS}
                style={{ width: "100%", height: "100%", minHeight: "560px", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "light" }}
              />
            </div>

            <a
              href={`${CAL_ORIGIN}/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-ink-60 hover:text-emerald transition-colors mt-3"
            >
              Le calendrier ne s&apos;affiche pas ? Ouvrir dans un nouvel onglet →
            </a>
          </div>

          {/* Bloc formulaire */}
          <div className="lg:col-span-2 bg-bg border border-ink-10 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="font-display font-bold text-base sm:text-lg mb-1">Ou écrivez-nous</div>
            <div className="text-xs text-ink-60 mb-5">On revient vers vous sous 24 heures.</div>

            {status === "ok" ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald/15 flex items-center justify-center mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-ink-60 text-sm">On vous recontacte sous 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Nom *</label>
                  <input
                    type="text" required value={form.nom} onChange={update("nom")}
                    placeholder="Votre prénom et nom"
                    className="w-full bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input
                    type="email" required value={form.email} onChange={update("email")}
                    placeholder="vous@email.fr"
                    className="w-full bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                  <input
                    type="tel" value={form.tel} onChange={update("tel")}
                    placeholder="06 00 00 00 00"
                    className="w-full bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <label className="block text-sm font-medium mb-1.5">Votre métier / votre besoin</label>
                  <textarea
                    value={form.message} onChange={update("message")}
                    placeholder="Carreleur à Lyon, je veux plus de chantiers…"
                    className="w-full flex-grow min-h-[80px] bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-primary px-6 py-4 text-sm font-semibold rounded-full disabled:opacity-60"
                >
                  <span>{status === "sending" ? "Envoi…" : "Envoyer ma demande"}</span>
                </button>
                {status === "error" && (
                  <p className="text-xs text-ink-60 text-center">
                    Un souci est survenu — votre logiciel mail s&apos;est ouvert pour finaliser l&apos;envoi.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
