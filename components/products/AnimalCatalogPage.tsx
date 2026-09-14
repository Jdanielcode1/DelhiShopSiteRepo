"use client";

import Link from "next/link";
import { Button, Container, Heading, Section } from "@/components/ui";
import type { AnimalProductGroup } from "@/data/animalProducts";
import { customFeeds } from "@/data/customFeeds";
import { useLanguage } from "@/lib/LanguageContext";

interface AnimalCatalogPageProps {
  group: AnimalProductGroup;
}

export function AnimalCatalogPage({ group }: AnimalCatalogPageProps) {
  const { locale, t } = useLanguage();
  const name = locale === "es" ? group.nameEs : group.nameEn;
  const description = locale === "es" ? group.descriptionEs : group.descriptionEn;

  return (
    <>
      <Section variant="dark" padding="md" className="pt-36 md:pt-40">
        <Container>
          <Link href="/products#delhi" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-300 transition hover:text-cream">
            <span aria-hidden="true">←</span>
            {locale === "es" ? "Todos los animales" : "All animals"}
          </Link>
          <div className="mt-7 flex max-w-4xl items-start gap-5 md:gap-7">
            <span aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cream/10 text-4xl md:h-20 md:w-20 md:text-5xl">{group.icon}</span>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary-300">
                {locale === "es" ? "Productos de la Tienda de Delhi" : "Delhi Store Products"}
              </p>
              <Heading as="h1" size="xl" className="text-cream">{name}</Heading>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-cream/75">{description}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="default" padding="lg">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.categories.map((category) => (
              <section key={category.id} aria-labelledby={`${group.id}-${category.id}`} className="rounded-sm border border-secondary-200 bg-background p-6 shadow-sm">
                <h2 id={`${group.id}-${category.id}`} className="font-heading text-xl font-bold text-charcoal">
                  {locale === "es" ? category.titleEs : category.titleEn}
                </h2>
                <ul className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base leading-snug text-charcoal-light">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {group.includesCustomFeeds && (
            <section className="mt-12 border-t border-secondary-200 pt-10" aria-labelledby="custom-game-bird-feeds">
              <Heading as="h2" size="lg" className="text-charcoal" id="custom-game-bird-feeds">
                {locale === "es" ? "Alimentos Especiales para Aves" : "Custom Poultry & Game-Bird Feeds"}
              </Heading>
              <p className="mt-3 max-w-3xl text-charcoal-light">{t.customFeedsDescription}</p>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {customFeeds.map((feed) => (
                  <article key={feed.name} className="flex h-full flex-col rounded-sm border border-primary-200 bg-primary-50/35 p-5 shadow-sm">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-charcoal">{feed.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{locale === "es" ? feed.descriptionEs : feed.description}</p>
                    </div>
                    <dl className="mt-5 grid grid-cols-2 gap-3 border-y border-secondary-200 py-4 text-sm">
                      <div><dt className="text-charcoal-light">{t.minimumCrudeProtein}</dt><dd className="mt-1 font-bold text-primary-700">{feed.protein}</dd></div>
                      <div><dt className="text-charcoal-light">{t.bagWeight}</dt><dd className="mt-1 font-bold text-primary-700">{feed.weight}</dd></div>
                    </dl>
                    <Button href={`/products/${feed.slug}`} variant="ghost" size="sm" className="mt-3 self-start px-0">
                      {locale === "es" ? "Ver Detalles" : "View Product Details"} →
                    </Button>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-sm bg-secondary-100 p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <Heading as="h2" size="md" className="text-charcoal">{locale === "es" ? "¿Busca otro animal?" : "Shopping for another animal?"}</Heading>
              <p className="mt-2 text-charcoal-light">{locale === "es" ? "Regrese a la lista de animales de la tienda de Delhi." : "Return to the Delhi store’s animal list."}</p>
            </div>
            <Button href="/products#delhi" variant="primary">{locale === "es" ? "Ver todos los animales" : "View all animals"}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
