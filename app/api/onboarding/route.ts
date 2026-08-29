import { NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { randomInt } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BUCKET = "onboarding-assets";
const ONE_YEAR = 60 * 60 * 24 * 365;

const DASHBOARD_URL = process.env.DASHBOARD_URL || "https://dashboard.crealeads.fr";
const RESEND_FROM = process.env.RESEND_FROM || "CreaLeads <onboarding@crealeads.fr>";
const NOTIFY_EMAIL = process.env.ONBOARDING_NOTIFY_EMAIL || "contact.crealeads@gmail.com";

// Offre par défaut : l'énumération offre_type = {ESSENTIEL, STARTER, PRO, SCALE}.
// L'offre commerciale unique à 497 € n'a pas de valeur dédiée -> on retient PRO.
const DEFAULT_OFFRE = "PRO";
const DEFAULT_PRIX = 497;

type Json = Record<string, unknown>;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function genPassword(len = 16): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#%*?";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[randomInt(0, chars.length)];
  return out;
}

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}
function strArr(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x) => typeof x === "string" && x.trim()).map((x) => (x as string).trim()) : [];
}

function fail(message: string, status = 400, extra?: Json) {
  return NextResponse.json({ ok: false, error: message, ...extra }, { status });
}

/** Supprime les enregistrements créés en cas d'échec après la création du compte. */
async function rollback(admin: SupabaseClient, userId: string | null, clientId: string | null) {
  try {
    if (clientId) {
      // onboarding_responses n'a pas forcément de cascade -> on nettoie explicitement.
      await admin.from("onboarding_responses").delete().eq("client_id", clientId);
      // La suppression du client cascade sur acces_clients (FK ON DELETE CASCADE).
      await admin.from("clients").delete().eq("id", clientId);
    }
    if (userId) await admin.auth.admin.deleteUser(userId);
  } catch {
    /* rollback best-effort : on ne masque pas l'erreur d'origine */
  }
}

