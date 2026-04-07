"use client";

import Link from "next/link";
import { Container, Section, Heading, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function FeaturedCategories() {
  const { t } = useLanguage();

  /** Home tiles use illustrative photos; `/products` rows use store interiors — keep paths separate. */
  const categories: {
    id: string;
    name: string;
    description: string;
    image: string;
    href: string;
    /** Transparent PNG: warm mat + contain; photos use full-bleed dark fallback */
    imageContain?: boolean;
  }[] = [
    {
      id: "animal-feed",
      name: t.catAnimalFeed,
      description: t.catAnimalFeedDesc,
      image: "/images/animalfeed.jpeg",
      href: "/products#animal-feed",
    },
    {
      id: "farm-equipment",
      name: t.catFarmEquipment,
      description: t.catFarmEquipmentDesc,
      image: "/images/animals.png",
      imageContain: true,
      href: "/products#pet-care",
    },
    {
      id: "pest-control",
      name: t.catSeedsSupplies,
      description: t.catSeedsSuppliesDesc,
      image: "/images/chickens.jpeg",
      href: "/products#pest-control",
    },
  ];

  return (
    <Section variant="default" padding="xl">
      <Container>
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <Heading as="h2" size="xl" className="text-primary-600 uppercase tracking-[0.15em]">
            {t.whatWeOffer}
          </Heading>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 100}>
              <Link
                href={category.href}
                className={cn(
                  "group relative block overflow-hidden rounded-xl",
                  "ring-1 ring-charcoal/10 shadow-lg shadow-primary-900/12",
                  "transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-900/18",
                  "aspect-[3/4] md:aspect-[2/3]",
                  index === 0 && "md:row-span-2 md:aspect-auto md:h-full"
                )}
              >
                <div
                  className={cn(
                    "absolute bg-center bg-no-repeat transition-[transform,filter] duration-700 ease-out",
                    category.imageContain
                      ? "inset-0 bg-contain bg-origin-content p-4 sm:p-6 group-hover:scale-[1.02]"
                      : "inset-0 bg-cover group-hover:scale-[1.04] group-hover:brightness-[1.02]"
                  )}
                  style={{
                    backgroundImage: `url('${category.image}')`,
                    backgroundColor: category.imageContain
                      ? "var(--color-secondary-100)"
                      : "var(--color-primary-700)",
                  }}
                  aria-hidden="true"
                />

                {/* Illustration cards: keep top light; photo cards: stronger vignette */}
                <div
                  className={cn(
                    "absolute inset-0",
                    category.imageContain
                      ? "bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/5"
                      : "bg-gradient-to-t from-charcoal/92 via-charcoal/40 to-charcoal/15"
                  )}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2 drop-shadow-sm">
                    {category.name}
                  </h3>
                  <p className="text-cream/85 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-secondary-200 font-medium tracking-wide group-hover:gap-3 gap-2 transition-all">
                    {t.learnMore}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
