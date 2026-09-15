"use client";

import { PageHero } from "@/components/about";
import { Container, Heading, Section } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();
  const delhi = businessInfo.addresses.find((address) => address.label === "Delhi")!;
  const denair = businessInfo.addresses.find((address) => address.label === "Denair")!;

  return (
    <>
      <PageHero
        title={t.productsHeroTitle}
        subtitle={t.productsHeroSubtitle}
        backgroundImage="/images/products_we_carry.png"
      />

      <Section variant="cream" padding="md">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Heading as="h2" size="lg" className="text-charcoal mb-3">
              {t.chooseStore}
            </Heading>
            <p className="text-charcoal-light">{t.chooseStoreDescription}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a
              href="/products/delhi"
              className="group rounded-sm border-2 border-primary-600 bg-background p-6 text-center transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <span className="block font-heading text-xl font-bold text-primary-700 mb-1">
                Delhi
              </span>
              <span className="block text-sm text-charcoal-light mb-4">
                {delhi.street}, {delhi.city}
              </span>
              <span className="font-medium text-primary-700 group-hover:underline">
                {t.viewDelhiProducts} →
              </span>
            </a>
            <a
              href="/products/denair"
              className="group rounded-sm border-2 border-accent bg-background p-6 text-center transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="block font-heading text-xl font-bold text-accent mb-1">
                Denair
              </span>
              <span className="block text-sm text-charcoal-light mb-4">
                {denair.street}, {denair.city}
              </span>
              <span className="font-medium text-accent group-hover:underline">
                {t.viewDenairProducts} →
              </span>
            </a>
          </div>
        </Container>
      </Section>

    </>
  );
}
