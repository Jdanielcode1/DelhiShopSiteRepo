"use client";

import type { AnimalProductGroup } from "@/data/animalProducts";
import { cn } from "@/lib/utils";

interface AnimalProductAccordionProps {
  group: AnimalProductGroup;
  locale: "en" | "es";
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

export function AnimalProductAccordion({ group, locale, defaultOpen = false, children }: AnimalProductAccordionProps) {
  const animalName = locale === "es" ? group.nameEs : group.nameEn;
  const description = locale === "es" ? group.descriptionEs : group.descriptionEn;

  return (
    <details id={group.id} open={defaultOpen} className="group scroll-mt-28 overflow-hidden rounded-sm border border-secondary-200 bg-background shadow-sm open:border-primary-300 open:shadow-md">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5 marker:hidden md:p-7 [&::-webkit-details-marker]:hidden">
        <div className="flex min-w-0 gap-4">
          <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-2xl md:h-14 md:w-14">{group.icon}</span>
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal md:text-2xl">{animalName}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-charcoal-light md:text-base">{description}</p>
            <p className="mt-3 text-sm font-semibold text-primary-700 group-open:hidden">{group.categories.length} {locale === "es" ? "categorías" : "categories"}</p>
          </div>
        </div>
        <span className="mt-2 flex shrink-0 items-center gap-2 text-sm font-semibold text-primary-700">
          <span className="hidden sm:inline group-open:hidden">{locale === "es" ? "Ver productos" : "View products"}</span>
          <span className="hidden sm:group-open:inline">{locale === "es" ? "Ocultar" : "Hide"}</span>
          <svg className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="border-t border-secondary-200 bg-secondary-50/60 p-5 md:p-7">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {group.categories.map((category) => (
            <section key={category.id} aria-labelledby={`${group.id}-${category.id}`} className={cn("rounded-sm border border-secondary-200 bg-background p-5", (category.id === "feed" || category.id === "food") && "border-primary-200 bg-primary-50/35")}>
              <h4 id={`${group.id}-${category.id}`} className="font-heading text-lg font-bold text-charcoal">{locale === "es" ? category.titleEs : category.titleEn}</h4>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-charcoal-light">
                    <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        {children}
      </div>
    </details>
  );
}
