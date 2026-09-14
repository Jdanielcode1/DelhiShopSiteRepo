"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { animalProductGroups } from "@/data/animalProducts";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

interface ProductSearchProps {
  appearance?: "light" | "dark" | "mobile";
  onNavigate?: () => void;
}

export function ProductSearch({ appearance = "dark", onNavigate }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const { locale } = useLanguage();
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return animalProductGroups.flatMap((group) => {
      const matchingItems = group.categories.flatMap((category) =>
        category.items.filter((item) => item.toLocaleLowerCase().includes(normalizedQuery))
      );
      const matchingCategories = group.categories.filter((category) =>
        `${category.titleEn} ${category.titleEs}`.toLocaleLowerCase().includes(normalizedQuery)
      );
      const animalMatches = `${group.nameEn} ${group.nameEs} ${group.descriptionEn} ${group.descriptionEs}`
        .toLocaleLowerCase()
        .includes(normalizedQuery);

      if (!animalMatches && matchingItems.length === 0 && matchingCategories.length === 0) return [];

      const reason = matchingItems.slice(0, 2).join(", ") ||
        matchingCategories.map((category) => locale === "es" ? category.titleEs : category.titleEn).slice(0, 2).join(", ");

      return [{ group, reason }];
    }).slice(0, 6);
  }, [locale, normalizedQuery]);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!results[0]) return;
    router.push(`/products/animals/${results[0].group.id}`);
    setQuery("");
    setIsFocused(false);
    onNavigate?.();
  };

  const showResults = isFocused && normalizedQuery.length > 0;
  const isMobile = appearance === "mobile";

  return (
    <div className={cn("relative", isMobile ? "w-full" : "w-40 xl:w-52")}>
      <form role="search" onSubmit={submitSearch}>
        <label htmlFor={`product-search-${appearance}`} className="sr-only">
          {locale === "es" ? "Buscar productos" : "Search products"}
        </label>
        <div className="relative">
          <svg className={cn("pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2", appearance === "light" ? "text-cream/75" : "text-charcoal-light")} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <input
            id={`product-search-${appearance}`}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => window.setTimeout(() => setIsFocused(false), 150)}
            onKeyDown={(event) => event.key === "Escape" && setIsFocused(false)}
            placeholder={locale === "es" ? "Buscar productos" : "Search products"}
            autoComplete="off"
            aria-expanded={showResults}
            aria-controls={`product-search-results-${appearance}`}
            className={cn(
              "h-10 w-full rounded-full border py-2 pl-9 pr-3 text-base outline-none transition focus:ring-2",
              appearance === "light"
                ? "border-cream/50 bg-charcoal/15 text-cream placeholder:text-cream/70 focus:border-cream focus:ring-cream/30"
                : "border-secondary-300 bg-background text-charcoal placeholder:text-charcoal-light focus:border-primary-500 focus:ring-primary-200"
            )}
          />
        </div>
      </form>

      {showResults && (
        <div id={`product-search-results-${appearance}`} role="listbox" className={cn("absolute top-full z-[70] mt-2 overflow-hidden rounded-sm border border-secondary-200 bg-cream shadow-xl", isMobile ? "left-0 right-0" : "right-0 w-80")}>
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.map(({ group, reason }) => (
                <li key={group.id} role="option" aria-selected="false">
                  <Link
                    href={`/products/animals/${group.id}`}
                    onClick={() => { setQuery(""); setIsFocused(false); onNavigate?.(); }}
                    className="flex items-start gap-3 rounded-sm px-3 py-3 text-charcoal transition hover:bg-primary-50"
                  >
                    <span aria-hidden="true" className="text-xl">{group.icon}</span>
                    <span className="min-w-0">
                      <span className="block font-semibold">{locale === "es" ? group.nameEs : group.nameEn}</span>
                      {reason && <span className="mt-0.5 block truncate text-sm text-charcoal-light">{reason}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-sm text-charcoal-light">
              {locale === "es" ? "No encontramos un producto. Intente otra búsqueda." : "No product found. Try another search."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
