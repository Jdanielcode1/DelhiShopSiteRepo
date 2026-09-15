"use client";

import Link from "next/link";
import { PageHero } from "@/components/about";
import { CategoryGrid } from "@/components/products";
import { Container, Section } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";

export default function DenairProductsPage() {
  const { locale } = useLanguage();

  return (
    <>
      <PageHero
        title={locale === "es" ? "Productos de Denair" : "Denair Products"}
        backgroundImage="/images/products_we_carry.png"
      />
      <Section variant="cream" padding="sm">
        <Container>
          <Link href="/products" className="font-semibold text-primary-700 hover:underline">
            ← {locale === "es" ? "Elegir otra tienda" : "Choose another store"}
          </Link>
        </Container>
      </Section>
      <CategoryGrid />
    </>
  );
}
