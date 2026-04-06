"use client";

import { Heading, Button } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  items: string[];
  itemsLabel?: string;
}

interface CategoryCardProps {
  category: Category;
  reverse?: boolean;
}

export function CategoryCard({ category, reverse = false }: CategoryCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
        reverse && "lg:grid-flow-dense"
      )}
    >
      <div className={cn(reverse && "lg:col-start-2")}>
        <div
          className="aspect-[4/3] rounded-sm bg-cover bg-center"
          style={{
            backgroundImage: `url('${category.image}')`,
            backgroundColor: "var(--color-secondary-300)",
          }}
          role="img"
          aria-label={category.name}
        />
      </div>

      <div className={cn(reverse && "lg:col-start-1")}>
        <Heading as="h2" size="xl" className="text-charcoal mb-4">
          {category.name}
        </Heading>
        {category.description && (
          <p className="text-charcoal-light leading-relaxed mb-6">
            {category.description}
          </p>
        )}

        <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wider text-primary-600 mb-3">
            {category.itemsLabel || t.whatWeCarry}
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-charcoal-light"
              >
                <svg
                  className="w-4 h-4 text-primary-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button href="/contact" variant="primary">
          {t.askAboutAvailability}
        </Button>
      </div>
    </div>
  );
}
