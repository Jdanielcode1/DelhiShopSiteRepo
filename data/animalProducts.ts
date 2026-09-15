export interface AnimalProductCategory {
  id: string;
  titleEn: string;
  titleEs: string;
  items: string[];
  itemImages?: Record<string, string | string[]>;
  itemDetails?: Record<
    string,
    { description?: string; highlights?: string[]; sizes: string[] }
  >;
}

export interface AnimalProductGroup {
  id: string;
  icon: string;
  image?: string;
  imageAltEn?: string;
  imageAltEs?: string;
  nameEn: string;
  nameEs: string;
  descriptionEn: string;
  descriptionEs: string;
  categories: AnimalProductCategory[];
  includesCustomFeeds?: boolean;
}

export const animalProductGroups: AnimalProductGroup[] = [
  {
    id: "poultry-game-birds",
    icon: "🐓",
    image: "/images/chickens.jpeg",
    imageAltEn: "Live chickens in their outdoor coop",
    imageAltEs: "Gallinas vivas en su gallinero al aire libre",
    nameEn: "Poultry & Game Birds",
    nameEs: "Aves de Corral y de Caza",
    descriptionEn: "Feed, flock care, housing supplies, and pest control for chicks, layers, poultry, and mature game birds.",
    descriptionEs: "Alimento, cuidado, alojamiento y control de plagas para pollitos, ponedoras, aves de corral y aves de caza adultas.",
    categories: [
      {
        id: "game-bird-maintenance",
        titleEn: "Game Bird Maintenance",
        titleEs: "Mantenimiento para Aves de Caza",
        items: [
          "Monse’s Mix — 10.10% protein",
          "Gutierrez Game Bird — 14.70% protein, cracked or whole, 50 lb or 80 lb",
          "Delhi El Patron — 16% protein, cracked or whole",
          "Delhi Game Bird Mix No Milo — 14.90% protein, cracked or whole",
          "Delhi El Justo Game Bird Mix — 16.25% protein, cracked or whole",
          "Economy Stag Game Mix — 11.50% protein, cracked or whole",
          "Martino Mix — 15.60% protein",
          "TMC No Milo — 16% protein, 50 lb",
        ],
      },
      {
        id: "keep-feed",
        titleEn: "Keep Feed",
        titleEs: "Alimento de Mantenimiento",
        items: [
          "Jose Guerrero Conditioner — 19.5% protein, 50 lb",
          "Jose Guerrero Keep Feed — 22% protein, 25 lb",
          "High Octane with Cracked Corn — 17.40% protein, 50 lb",
        ],
      },
      {
        id: "layer-feed",
        titleEn: "Layer Feed",
        titleEs: "Alimento para Ponedoras",
        items: [
          "Layer Crumble — 16% protein, 50 lb",
          "Layer Pellet — 16% protein, 50 lb",
          "Delhi Super Egg — 20.80% protein, 50 lb",
        ],
      },
      {
        id: "chick-starter",
        titleEn: "Chick Starter",
        titleEs: "Iniciador para Pollitos",
        items: ["Zbong Baby Stag Booster", "Farmers Best Chick Starter"],
      },
      {
        id: "scratch",
        titleEn: "Scratch",
        titleEs: "Mezclas Scratch",
        items: [
          "El Ranchero Cracked Corn",
          "Winner’s Scratch — 7-grain scratch with cracked corn, 9.5% protein, 75 lb",
          "Super Scratch — 6-grain scratch with whole corn, 8.50% protein, 75 lb",
          "Farmers Best Scratch",
        ],
        itemImages: {
          "El Ranchero Cracked Corn": [
            "/images/poultry-game-birds/el-ranchero-cracked-corn-bag.png",
            "/images/poultry-game-birds/el-ranchero-cracked-corn-feed.png",
          ],
        },
        itemDetails: {
          "El Ranchero Cracked Corn": {
            description:
              "A quality cracked-corn feed that gives poultry and livestock a dependable energy source. Its broken texture is easy to eat and helps minimize feed waste.",
            highlights: ["80 lb bag", "11.50% protein"],
            sizes: [],
          },
        },
      },
      { id: "treats-nutrition", titleEn: "Treats & Nutrition", titleEs: "Premios y Nutrición", items: ["Organic Feed", "Show Animal Feed", "Poultry Treats", "Mealworms & Grubs", "Oyster Shell", "Limestone & Calcium Supplements"] },
      { id: "health", titleEn: "Health & Supplements", titleEs: "Salud y Suplementos", items: ["Happy Hen", "Sav-A-Chick Products", "Rooster Booster", "Safe-Guard (Fenbendazole)", "Poultry Conditioning Products", "Poultry Health Products", "Poultry Vitamins & Minerals", "Electrolytes", "Probiotics", "Poultry Supplements", "Poultry Dewormers", "Poultry Wound Care"] },
      { id: "housing", titleEn: "Housing & Equipment", titleEs: "Alojamiento y Equipo", items: ["Little Giant", "Nesting Boxes", "Feeders & Waterers", "Heat Lamps", "Bedding & Nesting Material"] },
      { id: "pest-control", titleEn: "Pest Control", titleEs: "Control de Plagas", items: ["Poultry Dust", "Lice & Mite Control", "Fly & Pest Control"] },
    ],
  },
  {
    id: "horses",
    icon: "🐴",
    nameEn: "Horses",
    nameEs: "Caballos",
    descriptionEn: "Everyday feed, grooming, stable equipment, hoof care, supplements, and fly protection.",
    descriptionEs: "Alimento diario, aseo, equipo de establo, cuidado de cascos, suplementos y protección contra moscas.",
    categories: [
      { id: "feed", titleEn: "Feed & Forage", titleEs: "Alimento y Forraje", items: ["Horse Feed", "Purina Products", "Stock Fattener with Molasses", "COB Dry (No Molasses)", "Steam-Flaked & Rolled Corn", "Alfalfa Pellets", "Rice Bran Pellets", "Wheat Bran", "Beet Pulp Shred", "Hay", "Alfalfa", "Horse Treats"] },
      { id: "grooming", titleEn: "Grooming & Coat Care", titleEs: "Aseo y Cuidado del Pelaje", items: ["Shapley’s Grooming Products", "Cowboy Magic", "Mane ’n Tail", "Grooming Tools & Supplies", "Shampoos", "Conditioners", "Brushes & Curry Combs", "Coat & Skin Supplements"] },
      { id: "health", titleEn: "Health, Hoof Care & Supplements", titleEs: "Salud, Cascos y Suplementos", items: ["Hoof Care Products", "Hoof Conditioners & Dressings", "Liniments & Muscle Care", "First Aid Supplies", "Calming Supplements", "Mineral & Salt Blocks", "Horse Dewormers", "Deworming Pastes", "Vitamins & Minerals", "Electrolytes", "Joint Supplements"] },
      { id: "stable", titleEn: "Tack & Stable Supplies", titleEs: "Equipo y Suministros de Establo", items: ["Halters & Lead Ropes", "Hoof Picks", "Feed Scoops & Buckets", "Feeders & Waterers", "Bedding & Shavings"] },
      { id: "fly-control", titleEn: "Fly Control", titleEs: "Control de Moscas", items: ["Pyranha Animal Health", "Fly Spray", "Livestock Fly Control"] },
    ],
  },
  {
    id: "cattle",
    icon: "🐄",
    nameEn: "Cattle",
    nameEs: "Ganado Vacuno",
    descriptionEn: "Feed and practical supplies for calves, mature cattle, and show animals.",
    descriptionEs: "Alimento y suministros prácticos para becerros, ganado adulto y animales de exhibición.",
    categories: [
      { id: "feed", titleEn: "Feed & Forage", titleEs: "Alimento y Forraje", items: ["Cattle Feed", "Livestock Feed", "Show Animal Feed", "Hay", "Alfalfa", "Grains"] },
      { id: "calf-care", titleEn: "Calf Feeding", titleEs: "Alimentación de Becerros", items: ["Nursing Bottles", "Milk Replacer", "Sav-A-Caf Products", "Ultra 24 Milk Replacer"] },
      { id: "health", titleEn: "Health & Supplements", titleEs: "Salud y Suplementos", items: ["Minerals", "Supplements", "Electrolytes", "Dewormers", "Pink Eye Care Products", "Hoof Care", "Udder Care", "Wound Care", "First Aid Supplies", "Syringes & Needles", "Drenching Supplies"] },
      { id: "equipment", titleEn: "Equipment & Handling", titleEs: "Equipo y Manejo", items: ["Feeders & Waterers", "Feed Scoops & Buckets", "Livestock Identification Supplies", "Castrating Supplies", "Bedding & Shavings", "Livestock Grooming Supplies"] },
      { id: "pest-control", titleEn: "Fly & Insect Control", titleEs: "Control de Moscas e Insectos", items: ["Pour-On Insecticide", "Y-Tex Python Dust Livestock Insecticide", "Livestock Fly Control"] },
    ],
  },
  {
    id: "goats-sheep",
    icon: "🐐",
    nameEn: "Goats & Sheep",
    nameEs: "Cabras y Ovejas",
    descriptionEn: "Feed, milk replacers, health products, and everyday livestock equipment.",
    descriptionEs: "Alimento, sustitutos de leche, productos de salud y equipo ganadero de uso diario.",
    categories: [
      { id: "feed", titleEn: "Feed & Forage", titleEs: "Alimento y Forraje", items: ["Goat Feed", "Livestock Feed", "Show Animal Feed", "Hay", "Alfalfa", "Grains"] },
      { id: "young-stock", titleEn: "Young Animal Feeding", titleEs: "Alimentación de Crías", items: ["Nursing Bottles", "Milk Replacer", "Sav-A-Caf Products", "Ultra 24 Milk Replacer"] },
      { id: "health", titleEn: "Health & Supplements", titleEs: "Salud y Suplementos", items: ["Minerals", "Supplements", "Electrolytes", "Dewormers", "Hoof Care", "Wound Care", "First Aid Supplies", "Syringes & Needles", "Drenching Supplies"] },
      { id: "equipment", titleEn: "Equipment & Bedding", titleEs: "Equipo y Material para Camas", items: ["Feeders & Waterers", "Heat Lamps & Bulbs", "Livestock Identification Supplies", "Bedding & Shavings", "Feed Scoops & Buckets", "Livestock Grooming Supplies"] },
      { id: "pest-control", titleEn: "Fly & Insect Control", titleEs: "Control de Moscas e Insectos", items: ["Fly & Insect Control", "Livestock Fly Control", "Mange Dip"] },
    ],
  },
  {
    id: "pigs",
    icon: "🐖",
    nameEn: "Pigs",
    nameEs: "Cerdos",
    descriptionEn: "Feed for each growth stage plus health, feeding, and bedding supplies.",
    descriptionEs: "Alimento para cada etapa de crecimiento, además de suministros de salud, alimentación y cama.",
    categories: [
      { id: "feed", titleEn: "Feed", titleEs: "Alimento", items: ["Pig Feed", "Pot Bellied Pig Feed", "Pig Grower", "Pig Finisher", "Medicated Meat Maker", "Show Animal Feed"] },
      { id: "health", titleEn: "Health & Supplements", titleEs: "Salud y Suplementos", items: ["Minerals", "Supplements", "Electrolytes", "Dewormers", "Wound Care", "First Aid Supplies"] },
      { id: "equipment", titleEn: "Equipment & Bedding", titleEs: "Equipo y Material para Camas", items: ["Feeders & Waterers", "Feed Scoops & Buckets", "Bedding & Shavings", "Heat Lamps & Bulbs"] },
    ],
  },
  {
    id: "dogs",
    icon: "🐕",
    nameEn: "Dogs",
    nameEs: "Perros",
    descriptionEn: "Food, grooming, health products, walking gear, toys, and feeding accessories.",
    descriptionEs: "Alimento, aseo, productos de salud, correas, juguetes y accesorios de alimentación.",
    categories: [
      { id: "food", titleEn: "Food & Nutrition", titleEs: "Alimento y Nutrición", items: ["Dog Food", "Diamond Pet Foods", "Victor Super Premium Pet Food", "Tuffy’s Pet Foods", "Pedigree", "Eagle Mountain Pet Food", "Nutra Nuggets Super Premium Pet Food", "Farmers Best Dog Food", "Purina", "Puppy Care"] },
      { id: "grooming", titleEn: "Grooming & Cleaning", titleEs: "Aseo y Limpieza", items: ["Grooming Tools & Supplies", "Pet Cleaning & Odor Control", "Pet Shampoos & Conditioners", "Medicated Shampoos", "Paw & Nose Care"] },
      { id: "health", titleEn: "Health & Wellness", titleEs: "Salud y Bienestar", items: ["Skin & Coat Supplements", "Digestive & Probiotic Supplements", "Dog Dewormers", "Ear Care", "Eye Care", "Dental Care", "Wound Care & First Aid", "Antiseptic Sprays & Ointments", "Hot Spot & Skin Care", "Multivitamins", "Electrolytes & Nutritional Supplements"] },
      { id: "accessories", titleEn: "Walking, Play & Feeding", titleEs: "Paseo, Juego y Alimentación", items: ["Dog Leashes & Collars", "KONG", "Pet Toys", "Pet Bowls & Feeding Accessories", "Feeders & Waterers"] },
      { id: "pest-control", titleEn: "Flea & Tick Control", titleEs: "Control de Pulgas y Garrapatas", items: ["ADAMS Plus", "Flea & Tick Control"] },
    ],
  },
  {
    id: "cats",
    icon: "🐈",
    nameEn: "Cats",
    nameEs: "Gatos",
    descriptionEn: "Food, litter, grooming, wellness products, toys, and feeding accessories.",
    descriptionEs: "Alimento, arena, aseo, productos de bienestar, juguetes y accesorios de alimentación.",
    categories: [
      { id: "food", titleEn: "Food & Nutrition", titleEs: "Alimento y Nutrición", items: ["Cat Food", "Diamond Pet Foods", "Purina", "Kitten Care"] },
      { id: "grooming", titleEn: "Grooming & Cleaning", titleEs: "Aseo y Limpieza", items: ["Grooming Tools & Supplies", "Pet Cleaning & Odor Control", "Pet Shampoos & Conditioners", "Medicated Shampoos"] },
      { id: "health", titleEn: "Health & Wellness", titleEs: "Salud y Bienestar", items: ["Skin & Coat Supplements", "Digestive & Probiotic Supplements", "Cat Dewormers", "Ear Care", "Eye Care", "Dental Care", "Wound Care & First Aid", "Antiseptic Sprays & Ointments", "Multivitamins"] },
      { id: "home", titleEn: "Litter, Play & Feeding", titleEs: "Arena, Juego y Alimentación", items: ["Cat Litter & Litter Supplies", "Pet Toys", "Pet Bowls & Feeding Accessories", "Feeders & Waterers"] },
      { id: "pest-control", titleEn: "Flea & Tick Control", titleEs: "Control de Pulgas y Garrapatas", items: ["ADAMS Plus", "Flea & Tick Control"] },
    ],
  },
  {
    id: "rabbits",
    icon: "🐇",
    nameEn: "Rabbits",
    nameEs: "Conejos",
    descriptionEn: "Pellets, hay, feeders, bedding, and everyday care supplies.",
    descriptionEs: "Pellets, heno, comederos, material para camas y suministros de cuidado diario.",
    categories: [
      { id: "feed", titleEn: "Feed & Forage", titleEs: "Alimento y Forraje", items: ["Rabbit Pellets", "Hay", "Alfalfa"] },
      { id: "care", titleEn: "Care & Housing", titleEs: "Cuidado y Alojamiento", items: ["Feeders & Waterers", "Bedding & Shavings", "Feed Scoops & Buckets"] },
    ],
  },
  {
    id: "pet-birds",
    icon: "🦜",
    nameEn: "Pet Birds",
    nameEs: "Aves de Compañía",
    descriptionEn: "Seed blends and feeding supplies for popular companion birds.",
    descriptionEs: "Mezclas de semillas y suministros de alimentación para aves de compañía populares.",
    categories: [
      {
        id: "seed",
        titleEn: "Seed & Feed",
        titleEs: "Semillas y Alimento",
        items: ["Parakeet 25%", "Parrot Safflower Fortified", "Dove & Quail", "Canary Fortified", "Parrot Sunflower Premium", "Small Hookbill Fortified", "Cockatiel Fancy", "Parakeet Fortified", "Small Black Oil Sunflower", "Canary Seed"],
        itemImages: {
          "Parakeet 25%": "/images/pet-birds/finch.png",
          "Parrot Safflower Fortified": "/images/pet-birds/cockatiel.png",
          "Dove & Quail": "/images/pet-birds/dove-quail.png",
          "Canary Fortified": "/images/pet-birds/parakeet.png",
          "Parrot Sunflower Premium": "/images/pet-birds/parrot.png",
          "Small Hookbill Fortified": "/images/pet-birds/pigeon.png",
          "Cockatiel Fancy": "/images/pet-birds/small-hookbill.png",
          "Parakeet Fortified": "/images/pet-birds/canary.png",
          "Small Black Oil Sunflower": "/images/pet-birds/small-black-oil-sunflower.png",
          "Canary Seed": "/images/pet-birds/safflower-seeds.png",
        },
        itemDetails: {
          "Parakeet 25%": {
            description: "A clean premium seed blend with no artificial colors, flavors, or fillers.",
            sizes: ["5 lb", "20 lb", "40 lb"],
          },
          "Parrot Safflower Fortified": {
            description: "A sunflower-free mix with vitamin-coated oats, fortified pellets, and dried fruits and vegetables.",
            sizes: ["20 lb", "40 lb"],
          },
          "Dove & Quail": {
            description: "A feeder blend made to attract doves and quail.",
            sizes: ["20 lb"],
          },
          "Canary Fortified": {
            description: "A vitamin-enriched blend with canola, flax, coated oats, and fortified pellets for healthy feathers.",
            sizes: ["5 lb", "20 lb", "40 lb"],
          },
          "Parrot Sunflower Premium": {
            description: "A safflower-based blend with shell-free nuts and California Grey Stripe sunflower for varied flavor and texture.",
            sizes: ["20 lb", "40 lb"],
          },
          "Small Hookbill Fortified": {
            description: "A citrus-scented mix with vitamin-coated oats and fortified pellets for cockatiels, lovebirds, and other small hookbills.",
            sizes: ["20 lb", "40 lb"],
          },
          "Cockatiel Fancy": {
            description: "A hearty grain-and-seed blend that encourages natural foraging and supports everyday wellness.",
            sizes: ["5 lb", "20 lb", "40 lb"],
          },
          "Parakeet Fortified": {
            description: "High-quality seeds and dried vegetables with vitamin-coated oats and fortified pellets.",
            sizes: ["5 lb", "20 lb", "40 lb"],
          },
          "Small Black Oil Sunflower": { sizes: ["40 lb"] },
          "Canary Seed": { sizes: ["50 lb"] },
        },
      },
      { id: "supplies", titleEn: "Feeding Supplies", titleEs: "Suministros de Alimentación", items: ["Feeders & Waterers", "Feed Scoops & Buckets"] },
    ],
  },
  {
    id: "aquatic-pets",
    icon: "🐟",
    nameEn: "Aquatic Pets",
    nameEs: "Mascotas Acuáticas",
    descriptionEn: "Everyday feed for fish and other aquatic pets.",
    descriptionEs: "Alimento diario para peces y otras mascotas acuáticas.",
    categories: [{ id: "feed", titleEn: "Feed", titleEs: "Alimento", items: ["Aquatic Pet Feed"] }],
  },
  {
    id: "farm-barn",
    icon: "🌾",
    nameEn: "Farm & Barn",
    nameEs: "Granja y Establo",
    descriptionEn: "Shared staples used across the farm, including grains, bedding, animal health brands, and barn pest control.",
    descriptionEs: "Productos básicos para toda la granja, incluidos granos, camas, marcas de salud animal y control de plagas del establo.",
    categories: [
      { id: "grains", titleEn: "Grains", titleEs: "Granos", items: ["Whole Barley", "Whole Corn", "Cracked Corn", "Rolled Corn", "Whole Oats", "Whole Wheat", "Whole Milo", "Organic Oats"] },
      { id: "bedding", titleEn: "Bedding", titleEs: "Material para Camas", items: ["Wood Shavings", "Mini Flakes (Sawdust)", "Rice Hulls", "Diatomaceous Earth", "Straw"] },
      { id: "health-brands", titleEn: "Animal Health Brands", titleEs: "Marcas de Salud Animal", items: ["Merck Animal Health", "Elanco Animal Health", "Zoetis", "Huvepharma", "Durvet", "Dr. Naylor", "First Companion Veterinary Products", "Aspen Veterinary Resources"] },
      { id: "pest-control", titleEn: "Barn Pest Control", titleEs: "Control de Plagas del Establo", items: ["Prozap", "Country Vet", "Martin’s Products", "Insecticides", "Fly Control", "Barn Pest Control"] },
      { id: "minerals", titleEn: "Minerals & Supplements", titleEs: "Minerales y Suplementos", items: ["Plain White Salt Block (4 lb or 50 lb Brick)", "Selenium Salt Block", "Mineral Salt Block", "Electrolytes", "Vitamins", "Dewormers"] },
    ],
  },
];
