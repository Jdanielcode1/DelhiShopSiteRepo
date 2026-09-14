import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimalCatalogPage } from "@/components/products/AnimalCatalogPage";
import { animalProductGroups } from "@/data/animalProducts";
import { businessInfo, siteUrl } from "@/data/business";

interface AnimalPageProps {
  params: Promise<{ animal: string }>;
}

export function generateStaticParams() {
  return animalProductGroups.map((group) => ({ animal: group.id }));
}

export async function generateMetadata({ params }: AnimalPageProps): Promise<Metadata> {
  const { animal } = await params;
  const group = animalProductGroups.find((item) => item.id === animal);
  if (!group) return {};

  const title = `${group.nameEn} Feed & Supplies in Delhi, CA`;
  return {
    title,
    description: group.descriptionEn,
    alternates: { canonical: `${siteUrl}/products/animals/${group.id}` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/products/animals/${group.id}`,
      title,
      description: group.descriptionEn,
      siteName: businessInfo.name,
    },
  };
}

export default async function AnimalPage({ params }: AnimalPageProps) {
  const { animal } = await params;
  const group = animalProductGroups.find((item) => item.id === animal);
  if (!group) notFound();

  return <AnimalCatalogPage group={group} />;
}
