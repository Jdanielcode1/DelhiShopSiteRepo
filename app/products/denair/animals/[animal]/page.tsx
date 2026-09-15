import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimalCatalogPage } from "@/components/products/AnimalCatalogPage";
import { animalProductGroups } from "@/data/animalProducts";
import { businessInfo, siteUrl } from "@/data/business";

interface DenairAnimalPageProps {
  params: Promise<{ animal: string }>;
}

export function generateStaticParams() {
  return animalProductGroups.map((group) => ({ animal: group.id }));
}

export async function generateMetadata({ params }: DenairAnimalPageProps): Promise<Metadata> {
  const { animal } = await params;
  const group = animalProductGroups.find((item) => item.id === animal);
  if (!group) return {};

  const title = `${group.nameEn} Feed & Supplies in Denair, CA`;
  const url = `${siteUrl}/products/denair/animals/${group.id}`;
  return {
    title,
    description: group.descriptionEn,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: group.descriptionEn,
      siteName: businessInfo.name,
    },
  };
}

export default async function DenairAnimalPage({ params }: DenairAnimalPageProps) {
  const { animal } = await params;
  const group = animalProductGroups.find((item) => item.id === animal);
  if (!group) notFound();

  return <AnimalCatalogPage group={group} storeSlug="denair" />;
}
