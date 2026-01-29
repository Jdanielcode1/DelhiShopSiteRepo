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
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>{t.aboutTeaser1}</p>
              <p>{t.aboutTeaser2}</p>
            </div>
            <Button href="/about" variant="primary" className="mt-8">
              {t.learnOurStory}
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={150} className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-sm bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about-teaser.jpg')",
                  backgroundColor: "var(--color-secondary-300)",
                }}
                role="img"
                aria-label="Delhi Feed and Supply storefront"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600 rounded-sm hidden lg:flex items-center justify-center">
                <div className="text-center text-cream">
                  <span className="block font-heading text-3xl font-bold">
                    25+
                  </span>
                  <span className="text-sm text-cream/80">{t.yearsServing}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
