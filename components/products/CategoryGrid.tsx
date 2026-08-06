"use client";

import Image from "next/image";
import { Button, Container, Heading, Section, ScrollReveal } from "@/components/ui";
import { customFeeds } from "@/data/customFeeds";
import { useLanguage } from "@/lib/LanguageContext";
import { ProductAccordion } from "./ProductAccordion";

interface CategoryGridProps {
  sectionId?: string;
  title?: string;
  description?: string;
}

const brandLogos = [
  { name: "Absorbine", image: "1.png" },
  { name: "Farmers Best Feed", image: "2-transparent.png" },
  { name: "Farnam", image: "3.png" },
  { name: "KONG", image: "4.png" },
  { name: "Durvet", image: "5.png" },
  { name: "Mallard Creek", image: "6.png" },
  { name: "Modesto Milling", image: "7-transparent.png" },
  { name: "Kruse’s Perfection Brand", image: "8.png" },
  { name: "Purina", image: "9.png" },
  { name: "NutriSource", image: "10.png" },
  { name: "Tuffy’s Pet Foods", image: "11.png" },
  { name: "Pedigree", image: "12.png" },
  { name: "Eagle Mountain Pet Food", image: "13.png" },
  { name: "Diamond Naturals", image: "14-transparent.png" },
  { name: "Victor Super Premium Dog Food", image: "15.png" },
  { name: "Nutra-Nuggets", image: "16-transparent.png" },
  { name: "Elanco Animal Health", image: "17-transparent.png" },
  { name: "Zoetis", image: "18.png" },
  { name: "Pfizer Animal Health", image: "19-transparent.png" },
  { name: "Huvepharma", image: "20-transparent.png" },
  { name: "AniMed", image: "21-transparent.png" },
  { name: "Safe-Guard", image: "22.png" },
  { name: "Rooster Booster", image: "23-transparent.png" },
  { name: "Dr. Naylor", image: "24.png" },
  { name: "Pyranha Animal Health", image: "25-transparent.png" },
  { name: "Merck Animal Health", image: "26-transparent.png" },
  { name: "Adams Plus", image: "27.png" },
  { name: "Happy Hen", image: "28-transparent.png" },
  { name: "Sav-A-Chick Products", image: "29.png" },
  { name: "First Companion Veterinary Products", image: "30-transparent.png" },
  { name: "Sav-A-Caf Products", image: "31.png" },
  { name: "Aspen Veterinary Resources", image: "32-transparent.png" },
  { name: "Martin’s Products", image: "33-transparent.png" },
] as const;

const brandLogoRows = [
  brandLogos.slice(0, 11),
  brandLogos.slice(11, 22),
  brandLogos.slice(22),
];

