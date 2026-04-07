"use client";

import { Container, Button, Heading } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:center_32%] sm:bg-center"
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              rgba(12, 16, 12, 0.48) 0%,
              rgba(12, 16, 12, 0.58) 45%,
              rgba(10, 14, 10, 0.88) 100%
            ),
            url('/images/front_store_delhi.png')`,
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-secondary-300 text-sm md:text-base uppercase tracking-[0.2em] mb-6 animate-fade-in">
            {t.welcomeTo} {businessInfo.name}
          </span>

          <Heading
            as="h1"
            size="2xl"
            className="text-cream mb-6 animate-fade-in-up"
          >
            {locale === "es" ? businessInfo.taglineEs : businessInfo.tagline}
          </Heading>

          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Button href="/products" variant="accent" size="lg">
              {t.browseProducts}
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-cream text-cream hover:bg-cream/10"
            >
              {t.visitUsToday}
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cream/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
