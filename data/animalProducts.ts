export interface AnimalProductCategory {
  id: string;
  titleEn: string;
  titleEs: string;
  items: string[];
  itemImages?: Record<string, string | string[]>;
  itemDetails?: Record<
    string,
    { description?: string; benefits?: string[]; highlights?: string[]; sizes: string[] }
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
          "Monse’s Mix",
          "Gutierrez Game Bird",
          "Delhi El Patron",
          "Delhi Game Bird Mix No Milo",
          "Delhi El Justo Game Bird Mix",
          "Economy Stag Game Mix",
          "Martino Mix",
          "TMC No Milo",
        ],
        itemImages: {
          "Monse’s Mix": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Gutierrez Game Bird": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Delhi El Patron": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Delhi Game Bird Mix No Milo": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Delhi El Justo Game Bird Mix": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Economy Stag Game Mix": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "Martino Mix": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
          "TMC No Milo": "/images/poultry-game-birds/tmc-no-milo-bag.png",
        },
        itemDetails: {
          "Monse’s Mix": {
            description:
              "A custom grain-based feed for everyday feeding, made for customers seeking a simple, economical option. It contains no added pellets and combines grains with worms and larvae for variety and a natural source of animal protein. A straightforward, practical choice focused on grains, simplicity, and value.",
            highlights: ["10.10% protein"],
            sizes: [],
          },
          "Gutierrez Game Bird": {
            description: "A versatile game bird feed available in cracked or whole grain to suit your feeding preference.",
            highlights: ["14.70% protein", "Cracked or whole", "50 lb & 80 lb"],
            sizes: [],
          },
          "Delhi El Patron": {
            description: "A dependable game bird mix available in cracked or whole grain options.",
            highlights: ["16% protein", "Cracked or whole"],
            sizes: [],
          },
          "Delhi Game Bird Mix No Milo": {
            description: "A no-milo game bird mix available in cracked or whole grain options.",
            highlights: ["14.90% protein", "Cracked or whole"],
            sizes: [],
          },
          "Delhi El Justo Game Bird Mix": {
            description:
              "A complete summer maintenance feed for mature game birds, made with a carefully selected blend of grains and seeds for balanced everyday nutrition. Grains, seeds, oils, vitamins, minerals, probiotics, and essential nutrients support overall health and condition, while salmon oil and real salmon bites add beneficial fats and nutrients. Ideal for mature game birds needing a well-rounded maintenance diet with quality ingredients and variety.",
            highlights: ["16.25% protein", "Cracked or whole"],
            sizes: [],
          },
          "Economy Stag Game Mix": {
            description:
              "A budget-friendly game bird feed formulated for mature game birds and everyday maintenance.",
            highlights: ["11.50% protein", "Cracked or whole"],
            sizes: [],
          },
          "Martino Mix": {
            description: "A dependable game bird feed for regular flock care.",
            highlights: ["15.60% protein"],
            sizes: [],
          },
          "TMC No Milo": {
            description:
              "A premium whole-grain poultry ration with whole corn and no milo, providing balanced nutrition to support flock health, growth, and performance.",
            highlights: ["50 lb bag", "16% protein"],
            sizes: [],
          },
        },
      },
      {
        id: "keep-feed",
        titleEn: "Keep Feed",
        titleEs: "Alimento de Mantenimiento",
        items: [
          "Jose Guerrero Conditioner",
          "Jose Guerrero Keep Feed",
          "High Octane with Cracked Corn",
        ],
        itemImages: {
          "Jose Guerrero Conditioner": [
            "/images/poultry-game-birds/jose-guerrero-conditioner-bag.png",
            "/images/poultry-game-birds/jose-guerrero-conditioner-feed.png",
          ],
          "Jose Guerrero Keep Feed": [
            "/images/poultry-game-birds/jose-guerrero-keep-feed-bag.png",
            "/images/poultry-game-birds/jose-guerrero-keep-feed.png",
          ],
          "High Octane with Cracked Corn": [
            "/images/poultry-game-birds/high-octane-cracked-corn-bag.png",
            "/images/poultry-game-birds/high-octane-cracked-corn-feed.png",
          ],
        },
        itemDetails: {
          "Jose Guerrero Conditioner": {
            description:
              "A premium conditioning feed made with quality grains, seeds, plant proteins, vitamins, and minerals to support strong, healthy, well-conditioned birds.",
            benefits: [
              "Supports muscle tone and conditioning",
              "Promotes healthy feathers and appearance",
              "Provides balanced energy for performance and maintenance",
              "Fortified with essential nutrients",
            ],
            highlights: ["50 lb bag", "19.5% protein"],
            sizes: [],
          },
          "Jose Guerrero Keep Feed": {
            description:
              "A 22% protein blend of clean, quality grains and protein-packed pellets with limestone added to aid digestion. This whole-corn, pellet-based feed is made for chickens and roosters and comes in 25 lb bags.",
            highlights: ["25 lb bag", "22% protein"],
            sizes: [],
          },
          "High Octane with Cracked Corn": {
            description:
              "A high-energy textured blend of whole grains and legumes that gives birds sustained fuel for strong performance and conditioning.",
            benefits: [
              "Includes vitamins, minerals, and fish oil for healthy, vibrant plumage",
              "Features corn, wheat, oats, split peas, red lentils, hulled sunflower, and safflower",
              "Provides healthy fats and probiotics to support overall vitality",
              "Made for endurance, appearance, and superior conditioning",
            ],
            highlights: ["50 lb bag", "17.40% protein"],
            sizes: [],
          },
        },
      },
      {
        id: "layer-feed",
        titleEn: "Layer Feed",
        titleEs: "Alimento para Ponedoras",
        items: [
          "Farmers Best Layer Crumble",
          "Farmers Best Layer Pellet",
          "Delhi Super Egg",
        ],
        itemImages: {
          "Farmers Best Layer Crumble": "/images/poultry-game-birds/farmers-best-layer-crumble-bag.png",
          "Farmers Best Layer Pellet": "/images/poultry-game-birds/farmers-best-layer-pellet-bag.png",
          "Delhi Super Egg": "/images/poultry-game-birds/farmers-best-game-bird-feed-bag.png",
        },
        itemDetails: {
          "Farmers Best Layer Crumble": {
            description:
              "A complete layer ration with the same balanced nutrition as the pellet version, offered in a smaller crumble size.",
            highlights: ["50 lb bag", "16% protein"],
            sizes: [],
          },
          "Farmers Best Layer Pellet": {
            description:
              "A complete layer feed formulated to support healthy laying hens and consistent egg production.",
            highlights: ["50 lb bag", "16% protein"],
            sizes: [],
          },
          "Delhi Super Egg": {
            description:
              "A high-protein layer feed for laying hens, made with a carefully selected ingredient blend to support egg production and everyday flock health. Cracked corn, soybean meal, milo, wheat, rice bran, DDGS, and more are combined with oyster shell and limestone to provide important minerals, including calcium. A nutrient-rich everyday choice for healthy, productive laying flocks.",
            highlights: ["50 lb bag", "20.80% protein"],
            sizes: [],
          },
        },
      },
      {
        id: "chick-starter",
        titleEn: "Chick Starter",
        titleEs: "Iniciador para Pollitos",
        items: ["Zbong Baby Stag Booster", "Farmers Best Chick Starter"],
      },
      {
        id: "scratch",
        titleEn: "Scratch & Treats",
        titleEs: "Mezclas Scratch y Premios",
        items: [
          "El Ranchero Cracked Corn",
          "Farmers Best Cracked Corn",
          "Winner’s Scratch",
          "Super Scratch",
          "Farmers Best Scratch",
          "Re-Cleaned Yellow Whole Corn",
          "Yellow Popcorn",
          "Bug Buffet",
          "Petfu Apollo 1",
          "Pumpkin Spice & Everything Nice",
        ],
        itemImages: {
          "El Ranchero Cracked Corn": [
            "/images/poultry-game-birds/el-ranchero-cracked-corn-bag.png",
            "/images/poultry-game-birds/el-ranchero-cracked-corn-feed.png",
          ],
          "Farmers Best Cracked Corn": [
            "/images/poultry-game-birds/farmers-best-cracked-corn-bag.png",
            "/images/poultry-game-birds/farmers-best-cracked-corn-feed.png",
          ],
          "Winner’s Scratch": [
            "/images/poultry-game-birds/winners-scratch-bag.png",
            "/images/poultry-game-birds/winners-scratch-feed.png",
          ],
          "Super Scratch": [
            "/images/poultry-game-birds/super-scratch-bag.png",
            "/images/poultry-game-birds/super-scratch-feed.png",
          ],
          "Farmers Best Scratch": [
            "/images/poultry-game-birds/farmers-best-scratch-bag.png",
            "/images/poultry-game-birds/farmers-best-scratch-feed.png",
          ],
          "Re-Cleaned Yellow Whole Corn": "/images/poultry-game-birds/recleaned-yellow-whole-corn.png",
          "Yellow Popcorn": "/images/poultry-game-birds/yellow-popcorn.png",
          "Bug Buffet": "/images/poultry-game-birds/bug-buffet.png",
          "Pumpkin Spice & Everything Nice": [
            "/images/poultry-game-birds/pumpkin-spice-treat-bag.png",
            "/images/poultry-game-birds/pumpkin-spice-treat-ingredients.png",
          ],
          "Petfu Apollo 1": [
            "/images/poultry-game-birds/petfu-apollo-1-bag.png",
            "/images/poultry-game-birds/petfu-apollo-1-treat.png",
            "/images/poultry-game-birds/petfu-apollo-1-feeds-all.png",
          ],
        },
        itemDetails: {
          "El Ranchero Cracked Corn": {
            description:
              "A quality cracked-corn feed that gives poultry and livestock a dependable energy source. Its broken texture is easy to eat and helps minimize feed waste.",
            highlights: ["80 lb bag", "11.50% protein"],
            sizes: [],
          },
          "Farmers Best Cracked Corn": {
            description:
              "A clean, energy-rich grain supplement made from cracked whole corn, supplying carbohydrates that support everyday energy, growth, and body condition in poultry and livestock.",
            highlights: ["50 lb bag", "6.50% protein"],
            sizes: [],
          },
          "Winner’s Scratch": {
            description:
              "A seven-grain scratch blend with cracked corn, made as a great warm-weather feeding choice for poultry.",
            highlights: ["75 lb bag", "9.5% protein"],
            sizes: [],
          },
          "Super Scratch": {
            description:
              "A hearty six-grain scratch blend with whole corn for a satisfying, energy-rich feeding option for poultry.",
            highlights: ["75 lb bag", "8.50% protein"],
            sizes: [],
          },
          "Farmers Best Scratch": {
            description:
              "A clean, straightforward scratch blend made with cracked corn, recleaned whole grain sorghum, and recleaned whole wheat for everyday poultry feeding.",
            highlights: ["50 lb bag", "8.25% protein"],
            sizes: [],
          },
          "Re-Cleaned Yellow Whole Corn": {
            highlights: ["75 lb bag", "9% protein"],
            sizes: [],
          },
          "Yellow Popcorn": {
            highlights: ["50 lb bag"],
            sizes: [],
          },
          "Bug Buffet": {
            description:
              "A protein-packed poultry treat that combines two favorite insects for a wholesome reward and naturally engaging flock activity.",
            highlights: ["1 lb bag"],
            sizes: [],
          },
          "Pumpkin Spice & Everything Nice": {
            description:
              "A flavorful poultry treat blending mealworms, pumpkin seeds, chili pepper flakes, corn, oats, sunflower seeds, safflower, and grubs—each chosen for its nutritional benefits.",
            highlights: ["3 lb bag", "16.2% protein"],
            sizes: [],
          },
          "Petfu Apollo 1": {
            description:
              "An all-in-one premium treat blend of dried mealworms, black soldier fly larvae, krill, sunflower seeds, marigold petals, and crushed calcium shells for healthy, active flocks.",
            benefits: [
              "Supports active foraging, steady growth, and recovery during cold or stressful periods",
              "Helps maintain strong bones, firm eggshells, and consistent egg production",
              "Natural oils and amino acids support fuller, glossier feather regrowth during molting",
              "Marigold petals and krill encourage richly colored golden-orange yolks without artificial additives",
            ],
            highlights: ["33% protein", "25% healthy fats", "9% calcium"],
            sizes: ["1 lb", "5 lb"],
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