const productCategories = [
  {
    titleEn: "Animal Feed",
    titleEs: "Alimento para Animales",
    featured: true,
    items: [
      "Farmer’s Best Feed",
      "Volkman Pet Products",
      "Manna Pro",
      "Horse Feed",
      "Cattle Feed",
      "Goat Feed",
      "Pig Feed",
      "Poultry Feed",
      "Show Animal Feed",
      "Organic Feed",
      "Bird Seed",
      "Aquatic Pet Feed",
      "Rabbit Pellets",
      "Dog Food",
      "Cat Food",
      "Alfalfa",
      "Straw",
      "Hay",
    ],
  },
  {
    titleEn: "Animal Health & Veterinary Products",
    titleEs: "Salud Animal y Productos Veterinarios",
    featured: true,
    items: [
      "Merck Animal Health",
      "Elanco Animal Health",
      "Zoetis",
      "Huvepharma",
      "Durvet",
      "Safe-Guard (Fenbendazole)",
      "Rooster Booster",
      "Dr. Naylor",
      "Supplements",
      "Electrolytes",
      "Minerals",
      "Vitamins",
      "Dewormers",
      "Livestock Health Supplies",
      "Poultry Health Products",
      "Milk Replacers",
    ],
  },
  {
    titleEn: "Pest Control & Fly Control",
    titleEs: "Control de Plagas y Moscas",
    featured: true,
    items: [
      "Pyranha Animal Health",
      "ADAMS Plus",
      "Prozap",
      "Country Vet",
      "Martin’s Products",
      "Pour-On Insecticide",
      "Y-Tex Python Dust Livestock Insecticide",
      "Poultry Dust",
      "Fly Control",
      "Fly Spray",
      "Insecticides",
      "Flea & Tick Products",
      "Mange Dip",
      "Livestock Fly Control",
      "Barn Pest Control",
    ],
  },
  {
    titleEn: "Poultry Supplies",
    titleEs: "Suministros para Aves",
    featured: true,
    items: [
      "Happy Hen",
      "Sav-A-Chick Products",
      "Rooster Booster",
      "Little Giant",
      "Safe-Guard (Fenbendazole)",
      "Nesting Boxes",
      "Feeders & Waterers",
      "Heat Lamps",
      "Poultry Dust",
      "Chick Starter Supplies",
      "Egg Layer Supplies",
      "Poultry Treats",
    ],
  },
  {
    titleEn: "Horse Care, Feed & Grooming",
    titleEs: "Alimento, Cuidado y Aseo para Caballos",
    items: [
      "Shapley’s Grooming Products",
      "Cowboy Magic",
      "Mane ’n Tail",
      "Pyranha Animal Health",
      "Stock Fattener with Molasses",
      "COB Dry (No Molasses)",
      "Grooming Tools & Supplies",
      "Fly Spray",
      "Shampoos",
      "Conditioners",
      "Brushes",
      "Hoof Care",
    ],
  },
  {
    titleEn: "Pet Care Supplies",
    titleEs: "Suministros para Mascotas",
    items: [
      "Diamond Pet Foods",
      "Victor Super Premium Pet Food",
      "First Companion Veterinary Products",
      "Aspen Veterinary Resources",
      "Dr. Naylor",
      "Dog Leashes & Collars",
      "Feeders & Waterers",
      "Grooming Tools & Supplies",
    ],
  },
  {
    titleEn: "Livestock Supplies",
    titleEs: "Suministros para Ganado",
    descriptionEn: "Supplies for goats, sheep, pigs, and cattle owners.",
    descriptionEs: "Suministros para dueños de cabras, ovejas, cerdos y ganado.",
    items: [
      "Nursing Bottles",
      "Milk Replacer",
      "Sav-A-Caf Products",
      "Feeders & Waterers",
      "Minerals",
      "Supplements",
      "Electrolytes",
      "Dewormers",
      "Heat Lamps",
    ],
  },
  {
    titleEn: "Pig Feed",
    titleEs: "Alimento para Cerdos",
    items: [
      "Pot Bellied Pig Feed",
      "Pig Grower",
      "Pig Finisher",
      "Medicated Meat Maker",
    ],
  },
  {
    titleEn: "Supplements & Minerals",
    titleEs: "Suplementos y Minerales",
    items: [
      "Plain White Salt Block (4 lb or 50 lb Brick)",
      "Selenium Salt Block",
      "Mineral Salt Block",
      "Ultra 24 Milk Replacer",
      "Electrolytes",
      "Vitamins",
      "Dewormers",
    ],
  },
  {
    titleEn: "Grains",
    titleEs: "Granos",
    items: [
      "Whole Barley",
      "Whole Corn",
      "Cracked Corn",
      "Rolled Corn",
      "Whole Oats",
      "Whole Wheat",
      "Whole Milo",
      "Organic Oats",
    ],
  },
  {
    titleEn: "Bedding",
    titleEs: "Material para Camas",
    items: [
      "Wood Shavings",
      "Mini Flakes (Sawdust)",
      "Rice Hulls",
      "Diatomaceous Earth",
    ],
  },
  {
    titleEn: "Bird Seeds",
    titleEs: "Semillas para Aves",
    items: [
      "Finch",
      "Cockatiel",
      "Dove & Quail",
      "Parakeet",
      "Parrot",
      "Pigeon",
      "Small Hookbill",
      "Canary",
      "Black Sunflower Seeds",
      "Safflower Seeds",
    ],
  },
] as const;

