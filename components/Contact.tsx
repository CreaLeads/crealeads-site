"use client";

import { useState } from "react";

const CAL_URL = "https://cal.eu/enzo-crealeads/20min";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

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
      // Pas de webhook configuré → on ouvre l'email pré-rempli
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
    <section id="contact" className="py-16 sm:py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Colonne gauche — accroche */}
          <div>
            <div className="text-xs sm:text-sm font-semibold text-emerald uppercase tracking-wider mb-3 sm:mb-4">
              Contact
            </div>
            <h2 className="font-display text-display-md mb-5 sm:mb-6">
              Parlons de votre projet.
            </h2>
            <p className="text-base sm:text-lg text-ink-60 leading-relaxed mb-8">
              Laissez-nous un message, on vous rappelle sous 24 heures. Trente minutes pour comprendre votre métier, votre zone et vos objectifs. Aucun engagement.
            </p>

            <div className="space-y-3 text-sm">
              <a href="mailto:contact.crealeads@gmail.com" className="flex items-center gap-3 text-ink-60 hover:text-emerald transition-colors">
                <span className="w-9 h-9 rounded-full bg-ink-05 flex items-center justify-center">✉️</span>
                contact.crealeads@gmail.com
              </a>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-60 hover:text-emerald transition-colors">
                <span className="w-9 h-9 rounded-full bg-ink-05 flex items-center justify-center">📅</span>
                Préférez réserver un créneau directement
              </a>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="bg-bg border border-ink-10 rounded-3xl p-6 sm:p-8 shadow-sm">
            {status === "ok" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald/15 flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-ink-60 text-sm">On vous recontacte sous 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                <div>
                  <label className="block text-sm font-medium mb-1.5">Votre métier / votre besoin</label>
                  <textarea
                    rows={3} value={form.message} onChange={update("message")}
                    placeholder="Carreleur à Lyon, je veux plus de chantiers…"
                    className="w-full bg-ink-05 border border-ink-10 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald transition-colors resize-none"
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
