"use client";

import { Container, Section, Heading, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export function StorySection() {
  const { t } = useLanguage();

  return (
    <Section variant="default" padding="xl">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] rounded-sm bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/story-1.jpg')",
                  backgroundColor: "var(--color-secondary-300)",
                }}
                role="img"
                aria-label="Vintage storefront"
              />
              <div
                className="aspect-[3/4] rounded-sm bg-cover bg-center mt-8"
                style={{
                  backgroundImage: "url('/images/story-2.jpg')",
                  backgroundColor: "var(--color-primary-300)",
                }}
                role="img"
                aria-label="Modern store interior"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <span className="inline-block text-primary-600 text-sm uppercase tracking-[0.15em] mb-3">
              {t.howItBegan}
            </span>
            <Heading as="h2" size="xl" className="text-charcoal mb-6">
              {t.rootedInCommunity}
            </Heading>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
