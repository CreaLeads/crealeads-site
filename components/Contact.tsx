"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "enzo-crealeads/20min";
const CAL_ORIGIN = "https://cal.eu";
const CAL_EMBED_JS = "https://app.cal.eu/embed/embed.js";
const CAL_NS = "crealeads-20min";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  // Initialise l'embed Cal.com (instance EU) — le calendrier s'ouvre en popup au clic
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
    <section id="contact" className="py-16 sm:py-24 lg:py-28 scroll-mt-24 bg-ink-05">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
            Contact
          </div>
          <h2 className="font-display text-display-md mb-4">
            Réservez votre zone.
          </h2>
          <p className="text-base sm:text-lg text-ink-60 leading-relaxed">
            On travaille en exclusivité : un seul artisan par métier et par secteur. 30 minutes pour voir si on peut remplir votre agenda — aucun engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">

          {/* Réservation directe (popup Cal.com — léger) */}
          <div className="bg-ink text-bg rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald/15 flex items-center justify-center text-2xl mb-5">📅</div>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">Réserver un appel</h3>
            <p className="text-sm text-bg/65 leading-relaxed mb-6">
              Choisissez un créneau de 20 min en visio. Le calendrier s&apos;ouvre directement ici, sans quitter la page.
            </p>
            <button
              type="button"
              data-cal-namespace={CAL_NS}
              data-cal-link={CAL_LINK}
              data-cal-origin={CAL_ORIGIN}
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className="inline-flex items-center justify-center gap-2 bg-emerald text-ink font-bold text-sm px-7 py-4 rounded-full hover:bg-emerald-light transition-colors w-full sm:w-auto self-start"
            >
              Choisir un créneau
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <div className="mt-5 pt-5 border-t border-bg/10 text-sm text-bg/60 space-y-1.5">
              <a href="tel:+33663675254" className="block hover:text-emerald transition-colors">06 63 67 52 54</a>
              <a href="mailto:contact.crealeads@gmail.com" className="block hover:text-emerald transition-colors">contact.crealeads@gmail.com</a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-bg border border-ink-10 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="font-display font-bold text-lg mb-1">Ou laissez un message</div>
            <div className="text-xs text-ink-60 mb-5">On vous rappelle sous 24 heures.</div>

            {status === "ok" ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald/15 flex items-center justify-center mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-ink-60 text-sm">On vous recontacte sous 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 flex-grow flex flex-col">
                <div className="grid grid-cols-2 gap-3.5">
                  <input
                    type="text" required value={form.nom} onChange={update("nom")}
                    placeholder="Nom *"
                    className="bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                  />
                  <input
                    type="tel" value={form.tel} onChange={update("tel")}
                    placeholder="Téléphone"
                    className="bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                  />
                </div>
                <input
                  type="email" required value={form.email} onChange={update("email")}
                  placeholder="Email *"
                  className="w-full bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors"
                />
                <textarea
                  value={form.message} onChange={update("message")}
                  placeholder="Votre métier / votre besoin (ex : carreleur à Lyon, je veux plus de chantiers)"
                  className="w-full flex-grow min-h-[90px] bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors resize-none"
                />
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
