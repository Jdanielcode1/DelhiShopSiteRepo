export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "animal-feed",
    name: "Animal Feed",
    description:
      "Premium quality feed for all your livestock and poultry needs. We carry trusted brands that keep your animals healthy and thriving.",
    image: "/images/animal-feed.jpg",
    items: ["Poultry Feed", "Livestock Feed", "Horse Feed", "Pet Food"],
  },
  {
    id: "farm-equipment",
    name: "Farm Equipment",
    description:
      "Everything you need to keep your farm running smoothly. From fencing to feeders, we've got you covered.",
    image: "/images/farm-equipment.jpg",
    items: [
      "Fencing Supplies",
      "Tools & Hardware",
      "Feeders & Waterers",
      "Barn Supplies",
    ],
  },
];

export const featuredCategories = [
  {
    id: "animal-feed",
    name: "Animal Feed",
    description: "Premium feed for poultry, livestock, horses, and pets",
    image: "/images/feed-hero.jpg",
    href: "/products#animal-feed",
  },
  {
    id: "farm-equipment",
    name: "Farm Equipment",
    description: "Quality tools and supplies for your farm",
    image: "/images/equipment-hero.jpg",
    href: "/products#farm-equipment",
  },
  {
    id: "seeds-supplies",
    name: "Seeds & Supplies",
    description: "Everything you need to grow your own",
    image: "/images/seeds-hero.jpg",
    href: "/products#seeds",
  },
];

export const values = [
  {
    title: "Quality",
    description:
      "We carefully select every product we carry, partnering with trusted suppliers who share our commitment to excellence.",
    icon: "quality",
  },
  {
    title: "Community",
    description:
      "We're more than a store - we're your neighbors. Building lasting relationships with local farmers is at the heart of what we do.",
    icon: "community",
  },
  {
    title: "Expertise",
    description:
      "Our team brings decades of agricultural experience. We're here to answer questions and help you find the right solutions.",
    icon: "expertise",
  },
  {
    title: "Sustainability",
    description:
      "We believe in farming practices that protect our land for future generations. Ask us about our eco-friendly options.",
    icon: "sustainability",
  },
];
