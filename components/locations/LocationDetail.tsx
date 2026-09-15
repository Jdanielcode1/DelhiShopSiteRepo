"use client";

import { PageHero } from "@/components/about";
import { CategoryGrid } from "@/components/products";
import { Button, ContactLinks, Container, Heading, Section, SocialLinks } from "@/components/ui";
import { businessInfo, siteUrl, whatsappUrl } from "@/data/business";
import { StoreHours } from "@/components/ui/StoreHours";
import { useLanguage } from "@/lib/LanguageContext";

interface LocationDetailProps {
  slug: "delhi" | "denair";
}

export function LocationDetail({ slug }: LocationDetailProps) {
  const { t } = useLanguage();
  const location = businessInfo.addresses.find((item) => item.slug === slug)!;
  const otherLocation = businessInfo.addresses.find((item) => item.slug !== slug)!;
  const isDelhi = slug === "delhi";
  const title = isDelhi ? t.delhiLocationTitle : t.denairLocationTitle;
  const description = isDelhi
    ? t.delhiLocationDescription
    : t.denairLocationDescription;
  const socialLinks = Object.entries(location.social).filter(([, url]) => url);
  const fullAddress = `${location.street}, ${location.city}, ${location.state} ${location.zip}`;
  const mapQuery = encodeURIComponent(fullAddress);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: `${businessInfo.name} — ${location.label}`,
    url: `${siteUrl}/locations/${location.slug}`,
    telephone: location.phone,
    email: location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    sameAs: socialLinks.map(([, url]) => url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        title={title}
        subtitle={description}
        backgroundImage={
          isDelhi
            ? "/images/delhifrontnew.png"
            : "/images/front_store_denair.png"
        }
      />

      <CategoryGrid />

      <Section variant="default" padding="xl">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Heading as="h2" size="lg" className="mb-6 text-charcoal">
                {t.locationContact}
              </Heading>
              <address className="not-italic text-lg leading-relaxed text-charcoal-light">
                <p className="font-medium text-charcoal">{location.label}</p>
                <p>{location.street}</p>
                <p>{location.city}, {location.state} {location.zip}</p>
                <p className="mt-5 font-medium text-charcoal">{location.phone}</p>
                <ContactLinks
                  phone={location.phone}
                  whatsappUrl={whatsappUrl}
                  whatsappLabel={t.whatsapp}
                  callLabel={t.callUs}
                  className="mt-3"
                />
                {location.email && (
                  <p>
                    <a className="text-primary-700 hover:underline" href={`mailto:${location.email}`}>
                      {location.email}
                    </a>
                  </p>
                )}
              </address>

              <div className="mt-8 border-t border-secondary-200 pt-6">
                <Heading as="h3" size="sm" className="mb-4 text-charcoal">
                  {t.storeHours}
                </Heading>
                <StoreHours location={location} />
              </div>

              <div className="mt-8 space-y-3">
                <Button href={`/products/${slug}`} variant="primary">
                  {t.locationProducts}
                </Button>
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-0 sm:ml-3"
                >
                  {t.getDirections}
                </Button>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary-100 shadow-sm">
              <iframe
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessInfo.name} — ${location.label}`}
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="cream" padding="lg">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Heading as="h2" size="lg" className="mb-3 text-charcoal">
                {t.followThisStore}
              </Heading>
              <p className="max-w-xl text-charcoal-light">
                {t.followStoreDescription}
              </p>
            </div>
            <div className="md:justify-self-end">
              {socialLinks.length > 0 ? (
                <SocialLinks
                  social={location.social}
                  storeName={location.label}
                  appearance="primary"
                  size="lg"
                />
              ) : (
                <p className="rounded-sm border border-secondary-300 bg-background px-5 py-4 text-sm text-charcoal-light">
                  {t.socialLinksPending}
                </p>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="dark" padding="md">
        <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-secondary-300">
              {t.otherLocation}
            </p>
            <Heading as="h2" size="md" className="mt-1 text-cream">
              {otherLocation.label}
            </Heading>
          </div>
          <Button
            href={`/locations/${otherLocation.slug}`}
            variant="secondary"
            className="border-cream text-cream hover:bg-cream/10"
          >
            {t.viewStoreDetails}
          </Button>
        </Container>
      </Section>
    </>
  );
}
