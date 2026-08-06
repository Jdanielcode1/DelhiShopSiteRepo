import type { Metadata } from "next";
import { siteUrl } from "@/data/business";

const title = "Animal Feed & Farm Supply Products in Delhi & Denair, CA";
const description =
  "Browse poultry feed, game bird feed, livestock supplies, pet food, grains, bedding, animal health products, and custom feeds available near Delhi and Denair, California.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "animal feed near me",
    "feed store Delhi CA",
    "feed store Denair CA",
    "poultry feed",
    "game bird feed",
    "livestock supplies",
    "pet food",
    "custom feed",
  ],
  alternates: {
    canonical: `${siteUrl}/products`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/products`,
    title,
    description,
    images: [
      {
        url: "/images/products_we_carry.png",
        alt: "Animal feed and farm supply products",
      },
    ],
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
