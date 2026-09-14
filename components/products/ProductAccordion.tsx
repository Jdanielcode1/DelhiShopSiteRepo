"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductAccordionProps {
  title: string;
  description?: string;
  items: string[];
  itemImages?: Record<string, string>;
  viewLabel: string;
  hideLabel: string;
  defaultOpen?: boolean;
  featured?: boolean;
}

export function ProductAccordion({
  title,
  description,
  items,
  itemImages = {},
  viewLabel,
  hideLabel,
  defaultOpen = false,
  featured = false,
}: ProductAccordionProps) {
  return (
    <details
      open={defaultOpen}
      data-product-accordion={title}
      className={cn(
        "group overflow-hidden rounded-sm border bg-background shadow-sm transition-shadow open:shadow-md",
        featured ? "border-primary-300" : "border-secondary-200"
      )}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-5 marker:hidden md:p-6 [&::-webkit-details-marker]:hidden">
        <div>
          <h3 className="font-heading text-xl font-bold text-charcoal md:text-2xl">
            {title}
          </h3>
          {description && (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-charcoal-light md:text-base">
              {description}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2 group-open:hidden">
            {items.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full bg-secondary-100 px-3 py-1 text-xs text-charcoal-light"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <span className="mt-1 flex shrink-0 items-center gap-2 text-sm font-medium text-primary-700">
          <span className="group-open:hidden">{viewLabel}</span>
          <span className="hidden group-open:inline">{hideLabel}</span>
          <svg
            className="h-5 w-5 transition-transform duration-200 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="border-t border-secondary-200 px-5 py-5 md:px-6">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-charcoal-light">
              <svg
                className="mt-1 h-4 w-4 shrink-0 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="min-w-0">
                <span>{item}</span>
                {itemImages[item] && (
                  <Image
                    src={itemImages[item]}
                    alt={item}
                    width={684}
                    height={910}
                    sizes="160px"
                    className="mt-3 h-auto w-40 rounded-sm"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
