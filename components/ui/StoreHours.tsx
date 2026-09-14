"use client";

import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function StoreHours({ location }: { location: (typeof businessInfo.addresses)[number] }) {
  const { locale, t } = useLanguage();
  const isDenair = location.slug === "denair";
  const days = isDenair
    ? (locale === "es" ? "Lunes - Sábado" : "Monday - Saturday")
    : t.weekdays;

  return (
    <div className="space-y-1 text-sm">
      <p>{days}: {location.hours.weekdays}</p>
      {!isDenair && <p>{t.saturday}: {location.hours.saturday}</p>}
      <p>{t.sundayClosed}</p>
    </div>
  );
}