export async function POST(req: Request) {
  // 0) Configuration serveur
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return fail("Configuration serveur incomplète (Supabase). Réessayez plus tard ou contactez-nous.", 500);
  }

  // 1) Lecture des données (FormData : champ `data` JSON + fichiers logo/photos)
  let data: Json = {};
  let logoFile: File | null = null;
  let photoFiles: File[] = [];
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      data = (await req.json()) as Json;
    } else {
      const form = await req.formData();
      const raw = form.get("data");
      data = raw ? (JSON.parse(String(raw)) as Json) : {};
      const l = form.get("logo");
      if (l instanceof File && l.size > 0) logoFile = l;
      photoFiles = form.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);
    }
  } catch {
    return fail("Requête invalide. Rechargez la page et réessayez.");
  }

  // 2) Vérifications d'entrée
  const prenom = str(data.prenom);
  const nom = str(data.nom);
  const email = str(data.email).toLowerCase();
  const telephone = str(data.telephone);
  const entreprise = str(data.nom_entreprise);
  const corps_metier = strArr(data.corps_metier);

  if (!prenom) return fail("Le prénom est requis.");
  if (!nom) return fail("Le nom est requis.");
  if (!EMAIL_RE.test(email)) return fail("Une adresse e-mail valide est requise.");
  if (!telephone) return fail("Le numéro de téléphone est requis.");
  if (!entreprise) return fail("Le nom de l'entreprise est requis.");
  if (corps_metier.length === 0) return fail("Sélectionnez au moins un corps de métier.");

  const admin = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // E-mail déjà utilisé ?
  {
    const { data: existing, error } = await admin
      .from("acces_clients")
      .select("id")
      .ilike("email", email)
      .limit(1);
    if (error) return fail("Impossible de vérifier votre e-mail pour le moment. Réessayez.", 500);
    if (existing && existing.length > 0) {
      return fail(
        "Un compte existe déjà avec cette adresse e-mail. Connectez-vous sur dashboard.crealeads.fr, ou écrivez-nous à contact.crealeads@gmail.com.",
        409,
      );
    }
  }

  // 3) Création de l'utilisateur (auth.users)
  const password = genPassword(16);
  const { data: created, error: userErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { prenom, nom, entreprise },
  });
  const userId = created?.user?.id ?? null;
  if (userErr || !userId) {
    const msg = (userErr?.message || "").toLowerCase();
    if (msg.includes("already") || msg.includes("registered") || msg.includes("exists")) {
      return fail("Un compte existe déjà avec cette adresse e-mail.", 409);
    }
    return fail("La création de votre compte a échoué. Réessayez ou contactez-nous.", 500);
  }

  let clientId: string | null = null;
  try {
    // 4) Création du client
    const metier = corps_metier[0] || str(data.specialite) || "Artisan du bâtiment";
    const zone = str(data.zone) || "À définir";
    const offre = str(data.offre) || DEFAULT_OFFRE;
    const prix = Number.isFinite(Number(data.prix_abonnement)) && Number(data.prix_abonnement) > 0 ? Number(data.prix_abonnement) : DEFAULT_PRIX;

    const { data: client, error: clientErr } = await admin
      .from("clients")
      .insert({
        prenom,
        nom,
        email,
        telephone,
        entreprise,
        metier,
        zone,
        offre, // enum offre_type
        prix_abonnement: prix,
        statut_abonnement: "ACTIF", // enum, état initial
        date_debut: new Date().toISOString().slice(0, 10),
        budget_pub: 0,
        source_statut: "APP",
      })
      .select("id")
      .single();
    if (clientErr || !client) throw new Error("client:" + (clientErr?.message || "inconnu"));
    clientId = client.id as string;

    // 5) Accès client (propriétaire)
    const { error: accesErr } = await admin
      .from("acces_clients")
      .insert({ email, client_id: clientId, role: "proprietaire" });
    if (accesErr) throw new Error("acces:" + accesErr.message);

    // 6) Upload des fichiers (best-effort — ne bloque pas la création du compte)
    let logo_url = "";
    const photos_urls: string[] = [];
    const upload = async (file: File, name: string): Promise<string> => {
      const buf = Buffer.from(await file.arrayBuffer());
      const path = `${clientId}/${name}`;
      const { error: upErr } = await admin.storage.from(BUCKET).upload(path, buf, {
        contentType: file.type || "application/octet-stream",
        upsert: true,
      });
      if (upErr) throw upErr;
      const { data: signed } = await admin.storage.from(BUCKET).createSignedUrl(path, ONE_YEAR);
      return signed?.signedUrl || "";
    };
    const extOf = (n: string, fb: string) => (n.match(/\.([a-zA-Z0-9]+)$/)?.[1] || fb).toLowerCase();
    try {
      if (logoFile) logo_url = await upload(logoFile, `logo.${extOf(logoFile.name, "png")}`);
      for (let i = 0; i < photoFiles.length; i++) {
        const u = await upload(photoFiles[i], `photo-${i + 1}.${extOf(photoFiles[i].name, "jpg")}`);
        if (u) photos_urls.push(u);
      }
    } catch {
      /* upload non bloquant : le compte reste valide, on continue sans les visuels */
    }

    // 7) Réponses d'onboarding
    const rayon = parseInt(str(data.rayon_km), 10);
    const { error: onbErr } = await admin.from("onboarding_responses").insert({
      client_id: clientId,
      prenom,
      nom,
      email,
      telephone,
      nom_entreprise: entreprise,
      metier_precis: str(data.specialite) || null,
      corps_metier,
      zone_principale: str(data.zone) || null,
      rayon_km: Number.isFinite(rayon) ? rayon : null,
      panier_moyen: str(data.panier_moyen) || null,
      nb_chantiers_mois: str(data.nb_chantiers_mois) || null,
      type_clientele: str(data.type_clientele) || null,
      facebook_url: str(data.facebook_url) || null,
      instagram_url: str(data.instagram_url) || null,
      site_url: str(data.site_url) || null,
      gmb_url: str(data.gmb_url) || null,
      has_done_meta_ads: data.has_done_meta_ads === true,
      meta_ads_budget: str(data.meta_ads_budget) || null,
      meta_ads_results: str(data.meta_ads_results) || null,
      sources_clients: strArr(data.sources_clients),
      logo_url: logo_url || null,
      photos_urls,
      couleur_charte: str(data.couleur_charte) || null,
      ton_communication: str(data.ton_communication) || null,
      infos_complementaires: str(data.infos_complementaires) || null,
      statut: "complete",
    });
    if (onbErr) throw new Error("onboarding:" + onbErr.message);

    // 8) E-mails (best-effort — n'annule pas un compte déjà créé)
    let warning: string | undefined;
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        await resend.emails.send({
          from: RESEND_FROM,
          to: email,
          subject: "Vos accès à votre tableau de bord CreaLeads",
          html: clientEmailHtml({ prenom, email, password }),
        });
      } catch {
        warning = "Votre compte est créé, mais l'e-mail contenant vos accès n'a pas pu être envoyé. Contactez-nous à contact.crealeads@gmail.com pour les récupérer.";
      }
      try {
        await resend.emails.send({
          from: RESEND_FROM,
          to: NOTIFY_EMAIL,
          subject: `Nouvel onboarding terminé — ${entreprise}`,
          html: internalEmailHtml({ prenom, nom, email, telephone, entreprise, corps_metier, data }),
        });
      } catch {
        /* notification interne non bloquante */
      }
    } else {
      warning = "Votre compte est créé. L'envoi automatique des accès est momentanément indisponible — nous vous les transmettons manuellement.";
    }

    return NextResponse.json({ ok: true, email, warning });
  } catch {
    await rollback(admin, userId, clientId);
    return fail(
      "Une erreur est survenue pendant la création de votre compte. Rien n'a été enregistré, vous pouvez réessayer. Si le problème persiste, écrivez-nous à contact.crealeads@gmail.com.",
      500,
    );
  }
}

