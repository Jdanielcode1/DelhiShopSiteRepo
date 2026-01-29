"use client";

import { Container, Section, ScrollReveal } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { CategoryCard } from "./CategoryCard";

export function CategoryGrid() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "animal-feed",
      name: t.animalFeedName,
      description: t.animalFeedDesc,
      image: "/images/animal-feed.jpg",
      items: [t.poultryFeed, t.livestockFeed, t.horseFeed, t.petFood],
    },
    {
      id: "farm-equipment",
      name: t.farmEquipmentName,
      description: t.farmEquipmentDesc,
      image: "/images/farm-equipment.jpg",
      items: [t.fencingSupplies, t.toolsHardware, t.feedersWaterers, t.barnSupplies],
    },
  ];

  return (
    <Section variant="default" padding="xl">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 100}>
              <div id={category.id} className="scroll-mt-24">
                <CategoryCard category={category} reverse={index % 2 === 1} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
