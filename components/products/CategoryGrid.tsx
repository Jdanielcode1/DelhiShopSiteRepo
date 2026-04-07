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
      image: "/images/animal_feed_store.png",
      itemsLabel: t.weCarryProductsFor,
      items: [
        "Poultry Feed",
        "Horses",
        "Goats",
        "Pot Belly Pigs",
        "Cows",
        "Companion Birds",
        "Rabbits",
        "Dogs",
        "Cats",
        "Hamsters",
        "Guinea Pigs",
        "Aquatic Pets",
      ],
    },
    {
      id: "pet-care",
      name: t.farmEquipmentName,
      description: t.farmEquipmentDesc,
      image: "/images/pet_care_supplies_store.jpeg",
      items: [
        "Nesting Boxes",
        "Feeders & Waterers",
        "Grooming Tools & Supplies",
        "Milk Replacer",
        "Dog Leashes and Collars",
        "Supplements",
        "Nursing Bottles",
        "Heat Lamps",
      ],
    },
    {
      id: "pest-control",
      name: t.pestControlName,
      description: t.pestControlDesc,
      image: "/images/pest_control_store.jpeg",
      items: [
        "Poultry Dust",
        "Martin's Flea, Tick and Manage Dip",
        "Ultra Boss Pour-on Insecticide",
        "Y-Tex Python & Dust Livestock Insecticide",
      ],
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
