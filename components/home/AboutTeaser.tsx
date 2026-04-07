"use client";

import { Container, Section, Heading, Button, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutTeaser() {
  const { t } = useLanguage();

  return (
    <Section variant="cream" padding="xl">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <span className="inline-block text-primary-600 text-sm uppercase tracking-[0.15em] mb-3">
              {t.ourStory}
            </span>
            <Heading as="h2" size="xl" className="text-charcoal mb-6">
              {t.familyTradition}
            </Heading>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-charcoal-light leading-relaxed mb-6">
              <ul className="list-disc list-inside space-y-2">
                <li>Farmers Best Dairy Feed</li>
                <li>El Ranchero</li>
                <li>Leach Grain and Milling</li>
                <li>Swanson Scratch</li>
                <li>ZBONG</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>El Rey</li>
                <li>Jose Guerrero</li>
                <li>TMC</li>
                <li>Winners Cup</li>
                <li>Diamond</li>
                <li>Victor</li>
                <li>Eagle Mountain</li>
              </ul>
            </div>
            <Button href="/products" variant="primary" className="mt-6">
              and more!
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={150} className="order-1 lg:order-2">
            <div
              className="aspect-[4/3] rounded-sm bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/products_we_carry.png')",
                backgroundColor: "var(--color-secondary-300)",
              }}
              role="img"
              aria-label="Feed and supply products stacked in the store"
            />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
