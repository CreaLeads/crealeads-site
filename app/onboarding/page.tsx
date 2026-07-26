"use client";

import { useMemo, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

const WEBHOOK_URL = "https://crealeads.app.n8n.cloud/webhook/onboarding-client";
const BUCKET = "onboarding-assets";
const ONE_YEAR = 60 * 60 * 24 * 365; // signed URL expiry, in seconds
const MAX_LOGO_BYTES = 2 * 1024 * 1024; // 2 Mo
const MAX_PHOTOS = 5;

const CORPS_METIER = [
  "Résine de sols",
  "Époxy / béton ciré",
  "Moquette de pierre",
  "Peinture intérieure/extérieure",
  "Ravalement de façade",
  "Carrelage / faïence",
  "Maçonnerie / gros œuvre",
  "Plomberie / sanitaire",
  "Électricité",
  "Menuiserie / charpente",
  "Isolation / plaquiste",
  "Nettoyage / entretien",
  "Toiture / couverture",
];

const SOURCES_CLIENTS = [
  "Bouche-à-oreille",
  "Réseaux sociaux",
  "Site web",
  "Pages Jaunes",
  "Recommandation",
  "Autre",
];

const PANIER_OPTIONS = [
  "Moins de 1 000€",
  "1 000-3 000€",
  "3 000-8 000€",
  "Plus de 8 000€",
];

const CHANTIERS_OPTIONS = ["1-2", "3-5", "6-10", "Plus de 10"];

const CLIENTELE_OPTIONS = [
  "Particuliers uniquement",
  "Entreprises uniquement",
  "Les deux",
];

const TON_OPTIONS = [
  "Professionnel",
  "Décontracté",
  "Direct",
  "Expertise technique",
];

const STEPS = ["Ton activité", "Ta présence en ligne", "Tes assets"];

type FormState = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  nom_entreprise: string;
  corps_metier: string[];
  corps_metier_autre: string;
  specialite: string;
  zone: string;
  rayon_km: string;
  panier_moyen: string;
  nb_chantiers_mois: string;
  type_clientele: string;
  facebook_url: string;
  instagram_url: string;
  site_url: string;
  gmb_url: string;
  has_done_meta_ads: boolean | null;
  meta_ads_budget: string;
  meta_ads_results: string;
  sources_clients: string[];
  couleur_charte: string;
  ton_communication: string;
  infos_complementaires: string;
};

const INITIAL: FormState = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  nom_entreprise: "",
  corps_metier: [],
  corps_metier_autre: "",
  specialite: "",
  zone: "",
  rayon_km: "",
  panier_moyen: "",
  nb_chantiers_mois: "",
  type_clientele: "",
  facebook_url: "",
  instagram_url: "",
  site_url: "",
  gmb_url: "",
  has_done_meta_ads: null,
  meta_ads_budget: "",
  meta_ads_results: "",
  sources_clients: [],
  couleur_charte: "#00C896",
  ton_communication: "",
  infos_complementaires: "",
};

function fmtSize(b: number) {
  if (b < 1024) return b + " o";
  if (b < 1048576) return (b / 1024).toFixed(0) + " Ko";
  return (b / 1048576).toFixed(1) + " Mo";
}

