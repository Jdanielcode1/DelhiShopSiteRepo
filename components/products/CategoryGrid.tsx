"use client";

import Image from "next/image";
import { Button, Container, Heading, Section, ScrollReveal } from "@/components/ui";
import { animalProductGroups } from "@/data/animalProducts";
import { customFeeds } from "@/data/customFeeds";
import { useLanguage } from "@/lib/LanguageContext";
import { AnimalProductAccordion } from "./AnimalProductAccordion";

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

  const openAnimalGroup = (groupId: string) => {
    const section = document.getElementById(groupId);
    if (section instanceof HTMLDetailsElement) {
      section.open = true;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${groupId}`);
    }
  };

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

          <div>
            <Heading as="h2" size="lg" className="mb-3 text-charcoal">{locale === "es" ? "Comprar por Animal" : "Shop by Animal"}</Heading>
            <p className="mb-6 max-w-3xl text-charcoal-light">
              {locale === "es"
                ? "Elija un animal y luego explore alimento, salud, aseo, equipo y otros suministros en categorías fáciles de encontrar."
                : "Choose an animal, then browse feed, health, grooming, equipment, and other supplies in easy-to-find categories."}
            </p>

            <nav aria-label={locale === "es" ? "Tipos de animales" : "Animal types"} className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {animalProductGroups.map((group) => (
                <button key={group.id} type="button" onClick={() => openAnimalGroup(group.id)} className="flex shrink-0 items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800 transition hover:border-primary-400 hover:bg-primary-100">
                  <span aria-hidden="true">{group.icon}</span>
                  {locale === "es" ? group.nameEs : group.nameEn}
                </button>
              ))}
            </nav>

            <div className="space-y-4">
              {animalProductGroups.map((group, index) => (
                <ScrollReveal key={group.id} delay={Math.min(index * 35, 210)}>
                  <AnimalProductAccordion group={group} locale={locale} defaultOpen={index === 0}>
                    {group.includesCustomFeeds && (
                      <section className="mt-7 border-t border-secondary-200 pt-7" aria-labelledby="custom-game-bird-feeds">
                        <Heading as="h4" size="md" className="text-charcoal" id="custom-game-bird-feeds">
                          {locale === "es" ? "Alimentos Especiales para Aves" : "Custom Poultry & Game-Bird Feeds"}
                        </Heading>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-charcoal-light">{t.customFeedsDescription}</p>
                        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                          {customFeeds.map((feed) => (
                            <article key={feed.name} className="flex h-full flex-col rounded-sm border border-primary-200 bg-background p-5 shadow-sm">
                              <div className="flex-1">
                                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary-600">{t.customFeeds}</span>
                                <h5 className="mt-2 font-heading text-xl font-bold text-charcoal xl:min-h-[5.25rem]">{feed.name}</h5>
                                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{locale === "es" ? feed.descriptionEs : feed.description}</p>
                              </div>
                              <dl className="mt-5 divide-y divide-secondary-200 rounded-sm border border-secondary-200 bg-secondary-50">
                                <div className="flex items-center justify-between gap-4 p-3"><dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">{t.minimumCrudeProtein}</dt><dd className="shrink-0 font-bold text-primary-700">{feed.protein}</dd></div>
                                <div className="flex items-center justify-between gap-4 p-3"><dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">{t.bagWeight}</dt><dd className="shrink-0 text-right font-bold text-primary-700">{feed.weight}<span className="ml-1 text-xs font-normal text-charcoal-light">({feed.kilograms})</span></dd></div>
                                <div className="flex items-center justify-between gap-4 p-3"><dt className="text-[0.65rem] uppercase leading-tight tracking-wider text-charcoal-light">{t.bestFor}</dt><dd className="max-w-[60%] text-right text-sm font-bold leading-tight text-primary-700">{locale === "es" ? feed.bestForEs : feed.bestFor}</dd></div>
                              </dl>
                              <Button href={`/products/${feed.slug}`} variant="ghost" size="sm" className="mt-3 self-start px-0">{locale === "es" ? "Ver Detalles" : "View Product Details"} →</Button>
                            </article>
                          ))}
                        </div>
                      </section>
                    )}
                  </AnimalProductAccordion>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