function clientEmailHtml({ prenom, email, password }: { prenom: string; email: string; password: string }): string {
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:0 auto;color:#0f1a16">
    <h2 style="color:#17936b">Bienvenue chez CreaLeads, ${escapeHtml(prenom)} 👋</h2>
    <p>Votre compte est créé. Voici vos accès à votre tableau de bord :</p>
    <div style="background:#f7f8f7;border:1px solid #e8ebe9;border-radius:12px;padding:16px;margin:16px 0">
      <p style="margin:0 0 8px"><strong>Adresse :</strong> <a href="${DASHBOARD_URL}">${DASHBOARD_URL}</a></p>
      <p style="margin:0 0 8px"><strong>Identifiant :</strong> ${escapeHtml(email)}</p>
      <p style="margin:0"><strong>Mot de passe provisoire :</strong> <code style="background:#fff;padding:2px 6px;border-radius:6px;border:1px solid #e8ebe9">${escapeHtml(password)}</code></p>
    </div>
    <p><strong>Important :</strong> changez ce mot de passe dès votre première connexion, depuis les réglages de votre compte.</p>
    <p style="margin-top:24px">
      <a href="${DASHBOARD_URL}" style="display:inline-block;background:#40ce9b;color:#0f1a16;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:999px">Accéder à mon tableau de bord</a>
    </p>
    <p style="color:#5c6b64;font-size:13px;margin-top:24px">Une question ? Répondez à cet e-mail ou écrivez à contact.crealeads@gmail.com.</p>
  </div>`;
}

function internalEmailHtml(p: { prenom: string; nom: string; email: string; telephone: string; entreprise: string; corps_metier: string[]; data: Json }): string {
  const row = (k: string, v: unknown) => (v && String(v).trim() ? `<tr><td style="padding:4px 10px;color:#5c6b64">${k}</td><td style="padding:4px 10px"><strong>${escapeHtml(String(v))}</strong></td></tr>` : "");
  const d = p.data;
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;color:#0f1a16">
    <h2>🎉 Nouvel onboarding terminé — ${escapeHtml(p.entreprise)}</h2>
    <table style="border-collapse:collapse;font-size:14px">
      ${row("Nom", `${p.prenom} ${p.nom}`)}
      ${row("E-mail", p.email)}
      ${row("Téléphone", p.telephone)}
      ${row("Entreprise", p.entreprise)}
      ${row("Corps de métier", p.corps_metier.join(", "))}
      ${row("Spécialité", d.specialite)}
      ${row("Zone", d.zone)}
      ${row("Rayon (km)", d.rayon_km)}
      ${row("Panier moyen", d.panier_moyen)}
      ${row("Chantiers/mois", d.nb_chantiers_mois)}
      ${row("Clientèle", d.type_clientele)}
      ${row("Facebook", d.facebook_url)}
      ${row("Instagram", d.instagram_url)}
      ${row("Site", d.site_url)}
      ${row("Google", d.gmb_url)}
      ${row("Déjà fait du Meta ?", d.has_done_meta_ads ? "Oui" : "Non")}
      ${row("Budget Meta passé", d.meta_ads_budget)}
      ${row("Résultats Meta", d.meta_ads_results)}
      ${row("Sources clients", strArr(d.sources_clients).join(", "))}
      ${row("Ton de com", d.ton_communication)}
      ${row("Infos", d.infos_complementaires)}
    </table>
    <p style="color:#5c6b64;font-size:13px">Le compte et l'accès ont été créés automatiquement.</p>
  </div>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
