import type { Metadata } from "next";
import { siteUrl } from "@/data/business";

const title = "Choose a Store | Delhi Feed and Supply";
const description =
  "Choose the Delhi or Denair store to view location-specific products and availability.";

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
