"use client";

import { Container, Section, Heading, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export function StorySection() {
  const { t } = useLanguage();

  return (
    <Section variant="default" padding="xl">
      <Container size="lg">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="inline-block text-charcoal-light text-sm uppercase tracking-[0.15em] mb-3">
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
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
