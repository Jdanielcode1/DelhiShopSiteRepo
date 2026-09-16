"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Heading, Section } from "@/components/ui";
import { animalProductGroups } from "@/data/animalProducts";
import { useLanguage } from "@/lib/LanguageContext";

interface AnimalCategoryGalleryProps {
  storeSlug?: "delhi" | "denair";
}

const animalImages: Record<"delhi" | "denair", Record<string, string>> = {
  delhi: {
    "poultry-game-birds": "/images/chickens.jpeg",
    horses: "/images/delhi-horses-hero.png",
    cattle: "/images/delhi-cattle-hero.png",
    "goats-sheep": "/images/delhi-goats-sheep-hero.png",
    pigs: "/images/delhi-pigs-hero.png",
    dogs: "/images/delhi-dogs-hero.png",
    cats: "/images/delhi-cats-hero.png",
    rabbits: "/images/delhi-rabbits-hero.png",
    "pet-birds": "/images/delhi-pet-birds-hero.png",
    "aquatic-pets": "/images/delhi-aquatic-pets-hero.png",
  },
  denair: {
    "poultry-game-birds": "/images/denair-poultry-game-birds.png",
    horses: "/images/denair-horses-hero.png",
    cattle: "/images/denair-cattle-hero.png",
    "goats-sheep": "/images/denair-goats-sheep-hero.png",
    pigs: "/images/denair-pigs-hero.png",
    dogs: "/images/denair-dogs-hero.png",
    cats: "/images/denair-cats-hero.png",
    rabbits: "/images/denair-rabbits-hero.png",
    "pet-birds": "/images/denair-pet-birds-hero.png",
    "aquatic-pets": "/images/denair-aquatic-pets-hero.png",
  },
};

export function AnimalCategoryGallery({ storeSlug = "delhi" }: AnimalCategoryGalleryProps) {
  const { locale } = useLanguage();
  const storeName = storeSlug === "denair" ? "Denair" : "Delhi";
  const productsHref = storeSlug === "denair" ? "/products/denair" : "/products/delhi";
  const animalHref = (animalId: string) =>
    storeSlug === "denair" ? `/products/denair/animals/${animalId}` : `/products/animals/${animalId}`;

  return (
    <>
      <Section variant="cream" padding="md" className="pt-32 md:pt-36">
        <Container>
          <Link href={productsHref} className="font-semibold text-primary-700 hover:underline">
            ← {locale === "es" ? `Productos de ${storeName}` : `${storeName} products`}
          </Link>
          <div className="mt-10 max-w-3xl">
            <Heading as="h1" size="xl" className="text-charcoal">
              {locale === "es" ? "Comprar por animal" : "Shop by Animal"}
            </Heading>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              {locale === "es"
                ? "Elija un animal para ver alimentos, cuidado y suministros."
                : "Choose an animal to explore its feed, care, and supplies."}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="default" padding="xl">
        <Container>
          <nav aria-label={locale === "es" ? "Categorías de animales" : "Animal categories"} className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {animalProductGroups.map((group) => {
              const name = locale === "es" ? group.nameEs : group.nameEn;
              return (
                <Link
                  key={group.id}
                  href={animalHref(group.id)}
                  className="group relative isolate min-h-72 overflow-hidden rounded-sm bg-charcoal shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <Image
                    src={animalImages[storeSlug][group.id]}
                    alt={name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <span className="block font-heading text-3xl font-bold drop-shadow-sm">{name}</span>
                    <span className="mt-2 flex items-center gap-2 text-sm font-semibold">
                      {locale === "es" ? "Ver productos" : "View products"}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </Container>
      </Section>
    </>
  );
}
