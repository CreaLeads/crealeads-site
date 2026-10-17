// Constantes partagées du site. Le domaine canonique est la version www :
// c'est celle que sert Vercel (crealeads.fr redirige vers www.crealeads.fr).
export const SITE_URL = "https://www.crealeads.fr";
export const CAL_URL = "https://cal.eu/enzo-crealeads/20min";
export const DASHBOARD_URL = "https://dashboard.crealeads.fr";

export const CONTACT = {
  email: "contact.crealeads@gmail.com",
  phone: "+33663675254",
  phoneDisplay: "06 63 67 52 54",
};

// Informations légales (entreprise individuelle)
export const LEGAL = {
  name: "Enzo Wagner — CreaLeads",
  form: "Entreprise individuelle",
  address: "60 rue François Ier, 75008 Paris",
  siren: "941 907 347",
  naf: "7311Z (Activités des agences de publicité)",
  vat: "FR18941907347",
  vatNote: "TVA non applicable, art. 293 B du CGI",
  director: "Enzo Wagner",
};

export const AUTHOR = {
  name: "Enzo Wagner",
  role: "Fondateur de CreaLeads",
  bio: "Fils d'artisan, Enzo a fondé CreaLeads pour donner aux artisans du bâtiment un système d'acquisition qui tourne pendant qu'ils sont sur le chantier : publicité Meta, qualification des demandes et suivi jusqu'au chantier signé.",
  url: "https://www.linkedin.com/in/enzo-wagner",
};

export const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
