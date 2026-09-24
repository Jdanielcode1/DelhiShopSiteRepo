"use client";

import Image from "next/image";
import Link from "next/link";
import { cn, descriptionParagraphs } from "@/lib/utils";
import { Button, Container, Heading, Section } from "@/components/ui";
import type { AnimalProductGroup } from "@/data/animalProducts";
import { useLanguage } from "@/lib/LanguageContext";

interface AnimalCatalogPageProps {
  group: AnimalProductGroup;
  storeSlug?: "delhi" | "denair";
}

type CategoryHero = { image: string; altEn: string; altEs: string };

const categoryHeroes: Record<string, Record<"delhi" | "denair", CategoryHero>> = {
  horses: {
    denair: { image: "/images/denair-horses-hero.png", altEn: "Live chestnut horse in a pasture near Denair", altEs: "Caballo castaño vivo en un prado cerca de Denair" },
    delhi: { image: "/images/delhi-horses-hero.png", altEn: "Live dapple gray horse trotting through a field near Delhi", altEs: "Caballo tordo vivo trotando por un campo cerca de Delhi" },
  },
  cattle: {
    denair: { image: "/images/denair-cattle-hero.png", altEn: "Live black Angus cow in a pasture near Denair", altEs: "Vaca Angus negra viva en un pasto cerca de Denair" },
    delhi: { image: "/images/delhi-cattle-hero.png", altEn: "Live red and white Hereford cow in a field near Delhi", altEs: "Vaca Hereford roja y blanca viva en un campo cerca de Delhi" },
  },
  "goats-sheep": {
    denair: { image: "/images/denair-goats-sheep-hero.png", altEn: "Live goats and sheep in a pasture near Denair", altEs: "Cabras y ovejas vivas en un pasto cerca de Denair" },
    delhi: { image: "/images/delhi-goats-sheep-hero.png", altEn: "Live goats and sheep in a field near Delhi", altEs: "Cabras y ovejas vivas en un campo cerca de Delhi" },
  },
  pigs: {
    denair: { image: "/images/denair-pigs-hero.png", altEn: "Live pink farm pig in a pasture near Denair", altEs: "Cerdo de granja rosado vivo en un pasto cerca de Denair" },
    delhi: { image: "/images/delhi-pigs-hero.png", altEn: "Live spotted heritage pig in a field near Delhi", altEs: "Cerdo manchado de raza tradicional vivo en un campo cerca de Delhi" },
  },
  dogs: {
    denair: { image: "/images/denair-dogs-hero.png", altEn: "Live Yorkshire terrier in a field near Denair", altEs: "Yorkshire terrier vivo en un campo cerca de Denair" },
    delhi: { image: "/images/delhi-dogs-hero.png", altEn: "Live black Newfoundland dog in a field near Delhi", altEs: "Perro terranova negro vivo en un campo cerca de Delhi" },
  },
  cats: {
    denair: { image: "/images/denair-cats-hero.png", altEn: "Live orange Persian cat near Denair", altEs: "Gato persa naranja vivo cerca de Denair" },
    delhi: { image: "/images/delhi-cats-hero.png", altEn: "Live fluffy Siamese cat in a field near Delhi", altEs: "Gato siamés peludo vivo en un campo cerca de Delhi" },
  },
  rabbits: {
    denair: { image: "/images/denair-rabbits-hero.png", altEn: "Live white and brown rabbit near Denair", altEs: "Conejo blanco y marrón vivo cerca de Denair" },
    delhi: { image: "/images/delhi-rabbits-hero.png", altEn: "Live gray rabbit in a field near Delhi", altEs: "Conejo gris vivo en un campo cerca de Delhi" },
  },
  "aquatic-pets": {
    denair: { image: "/images/denair-aquatic-pets-hero.png", altEn: "Live red-eared slider turtle near Denair", altEs: "Tortuga de orejas rojas viva cerca de Denair" },
    delhi: { image: "/images/delhi-aquatic-pets-hero.png", altEn: "Live painted turtle swimming near Delhi", altEs: "Tortuga pintada viva nadando cerca de Delhi" },
  },
  "pet-birds": {
    denair: { image: "/images/denair-pet-birds-hero.png", altEn: "Live budgerigars near Denair", altEs: "Periquitos vivos cerca de Denair" },
    delhi: { image: "/images/delhi-pet-birds-hero.png", altEn: "Live cockatiels near Delhi", altEs: "Carolina vivas cerca de Delhi" },
  },
  "farm-barn": {
    denair: { image: "/images/farm-barn-hero.png", altEn: "Red barn in a rural landscape", altEs: "Granero rojo en un paisaje rural" },
    delhi: { image: "/images/farm-barn-hero.png", altEn: "Red barn in a rural landscape", altEs: "Granero rojo en un paisaje rural" },
  },
};

