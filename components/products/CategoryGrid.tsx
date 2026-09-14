"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Heading, Section, ScrollReveal } from "@/components/ui";
import { animalProductGroups } from "@/data/animalProducts";
import { useLanguage } from "@/lib/LanguageContext";

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

const brandLogoRows = [brandLogos.slice(0, 11), brandLogos.slice(11, 22), brandLogos.slice(22)];

export function CategoryGrid({ sectionId, title, description }: CategoryGridProps) {
  const { locale, t } = useLanguage();

  return (
    <Section id={sectionId} variant="default" padding="xl" className="scroll-mt-24">
      <Container>
        {(title || description) && (
          <div className="mb-14 max-w-3xl md:mb-20">
            {title && <Heading as="h2" size="xl" className="mb-4 text-charcoal">{title}</Heading>}
            {description && <p className="text-lg leading-relaxed text-charcoal-light">{description}</p>}
          </div>
        )}

        <div className="space-y-16">
          <ScrollReveal>
            <div>
              <Heading as="h2" size="lg" className="mb-3 text-charcoal">{t.brandsWeCarry}</Heading>
              <p className="mb-6 max-w-3xl text-charcoal-light">{t.brandsDescription}</p>
              <div className="brand-marquee space-y-3 overflow-hidden py-5">
                {brandLogoRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="overflow-hidden">
                    <div className={`brand-marquee-track ${rowIndex === 1 ? "brand-marquee-track-reverse" : ""}`}>
                      {[false, true].map((duplicate) => (
                        <div key={duplicate ? "duplicate" : "original"} className="brand-marquee-group" aria-hidden={duplicate || undefined}>
                          {row.map((brand) => (
                            <div key={brand.name} className="flex h-28 w-48 shrink-0 items-center justify-center p-2 sm:h-32 sm:w-56">
                              <Image src={`/images/imagesforDelhi/${brand.image}`} alt={`${brand.name} logo`} width={1080} height={1080} sizes="192px" className="h-full w-full object-contain" />
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
              <Heading as="h2" size="lg" className="mb-3 text-charcoal">{locale === "es" ? "Comprar por Animal" : "Shop by Animal"}</Heading>
              <p className="mb-6 max-w-3xl text-charcoal-light">
                {locale === "es" ? "Elija un animal para abrir su propia página de alimentos, cuidado y suministros." : "Choose an animal to open its own page of feed, care, and supplies."}
              </p>
              <nav aria-label={locale === "es" ? "Comprar por tipo de animal" : "Shop by animal type"} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5">
                {animalProductGroups.map((group) => (
                  <Link key={group.id} href={`/products/animals/${group.id}`} className="group flex min-h-44 w-56 shrink-0 snap-start flex-col justify-between rounded-sm border border-secondary-200 bg-secondary-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                    <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-3xl">{group.icon}</span>
                    <span>
                      <span className="block font-heading text-xl font-bold text-charcoal">{locale === "es" ? group.nameEs : group.nameEn}</span>
                      <span className="mt-2 flex items-center justify-between gap-3 text-sm font-semibold text-primary-700">
                        {locale === "es" ? "Ver productos" : "View products"}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
