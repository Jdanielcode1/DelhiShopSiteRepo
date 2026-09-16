"use client";

import Image from "next/image";
import { Container, Button, Heading } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { locale, t } = useLanguage();
  const delhi = businessInfo.addresses.find((location) => location.slug === "delhi")!;
  const denair = businessInfo.addresses.find((location) => location.slug === "denair")!;

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(152,110,57,0.08),transparent_48%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-32 text-center md:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm uppercase tracking-[0.2em] text-primary-700 animate-fade-in md:text-base">
            <span>{t.welcomeTo}</span>
            <span className="whitespace-nowrap">Delhi Feed and Supply</span>
            <span aria-hidden="true" className="text-secondary-600">&amp;</span>
            <span className="whitespace-nowrap">Denair Feed and Supply</span>
          </div>

          <Heading
            as="h1"
            size="xl"
            className="text-charcoal mb-6 animate-fade-in-up"
          >
            {locale === "es" ? businessInfo.taglineEs : businessInfo.tagline}
          </Heading>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-charcoal-light animate-fade-in-up delay-100 md:text-xl">
            {t.heroDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-left animate-fade-in-up delay-200 md:grid-cols-2">
          <article className="flex flex-col overflow-hidden rounded-sm border border-cream/20 bg-charcoal/70 shadow-2xl">
            <Image
              src="/images/delhifrontnew.png"
              alt="Delhi Feed and Supply storefront"
              width={2048}
              height={1536}
              priority
              quality={85}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <div className="flex flex-1 flex-col p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-xl text-cream">Delhi</h2>
                <p className="mt-1 text-sm text-cream/65">
                  {delhi.street}, {delhi.city}
                </p>
              </div>
              <Button href="/locations/delhi" variant="primary">
                {t.exploreDelhiStore}
              </Button>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-sm border border-cream/20 bg-charcoal/70 shadow-2xl">
            <Image
              src="/images/front_store_denair.png"
              alt="Denair Feed and Supply storefront"
              width={2508}
              height={1696}
              priority
              quality={85}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <div className="flex flex-1 flex-col p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-xl text-cream">Denair</h2>
                <p className="mt-1 text-sm text-cream/65">
                  {denair.street}, {denair.city}
                </p>
              </div>
              <Button href="/locations/denair" variant="primary">
                {t.exploreDenairStore}
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