function extOf(name: string, fallback: string) {
  const m = name.match(/\.([a-zA-Z0-9]+)$/);
  return m ? m[1].toLowerCase() : fallback;
}

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(INITIAL);
  const [logo, setLogo] = useState<File | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const progress = useMemo(
    () => Math.round(((step + 1) / STEPS.length) * 100),
    [step]
  );

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function toggleArray(key: "corps_metier" | "sources_clients", value: string) {
    setData((d) => {
      const arr = d[key];
      return {
        ...d,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  }

  function onLogoChange(files: FileList | null) {
    setError("");
    const f = files?.[0] ?? null;
    if (f && f.size > MAX_LOGO_BYTES) {
      setError("Le logo dépasse 2 Mo. Choisis un fichier plus léger.");
      return;
    }
    setLogo(f);
  }

  function onPhotosChange(files: FileList | null) {
    setError("");
    if (!files) return;
    const incoming = Array.from(files);
    setPhotos((prev) => {
      const merged = [...prev, ...incoming].slice(0, MAX_PHOTOS);
      if (prev.length + incoming.length > MAX_PHOTOS) {
        setError(`5 photos maximum. On a gardé les ${MAX_PHOTOS} premières.`);
      }
      return merged;
    });
  }

  function removePhoto(idx: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  }

  function validateStep(current: number): string | null {
    if (current === 0) {
      if (!data.prenom.trim()) return "Ton prénom est requis.";
      if (!data.nom.trim()) return "Ton nom est requis.";
      if (!data.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
        return "Un email valide est requis.";
      if (!data.telephone.trim()) return "Ton téléphone est requis.";
      if (!data.nom_entreprise.trim())
        return "Le nom de ton entreprise est requis.";
      if (
        data.corps_metier.length === 0 &&
        !data.corps_metier_autre.trim()
      )
        return "Sélectionne au moins un corps de métier.";
    }
    return null;
  }

  function next() {
    const err = validateStep(step);
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prev() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function uploadFile(file: File, filename: string): Promise<string> {
    const supabase = getSupabaseClient();
    const path = `${data.email}/${filename}`;
    const { error: upErr } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { upsert: true, contentType: file.type || undefined });
    if (upErr) throw new Error(`Upload échoué (${filename}) : ${upErr.message}`);

    const { data: signed, error: signErr } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(path, ONE_YEAR);
    if (signErr || !signed?.signedUrl)
      throw new Error(`URL signée échouée (${filename}).`);
    return signed.signedUrl;
  }

  async function handleSubmit() {
    // Re-run the mandatory step-1 checks even if the user jumped ahead.
    const err = validateStep(0);
    if (err) {
      setError(err);
      setStep(0);
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const timestamp = Date.now();

      // 1) Logo
      let logo_url = "";
      if (logo) {
        logo_url = await uploadFile(
          logo,
          `${timestamp}-logo.${extOf(logo.name, "png")}`
        );
      }

      // 2) Photos
      const photos_urls: string[] = [];
      for (let i = 0; i < photos.length; i++) {
        const url = await uploadFile(
          photos[i],
          `${timestamp}-photo-${i + 1}.${extOf(photos[i].name, "jpg")}`
        );
        photos_urls.push(url);
      }

      // 3) Corps de métier (merge free-text "Autre")
      const corps_metier = [...data.corps_metier];
      if (data.corps_metier_autre.trim())
        corps_metier.push(data.corps_metier_autre.trim());

      // 4) Payload → n8n webhook
      const payload = {
        prenom: data.prenom.trim(),
        nom: data.nom.trim(),
        email: data.email.trim(),
        telephone: data.telephone.trim(),
        nom_entreprise: data.nom_entreprise.trim(),
        corps_metier,
        specialite: data.specialite.trim(),
        zone: data.zone.trim(),
        rayon_km: data.rayon_km.trim(),
        panier_moyen: data.panier_moyen,
        nb_chantiers_mois: data.nb_chantiers_mois,
        type_clientele: data.type_clientele,
        facebook_url: data.facebook_url.trim(),
        instagram_url: data.instagram_url.trim(),
        site_url: data.site_url.trim(),
        gmb_url: data.gmb_url.trim(),
        has_done_meta_ads: data.has_done_meta_ads === true,
        meta_ads_budget: data.meta_ads_budget.trim(),
        meta_ads_results: data.meta_ads_results.trim(),
        sources_clients: data.sources_clients,
        logo_url,
        photos_urls,
        couleur_charte: data.couleur_charte,
        ton_communication: data.ton_communication,
        infos_complementaires: data.infos_complementaires.trim(),
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);

      setDone(true);
      if (typeof window !== "undefined")
        window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue.";
      setError(
        `L'envoi n'a pas abouti (${msg}). Vérifie ta connexion et réessaie, ou écris-nous à contact.crealeads@gmail.com.`
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="onb">
      <style>{css}</style>

      <div className="bar">
        <div className="bar-in">
          <div className="logo">
            <span className="dot" />
            Crea<b>Leads</b>
          </div>
          {!done && (
            <>
              <div className="bar-prog">
                <i style={{ width: progress + "%" }} />
              </div>
              <div className="bar-pct">{progress}%</div>
            </>
          )}
        </div>
      </div>

      {done ? (
        <div className="done">
          <div className="tick">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2>
            ✅ Formulaire reçu
            <span className="scribble">on te contacte sous 48h.</span>
          </h2>
          <p>
            On te contacte sous 48h pour lancer tes campagnes. Merci, on a bien
            tout reçu.
          </p>
        </div>
      ) : (
        <>
          <header className="hero">
            <div className="hero-in">
              <div className="kicker">Bienvenue chez CreaLeads</div>
              <h1>
                On a tout pour partir fort.
                <span className="scribble">remplis ça, on s&apos;occupe du reste.</span>
              </h1>
              <p>
                Ce formulaire nous donne tout ce qu&apos;il faut pour lancer tes
                campagnes. Trois étapes, quelques minutes, et on démarre.
              </p>
            </div>
          </header>

          <div className="wrap">
            {/* Step indicator */}
            <div className="steps">
              {STEPS.map((label, i) => (
                <div
                  key={label}
                  className={
                    "step-chip" +
                    (i === step ? " on" : "") +
                    (i < step ? " done" : "")
                  }
                >
                  <span className="step-num">{i < step ? "✓" : i + 1}</span>
                  {label}
                </div>
              ))}
            </div>

            <main>
              {error && <div className="err-box">{error}</div>}

              {/* ---------------- STEP 1 ---------------- */}
              {step === 0 && (
                <section className="sec">
                  <div className="sec-head">
                    <span className="sec-n">01</span>
                    <div>
                      <h2>Ton activité</h2>
                    </div>
                  </div>
                  <p className="sec-sub">
                    Ce que tu fais, pour qui, et où. C&apos;est ce qui cale le
                    ciblage de tes campagnes.
                  </p>

                  <div className="grid">
                    <div className="f">
                      <label>
                        Prénom<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        value={data.prenom}
                        onChange={(e) => set("prenom", e.target.value)}
                      />
                    </div>
                    <div className="f">
                      <label>
                        Nom<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        value={data.nom}
                        onChange={(e) => set("nom", e.target.value)}
                      />
                    </div>
                    <div className="f">
                      <label>
                        Email<span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        value={data.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </div>
                    <div className="f">
                      <label>
                        Téléphone<span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        value={data.telephone}
                        onChange={(e) => set("telephone", e.target.value)}
                      />
                    </div>
                    <div className="f full">
                      <label>
                        Nom de l&apos;entreprise<span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        value={data.nom_entreprise}
                        onChange={(e) => set("nom_entreprise", e.target.value)}
                      />
                    </div>

                    <div className="f full">
                      <label>
                        Corps de métier<span className="req">*</span>
                        <span className="hint">
                          Coche tout ce que tu proposes
                        </span>
                      </label>
                      <div className="pills">
                        {CORPS_METIER.map((m) => (
                          <label className="pill" key={m}>
                            <input
                              type="checkbox"
                              checked={data.corps_metier.includes(m)}
                              onChange={() => toggleArray("corps_metier", m)}
                            />
                            <span>{m}</span>
                          </label>
                        ))}
                      </div>
                      <input
                        type="text"
                        style={{ marginTop: 10 }}
                        placeholder="Autre — précise ton métier"
                        value={data.corps_metier_autre}
                        onChange={(e) =>
                          set("corps_metier_autre", e.target.value)
                        }
                      />
                    </div>

                    <div className="f full">
                      <label>Spécialité principale</label>
                      <textarea
                        value={data.specialite}
                        onChange={(e) => set("specialite", e.target.value)}
                        placeholder="Ce que tu fais le mieux, ce qui te différencie."
                      />
                    </div>

                    <div className="f">
                      <label>Zone principale (ville)</label>
                      <input
                        type="text"
                        value={data.zone}
                        onChange={(e) => set("zone", e.target.value)}
                        placeholder="Ex : Versailles"
                      />
                    </div>
                    <div className="f">
                      <label>
                        Rayon d&apos;intervention
                        <span className="hint">En km</span>
                      </label>
                      <input
                        type="number"
                        inputMode="numeric"
                        value={data.rayon_km}
                        onChange={(e) => set("rayon_km", e.target.value)}
                      />
                    </div>

                    <div className="f">
                      <label>Panier moyen d&apos;un chantier</label>
                      <select
                        value={data.panier_moyen}
                        onChange={(e) => set("panier_moyen", e.target.value)}
                      >
                        <option value="">—</option>
                        {PANIER_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="f">
                      <label>Nombre de chantiers par mois</label>
                      <select
                        value={data.nb_chantiers_mois}
                        onChange={(e) =>
                          set("nb_chantiers_mois", e.target.value)
                        }
                      >
                        <option value="">—</option>
                        {CHANTIERS_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="f full">
                      <label>Type de clientèle</label>
                      <select
                        value={data.type_clientele}
                        onChange={(e) => set("type_clientele", e.target.value)}
                      >
                        <option value="">—</option>
                        {CLIENTELE_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </section>
              )}

              {/* ---------------- STEP 2 ---------------- */}
              {step === 1 && (
                <section className="sec">
                  <div className="sec-head">
                    <span className="sec-n">02</span>
                    <div>
                      <h2>Ta présence en ligne</h2>
                    </div>
                  </div>
                  <p className="sec-sub">
                    L&apos;état des lieux de ton marketing aujourd&apos;hui.
                    Juste des liens publics, aucun mot de passe.
                  </p>

                  <div className="grid">
                    <PresenceField
                      label="Page Facebook"
                      placeholder="https://facebook.com/..."
                      value={data.facebook_url}
                      onChange={(v) => set("facebook_url", v)}
                    />
                    <PresenceField
                      label="Page Instagram"
                      placeholder="https://instagram.com/..."
                      value={data.instagram_url}
                      onChange={(v) => set("instagram_url", v)}
                    />
                    <PresenceField
                      label="Site web"
                      placeholder="https://..."
                      value={data.site_url}
                      onChange={(v) => set("site_url", v)}
                    />
                    <PresenceField
                      label="Google My Business"
                      placeholder="https://..."
                      value={data.gmb_url}
                      onChange={(v) => set("gmb_url", v)}
                    />

                    <div className="f full">
                      <label>As-tu déjà fait de la pub Meta ?</label>
                      <div className="pills">
                        <label className="pill">
                          <input
                            type="radio"
                            name="meta_ads"
                            checked={data.has_done_meta_ads === true}
                            onChange={() => set("has_done_meta_ads", true)}
                          />
                          <span>Oui</span>
                        </label>
                        <label className="pill">
                          <input
                            type="radio"
                            name="meta_ads"
                            checked={data.has_done_meta_ads === false}
                            onChange={() => set("has_done_meta_ads", false)}
                          />
                          <span>Non</span>
                        </label>
                      </div>
                    </div>

                    {data.has_done_meta_ads === true && (
                      <>
                        <div className="f">
                          <label>Quel budget mensuel ?</label>
                          <input
                            type="text"
                            value={data.meta_ads_budget}
                            onChange={(e) =>
                              set("meta_ads_budget", e.target.value)
                            }
                            placeholder="Ex : 500 €/mois"
                          />
                        </div>
                        <div className="f">
                          <label>Quels résultats obtenus ?</label>
                          <input
                            type="text"
                            value={data.meta_ads_results}
                            onChange={(e) =>
                              set("meta_ads_results", e.target.value)
                            }
                            placeholder="Ex : quelques leads, peu de ROI…"
                          />
                        </div>
                      </>
                    )}

                    <div className="f full">
                      <label>
                        Comment trouves-tu tes clients actuellement ?
                        <span className="hint">Coche tout ce qui s&apos;applique</span>
                      </label>
                      <div className="pills">
                        {SOURCES_CLIENTS.map((s) => (
                          <label className="pill" key={s}>
                            <input
                              type="checkbox"
                              checked={data.sources_clients.includes(s)}
                              onChange={() =>
                                toggleArray("sources_clients", s)
                              }
                            />
                            <span>{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* ---------------- STEP 3 ---------------- */}
              {step === 2 && (
                <section className="sec">
                  <div className="sec-head">
                    <span className="sec-n">03</span>
                    <div>
                      <h2>Tes assets</h2>
                    </div>
                  </div>
                  <p className="sec-sub">
                    Le carburant de tes visuels et de ton site. Plus tu envoies
                    de belles photos, plus on tape fort.
                  </p>

                  <div className="grid">
                    <div className="f full">
                      <label>
                        Ton logo
                        <span className="hint">PNG ou JPG · 2 Mo max</span>
                      </label>
                      <label className="drop">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V18a2 2 0 002 2h14a2 2 0 002-2v-1.5M7 9l5-5 5 5M12 4v12" />
                        </svg>
                        <b>Ajouter ton logo</b>
                        <small>PNG, JPG · 2 Mo max</small>
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={(e) => onLogoChange(e.target.files)}
                        />
                      </label>
                      {logo && (
                        <div className="filelist">
                          <div className="filerow">
                            <span className="nm">{logo.name}</span>
                            <span className="sz">{fmtSize(logo.size)}</span>
                            <button
                              type="button"
                              className="rm"
                              onClick={() => setLogo(null)}
                            >
                              Retirer
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="f full">
                      <label>
                        Photos de réalisations
                        <span className="hint">
                          JPG ou PNG · 5 photos max
                        </span>
                      </label>
                      <label className="drop">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V18a2 2 0 002 2h14a2 2 0 002-2v-1.5M7 9l5-5 5 5M12 4v12" />
                        </svg>
                        <b>Ajouter des photos</b>
                        <small>JPG, PNG · plusieurs à la fois</small>
                        <input
                          type="file"
                          accept="image/png,image/jpeg"
                          multiple
                          onChange={(e) => onPhotosChange(e.target.files)}
                        />
                      </label>
                      {photos.length > 0 && (
                        <div className="filelist">
                          {photos.map((p, i) => (
                            <div className="filerow" key={p.name + i}>
                              <span className="nm">{p.name}</span>
                              <span className="sz">{fmtSize(p.size)}</span>
                              <button
                                type="button"
                                className="rm"
                                onClick={() => removePhoto(i)}
                              >
                                Retirer
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="f">
                      <label>Couleur principale de ta charte</label>
                      <div className="color-row">
                        <input
                          type="color"
                          value={data.couleur_charte}
                          onChange={(e) =>
                            set("couleur_charte", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          value={data.couleur_charte}
                          onChange={(e) =>
                            set("couleur_charte", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="f">
                      <label>Ton de communication</label>
                      <select
                        value={data.ton_communication}
                        onChange={(e) =>
                          set("ton_communication", e.target.value)
                        }
                      >
                        <option value="">—</option>
                        {TON_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="f full">
                      <label>Informations complémentaires</label>
                      <textarea
                        value={data.infos_complementaires}
                        onChange={(e) =>
                          set("infos_complementaires", e.target.value)
                        }
                        placeholder="Tout ce qui n'est pas rentré dans les cases."
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* ---------------- NAV ---------------- */}
              <div className="nav">
                {step > 0 ? (
                  <button
                    type="button"
                    className="btn ghost"
                    onClick={prev}
                    disabled={submitting}
                  >
                    Retour
                  </button>
                ) : (
                  <span />
                )}

                {step < STEPS.length - 1 ? (
                  <button type="button" className="btn" onClick={next}>
                    Continuer
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    {submitting ? "Envoi en cours…" : "Envoyer à CreaLeads"}
                  </button>
                )}
              </div>
            </main>
          </div>
        </>
      )}

      <footer>
        CreaLeads · Acquisition · Intelligence artificielle · Croissance —
        contact.crealeads@gmail.com
      </footer>
    </div>
  );
}

function PresenceField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [has, setHas] = useState<boolean | null>(value ? true : null);
  return (
    <div className="f full presence">
      <label>{label} ?</label>
      <div className="presence-row">
        <div className="pills">
          <label className="pill">
            <input
              type="radio"
              name={label}
              checked={has === true}
              onChange={() => setHas(true)}
            />
            <span>Oui</span>
          </label>
          <label className="pill">
            <input
              type="radio"
              name={label}
              checked={has === false}
              onChange={() => {
                setHas(false);
                onChange("");
              }}
            />
            <span>Non</span>
          </label>
        </div>
        {has === true && (
          <input
            type="url"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

const css = `
.onb{
  --bg:#FAFAF8;--card:#FFFFFF;--ink:#16181A;--soft:#5A5F66;--faint:#8A9099;
  --em:#00C896;--em-deep:#00A87E;--em-wash:#EAFBF5;--line:#E7E7E2;--line-soft:#F0F0EC;
  --ink-band:#14181B;--danger:#E2554B;--r:16px;--rs:12px;
  font-family:var(--font-inter),'Inter',sans-serif;background:var(--bg);color:var(--ink);
  min-height:100vh;font-size:15.5px;line-height:1.55;-webkit-font-smoothing:antialiased;
}
.onb *{box-sizing:border-box;margin:0;padding:0}
.onb h1,.onb h2,.onb h3{font-family:var(--font-outfit),'Outfit',sans-serif;}

.onb .bar{position:sticky;top:0;z-index:50;background:rgba(250,250,248,.86);
  backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
.onb .bar-in{max-width:900px;margin:0 auto;padding:13px 22px;display:flex;align-items:center;gap:16px;}
.onb .logo{font-family:var(--font-outfit),'Outfit';font-weight:800;font-size:19px;letter-spacing:-.02em;display:flex;align-items:center;gap:8px;}
.onb .logo .dot{width:9px;height:9px;border-radius:50%;background:var(--em);display:inline-block;}
.onb .logo b{color:var(--em);font-weight:800}
.onb .bar-prog{flex:1;height:6px;background:var(--line);border-radius:99px;overflow:hidden;max-width:320px;margin-left:auto;}
.onb .bar-prog i{display:block;height:100%;background:linear-gradient(90deg,var(--em),var(--em-deep));
  border-radius:99px;transition:width .4s cubic-bezier(.4,0,.2,1);}
.onb .bar-pct{font-family:var(--font-outfit),'Outfit';font-weight:700;font-size:13px;color:var(--soft);min-width:38px;text-align:right;}

.onb .hero{background:var(--ink-band);color:#fff;padding:48px 22px 54px;position:relative;overflow:hidden;}
.onb .hero::after{content:"";position:absolute;inset:0;
  background:radial-gradient(circle at 85% 0%,rgba(0,200,150,.16),transparent 55%);}
.onb .hero-in{max-width:900px;margin:0 auto;position:relative;z-index:1;}
.onb .hero .kicker{font-family:var(--font-outfit),'Outfit';font-weight:700;font-size:12px;letter-spacing:.22em;
  text-transform:uppercase;color:var(--em);margin-bottom:16px;}
.onb .hero h1{font-weight:900;font-size:clamp(30px,5vw,46px);line-height:1.04;letter-spacing:-.025em;max-width:16ch;}
.onb .scribble{font-family:'Caveat',cursive;font-weight:700;color:var(--em);font-size:clamp(24px,3.4vw,32px);
  display:block;margin-top:6px;transform:rotate(-1.5deg);}
.onb .hero p{color:#C9CDD2;font-size:16px;max-width:60ch;margin-top:18px;}

.onb .wrap{max-width:900px;margin:-26px auto 0;padding:0 22px 80px;position:relative;z-index:2;}

.onb .steps{display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;}
.onb .step-chip{display:inline-flex;align-items:center;gap:9px;background:var(--card);
  border:1px solid var(--line);border-radius:99px;padding:9px 16px 9px 9px;font-size:13.5px;font-weight:600;
  color:var(--soft);box-shadow:0 8px 22px rgba(20,24,27,.05);}
.onb .step-chip.on{border-color:var(--em);color:var(--ink);}
.onb .step-num{font-family:var(--font-outfit),'Outfit';font-weight:700;font-size:12px;width:24px;height:24px;
  border-radius:8px;background:var(--line);color:var(--soft);display:grid;place-items:center;}
.onb .step-chip.on .step-num{background:var(--em);color:#fff;}
.onb .step-chip.done .step-num{background:var(--ink);color:#fff;}

.onb main{min-width:0;}
.onb .sec{background:var(--card);border:1px solid var(--line);border-radius:var(--r);
  padding:30px 32px;margin-bottom:20px;box-shadow:0 8px 26px rgba(20,24,27,.04);}
.onb .sec-head{display:flex;gap:15px;align-items:flex-start;margin-bottom:6px;}
.onb .sec-n{font-family:var(--font-outfit),'Outfit';font-weight:800;font-size:13px;color:var(--em);letter-spacing:.04em;
  border:1.5px solid var(--em);border-radius:8px;padding:4px 9px;flex:none;margin-top:3px;}
.onb .sec h2{font-weight:800;font-size:23px;letter-spacing:-.02em;line-height:1.12;}
.onb .sec-sub{color:var(--soft);font-size:14px;margin-top:6px;margin-left:51px;margin-bottom:22px;max-width:62ch;}

.onb .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px 18px;}
.onb .f{display:flex;flex-direction:column;gap:7px;}
.onb .f.full{grid-column:1/-1;}
.onb label{font-weight:600;font-size:13.5px;color:var(--ink);}
.onb label .req{color:var(--em-deep);margin-left:2px;}
.onb label .hint{font-weight:400;color:var(--faint);font-size:12.5px;display:block;margin-top:1px;}
.onb input[type=text],.onb input[type=email],.onb input[type=tel],.onb input[type=url],.onb input[type=number],.onb select,.onb textarea{
  font-family:var(--font-inter),'Inter';font-size:14.5px;color:var(--ink);background:#fff;
  border:1.5px solid var(--line);border-radius:var(--rs);padding:11px 13px;width:100%;transition:.15s;}
.onb textarea{resize:vertical;min-height:80px;line-height:1.5;}
.onb input:focus,.onb select:focus,.onb textarea:focus{outline:none;border-color:var(--em);box-shadow:0 0 0 3px var(--em-wash);}
.onb select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A5F66' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 13px center;padding-right:34px;cursor:pointer;}

.onb .pills{display:flex;flex-wrap:wrap;gap:9px;}
.onb .pill{position:relative;}
.onb .pill input{position:absolute;opacity:0;width:0;height:0;}
.onb .pill span{display:inline-block;border:1.5px solid var(--line);border-radius:99px;padding:9px 15px;
  font-size:13.5px;font-weight:500;color:var(--soft);cursor:pointer;transition:.15s;user-select:none;}
.onb .pill input:checked + span{background:var(--ink);border-color:var(--ink);color:#fff;}
.onb .pill input:focus-visible + span{box-shadow:0 0 0 3px var(--em-wash);}

.onb .presence-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px;}
.onb .presence-row .pills{flex:none;}
.onb .presence-row input[type=url]{flex:1;min-width:220px;}

.onb .color-row{display:flex;align-items:center;gap:10px;}
.onb .color-row input[type=color]{width:52px;height:44px;padding:4px;border:1.5px solid var(--line);border-radius:var(--rs);background:#fff;cursor:pointer;flex:none;}
.onb .color-row input[type=text]{flex:1;}

.onb .drop{display:block;border:1.5px dashed var(--line);border-radius:var(--rs);background:#FCFCFB;padding:20px;
  text-align:center;cursor:pointer;transition:.15s;}
.onb .drop:hover{border-color:var(--em);background:var(--em-wash);}
.onb .drop svg{width:26px;height:26px;stroke:var(--em);margin-bottom:7px;}
.onb .drop b{display:block;font-weight:600;font-size:14px;color:var(--ink);}
.onb .drop small{display:block;color:var(--faint);font-size:12.5px;margin-top:3px;}
.onb .drop input{display:none;}
.onb .filelist{margin-top:10px;display:flex;flex-direction:column;gap:6px;}
.onb .filerow{display:flex;align-items:center;gap:9px;font-size:13px;background:var(--line-soft);
  border-radius:8px;padding:7px 11px;color:var(--ink);}
.onb .filerow .nm{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.onb .filerow .sz{color:var(--faint);margin-left:auto;flex:none;font-size:12px;}
.onb .filerow .rm{background:none;border:none;color:var(--faint);font-size:12.5px;font-weight:600;cursor:pointer;flex:none;}
.onb .filerow .rm:hover{color:var(--danger);}

.onb .nav{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:6px;}
.onb .btn{font-family:var(--font-outfit),'Outfit';font-weight:700;font-size:16px;background:var(--em);color:#fff;border:none;
  border-radius:12px;padding:15px 30px;cursor:pointer;transition:.18s;box-shadow:0 10px 26px rgba(0,200,150,.28);}
.onb .btn:hover{background:var(--em-deep);transform:translateY(-1px);}
.onb .btn:disabled{opacity:.6;cursor:not-allowed;transform:none;}
.onb .btn.ghost{background:#fff;color:var(--soft);border:1.5px solid var(--line);box-shadow:none;}
.onb .btn.ghost:hover{background:var(--line-soft);color:var(--ink);}

.onb .err-box{background:#FBE9E7;border:1px solid #F3C3BD;color:#9A2A20;border-radius:12px;
  padding:14px 16px;margin-bottom:16px;font-size:13.5px;font-weight:500;}

.onb .done{max-width:640px;margin:70px auto;text-align:center;padding:0 22px;}
.onb .done .tick{width:74px;height:74px;border-radius:50%;background:var(--em-wash);display:grid;place-items:center;margin:0 auto 22px;}
.onb .done .tick svg{width:38px;height:38px;stroke:var(--em-deep);}
.onb .done h2{font-family:var(--font-outfit),'Outfit';font-weight:900;font-size:30px;letter-spacing:-.02em;}
.onb .done p{color:var(--soft);margin-top:16px;font-size:15.5px;}

.onb footer{text-align:center;color:var(--faint);font-size:12.5px;padding:30px 22px 50px;}

@media (max-width:720px){
  .onb .grid{grid-template-columns:1fr;}
  .onb .sec{padding:24px 20px;}
  .onb .sec-sub{margin-left:0;}
  .onb .hero{padding:40px 22px 46px;}
}
@media (prefers-reduced-motion:reduce){.onb *{transition:none!important;}}
`;
