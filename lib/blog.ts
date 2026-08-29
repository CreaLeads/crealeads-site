// Contenu éditorial du blog CreaLeads — optimisé SEO (acquisition, leads,
// prospects) et géo-ciblé (Île-de-France, Yvelines, Paris) pour les artisans
// du bâtiment. Ajouter un article = ajouter un objet à ARTICLES.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text?: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  geo?: string;
  date: string; // ISO (AAAA-MM-JJ)
  readingTime: string;
  excerpt: string;
  blocks: Block[];
}

const CTA_DEFAULT =
  "Vous êtes artisan et vous voulez un flux régulier de demandes qualifiées ? Réservez 20 minutes avec CreaLeads : on regarde ensemble ce qu'on peut faire pour votre zone et votre métier.";

export const ARTICLES: Article[] = [
  {
    slug: "trouver-clients-artisan-batiment",
    title: "Comment trouver des clients quand on est artisan du bâtiment",
    description:
      "Bouche-à-oreille, Google, Pages Jaunes, publicité Meta : le guide complet pour trouver des clients et générer des leads qualifiés quand on est artisan du bâtiment.",
    keywords: ["trouver des clients artisan", "acquisition client artisan", "leads artisan bâtiment", "prospects artisan"],
    date: "2026-08-04",
    readingTime: "6 min",
    excerpt:
      "Le bouche-à-oreille a une limite. Voici les canaux qui marchent vraiment pour trouver des clients quand on est artisan, et lequel donne des résultats en quelques jours.",
    blocks: [
      { type: "p", text: "La plupart des artisans du bâtiment vivent du bouche-à-oreille. C'est précieux, mais c'est aussi imprévisible : un mois vous croulez sous les chantiers, le mois suivant l'agenda est vide. Pour trouver des clients de façon régulière, il faut un canal que vous contrôlez. Voici les options qui s'offrent à vous, et laquelle donne des résultats le plus vite." },
      { type: "h2", text: "Pourquoi le bouche-à-oreille ne suffit plus" },
      { type: "p", text: "Le bouche-à-oreille dépend de vos clients passés et de leur bonne volonté. Vous ne décidez ni du volume, ni du moment, ni du type de chantier. Résultat : impossible de planifier votre activité, d'embaucher sereinement ou de faire grandir votre entreprise. Pour reprendre la main, il faut aller chercher la demande là où elle se trouve." },
      { type: "h2", text: "Les canaux pour trouver des clients artisan" },
      { type: "ul", items: [
        "Un site internet seul : utile pour la crédibilité, mais sans référencement il n'apporte quasiment aucun trafic avant 6 à 12 mois.",
        "Les annuaires (Pages Jaunes, plateformes de mise en relation) : vous êtes noyé parmi des dizaines de concurrents et vous payez souvent le lead au prix fort, sans exclusivité.",
        "Google (SEO et Google Ads) : excellent sur le long terme, mais la concurrence sur les mots-clés bâtiment est rude et le référencement naturel prend du temps.",
        "Les réseaux sociaux et la publicité Meta (Facebook, Instagram) : le canal le plus rapide pour générer des demandes qualifiées dans une zone précise.",
      ] },
      { type: "h2", text: "La publicité Meta : le canal le plus rapide" },
      { type: "p", text: "Avec des campagnes Meta bien configurées, vous pouvez cibler précisément les habitants d'une ville ou d'un département qui ont un projet correspondant à votre métier. Les premières demandes tombent généralement sous 24 à 72 heures. C'est incomparable avec un site qui met des mois à se référencer. La clé, c'est un ciblage métier + zone précis, des visuels qui donnent envie et un formulaire qui qualifie la demande dès le départ." },
      { type: "h2", text: "Qu'est-ce qu'un lead qualifié ?" },
      { type: "p", text: "Un lead qualifié, ce n'est pas un simple contact : c'est une personne qui a un vrai projet, un budget cohérent et un délai. Générer beaucoup de contacts ne sert à rien si vous perdez vos journées à rappeler des curieux. Un bon système d'acquisition qualifie automatiquement chaque demande (ville, projet, budget, délai) pour que vous ne parliez qu'aux prospects sérieux." },
      { type: "h2", text: "Combien de clients viser par mois ?" },
      { type: "p", text: "Tout dépend de votre panier moyen et de votre capacité à traiter les chantiers. Pour un applicateur résine ou un peintre, viser 50 à 100 demandes qualifiées par mois est réaliste avec un budget publicitaire maîtrisé. Sur ce volume, quelques chantiers signés suffisent largement à rentabiliser l'investissement." },
      { type: "cta" },
    ],
  },
  {
    slug: "generer-leads-qualifies-artisans-ile-de-france",
    title: "Générer des leads qualifiés pour artisans en Île-de-France",
    description:
      "Comment générer des leads et des prospects qualifiés pour une entreprise artisanale du bâtiment en Île-de-France (Paris, 77, 78, 91, 92, 93, 94, 95).",
    keywords: ["leads artisans Île-de-France", "acquisition clients artisan IDF", "prospects bâtiment Île-de-France", "publicité Meta artisan Paris"],
    geo: "Île-de-France",
    date: "2026-08-11",
    readingTime: "5 min",
    excerpt:
      "L'Île-de-France concentre une demande énorme en rénovation et travaux. Voici comment capter cette demande et générer des leads qualifiés, département par département.",
    blocks: [
      { type: "p", text: "L'Île-de-France est l'un des marchés les plus denses de France pour les artisans du bâtiment : rénovation d'appartements à Paris, maisons individuelles en grande couronne, ravalement, résine de sol, carrelage… La demande est là. Le vrai enjeu, c'est de la capter avant vos concurrents et de ne traiter que des prospects sérieux." },
      { type: "h2", text: "Pourquoi l'Île-de-France est un marché à part" },
      { type: "p", text: "Le volume de projets est considérable, mais la concurrence entre artisans l'est tout autant. Se démarquer sur Google demande du temps et un budget conséquent. La publicité Meta, elle, permet d'être visible immédiatement auprès des habitants d'un secteur précis — un arrondissement de Paris, une ville des Yvelines ou de l'Essonne — avec un message adapté à votre métier." },
      { type: "h2", text: "Cibler le bon département" },
      { type: "p", text: "Un ciblage géographique précis change tout. Plutôt que d'arroser toute la région, on concentre le budget sur votre zone de déplacement réelle :" },
      { type: "ul", items: [
        "Paris (75) : rénovation d'appartements, peinture, petits travaux — forte demande, panier variable.",
        "Hauts-de-Seine (92) et Val-de-Marne (94) : rénovation haut de gamme, résine, carrelage.",
        "Yvelines (78) et Essonne (91) : maisons individuelles, terrasses, sols, ravalement.",
        "Seine-Saint-Denis (93), Seine-et-Marne (77), Val-d'Oise (95) : gros volume, projets variés.",
      ] },
      { type: "h2", text: "De la demande au chantier signé" },
      { type: "p", text: "Générer des leads ne suffit pas : il faut les qualifier et les suivre jusqu'à la signature. Un bon système capte chaque demande avec sa ville, son projet et son délai, écarte automatiquement les curieux, puis vous laisse vous concentrer sur les visites et les devis. C'est exactement ce que CreaLeads installe pour les artisans franciliens, en exclusivité par métier et par secteur." },
      { type: "quote", text: "Un seul artisan par métier et par zone : votre concurrent direct ne pourra pas être accompagné en même temps que vous sur le même secteur." },
      { type: "cta", text: "Vous êtes artisan en Île-de-France ? Réservez un appel de 20 minutes : on vérifie si votre zone est encore disponible et on estime le volume de demandes atteignable." },
    ],
  },
  {
    slug: "acquisition-clients-artisan-yvelines-78",
    title: "Acquisition de clients pour artisans dans les Yvelines (78)",
    description:
      "Trouver des clients et générer des leads qualifiés quand on est artisan du bâtiment dans les Yvelines (78) : Versailles, Saint-Germain-en-Laye, Mantes, Rambouillet.",
    keywords: ["acquisition clients artisan Yvelines", "leads artisan 78", "trouver clients artisan Versailles", "prospects bâtiment Yvelines"],
    geo: "Yvelines (78)",
    date: "2026-08-18",
    readingTime: "5 min",
    excerpt:
      "Des maisons individuelles, des terrasses, de la rénovation : les Yvelines sont un terrain idéal pour un artisan. Voici comment y capter la demande.",
    blocks: [
      { type: "p", text: "Les Yvelines (78) sont un département idéal pour les artisans du bâtiment : beaucoup de maisons individuelles avec jardin et terrasse, un pouvoir d'achat élevé et une forte demande de rénovation. De Versailles à Rambouillet, en passant par Saint-Germain-en-Laye, Poissy ou Mantes-la-Jolie, les projets ne manquent pas — encore faut-il être visible au bon moment." },
      { type: "h2", text: "Un marché porteur pour le bâtiment" },
      { type: "p", text: "Résine de sol pour garage et terrasse, béton ciré, carrelage, peinture, ravalement de façade, maçonnerie… Les propriétaires de maison des Yvelines investissent régulièrement dans leur logement. La difficulté n'est pas la demande : c'est de la capter avant que le voisin artisan ne le fasse." },
      { type: "h2", text: "Comment capter la demande dans le 78" },
      { type: "p", text: "La publicité Meta permet de cibler précisément les habitants d'une ou plusieurs communes des Yvelines, propriétaires, avec un projet correspondant à votre métier. En quelques jours, les premières demandes arrivent avec la ville, la nature du projet et le délai. Vous ne vous déplacez que pour les projets sérieux, situés dans votre zone d'intervention." },
      { type: "ul", items: [
        "Ciblage par commune : Versailles, Saint-Germain-en-Laye, Le Chesnay, Poissy, Mantes-la-Jolie, Rambouillet…",
        "Ciblage par métier : un message et des visuels adaptés à votre spécialité.",
        "Qualification automatique : chaque demande arrive avec les informations utiles.",
        "Exclusivité : un seul artisan par métier et par secteur des Yvelines.",
      ] },
      { type: "h2", text: "Combien ça rapporte ?" },
      { type: "p", text: "Un chantier de résine ou de rénovation dans les Yvelines se facture généralement plusieurs milliers d'euros. Sur un flux de demandes qualifiées, quelques signatures par mois suffisent à rentabiliser largement l'investissement en acquisition. L'important est de garder l'exclusivité sur votre secteur pour ne pas diluer la demande." },
      { type: "cta", text: "Artisan dans les Yvelines (78) ? Vérifions ensemble si votre secteur est disponible. Réservez un appel de 20 minutes avec CreaLeads." },
    ],
  },
  {
    slug: "acquisition-clients-artisan-paris",
    title: "Acquisition de clients pour artisans à Paris",
    description:
      "Trouver des clients et générer des prospects qualifiés quand on est artisan du bâtiment à Paris (75) : rénovation, peinture, sols, petits travaux.",
    keywords: ["acquisition clients artisan Paris", "leads artisan Paris 75", "trouver clients rénovation Paris", "prospects bâtiment Paris"],
    geo: "Paris (75)",
    date: "2026-08-25",
    readingTime: "4 min",
    excerpt:
      "À Paris, la demande de rénovation est permanente mais la concurrence est féroce. Voici comment sortir du lot et capter des demandes qualifiées.",
    blocks: [
      { type: "p", text: "À Paris (75), la rénovation d'appartements est une demande permanente : peinture, sols, salle de bains, petits travaux, rafraîchissement avant location ou vente. Le marché est immense, mais la concurrence entre artisans et entreprises est l'une des plus fortes de France. Pour tirer votre épingle du jeu, il faut être visible au moment précis où le Parisien cherche un professionnel." },
      { type: "h2", text: "Le défi parisien : la concurrence" },
      { type: "p", text: "Sur Google, les premières positions sur les mots-clés « rénovation Paris » ou « peintre Paris » sont trustées par de gros acteurs et coûtent cher. La publicité Meta offre une alternative : cibler par arrondissement, par type de logement et par projet, avec un budget maîtrisé et des résultats rapides." },
      { type: "h2", text: "Cibler par arrondissement" },
      { type: "p", text: "Chaque arrondissement a son profil : logements anciens à rénover, copropriétés, investisseurs locatifs. Un ciblage fin permet d'adresser le bon message aux bons habitants et de ne recevoir que des demandes cohérentes avec votre zone et votre métier — sans exploser le budget." },
      { type: "h2", text: "Qualifier pour ne pas perdre de temps" },
      { type: "p", text: "À Paris plus qu'ailleurs, votre temps est précieux. Un système qui qualifie automatiquement chaque demande (projet, budget, délai) et écarte les curieux vous évite de courir aux quatre coins de la capitale pour rien. Vous ne vous déplacez que pour les projets sérieux." },
      { type: "cta", text: "Artisan à Paris ? Réservez 20 minutes avec CreaLeads pour estimer le volume de demandes atteignable dans vos arrondissements cibles." },
    ],
  },
  {
    slug: "publicite-meta-facebook-instagram-artisans",
    title: "Publicité Meta (Facebook & Instagram) pour artisans : le guide",
    description:
      "Comment fonctionne la publicité Meta pour les artisans du bâtiment, combien de prospects espérer par mois et quel budget prévoir pour générer des leads.",
    keywords: ["publicité Meta artisan", "Facebook Ads bâtiment", "Instagram Ads artisan", "générer leads Facebook artisan"],
    date: "2026-08-28",
    readingTime: "6 min",
    excerpt:
      "Combien de prospects par mois ? Quel budget ? Pourquoi ça échoue quand on le fait seul ? Tout ce qu'un artisan doit savoir sur la publicité Facebook et Instagram.",
    blocks: [
      { type: "p", text: "La publicité Meta — c'est-à-dire Facebook et Instagram — est aujourd'hui le moyen le plus rapide et le plus rentable pour un artisan du bâtiment de générer des demandes de devis. Mais mal utilisée, elle brûle du budget sans résultat. Voici ce qu'il faut comprendre avant de se lancer." },
      { type: "h2", text: "Pourquoi Meta plutôt que Google pour un artisan" },
      { type: "p", text: "Sur Google, l'internaute cherche activement (« carreleur Yvelines ») : la demande est là mais la concurrence sur les enchères est forte. Sur Meta, on va chercher la demande latente : on montre votre offre aux propriétaires d'une zone qui n'ont pas encore lancé leur projet mais qui y pensent. Résultat : un coût par demande souvent plus bas et un volume plus important, plus rapidement." },
      { type: "h2", text: "Combien de prospects par mois ?" },
      { type: "p", text: "Avec un budget publicitaire de l'ordre de 300 € par mois et des campagnes bien réglées, un artisan peut viser 50 à 100 demandes qualifiées par mois selon sa zone et son métier. Ce ne sont pas 50 chantiers : ce sont des demandes à qualifier, dont une partie deviendra des visites, puis des devis, puis des signatures." },
      { type: "h2", text: "Quel budget prévoir" },
      { type: "p", text: "Il faut distinguer deux choses : le budget publicitaire (versé à Meta, environ 300 €/mois pour démarrer) et la gestion du système (création des campagnes, visuels, qualification, suivi). Chez CreaLeads, la gestion complète est incluse dans un abonnement de 497 €/mois, sans frais de mise en place, et le budget publicitaire reste sur votre propre compte Meta." },
      { type: "h2", text: "Pourquoi ça échoue quand on le fait seul" },
      { type: "ul", items: [
        "Audience trop large : le budget part sur des gens hors zone ou hors cible.",
        "Visuels amateurs : ils n'arrêtent pas le scroll et le coût par demande explose.",
        "Formulaire non optimisé : on récupère des contacts, pas des projets qualifiés.",
        "Pas de suivi : les demandes ne sont ni relancées ni transformées.",
        "Pas d'optimisation : on ne teste pas, on ne corrige pas, on abandonne trop tôt.",
      ] },
      { type: "p", text: "Une campagne Meta se juge sur au moins trente jours : l'algorithme a besoin de données pour apprendre. Juger après une semaine n'a aucun sens. C'est pour ça qu'un accompagnement dans la durée fait toute la différence entre « j'ai essayé Facebook, ça n'a pas marché » et un flux régulier de chantiers." },
      { type: "cta" },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function allArticles(): Article[] {
  // Plus récents d'abord
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const CTA_FALLBACK = CTA_DEFAULT;
