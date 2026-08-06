"use client";

import { PageHero } from "@/components/about";
import { ContactForm, LocationInfo } from "@/components/contact";
import { Container, Section, Heading, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.contactHeroTitle}
        subtitle={t.contactHeroSubtitle}
        backgroundImage="/images/contact-hero.jpg"
      />

      <Section variant="default" padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <Heading as="h2" size="lg" className="text-charcoal mb-6">
                {t.sendMessage}
              </Heading>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="lg:pl-8 lg:border-l border-secondary-200">
                <LocationInfo />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section variant="cream" padding="lg">
        <Container>
          <ScrollReveal className="text-center">
            <Heading as="h2" size="lg" className="text-charcoal mb-4">
              {t.findUs}
            </Heading>
            <p className="text-charcoal-light mb-8 max-w-2xl mx-auto">
              {t.findUsDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div id="delhi" className="scroll-mt-24">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                  Delhi
                </h3>
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=9764+Stephens+St,+Delhi,+CA+95315&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delhi Feed and Supply — Delhi location"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div id="denair" className="scroll-mt-24">
                <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                  Denair
                </h3>
                <div className="aspect-[4/3] rounded-sm overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=4448+Main+St,+Denair,+CA+95316&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delhi Feed and Supply — Denair location"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
