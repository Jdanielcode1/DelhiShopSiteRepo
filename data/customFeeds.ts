export type CustomFeed = {
  slug: string;
  name: string;
  description: string;
  descriptionEs: string;
  protein: string;
  weight: string;
  kilograms: string;
  bestFor: string;
  bestForEs: string;
};

export const customFeeds: CustomFeed[] = [
  {
    slug: "martinos-mix",
    name: "Martino's Mix",
    description:
      "A custom mix with 15.60% protein, available in 75 lb bags with cracked corn only.",
    descriptionEs:
      "Una mezcla especial con 15.60% de proteína, disponible en bolsas de 75 lb únicamente con maíz quebrado.",
    protein: "15.60%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "delhi-el-patron",
    name: "Delhi El Patron",
    description:
      "A custom mix with 16% protein, available in 75 lb bags with whole or cracked corn.",
    descriptionEs:
      "Una mezcla especial con 16% de proteína, disponible en bolsas de 75 lb con maíz entero o quebrado.",
    protein: "16%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "monse-mix",
    name: "Monse Mix",
    description:
      "A varied grain-and-seed blend for mature poultry, featuring cracked grains, peas, seeds, oils, and insect protein.",
    descriptionEs:
      "Una mezcla variada de granos y semillas para aves adultas, con granos partidos, chícharos, semillas, aceites y proteína de insectos.",
    protein: "10.10%",
    weight: "50 lb",
    kilograms: "22.7 kg",
    bestFor: "Bantams",
    bestForEs: "Gallinas Bantam",
  },
  {
    slug: "delhi-el-justo-game-bird-mix",
    name: "Delhi El Justo Game Bird Mix",
    description:
      "A complete, protein-rich grain blend formulated as a sole ration for mature game birds. Available with whole or cracked corn.",
    descriptionEs:
      "Una mezcla completa de granos, rica en proteína y formulada como ración única para aves de caza adultas. Disponible con maíz entero o quebrado.",
    protein: "16.25%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "gutierrez-game-bird-summer-mix",
    name: "Gutierrez Game Bird Summer Mix",
    description:
      "A balanced summer grain and seed mix designed as a complete ration for mature game birds. Available in 50 lb and 80 lb bags, each with whole or cracked corn.",
    descriptionEs:
      "Una mezcla balanceada de verano con granos y semillas, diseñada como ración completa para aves de caza adultas. Disponible en bolsas de 50 lb y 80 lb, ambas con maíz entero o quebrado.",
    protein: "14.70%",
    weight: "50 / 80 lb",
    kilograms: "22.7 / 36.3 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "economy-stag-game-bird-mix",
    name: "Economy Stag Game Bird Mix",
    description:
      "An economical grain blend formulated as a complete ration for mature game birds. Available with whole or cracked corn.",
    descriptionEs:
      "Una mezcla económica de granos, formulada como ración completa para aves de caza adultas. Disponible con maíz entero o quebrado.",
    protein: "11.50%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "delhi-super-egg",
    name: "Delhi Super Egg",
    description:
      "A high-protein complete feed formulated to support mature game birds and egg production.",
    descriptionEs:
      "Un alimento completo alto en proteína, formulado para apoyar a las aves de caza adultas y la producción de huevo.",
    protein: "20.80%",
    weight: "50 lb",
    kilograms: "22.7 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
  {
    slug: "delhi-game-bird-summer-mix-no-milo",
    name: "Delhi Game Bird Summer Mix No Milo",
    description:
      "A no-milo summer grain blend formulated as a complete ration for mature game birds. Available with whole or cracked corn.",
    descriptionEs:
      "Una mezcla de granos de verano sin milo, formulada como ración completa para aves de caza adultas. Disponible con maíz entero o quebrado.",
    protein: "14.90%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
  },
];

export function getCustomFeed(slug: string) {
  return customFeeds.find((feed) => feed.slug === slug);
}
