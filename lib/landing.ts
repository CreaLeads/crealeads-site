// Pages d'atterrissage SEO : une page par métier (/metiers/[slug]) et une page
// par zone (/zones/[slug]). Chaque page a un contenu propre (pas de gabarit
// copié-collé) pour éviter l'effet « pages satellites ».

export interface Proof {
  metric: string;
  name: string;
  loc: string;
  desc: string;
}

export interface Landing {
  slug: string;
  name: string; // libellé court (menu, liens)
  title: string; // <title>
  description: string; // meta description
  kicker: string;
  h1: string;
  intro: string;
  sections: { h: string; p: string }[];
  bullets: { h: string; items: string[] };
  faqs: { q: string; a: string }[];
  proof?: Proof;
  geo?: string; // zones : communes ou secteurs cités
}

const PROOF = {
  surfacebeton: { metric: "40 k€", name: "SurfaceBéton", loc: "Île-de-France · résine", desc: "De zéro à 40 000 € de chiffre d'affaires mensuel. 60 demandes les 5 premiers jours, 2 chantiers signés la première semaine." },
  adame: { metric: "×3", name: "Adame", loc: "Tremblay-en-France · résine", desc: "Rendez-vous mensuels multipliés par trois. Un agenda rempli en continu, mois après mois." },
  leroy: { metric: "4 métiers", name: "Leroy BTP", loc: "Yvetot · maçonnerie, ravalement", desc: "« Le bouche-à-oreille fonctionnait, mais c'était plafonné. Maintenant j'ai un flux régulier de prospects qualifiés. »" },
  eirlly: { metric: "×2", name: "Eirlly", loc: "Lyon", desc: "Chiffre d'affaires doublé, une secrétaire et un commercial recrutés. Plus de 400 contacts en 2 mois." },
  mendes: { metric: "100 %", name: "Mendes Signature", loc: "Troyes · résine", desc: "100 % de ses clients viennent de Meta. « Sans ce système, je serais encore en attente de clients. »" },
} satisfies Record<string, Proof>;

