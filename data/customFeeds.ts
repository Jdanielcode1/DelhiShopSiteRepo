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
  image: string;
};

export const customFeeds: CustomFeed[] = [
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
    bestFor: "Mature Poultry",
    bestForEs: "Aves Adultas",
    image: "/images/products/custom-feeds/monse-mix.png",
  },
  {
    slug: "delhi-el-justo-game-bird-mix",
    name: "Delhi El Justo Game Bird Mix",
    description:
      "A complete, protein-rich grain blend formulated as a sole ration for mature game birds.",
    descriptionEs:
      "Una mezcla completa de granos, rica en proteína y formulada como ración única para aves de caza adultas.",
    protein: "16.25%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
    image: "/images/products/custom-feeds/delhi-el-justo-game-bird-mix.png",
  },
  {
    slug: "gutierrez-game-bird-summer-mix",
    name: "Gutierrez Game Bird Summer Mix",
    description:
      "A balanced summer grain and seed mix designed as a complete ration for mature game birds.",
    descriptionEs:
      "Una mezcla balanceada de verano con granos y semillas, diseñada como ración completa para aves de caza adultas.",
    protein: "14.70%",
    weight: "50 lb",
    kilograms: "22.7 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
    image: "/images/products/custom-feeds/gutierrez-game-bird-summer-mix.png",
  },
  {
    slug: "economy-stag-game-bird-mix",
    name: "Economy Stag Game Bird Mix with Cracked Corn",
    description:
      "An economical cracked-corn grain blend formulated as a complete ration for mature game birds.",
    descriptionEs:
      "Una mezcla económica de granos con maíz quebrado, formulada como ración completa para aves de caza adultas.",
    protein: "11.50%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
    image: "/images/products/custom-feeds/economy-stag-game-bird-mix.png",
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
    image: "/images/products/custom-feeds/delhi-super-egg.png",
  },
  {
    slug: "delhi-game-bird-summer-mix-no-milo",
    name: "Delhi Game Bird Summer Mix No Milo",
    description:
      "A no-milo summer grain blend formulated as a complete ration for mature game birds.",
    descriptionEs:
      "Una mezcla de granos de verano sin milo, formulada como ración completa para aves de caza adultas.",
    protein: "14.90%",
    weight: "75 lb",
    kilograms: "34.0 kg",
    bestFor: "Mature Game Birds",
    bestForEs: "Aves de Caza Adultas",
    image: "/images/products/custom-feeds/delhi-game-bird-summer-mix-no-milo.png",
  },
];

export function getCustomFeed(slug: string) {
  return customFeeds.find((feed) => feed.slug === slug);
}