export function CategoryGrid({ sectionId, title, description }: CategoryGridProps) {
  const { locale, t } = useLanguage();

  return (
    <Section id={sectionId} variant="default" padding="xl" className="scroll-mt-24">
      <Container>
        {(title || description) && (
          <div className="mb-14 max-w-3xl md:mb-20">
            {title && (
              <Heading as="h2" size="xl" className="mb-4 text-charcoal">
                {title}
              </Heading>
            )}
            {description && (
              <p className="text-lg leading-relaxed text-charcoal-light">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="space-y-12">
          <ScrollReveal>
            <div>
              <Heading as="h2" size="lg" className="mb-3 text-charcoal">
                {t.brandsWeCarry}
              </Heading>
              <p className="mb-6 max-w-3xl text-charcoal-light">
                {t.brandsDescription}
              </p>
              <div className="brand-marquee space-y-3 overflow-hidden py-5">
                {brandLogoRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="overflow-hidden">
                    <div
                      className={`brand-marquee-track ${rowIndex === 1 ? "brand-marquee-track-reverse" : ""}`}
                    >
                      {[false, true].map((duplicate) => (
                        <div
                          key={duplicate ? "duplicate" : "original"}
                          className="brand-marquee-group"
                          aria-hidden={duplicate || undefined}
                        >
                          {row.map((brand) => (
                            <div
                              key={brand.name}
                              className="flex h-28 w-48 shrink-0 items-center justify-center p-2 sm:h-32 sm:w-56"
                            >
                              <Image
                                src={`/images/imagesforDelhi/${brand.image}`}
                                alt={`${brand.name} logo`}
                                width={1080}
                                height={1080}
                                sizes="192px"
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <Heading as="h2" size="lg" className="mb-3 text-charcoal">
                {t.customFeeds}
              </Heading>
              <p className="mb-6 max-w-3xl text-charcoal-light">
                {t.customFeedsDescription}
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {customFeeds.map((feed) => (
                  <article
                    key={feed.name}
                    className="flex h-full flex-col rounded-sm border border-primary-200 bg-background p-5 shadow-sm"
                  >
                    <div className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary-600">
                        {t.customFeeds}
                      </span>
                      <Heading as="h3" size="md" className="mt-2 text-charcoal xl:min-h-[5.25rem]">
                        {feed.name}
                      </Heading>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                        {locale === "es" ? feed.descriptionEs : feed.description}
                      </p>
                    </div>

                    <dl className="mt-5 divide-y divide-secondary-200 rounded-sm border border-secondary-200 bg-secondary-50">
                      <div className="flex items-center justify-between gap-4 p-3">
                        <dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">
                          {t.minimumCrudeProtein}
                        </dt>
                        <dd className="shrink-0 font-bold text-primary-700">{feed.protein}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 p-3">
                        <dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">
                          {t.bagWeight}
                        </dt>
                        <dd className="shrink-0 text-right font-bold text-primary-700">
                          {feed.weight}
                          <span className="ml-1 text-xs font-normal text-charcoal-light">({feed.kilograms})</span>
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 p-3">
                        <dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">
                          {t.bestFor}
                        </dt>
                        <dd className="max-w-[60%] text-right text-sm font-bold leading-tight text-primary-700">
                          {locale === "es" ? feed.bestForEs : feed.bestFor}
                        </dd>
                      </div>
                    </dl>

                    <Button
                      href={`/products/${feed.slug}`}
                      variant="ghost"
                      size="sm"
                      className="mt-3 self-start px-0"
                    >
                      {locale === "es" ? "Ver Detalles" : "View Product Details"} →
                    </Button>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div>
            <Heading as="h2" size="lg" className="mb-3 text-charcoal">
              {t.productCatalog}
            </Heading>
            <p className="mb-8 max-w-3xl text-charcoal-light">
              {t.productCatalogDescription}
            </p>
            <div className="space-y-4">
              {productCategories.map((category, index) => (
                <ScrollReveal key={category.titleEn} delay={Math.min(index * 40, 240)}>
                  <ProductAccordion
                    title={locale === "es" ? category.titleEs : category.titleEn}
                    description={
                      "descriptionEn" in category
                        ? locale === "es"
                          ? category.descriptionEs
                          : category.descriptionEn
                        : undefined
                    }
                    items={[...category.items]}
                    viewLabel={t.viewMore}
                    hideLabel={t.showLess}
                    defaultOpen={index === 0}
                    featured={"featured" in category && category.featured}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
