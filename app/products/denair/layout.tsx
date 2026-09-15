import type { Metadata } from "next";
import { siteUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Denair Store Products",
  description: "Contact our Denair store for current animal feed, pet care, livestock, and farm supply availability.",
  alternates: { canonical: `${siteUrl}/products/denair` },
};

export default function DenairProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
