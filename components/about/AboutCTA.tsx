"use client";

import { Container, Section, Heading, Button, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutCTA() {
  const { t } = useLanguage();

  return (
    <Section variant="default" padding="xl">
      <Container size="md">
        <ScrollReveal className="text-center">
          <Heading as="h2" size="xl" className="text-charcoal mb-6">
            {t.comeVisit}
          </Heading>
          <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
            {t.comeVisitDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              {t.getDirections}
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              {t.viewProducts}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