export const METIERS: Landing[] = [
  {
    slug: "applicateur-resine",
    name: "Applicateur résine",
    title: "Trouver des chantiers de résine de sol et béton ciré",
    description:
      "Applicateur résine ou béton ciré : recevez des demandes de devis qualifiées pour garages, terrasses, cuisines et pièces de vie, sur votre zone. Publicité Meta, qualification et suivi jusqu'au chantier signé.",
    kicker: "Résine de sol · Béton ciré · Moquette de pierre",
    h1: "Des chantiers de résine, toute l'année, sur votre zone.",
    intro:
      "La résine est un produit qui se vend à l'œil : un sol de garage brillant, une terrasse en moquette de pierre, un béton ciré dans une pièce de vie. C'est exactement ce que les réseaux sociaux savent montrer. Nos premiers clients sont des applicateurs résine, et c'est le métier sur lequel le système est le plus rodé.",
    sections: [
      {
        h: "Pourquoi la résine marche si bien sur Facebook et Instagram",
        p: "Personne ne tape « sol en résine » sur Google tant qu'il ne sait pas que ça existe. Sur Meta, on montre un avant/après de garage à des propriétaires de maison de votre secteur : la demande naît en voyant le visuel. C'est de la demande latente, que vos concurrents ne captent pas en attendant le bouche-à-oreille.",
      },
      {
        h: "Des demandes déjà triées : surface, pièce, délai",
        p: "Chaque demande arrive avec la surface approximative, le type de pièce (garage, terrasse, cuisine, local pro), la ville et le délai. Vous voyez tout de suite si c'est un garage de 40 m² dans votre zone ou un devis de curiosité pour un balcon à 80 km. Vous ne vous déplacez que pour les vrais projets.",
      },
      {
        h: "Un panier moyen qui rentabilise vite",
        p: "Un chantier de résine se facture généralement entre 3 000 et 8 000 €. Avec un abonnement à 497 €/mois et environ 300 € de budget publicitaire, un seul chantier signé couvre plusieurs mois de système. C'est pour ça que la résine est le métier où le retour sur investissement est le plus rapide.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Sols de garage en résine époxy ou polyuréthane",
        "Terrasses et plages de piscine en moquette de pierre",
        "Béton ciré et résine décorative dans les pièces de vie",
        "Sols de locaux professionnels, commerces et ateliers",
        "Escaliers, salles de bains et douches à l'italienne",
      ],
    },
    faqs: [
      { q: "Combien de demandes peut espérer un applicateur résine ?", a: "Avec un budget publicitaire d'environ 300 €/mois, nos clients résine reçoivent généralement entre 50 et 100 demandes qualifiées par mois, selon la zone. SurfaceBéton a reçu 60 demandes ses 5 premiers jours." },
      { q: "Vous travaillez avec plusieurs applicateurs résine ?", a: "Oui, mais jamais sur la même zone. Un seul applicateur résine par secteur : votre concurrent direct ne pourra pas être accompagné en même temps que vous." },
      { q: "Il me faut des photos de mes chantiers ?", a: "C'est un plus : vos vrais avant/après sont les visuels qui convertissent le mieux. Si vous n'en avez pas assez, on crée des visuels de départ et on les remplace par vos photos au fil des chantiers." },
    ],
    proof: PROOF.surfacebeton,
  },
  {
    slug: "peintre-batiment",
    name: "Peintre en bâtiment",
    title: "Trouver des clients quand on est peintre en bâtiment",
    description:
      "Peintre en bâtiment : recevez des demandes de devis qualifiées pour la rénovation intérieure, la peinture de façade et le rafraîchissement avant vente ou location, sur votre secteur.",
    kicker: "Peinture intérieure · Façade · Décoration",
    h1: "Peintre en bâtiment : remplissez votre planning sans attendre le bouche-à-oreille.",
    intro:
      "La peinture est l'un des métiers les plus concurrentiels du bâtiment : beaucoup d'artisans, beaucoup d'auto-entrepreneurs, et des clients qui comparent trois devis. Pour sortir du lot, il faut être celui qui répond en premier, avec un message clair et des chantiers qui donnent confiance.",
    sections: [
      {
        h: "Le problème des peintres : trop de petits devis, pas assez de vrais chantiers",
        p: "Un « rafraîchissement d'une chambre » et la rénovation complète d'un appartement de 80 m² ne valent pas le même déplacement. Le formulaire de qualification demande la surface, le nombre de pièces, l'état des murs et le délai. Vous choisissez les demandes qui valent votre temps.",
      },
      {
        h: "Cibler les bons moments de vie",
        p: "Les gens repeignent quand ils emménagent, vendent, mettent en location ou accueillent un enfant. Les campagnes Meta ciblent les propriétaires de votre zone, avec des visuels avant/après qui montrent la différence entre un travail d'amateur et un travail de pro.",
      },
      {
        h: "Répondre vite pour signer avant les autres",
        p: "En peinture, le premier artisan qui rappelle a souvent le chantier. Chaque nouvelle demande vous est notifiée immédiatement et s'affiche dans votre tableau de bord avec toutes les informations. Les relances partent toutes seules si le prospect ne répond pas.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Rénovation complète d'appartements et de maisons",
        "Rafraîchissement avant vente ou mise en location",
        "Peinture de façade et de boiseries extérieures",
        "Papier peint, enduits décoratifs et finitions haut de gamme",
        "Locaux professionnels et parties communes",
      ],
    },
    faqs: [
      { q: "La publicité Meta marche-t-elle pour un peintre ?", a: "Oui, à condition de cibler les propriétaires de votre zone et de montrer des avant/après réels. La peinture est très visuelle : un salon transformé arrête le scroll bien mieux qu'une publication « devis gratuit »." },
      { q: "Comment éviter les demandes trop petites ?", a: "Le formulaire demande la surface, le nombre de pièces et le budget envisagé. On peut aussi fixer un seuil : les demandes en dessous ne vous sont pas présentées comme prioritaires." },
      { q: "Je travaille seul, est-ce adapté ?", a: "Oui. On règle le volume de demandes sur votre capacité réelle. Mieux vaut 30 demandes sérieuses que vous pouvez traiter que 100 que vous laissez filer." },
    ],
  },
  {
    slug: "carreleur",
    name: "Carreleur",
    title: "Trouver des chantiers de carrelage : leads qualifiés pour carreleurs",
    description:
      "Carreleur : recevez des demandes de devis qualifiées pour salles de bains, cuisines, sols et terrasses dans votre zone. Ciblage par commune, qualification automatique, exclusivité par secteur.",
    kicker: "Carrelage · Faïence · Terrasses",
    h1: "Carreleur : des demandes de chantier qualifiées, dans votre secteur.",
    intro:
      "Salles de bains, cuisines, sols de pièces de vie, terrasses : le carrelage arrive presque toujours dans un projet de rénovation plus large. Le bon moment pour se montrer, c'est quand le propriétaire commence à se projeter, pas quand il a déjà trouvé son artisan.",
    sections: [
      {
        h: "Capter le projet avant qu'il ne parte chez un généraliste",
        p: "Beaucoup de chantiers de carrelage sont avalés par des entreprises de rénovation tous corps d'état. En vous montrant directement aux propriétaires qui préparent une salle de bains ou une cuisine, vous récupérez le chantier en direct, sans intermédiaire.",
      },
      {
        h: "Une qualification qui parle votre langue",
        p: "Surface, type de pose (sol, mur, extérieur), format des carreaux, dépose de l'existant ou non, délai : la demande arrive avec ce dont vous avez besoin pour savoir si le déplacement vaut le coup et préparer votre visite.",
      },
      {
        h: "Des visuels qui montrent la qualité de pose",
        p: "Joints réguliers, grands formats, calepinage soigné : ce qui fait la différence entre deux carreleurs se voit en photo. On met en avant vos plus beaux chantiers pour attirer les clients qui cherchent la qualité, pas le moins cher.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Rénovation de salles de bains et douches à l'italienne",
        "Carrelage de cuisine, crédences et plans de travail",
        "Sols de pièces de vie en grand format",
        "Terrasses et plages de piscine sur plots ou collées",
        "Locaux commerciaux et professionnels",
      ],
    },
    faqs: [
      { q: "Combien coûte un lead de carrelage ?", a: "Le coût par demande dépend de votre zone et de la saison. Ce qui compte, c'est le coût par chantier signé : vous le voyez chaque semaine dans votre bilan, de la publicité jusqu'à la signature." },
      { q: "Je fais aussi de la faïence et de la petite plomberie, c'est gênant ?", a: "Au contraire. On peut cibler vos spécialités les plus rentables et mettre en avant la salle de bains clé en main si c'est votre point fort." },
      { q: "Les demandes sont-elles partagées avec d'autres carreleurs ?", a: "Non. Les demandes viennent de vos propres campagnes et n'appartiennent qu'à vous. Et un seul carreleur est accompagné par secteur." },
    ],
  },
  {
    slug: "macon",
    name: "Maçon",
    title: "Trouver des chantiers de maçonnerie : clients pour maçons",
    description:
      "Maçon : recevez des demandes qualifiées pour extensions, murs, dalles, terrasses et rénovation. Publicité ciblée sur votre rayon d'intervention, qualification du budget et du délai.",
    kicker: "Maçonnerie · Extensions · Terrasses",
    h1: "Maçon : des chantiers sérieux, avec un budget, dans votre rayon.",
    intro:
      "En maçonnerie, une demande mal qualifiée coûte cher : une demi-journée de déplacement et de métré pour un projet qui n'a pas de budget ou qui ne se fera que dans deux ans. Le système trie les demandes avant qu'elles n'arrivent jusqu'à vous.",
    sections: [
      {
        h: "Qualifier le budget et le délai avant de vous déplacer",
        p: "Extension, mur de clôture, dalle, ouverture de mur porteur : chaque demande arrive avec la nature des travaux, la ville, le budget envisagé et l'échéance. Vous priorisez les projets prêts à démarrer et vous laissez de côté les simples prises de renseignement.",
      },
      {
        h: "Cibler votre rayon d'intervention réel",
        p: "Un maçon travaille rarement à plus de 30 à 50 km de son dépôt. Les campagnes ne visent que les communes de votre secteur, avec un budget concentré là où vous voulez travailler, pas sur toute la région.",
      },
      {
        h: "Montrer le gros œuvre bien fait",
        p: "Chantiers en cours, avant/après de terrasses ou d'extensions : vos photos de terrain rassurent sur le sérieux de l'entreprise. C'est ce qui fait choisir un maçon plutôt qu'un autre quand le client ne connaît personne.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Extensions et agrandissements de maison",
        "Murs de clôture, murets et portails",
        "Dalles, terrasses béton et allées",
        "Ouvertures de murs porteurs et rénovation lourde",
        "Ravalement et reprise de façade",
      ],
    },
    faqs: [
      { q: "Les gros chantiers de maçonnerie viennent-ils vraiment de Facebook ?", a: "Oui : les propriétaires qui envisagent une extension ou une terrasse passent du temps sur les réseaux à chercher des idées. Leroy BTP, en maçonnerie et ravalement, reçoit aujourd'hui un flux régulier de demandes par ce canal." },
      { q: "Je n'ai pas le temps de rappeler tout le monde.", a: "C'est le principe : les curieux sont écartés automatiquement et les relances partent seules. Vous ne rappelez que les demandes qualifiées, déjà triées dans votre tableau de bord." },
      { q: "Puis-je mettre en avant plusieurs métiers ?", a: "Oui. Maçonnerie, ravalement, terrasses : on peut alterner les campagnes selon la saison et vos priorités." },
    ],
    proof: PROOF.leroy,
  },
  {
    slug: "ravalement-facade",
    name: "Façadier",
    title: "Trouver des chantiers de ravalement de façade",
    description:
      "Façadier : recevez des demandes de devis qualifiées pour ravalement, enduit, nettoyage et isolation de façade. Ciblage des propriétaires de maison de votre secteur, demandes triées par surface et délai.",
    kicker: "Ravalement · Enduit · Nettoyage de façade",
    h1: "Façadier : captez les ravalements avant vos concurrents.",
    intro:
      "Un ravalement est un gros chantier, souvent décidé des mois à l'avance et comparé entre plusieurs devis. Être présent tôt dans la réflexion du propriétaire, avec des avant/après qui frappent, c'est ce qui fait la différence.",
    sections: [
      {
        h: "Des avant/après qui vendent tout seuls",
        p: "Une façade grise et fissurée qui redevient neuve : peu de métiers ont un visuel aussi parlant. Les campagnes Meta montrent vos réalisations aux propriétaires de maison de votre secteur, au moment où ils regardent leur propre façade en se disant qu'il faudrait s'en occuper.",
      },
      {
        h: "Une saisonnalité qui se pilote",
        p: "La demande de ravalement suit les beaux jours. On monte le budget publicitaire au printemps pour remplir le planning d'été, et on le réduit quand vous êtes complet. Vous gardez la main sur le volume.",
      },
      {
        h: "Les bonnes informations dès la première demande",
        p: "Type de maison, surface approximative, état de la façade, nature des travaux (nettoyage, enduit, peinture, isolation) et délai : vous savez avant d'appeler si le projet correspond à votre activité.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Ravalement complet de maisons individuelles",
        "Nettoyage et démoussage de façade",
        "Enduits monocouche et finitions grattées ou talochées",
        "Peinture de façade et traitement des fissures",
        "Isolation thermique par l'extérieur (ITE)",
      ],
    },
    faqs: [
      { q: "La publicité Meta est-elle adaptée à un chantier aussi engageant ?", a: "Oui. Le ravalement se décide sur plusieurs semaines : la publicité vous place dans la réflexion du propriétaire très tôt, et le suivi automatique vous garde en tête jusqu'à la décision." },
      { q: "Je dépends de la météo, comment gérer le volume ?", a: "Le budget publicitaire est ajustable à tout moment. On accélère avant la haute saison et on lève le pied quand votre planning est plein." },
      { q: "Faites-vous aussi des campagnes pour l'ITE ?", a: "Oui, c'est un message différent (économies d'énergie, confort) qu'on peut lancer en parallèle du ravalement classique." },
    ],
    proof: PROOF.leroy,
  },
  {
    slug: "couvreur",
    name: "Couvreur",
    title: "Trouver des clients quand on est couvreur",
    description:
      "Couvreur : recevez des demandes de devis qualifiées pour réfection de toiture, démoussage, gouttières et isolation de combles, sur votre zone d'intervention. Demandes triées par urgence et budget.",
    kicker: "Toiture · Démoussage · Zinguerie",
    h1: "Couvreur : des demandes de toiture qualifiées, sans démarchage.",
    intro:
      "La toiture souffre d'une mauvaise image : démarchage agressif, devis gonflés, arnaques au démoussage. Pour un couvreur sérieux, la confiance est le premier argument de vente. Une présence locale, professionnelle et transparente vous démarque immédiatement.",
    sections: [
      {
        h: "Inspirer confiance là où le secteur fait peur",
        p: "Les campagnes mettent en avant votre entreprise, vos chantiers réels, votre zone et vos garanties. Le propriétaire qui vous contacte vient de lui-même : il n'a pas été démarché, il a choisi votre entreprise.",
      },
      {
        h: "Distinguer l'urgence du projet",
        p: "Une fuite à réparer cette semaine et une réfection complète prévue l'an prochain ne se traitent pas pareil. La qualification indique la nature du besoin et son urgence pour que vous organisiez vos interventions sans perdre de temps.",
      },
      {
        h: "Toute l'année, pas seulement après les tempêtes",
        p: "Démoussage au printemps, gouttières à l'automne, isolation de combles avant l'hiver : on adapte les messages à la saison pour garder un flux régulier de demandes, au lieu des pics imprévisibles liés à la météo.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Réfection et rénovation complète de toiture",
        "Recherche de fuite et réparations",
        "Démoussage et traitement hydrofuge",
        "Gouttières, zinguerie et descentes d'eau",
        "Isolation des combles et pose de fenêtres de toit",
      ],
    },
    faqs: [
      { q: "Les gens cherchent-ils un couvreur sur Facebook ?", a: "Pour une urgence, ils vont plutôt sur Google ; c'est pourquoi l'option Google Ads existe. Pour une réfection, un démoussage ou une isolation, la publicité Meta crée la demande auprès des propriétaires de votre secteur avant qu'ils ne cherchent." },
      { q: "Comment éviter d'être assimilé aux démarcheurs ?", a: "Par la transparence : vrai nom d'entreprise, vraies photos, vraie zone, pas de promesse de « devis gratuit et sans engagement » criarde. Le ton des campagnes est celui d'un artisan local, pas d'un centre d'appels." },
      { q: "Est-ce rentable pour un couvreur seul ?", a: "Un chantier de toiture se chiffre souvent en milliers d'euros. Un seul chantier signé par mois couvre largement l'abonnement et le budget publicitaire." },
    ],
  },
  {
    slug: "renovation-interieure",
    name: "Rénovation intérieure",
    title: "Trouver des chantiers de rénovation intérieure",
    description:
      "Entreprise de rénovation : recevez des demandes qualifiées pour rénovations complètes d'appartements et de maisons, cuisines et salles de bains. Ciblage par zone, demandes triées par budget.",
    kicker: "Rénovation complète · Cuisine · Salle de bains",
    h1: "Entreprise de rénovation : des projets complets, pas des bricoles.",
    intro:
      "Une entreprise de rénovation vit des gros projets : appartements entiers, maisons à remettre au goût du jour, cuisines et salles de bains clé en main. Le défi n'est pas de recevoir des demandes, mais de recevoir les bonnes.",
    sections: [
      {
        h: "Filtrer par budget et par périmètre",
        p: "Surface, nombre de pièces, corps d'état concernés, budget envisagé et date souhaitée : la qualification fait remonter en priorité les projets qui correspondent à votre taille d'entreprise. Les demandes de petits travaux sont écartées ou mises de côté.",
      },
      {
        h: "Les acheteurs et les investisseurs, une cible à part",
        p: "Un appartement acheté à rénover, un bien à remettre en location : ces clients décident vite et rénovent beaucoup. Les campagnes peuvent s'adresser spécifiquement à eux, avec un message orienté délai et maîtrise du budget.",
      },
      {
        h: "Suivre chaque projet jusqu'à la signature",
        p: "Sur un chantier à plusieurs dizaines de milliers d'euros, le cycle de décision est long. Le tableau de bord garde l'historique de chaque échange, les relances partent automatiquement et vous savez exactement quelle publicité a amené quel chantier.",
      },
    ],
    bullets: {
      h: "Les projets que l'on fait remonter",
      items: [
        "Rénovation complète d'appartements et de maisons",
        "Cuisines et salles de bains clé en main",
        "Remise en état avant location ou après achat",
        "Redistribution des pièces et ouverture d'espaces",
        "Aménagement de combles et de sous-sols",
      ],
    },
    faqs: [
      { q: "Les demandes sont-elles adaptées à une entreprise tous corps d'état ?", a: "Oui. On met en avant votre capacité à tout gérer avec un seul interlocuteur, ce qui attire les projets complets plutôt que les petits travaux isolés." },
      { q: "Comment mesurer la rentabilité sur des cycles longs ?", a: "Chaque demande est suivie de la publicité jusqu'au chantier signé. Votre bilan hebdomadaire montre le coût réel par chantier, même quand la signature intervient deux mois après la demande." },
      { q: "Peut-on cibler plusieurs départements ?", a: "Oui, avec l'option zone supplémentaire. On commence en général par votre secteur principal, puis on étend quand le flux est rodé." },
    ],
  },
];

