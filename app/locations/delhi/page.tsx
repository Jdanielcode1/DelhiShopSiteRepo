import type { Metadata } from "next";
import { LocationDetail } from "@/components/locations";

export const metadata: Metadata = {
  title: "Delhi Location",
  description:
    "Visit Delhi Feed and Supply in Delhi, California for animal feed, pet care supplies, pest control, and local expertise.",
};

export default function DelhiLocationPage() {
  return <LocationDetail slug="delhi" />;
}
