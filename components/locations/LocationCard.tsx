import Link from "next/link";
import { Button, Heading } from "@/components/ui";

interface LocationCardProps {
  slug: string;
  title: string;
  description: string;
  address: string;
  buttonLabel: string;
  accent?: boolean;
}

export function LocationCard({
  slug,
  title,
  description,
  address,
  buttonLabel,
  accent = false,
}: LocationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-secondary-200 bg-background p-6 shadow-sm md:p-8">
      <Link href={`/locations/${slug}`} className="group">
        <span
          className={
            accent
              ? "text-sm font-medium uppercase tracking-[0.18em] text-accent"
              : "text-sm font-medium uppercase tracking-[0.18em] text-primary-600"
          }
        >
          {address}
        </span>
        <Heading
          as="h2"
          size="lg"
          className="mt-3 text-charcoal transition-colors group-hover:text-primary-700"
        >
          {title}
        </Heading>
      </Link>
      <p className="mt-4 flex-1 leading-relaxed text-charcoal-light">
        {description}
      </p>
      <Button
        href={`/locations/${slug}`}
        variant={accent ? "accent" : "primary"}
        className="mt-7 self-start"
      >
        {buttonLabel}
      </Button>
    </article>
  );
}