export const ZONES: Landing[] = [
  {
    slug: "ile-de-france",
    name: "Île-de-France",
    title: "Trouver des clients artisan en Île-de-France",
    description:
      "Artisan du bâtiment en Île-de-France : recevez des demandes de devis qualifiées dans votre département (75, 77, 78, 91, 92, 93, 94, 95). Publicité ciblée par commune, exclusivité par métier et secteur.",
    kicker: "Paris et petite couronne · Grande couronne",
    h1: "Artisan en Île-de-France : des chantiers dans votre secteur, pas à l'autre bout de la région.",
    intro:
      "L'Île-de-France est le plus gros marché de la rénovation en France, et aussi le plus concurrentiel. Entre les bouchons et les distances, un chantier mal placé peut vous coûter une demi-journée. La clé, c'est de ne recevoir que des demandes dans votre rayon réel.",
    geo: "Paris · Hauts-de-Seine · Seine-Saint-Denis · Val-de-Marne · Yvelines · Essonne · Seine-et-Marne · Val-d'Oise",
    sections: [
      {
        h: "Un ciblage au département, voire à la commune",
        p: "Plutôt que d'arroser toute la région, on concentre le budget sur les communes où vous voulez vraiment travailler. Un artisan installé à Versailles n'a pas les mêmes clients qu'un artisan de Créteil ou de Cergy : le message et le secteur sont réglés pour chacun.",
      },
      {
        h: "Petite couronne et grande couronne, deux marchés",
        p: "À Paris et en petite couronne, la demande porte surtout sur la rénovation d'appartements. En grande couronne, ce sont les maisons individuelles : garages, terrasses, façades, extensions. Les campagnes et les visuels s'adaptent à ce que vos futurs clients ont réellement chez eux.",
      },
      {
        h: "L'exclusivité, encore plus précieuse ici",
        p: "Avec autant d'artisans au mètre carré, partager ses leads avec trois concurrents revient à se battre sur les prix. Chez CreaLeads, un seul artisan par métier et par secteur : vos demandes ne sont qu'à vous.",
      },
    ],
    bullets: {
      h: "Ce que l'on règle pour chaque secteur francilien",
      items: [
        "Les communes ciblées, selon votre rayon d'intervention réel",
        "Le type de bien visé : appartement, pavillon, maison avec extérieur",
        "Les visuels : vos réalisations les plus proches de la zone",
        "Le seuil de qualification : surface, budget, délai",
        "L'exclusivité de votre métier sur le secteur",
      ],
    },
    faqs: [
      { q: "Mon secteur est-il encore disponible ?", a: "Ça dépend de votre métier : on travaille en exclusivité par métier et par secteur. Le plus simple est de réserver un appel de 20 minutes, on vérifie en direct." },
      { q: "Peut-on couvrir plusieurs départements franciliens ?", a: "Oui, avec l'option zone supplémentaire (+97 €/mois). On démarre souvent sur un département, puis on étend une fois le flux rodé." },
      { q: "Le budget publicitaire est-il plus élevé en Île-de-France ?", a: "La concurrence publicitaire y est plus forte, mais le panier moyen aussi. Environ 300 €/mois suffisent pour démarrer sur un secteur ; on ajuste ensuite selon les résultats." },
    ],
    proof: PROOF.surfacebeton,
  },
  {
    slug: "paris",
    name: "Paris (75)",
    title: "Trouver des clients artisan à Paris (75)",
    description:
      "Artisan du bâtiment à Paris : recevez des demandes de devis qualifiées pour la rénovation d'appartements, arrondissement par arrondissement. Publicité Meta ciblée, demandes triées, exclusivité.",
    kicker: "Paris intra-muros · 20 arrondissements",
    h1: "Artisan à Paris : des demandes qualifiées, arrondissement par arrondissement.",
    intro:
      "À Paris, la demande de rénovation ne s'arrête jamais : appartements anciens, rafraîchissements avant location, salles de bains et cuisines à refaire. Mais sur Google, les premières places sont trustées par de gros acteurs et les plateformes de mise en relation revendent la même demande à plusieurs artisans.",
    geo: "Paris 1er à 20e arrondissement",
    sections: [
      {
        h: "Contourner la guerre des mots-clés",
        p: "« Peintre Paris », « rénovation appartement Paris » : ces recherches coûtent cher et sont dominées par des réseaux nationaux. La publicité Meta prend le problème à l'envers : on montre vos réalisations aux propriétaires des arrondissements que vous ciblez, avant même qu'ils ne cherchent.",
      },
      {
        h: "Les contraintes parisiennes, prises en compte dès la demande",
        p: "Étage, ascenseur, stationnement, accord de copropriété, horaires de chantier : la qualification fait remonter ce qui compte pour chiffrer juste et organiser votre intervention. Vous évitez les mauvaises surprises au moment de la visite.",
      },
      {
        h: "Des clients pressés : la réactivité fait la vente",
        p: "Le Parisien qui demande un devis en contacte souvent plusieurs. Chaque nouvelle demande vous est notifiée instantanément, et un premier message part automatiquement pour la garder au chaud pendant que vous êtes sur un chantier.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés à Paris",
      items: [
        "Rénovation complète d'appartements anciens",
        "Peinture et rafraîchissement avant location ou vente",
        "Salles de bains et cuisines",
        "Parquets, sols et béton ciré",
        "Locaux commerciaux et bureaux",
      ],
    },
    faqs: [
      { q: "Peut-on cibler seulement certains arrondissements ?", a: "Oui. On peut se concentrer sur les arrondissements proches de votre dépôt ou sur ceux où le panier moyen correspond à votre positionnement." },
      { q: "Les demandes parisiennes sont-elles plus petites ?", a: "Les surfaces sont plus réduites qu'en grande couronne, mais le prix au mètre carré est plus élevé et les projets complets sont fréquents. La qualification vous permet de trier selon votre seuil." },
      { q: "Et la proche banlieue ?", a: "On peut inclure les communes limitrophes (Boulogne, Montreuil, Vincennes, Neuilly…) si vous y intervenez." },
    ],
  },
  {
    slug: "hauts-de-seine",
    name: "Hauts-de-Seine (92)",
    title: "Trouver des clients artisan dans les Hauts-de-Seine (92)",
    description:
      "Artisan du bâtiment dans les Hauts-de-Seine : recevez des demandes qualifiées à Boulogne, Neuilly, Issy, Rueil, Asnières, Colombes. Rénovation haut de gamme, publicité ciblée, exclusivité.",
    kicker: "Boulogne · Neuilly · Issy · Rueil · Asnières",
    h1: "Artisan dans le 92 : touchez la clientèle qui rénove le plus.",
    intro:
      "Les Hauts-de-Seine concentrent une clientèle exigeante, qui rénove souvent et attend un travail soigné. C'est un département où la qualité d'exécution se vend, à condition de la montrer aux bonnes personnes.",
    geo: "Boulogne-Billancourt · Neuilly-sur-Seine · Issy-les-Moulineaux · Rueil-Malmaison · Asnières-sur-Seine · Colombes · Courbevoie · Antony",
    sections: [
      {
        h: "Un positionnement qualité plutôt que prix",
        p: "Dans le 92, le client compare moins les prix que les réalisations. Les campagnes mettent en avant vos finitions, vos matériaux et vos chantiers les plus soignés, pour attirer ceux qui cherchent le bon artisan plutôt que le moins cher.",
      },
      {
        h: "Appartements au nord, maisons au sud",
        p: "D'Asnières à Courbevoie, on rénove surtout des appartements ; d'Antony à Rueil, beaucoup de maisons avec jardin, garage et terrasse. Le ciblage par commune permet d'adresser le bon projet à chaque secteur.",
      },
      {
        h: "Des demandes complètes pour chiffrer juste",
        p: "Surface, type de bien, nature des travaux, budget et délai : vous arrivez à la visite en sachant à quoi vous attendre, et vous chiffrez vite un client qui attend de la réactivité.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 92",
      items: [
        "Rénovation haut de gamme d'appartements",
        "Résine et béton ciré dans les pièces de vie",
        "Terrasses, garages et extérieurs de maisons",
        "Salles de bains et cuisines sur mesure",
        "Ravalement de maisons et petites copropriétés",
      ],
    },
    faqs: [
      { q: "Avez-vous déjà des clients dans les Hauts-de-Seine ?", a: "Oui, notamment Résinov à Asnières-sur-Seine. L'exclusivité s'applique par métier : on vérifie la disponibilité du vôtre lors de l'appel." },
      { q: "Le budget publicitaire doit-il être plus élevé ?", a: "Pas forcément. Le ciblage précis par commune évite de dépenser sur des zones inutiles ; environ 300 €/mois suffisent pour démarrer." },
      { q: "Peut-on inclure Paris ouest ?", a: "Oui, si vous y intervenez : les 15e, 16e et 17e arrondissements sont souvent associés au 92 dans les campagnes." },
    ],
  },
  {
    slug: "yvelines",
    name: "Yvelines (78)",
    title: "Trouver des clients artisan dans les Yvelines (78)",
    description:
      "Artisan du bâtiment dans les Yvelines : recevez des demandes qualifiées à Versailles, Saint-Germain-en-Laye, Poissy, Mantes, Rambouillet. Maisons individuelles, terrasses, garages, façades.",
    kicker: "Versailles · Saint-Germain · Poissy · Rambouillet",
    h1: "Artisan dans les Yvelines : le département des maisons à rénover.",
    intro:
      "Les Yvelines, c'est un parc important de maisons individuelles avec jardin, terrasse et garage, et des propriétaires qui investissent régulièrement dans leur logement. Pour un artisan, la demande est là : il faut la capter avant le voisin.",
    geo: "Versailles · Saint-Germain-en-Laye · Le Chesnay · Poissy · Mantes-la-Jolie · Rambouillet · Sartrouville · Plaisir",
    sections: [
      {
        h: "Un terrain idéal pour les métiers de l'extérieur",
        p: "Terrasses, allées, garages, façades, clôtures : les Yvelines sont le département où ces chantiers sont les plus fréquents en Île-de-France. Les campagnes ciblent les propriétaires de maison et mettent en avant les réalisations qui leur parlent.",
      },
      {
        h: "Un département étendu : le rayon compte",
        p: "Entre Mantes-la-Jolie et Rambouillet, il y a plus d'une heure de route. On cible les communes de votre rayon réel, pour que chaque demande soit un chantier que vous pouvez vraiment prendre.",
      },
      {
        h: "Une clientèle qui veut du sérieux",
        p: "Les propriétaires yvelinois comparent, demandent des références et regardent les photos. Vos vraies réalisations, votre zone et votre réactivité font la différence avec les entreprises qui ne font que passer.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 78",
      items: [
        "Résine de garage et moquette de pierre en terrasse",
        "Ravalement et nettoyage de façades",
        "Extensions, murets et allées",
        "Rénovation intérieure de maisons",
        "Toiture, démoussage et gouttières",
      ],
    },
    faqs: [
      { q: "Peut-on cibler seulement le nord ou le sud des Yvelines ?", a: "Oui, le ciblage se fait commune par commune. On définit ensemble votre secteur selon votre dépôt et vos temps de trajet." },
      { q: "Combien de demandes dans les Yvelines ?", a: "Ça dépend du métier et du budget publicitaire. Pour un métier de l'extérieur avec environ 300 €/mois de budget, plusieurs dizaines de demandes qualifiées par mois sont un ordre de grandeur réaliste." },
      { q: "Votre article sur les Yvelines donne plus de détails ?", a: "Oui, notre guide sur l'acquisition de clients dans les Yvelines détaille les secteurs et les types de projets." },
    ],
  },
  {
    slug: "val-de-marne",
    name: "Val-de-Marne (94)",
    title: "Trouver des clients artisan dans le Val-de-Marne (94)",
    description:
      "Artisan du bâtiment dans le Val-de-Marne : recevez des demandes qualifiées à Créteil, Vincennes, Saint-Maur, Vitry, Nogent. Rénovation de maisons et d'appartements, publicité ciblée, exclusivité.",
    kicker: "Créteil · Saint-Maur · Vincennes · Nogent · Vitry",
    h1: "Artisan dans le Val-de-Marne : des chantiers à deux pas de chez vous.",
    intro:
      "Le Val-de-Marne mélange pavillons et appartements, quartiers résidentiels des bords de Marne et villes en pleine rénovation. Un marché varié, où un artisan bien positionné localement peut remplir son planning sans traverser l'Île-de-France.",
    geo: "Créteil · Saint-Maur-des-Fossés · Vincennes · Nogent-sur-Marne · Vitry-sur-Seine · Ivry-sur-Seine · Champigny · Maisons-Alfort",
    sections: [
      {
        h: "Bords de Marne et pavillons : des projets d'extérieur",
        p: "De Saint-Maur à Nogent, beaucoup de maisons avec terrasse, garage et façade à entretenir. Les campagnes y mettent en avant les chantiers extérieurs, au moment où les propriétaires préparent les beaux jours.",
      },
      {
        h: "Villes denses : rénovation d'appartements",
        p: "À Vincennes, Ivry ou Vitry, la demande porte davantage sur la rénovation intérieure, souvent après un achat. La qualification indique l'étage, la surface et le délai pour que vous chiffriez sans surprise.",
      },
      {
        h: "Rester local pour rester rentable",
        p: "Le ciblage par commune vous évite les demandes à l'autre bout de la région. Vous intervenez là où vous êtes rapide, et vous pouvez enchaîner plusieurs visites dans la même demi-journée.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 94",
      items: [
        "Terrasses, garages et allées de pavillons",
        "Rénovation d'appartements après achat",
        "Salles de bains et carrelage",
        "Ravalement de maisons",
        "Peinture intérieure et extérieure",
      ],
    },
    faqs: [
      { q: "Le Val-de-Marne est-il couvert en exclusivité ?", a: "Oui, par métier et par secteur. On vérifie lors de l'appel si votre métier est encore disponible sur vos communes." },
      { q: "Peut-on associer le 94 et l'est parisien ?", a: "Oui, si vous y intervenez. Le secteur est défini commune par commune selon votre rayon réel." },
      { q: "En combien de temps arrivent les premières demandes ?", a: "Généralement sous 24 à 72 heures après le lancement des campagnes." },
    ],
  },
  {
    slug: "essonne",
    name: "Essonne (91)",
    title: "Trouver des clients artisan dans l'Essonne (91)",
    description:
      "Artisan du bâtiment dans l'Essonne : recevez des demandes qualifiées à Évry, Massy, Palaiseau, Corbeil, Étampes. Maisons individuelles, extérieurs, rénovation. Publicité ciblée par commune.",
    kicker: "Évry · Massy · Palaiseau · Corbeil · Étampes",
    h1: "Artisan dans l'Essonne : captez la demande des propriétaires de maison.",
    intro:
      "L'Essonne compte de nombreux quartiers pavillonnaires et des communes en pleine croissance. Les propriétaires y rénovent, agrandissent et aménagent leurs extérieurs : un terrain idéal pour un artisan qui veut des chantiers proches de chez lui.",
    geo: "Évry-Courcouronnes · Massy · Palaiseau · Corbeil-Essonnes · Savigny-sur-Orge · Sainte-Geneviève-des-Bois · Étampes · Brétigny",
    sections: [
      {
        h: "Nord et sud de l'Essonne, deux réalités",
        p: "Le nord, autour de Massy et Palaiseau, est dense et proche de Paris ; le sud, vers Étampes, est plus rural avec de grandes maisons. Le ciblage suit votre rayon d'intervention pour éviter les trajets qui mangent la marge.",
      },
      {
        h: "Les extérieurs, moteur de la demande",
        p: "Terrasses, garages, allées, clôtures et façades : les propriétaires essonniens investissent dans leur maison. Les campagnes mettent en avant vos réalisations extérieures au bon moment de l'année.",
      },
      {
        h: "Des demandes prêtes à traiter",
        p: "Chaque demande arrive dans votre tableau de bord avec la commune, le projet, le budget et le délai. Vous calez les visites intéressantes et le système relance les autres automatiquement.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 91",
      items: [
        "Résine et revêtements de garage",
        "Terrasses, allées et clôtures",
        "Extensions et aménagement de combles",
        "Ravalement et isolation par l'extérieur",
        "Rénovation intérieure de pavillons",
      ],
    },
    faqs: [
      { q: "Intervenez-vous dans le sud de l'Essonne ?", a: "Oui, la publicité se cible sur n'importe quelle commune. On règle le secteur sur votre zone réelle d'intervention." },
      { q: "Faut-il un site internet pour démarrer ?", a: "Non. Les demandes arrivent via les formulaires des campagnes Meta, directement dans votre tableau de bord. Un site vitrine est disponible en option si vous voulez renforcer votre crédibilité." },
      { q: "Je suis seul, est-ce adapté ?", a: "Oui. Le volume de demandes est réglé sur votre capacité. L'objectif est de remplir votre planning, pas de vous noyer." },
    ],
  },
  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne (77)",
    title: "Trouver des clients artisan en Seine-et-Marne (77)",
    description:
      "Artisan du bâtiment en Seine-et-Marne : recevez des demandes qualifiées à Meaux, Melun, Chelles, Marne-la-Vallée, Fontainebleau. Grand département, ciblage précis par commune, exclusivité.",
    kicker: "Meaux · Melun · Chelles · Marne-la-Vallée · Fontainebleau",
    h1: "Artisan en Seine-et-Marne : un grand département, ciblé au plus près.",
    intro:
      "La Seine-et-Marne est le plus grand département d'Île-de-France, avec beaucoup de maisons récentes, de lotissements et de propriétés à rénover. La demande est forte, mais les distances aussi : le ciblage précis fait toute la rentabilité.",
    geo: "Meaux · Melun · Chelles · Marne-la-Vallée · Pontault-Combault · Torcy · Fontainebleau · Provins",
    sections: [
      {
        h: "Des maisons récentes qui s'aménagent",
        p: "Autour de Marne-la-Vallée et Chelles, beaucoup de maisons récentes dont les propriétaires aménagent garages, terrasses et extérieurs dans les années qui suivent l'achat. Une cible très réceptive aux avant/après.",
      },
      {
        h: "Des propriétés anciennes à rénover",
        p: "Vers Fontainebleau, Provins ou Melun, le bâti ancien appelle ravalements, toitures et rénovations intérieures. Les campagnes s'adaptent au type de maison de chaque secteur.",
      },
      {
        h: "Ne travailler que dans votre rayon",
        p: "Un département aussi étendu demande un ciblage fin : on définit votre zone commune par commune, pour que chaque demande soit à une distance raisonnable de votre dépôt.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 77",
      items: [
        "Aménagement de garages et terrasses",
        "Ravalement de maisons anciennes",
        "Toiture et isolation",
        "Extensions et maçonnerie",
        "Rénovation intérieure après achat",
      ],
    },
    faqs: [
      { q: "La Seine-et-Marne est-elle trop grande pour un seul artisan ?", a: "C'est pour ça qu'on cible par commune : votre secteur est défini selon votre rayon réel, et un autre artisan du même métier peut être accompagné sur un secteur éloigné du vôtre." },
      { q: "Combien de temps avant les premières demandes ?", a: "Les premières demandes arrivent généralement sous 24 à 72 heures après le lancement." },
      { q: "Puis-je couvrir aussi le 93 ou le 94 ?", a: "Oui, avec l'option zone supplémentaire, si vous y intervenez régulièrement." },
    ],
  },
  {
    slug: "val-d-oise",
    name: "Val-d'Oise (95)",
    title: "Trouver des clients artisan dans le Val-d'Oise (95)",
    description:
      "Artisan du bâtiment dans le Val-d'Oise : recevez des demandes qualifiées à Cergy, Argenteuil, Sarcelles, Pontoise, Enghien. Maisons et appartements, publicité ciblée par commune, exclusivité.",
    kicker: "Cergy · Argenteuil · Pontoise · Enghien · Sarcelles",
    h1: "Artisan dans le Val-d'Oise : des demandes qualifiées près de chez vous.",
    intro:
      "Le Val-d'Oise réunit des villes denses comme Argenteuil, des secteurs pavillonnaires et des communes plus rurales vers le Vexin. Un département varié, où un artisan bien implanté localement trouve de nombreux chantiers.",
    geo: "Cergy · Pontoise · Argenteuil · Sarcelles · Enghien-les-Bains · Franconville · Taverny · Herblay",
    sections: [
      {
        h: "Être l'artisan du coin, pas un inconnu",
        p: "Dans le Val-d'Oise, beaucoup de propriétaires préfèrent un artisan local qu'ils pourront rappeler. Les campagnes mettent en avant votre zone, vos réalisations à proximité et votre réactivité.",
      },
      {
        h: "Pavillons et copropriétés",
        p: "Des pavillons de Franconville aux appartements d'Argenteuil, les projets diffèrent. Le ciblage et les messages s'adaptent pour vous amener les chantiers qui correspondent à votre activité.",
      },
      {
        h: "Un suivi qui transforme",
        p: "Une demande non rappelée est une demande perdue. Notifications instantanées, relances automatiques et tableau de bord vous aident à transformer un maximum de demandes en visites, puis en devis signés.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés dans le 95",
      items: [
        "Rénovation intérieure de pavillons",
        "Garages, terrasses et allées",
        "Salles de bains et carrelage",
        "Ravalement et peinture de façade",
        "Toiture et zinguerie",
      ],
    },
    faqs: [
      { q: "Mon métier est-il disponible dans le Val-d'Oise ?", a: "On travaille en exclusivité par métier et par secteur. On vérifie la disponibilité de votre métier sur vos communes lors d'un appel de 20 minutes." },
      { q: "Peut-on cibler le Vexin ?", a: "Oui, le ciblage se fait commune par commune, y compris dans les secteurs plus ruraux." },
      { q: "Le système remplace-t-il mon bouche-à-oreille ?", a: "Non, il s'y ajoute. Le bouche-à-oreille reste précieux ; le système vous apporte un flux régulier que vous contrôlez." },
    ],
  },
  {
    slug: "lyon",
    name: "Lyon",
    title: "Trouver des clients artisan à Lyon et dans le Rhône",
    description:
      "Artisan du bâtiment à Lyon et dans le Rhône : recevez des demandes de devis qualifiées à Lyon, Villeurbanne, Caluire, Vénissieux, Écully. Publicité ciblée, exclusivité par métier.",
    kicker: "Lyon · Villeurbanne · Caluire · Écully · Vénissieux",
    h1: "Artisan à Lyon : des chantiers qualifiés dans la métropole.",
    intro:
      "Lyon est l'un des marchés de la rénovation les plus dynamiques de France après Paris. Entre les appartements anciens de la Presqu'île et de la Croix-Rousse et les maisons de l'ouest lyonnais, la demande est forte et variée.",
    geo: "Lyon 1er à 9e · Villeurbanne · Caluire-et-Cuire · Écully · Tassin · Vénissieux · Bron · Sainte-Foy-lès-Lyon",
    sections: [
      {
        h: "Une métropole, plusieurs marchés",
        p: "Appartements anciens à rénover en centre-ville, maisons avec extérieurs dans l'ouest lyonnais, résidences récentes à l'est : on cible les secteurs qui correspondent à votre métier et à votre zone d'intervention.",
      },
      {
        h: "Un résultat déjà prouvé à Lyon",
        p: "Notre client Eirlly, à Lyon, a reçu plus de 400 contacts en deux mois, doublé son chiffre d'affaires et recruté une secrétaire et un commercial pour suivre le rythme. Le système a fait ses preuves sur ce marché.",
      },
      {
        h: "Des demandes prêtes pour la visite",
        p: "Arrondissement ou commune, nature des travaux, surface, budget et délai : vous savez avant d'appeler si le projet vaut le déplacement.",
      },
    ],
    bullets: {
      h: "Les chantiers les plus demandés à Lyon",
      items: [
        "Rénovation d'appartements anciens",
        "Résine et béton ciré",
        "Salles de bains et cuisines",
        "Terrasses et extérieurs dans l'ouest lyonnais",
        "Ravalement et peinture de façade",
      ],
    },
    faqs: [
      { q: "Accompagnez-vous des artisans hors Île-de-France ?", a: "Oui, partout en France : Lyon, Troyes, la Normandie, les Landes… La publicité Meta se cible sur n'importe quelle commune." },
      { q: "Mon métier est-il disponible à Lyon ?", a: "On travaille en exclusivité par métier et par secteur. Réservez un appel de 20 minutes pour vérifier la disponibilité sur vos communes." },
      { q: "Combien de temps avant les premiers résultats ?", a: "Les premières demandes arrivent généralement sous 24 à 72 heures après le lancement des campagnes." },
    ],
    proof: PROOF.eirlly,
  },
];

export const getMetier = (slug: string) => METIERS.find((m) => m.slug === slug);
export const getZone = (slug: string) => ZONES.find((z) => z.slug === slug);
