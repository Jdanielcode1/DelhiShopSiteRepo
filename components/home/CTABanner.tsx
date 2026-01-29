"use client";

import { Container, Section, Heading, Button, ScrollReveal } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <Section variant="primary" padding="xl">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <Heading as="h2" size="xl" className="text-cream mb-6">
            {t.readyToStart}
          </Heading>
          <p className="text-cream/80 text-lg mb-8">
            {t.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button href="/contact" variant="accent" size="lg">
              {t.getDirections}
            </Button>
            <a
              href={`tel:${businessInfo.phone}`}
              className="text-cream hover:text-secondary-300 transition-colors font-medium"
            >
              {t.orCall} {businessInfo.phone}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-cream/20">
            <div>
              <h3 className="font-heading text-secondary-300 font-bold mb-1">
                {t.locations}
              </h3>
              <div className="space-y-2">
                {businessInfo.addresses.map((addr) => (
                  <p key={addr.label} className="text-cream/70 text-sm">
                    <span className="text-cream/90">{addr.label}:</span>{" "}
                    {addr.street}, {addr.city}, {addr.state}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-secondary-300 font-bold mb-1">
                {t.fallHours}
              </h3>
              <p className="text-cream/70 text-sm">
                {t.monSat}: {t.fallMonSat}
                <br />
                {t.sundayClosed}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-secondary-300 font-bold mb-1">
                {t.springHours}
              </h3>
              <p className="text-cream/70 text-sm">
                {t.monSat}: {t.springMonSat}
                <br />
                {t.sundayClosed}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
