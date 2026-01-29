"use client";

import { PageHero } from "@/components/about";
import { CategoryGrid } from "@/components/products";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.productsHeroTitle}
        subtitle={t.productsHeroSubtitle}
        backgroundImage="/images/products-hero.jpg"
      />
      <CategoryGrid />
    </>
  );
}