export function AnimalCatalogPage({ group, storeSlug = "delhi" }: AnimalCatalogPageProps) {
  const { locale } = useLanguage();
  const name = locale === "es" ? group.nameEs : group.nameEn;
  const description = locale === "es" ? group.descriptionEs : group.descriptionEn;
  const isDenair = storeSlug === "denair";
  const storeName = isDenair ? "Denair" : "Delhi";
  const allAnimalsHref = isDenair ? "/products/denair/animals" : "/products/animals";
  const displayProductName = (item: string) =>
    isDenair ? item.replace(/\bDelhi\b/g, "Denair") : item;
  const isUnavailableAtDenair = (categoryId: string, item: string) =>
    isDenair &&
    group.id === "poultry-game-birds" &&
    categoryId === "scratch" &&
    (item === "Bug Buffet" || item === "Pumpkin Spice & Everything Nice");
  const categoryHero = categoryHeroes[group.id]?.[storeSlug];
  const heroImage = categoryHero?.image ?? (isDenair && group.id === "poultry-game-birds"
    ? "/images/denair-poultry-game-birds.png"
    : group.image);
  const heroImageAlt = categoryHero
    ? locale === "es" ? categoryHero.altEs : categoryHero.altEn
    : isDenair && group.id === "poultry-game-birds"
      ? locale === "es"
        ? "Gallinas y aves de caza vivas en una granja cerca de Denair"
        : "Live chickens and game birds on a farm near Denair"
      : locale === "es"
        ? group.imageAltEs ?? name
        : group.imageAltEn ?? name;

  return (
    <>
      <Section
        variant="dark"
        padding="md"
        className="relative isolate mt-[104px] overflow-hidden pt-10 md:pt-14"
      >
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="z-0 object-cover object-right"
            />
            <div
              className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(35,26,22,0.97)_0%,rgba(35,26,22,0.94)_34%,rgba(35,26,22,0.72)_54%,rgba(35,26,22,0.28)_76%,rgba(35,26,22,0.08)_100%)]"
              aria-hidden="true"
            />
          </>
        )}
        <Container className="relative z-20">
          <Link href={allAnimalsHref} className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-300 transition hover:text-cream">
            <span aria-hidden="true">←</span>
            {locale === "es" ? "Todos los animales" : "All animals"}
          </Link>
          <div className="mt-7">
            <div className="flex max-w-4xl items-start gap-5 md:gap-7">
              <span aria-hidden="true" className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-cream/30 bg-charcoal md:h-20 md:w-20">
                {heroImage && (
                  <Image
                    src={heroImage}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                )}
              </span>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary-300">
                  {locale === "es" ? `Productos de la Tienda de ${storeName}` : `${storeName} Store Products`}
                </p>
                <Heading as="h1" size="xl" className="text-cream">{name}</Heading>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/75">{description}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="default" padding="lg">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.categories.map((category) => (
              <section
                key={category.id}
                aria-labelledby={`${group.id}-${category.id}`}
                className={cn(
                  "rounded-sm border border-secondary-200 bg-background p-6 shadow-sm",
                  category.itemImages && "md:col-span-2 xl:col-span-3"
                )}
              >
                <h2 id={`${group.id}-${category.id}`} className="font-heading text-xl font-bold text-charcoal">
                  {locale === "es" ? category.titleEs : category.titleEn}
                </h2>
                <ul
                  className={cn(
                    "mt-5",
                    category.itemImages
                      ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "space-y-3"
                  )}
                >
                  {category.items.filter((item) => !isUnavailableAtDenair(category.id, item)).map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "text-base leading-snug text-charcoal-light",
                        category.itemImages?.[item]
                          ? "flex flex-col overflow-hidden rounded-sm border border-secondary-200 bg-secondary-50"
                          : category.itemImages
                            ? "flex min-h-14 items-center gap-2.5 rounded-sm border border-secondary-200 px-4 py-3"
                            : "flex items-start gap-2.5"
                      )}
                    >
                      {category.itemImages?.[item] ? (
                        <>
                          <div
                            className={cn(
                              "grid w-full overflow-hidden bg-background",
                              Array.isArray(category.itemImages[item])
                                ? category.itemImages[item].length > 2
                                  ? "grid-cols-3"
                                  : "grid-cols-2"
                                : "grid-cols-1"
                            )}
                          >
                            {(Array.isArray(category.itemImages[item])
                              ? category.itemImages[item]
                              : [category.itemImages[item]]
                            ).map((image, index) => (
                              <div key={image} className="relative aspect-square overflow-hidden bg-background">
                                <Image
                                  src={image}
                                  alt={`${item}${index === 0 ? " bag" : " feed close-up"}`}
                                  fill
                                  sizes="(min-width: 1280px) 12.5vw, (min-width: 1024px) 16.5vw, (min-width: 640px) 25vw, 50vw"
                                  className="object-contain p-2 transition-transform duration-300 hover:scale-[1.03]"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-1 flex-col px-4 py-4">
                            <span className="block font-semibold text-charcoal">{displayProductName(item)}</span>
                            {category.itemDetails?.[item]?.description && (
                              <div className="mt-3 space-y-2 border-l-2 border-primary-300 pl-3 text-sm leading-relaxed text-charcoal-light">
                                {descriptionParagraphs(category.itemDetails[item].description).map((paragraph) => (
                                  <p key={paragraph}>{paragraph}</p>
                                ))}
                              </div>
                            )}
                            {category.itemDetails?.[item]?.benefits?.length ? (
                              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-charcoal-light">
                                {category.itemDetails[item].benefits.map((benefit) => (
                                  <li key={benefit} className="flex gap-2">
                                    <span className="text-primary-600" aria-hidden="true">•</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                            {category.itemDetails?.[item]?.highlights?.length ? (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {category.itemDetails[item].highlights.map((highlight) => (
                                  <span
                                    key={highlight}
                                    className="rounded-full bg-primary-700 px-3 py-1.5 text-sm font-bold text-cream"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                            {category.itemDetails?.[item]?.sizes.length ? (
                              <div className="mt-4 pt-1">
                                <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-light">
                                  {locale === "es" ? "Disponible en" : "Available in"}
                                </span>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {category.itemDetails[item].sizes.map((size) => (
                                    <span
                                      key={size}
                                      className="rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary-800"
                                    >
                                      {size}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4 shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                          </svg>
                          <span>{displayProductName(item)}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-sm bg-secondary-100 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <Heading as="h2" size="md" className="text-charcoal">{locale === "es" ? "¿Busca otro animal?" : "Shopping for another animal?"}</Heading>
              <p className="mt-2 text-charcoal-light">{locale === "es" ? `Regrese a la lista de animales de la tienda de ${storeName}.` : `Return to the ${storeName} store’s animal list.`}</p>
            </div>
            <Button href={allAnimalsHref} variant="primary">{locale === "es" ? "Ver todos los animales" : "View all animals"}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
