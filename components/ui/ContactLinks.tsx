import { cn } from "@/lib/utils";

interface ContactLinksProps {
  phone: string;
  whatsappUrl: string;
  whatsappLabel: string;
  callLabel: string;
  appearance?: "primary" | "light" | "outline" | "accent";
  compact?: boolean;
  className?: string;
}

export function ContactLinks({
  phone,
  whatsappUrl,
  whatsappLabel,
  callLabel,
  appearance = "outline",
  compact = false,
  className,
}: ContactLinksProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm border-2 font-medium transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    compact ? "h-10 w-10 p-2.5" : "px-4 py-2.5",
    appearance === "primary" && "border-primary-600 bg-primary-600 text-cream hover:bg-primary-700",
    appearance === "accent" && "border-accent bg-accent text-cream hover:bg-accent-hover",
    appearance === "light" && "border-cream/40 text-cream hover:border-cream hover:bg-cream/10",
    appearance === "outline" && "border-primary-600 text-primary-700 hover:bg-primary-50",
  );

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={baseStyles}
        aria-label={`${whatsappLabel}: ${phone}`}
        title={`${whatsappLabel}: ${phone}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47a8.93 8.93 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 2a9.84 9.84 0 0 0-8.37 15.01L2.05 22l5.11-1.59A9.83 9.83 0 1 0 12.04 2Zm0 17.98a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-3.03.95.99-2.96-.19-.3a8.14 8.14 0 1 1 6.67 3.62Z" />
        </svg>
        {!compact && <span>{whatsappLabel}</span>}
      </a>

      <a
        href={`tel:+1${phone.replace(/\D/g, "")}`}
        className={baseStyles}
        aria-label={`${callLabel}: ${phone}`}
        title={`${callLabel}: ${phone}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
          <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
        </svg>
        {!compact && <span>{callLabel}</span>}
      </a>
    </div>
  );
}
