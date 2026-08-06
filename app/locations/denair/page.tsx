import type { Metadata } from "next";
import { LocationDetail } from "@/components/locations";

export const metadata: Metadata = {
  title: "Denair Location",
  description:
    "Visit the Delhi Feed and Supply location in Denair, California for current products, availability, directions, and local store updates.",
};

export default function DenairLocationPage() {
  return <LocationDetail slug="denair" />;
}
