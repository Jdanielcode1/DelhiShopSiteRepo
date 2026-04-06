"use client";

import Link from "next/link";
import { Container, Section, Heading, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export function FeaturedCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "animal-feed",
      name: t.catAnimalFeed,
      description: t.catAnimalFeedDesc,
      image: "/images/feed-hero.jpg",
      href: "/products#animal-feed",
    },
    {
      id: "farm-equipment",
      name: t.catFarmEquipment,
      description: t.catFarmEquipmentDesc,
      image: "/images/equipment-hero.jpg",
      href: "/products#farm-equipment",
    },
    {
      id: "seeds-supplies",
      name: t.catSeedsSupplies,
      description: t.catSeedsSuppliesDesc,
      image: "/images/seeds-hero.jpg",
      href: "/products#seeds",
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
                  "group relative block overflow-hidden rounded-sm",
                  "aspect-[3/4] md:aspect-[2/3]",
                  index === 0 && "md:row-span-2 md:aspect-auto md:h-full"
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${category.image}')`,
                    backgroundColor: "var(--color-primary-700)",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream mb-2">
                    {category.name}
                  </h3>
                  <p className="text-cream/80 text-sm md:text-base mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-secondary-300 font-medium group-hover:gap-3 gap-2 transition-all">
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
