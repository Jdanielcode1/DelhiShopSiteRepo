"use client";

import {
  PageHero,
  StorySection,
  ValuesSection,
  AboutCTA,
} from "@/components/about";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.aboutHeroTitle}
        subtitle={t.aboutHeroSubtitle}
        backgroundImage="/images/about-hero.jpg"
      />
      <StorySection />
      <ValuesSection />
      <AboutCTA />
    </>
  );
}
