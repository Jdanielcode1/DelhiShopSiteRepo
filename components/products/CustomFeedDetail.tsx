"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, ContactLinks, Container, Heading, Section } from "@/components/ui";
import { businessInfo, whatsappUrl } from "@/data/business";
import type { CustomFeed } from "@/data/customFeeds";
import { useLanguage } from "@/lib/LanguageContext";

interface CustomFeedDetailProps {
  feed: CustomFeed;
}

export function CustomFeedDetail({ feed }: CustomFeedDetailProps) {
  const { locale } = useLanguage();
  const isSpanish = locale === "es";
  const description = isSpanish ? feed.descriptionEs : feed.description;
  const bestFor = isSpanish ? feed.bestForEs : feed.bestFor;

  return (
    <>
      <Section variant="cream" padding="lg" className="pt-32 md:pt-36">
        <Container>
          <nav aria-label={isSpanish ? "Migas de pan" : "Breadcrumb"} className="mb-8 text-sm text-charcoal-light">
            <Link href="/products" className="hover:text-primary-700 hover:underline">
              {isSpanish ? "Productos" : "Products"}
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">{feed.name}</span>
          </nav>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="overflow-hidden rounded-sm border border-secondary-200 bg-background shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src={feed.image}
                  alt={`${feed.name} feed label`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <article>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary-600">
                {isSpanish ? "Alimento Especial" : "Custom Feed"}
              </span>
              <Heading as="h1" size="xl" className="mt-3 text-charcoal">
                {feed.name}
              </Heading>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-light">
                {description}
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-sm border border-secondary-200 bg-background p-4">
                  <dt className="text-xs uppercase tracking-wider text-charcoal-light">
                    {isSpanish ? "Proteína Cruda Mínima" : "Minimum Crude Protein"}
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-primary-700">{feed.protein}</dd>
                </div>
                <div className="rounded-sm border border-secondary-200 bg-background p-4">
                  <dt className="text-xs uppercase tracking-wider text-charcoal-light">
                    {isSpanish ? "Peso de la Bolsa" : "Bag Weight"}
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-primary-700">{feed.weight}</dd>
                  <dd className="text-sm text-charcoal-light">{feed.kilograms}</dd>
                </div>
                <div className="rounded-sm border border-secondary-200 bg-background p-4">
                  <dt className="text-xs uppercase tracking-wider text-charcoal-light">
                    {isSpanish ? "Recomendado Para" : "Best For"}
                  </dt>
                  <dd className="mt-2 text-lg font-bold leading-tight text-primary-700">{bestFor}</dd>
                </div>
              </dl>

              <div className="mt-8 rounded-sm border-l-4 border-accent bg-background p-5">
                <Heading as="h2" size="sm" className="text-charcoal">
                  {isSpanish ? "Antes de Alimentar" : "Before Feeding"}
                </Heading>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {isSpanish
                    ? "Siga siempre las instrucciones y precauciones de la etiqueta. Estos alimentos contienen cobre añadido y no deben darse a ovejas. Proporcione agua limpia y fresca en todo momento."
                    : "Always follow the label directions and precautions. These feeds contain added copper and should not be fed to sheep. Provide fresh, clean water at all times."}
                </p>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section variant="default" padding="lg">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary-600">
              {isSpanish ? "Disponibilidad Local" : "Local Availability"}
            </span>
            <Heading as="h2" size="lg" className="mt-3 text-charcoal">
              {isSpanish
                ? `Pregunte por ${feed.name} cerca de Delhi y Denair`
                : `Ask About ${feed.name} Near Delhi and Denair`}
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-light">
              {isSpanish
                ? "El inventario puede cambiar. Envíenos un mensaje por WhatsApp para confirmar el precio y la disponibilidad antes de visitarnos."
                : "Inventory can change. Message us on WhatsApp to confirm current price and availability before visiting."}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
              {businessInfo.addresses.map((location) => (
                <article key={location.slug} className="rounded-sm border border-secondary-200 bg-cream p-6">
                  <Heading as="h3" size="md" className="text-charcoal">
                    {businessInfo.name} — {location.label}
                  </Heading>
                  <p className="mt-2 text-charcoal-light">
                    {location.street}<br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <ContactLinks
                      phone={location.phone}
                      whatsappUrl={whatsappUrl}
                      whatsappLabel="WhatsApp"
                      callLabel={isSpanish ? "Llámenos" : "Call Us"}
                      appearance="primary"
                    />
                    <Button href={`/locations/${location.slug}`} variant="secondary" size="sm">
                      {isSpanish ? "Detalles de la Tienda" : "Store Details"}
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <Button href="/products#delhi" variant="ghost" className="mt-8">
              ← {isSpanish ? "Volver a Todos los Productos" : "Back to All Products"}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
