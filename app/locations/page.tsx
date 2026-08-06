"use client";

import { PageHero } from "@/components/about";
import { LocationCard } from "@/components/locations";
import { Container, Heading, Section } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export default function LocationsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.locationsHeroTitle} subtitle={t.locationsHeroSubtitle} />
      <Section variant="cream" padding="xl">
        <Container>
          <Heading as="h2" size="lg" className="mb-10 text-center text-charcoal">
            {t.chooseLocation}
          </Heading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {businessInfo.addresses.map((location) => {
              const isDelhi = location.slug === "delhi";
              return (
                <LocationCard
                  key={location.slug}
                  slug={location.slug}
                  title={isDelhi ? t.delhiLocationTitle : t.denairLocationTitle}
                  description={
                    isDelhi
                      ? t.delhiLocationDescription
                      : t.denairLocationDescription
                  }
                  address={`${location.street}, ${location.city}, ${location.state}`}
                  buttonLabel={t.viewStoreDetails}
                  accent={!isDelhi}
                />
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
