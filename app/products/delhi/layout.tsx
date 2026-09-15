import type { Metadata } from "next";
import { siteUrl } from "@/data/business";

export const metadata: Metadata = {
  title: "Delhi Store Products",
  description: "Browse animal feed, pet care, livestock, and farm supplies available from our Delhi store.",
  alternates: { canonical: `${siteUrl}/products/delhi` },
};

export default function DelhiProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
