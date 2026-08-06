import { cn } from "@/lib/utils";

interface SocialLinksProps {
  social: Record<string, string | undefined>;
  storeName: string;
  appearance?: "primary" | "light" | "outline";
  size?: "md" | "lg";
  className?: string;
}

function networkLabel(network: string) {
  return network === "tiktok"
    ? "TikTok"
    : network.charAt(0).toUpperCase() + network.slice(1);
}

function SocialIcon({ network }: { network: string }) {
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    );
  }

  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.26.15 4.78 1.69 4.93 4.93.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.93 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.27-.15-4.78-1.69-4.93-4.93-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.37 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.34-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.3.27 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    );
  }

  if (network === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75v-3.5a6.34 6.34 0 1 0 5.45 6.28V8.76a8.16 8.16 0 0 0 4.77 1.52V6.84c-.34 0-.67-.05-1-.15Z" />
      </svg>
    );
  }

  return null;
}

export function SocialLinks({
  social,
  storeName,
  appearance = "outline",
  size = "md",
  className,
}: SocialLinksProps) {
  const links = Object.entries(social).filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map(([network, url]) => (
        <a
          key={network}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow ${storeName} on ${networkLabel(network)}`}
          title={`${storeName} on ${networkLabel(network)}`}
          className={cn(
            "inline-flex items-center justify-center rounded-full border-2 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            size === "lg" ? "h-14 w-14 p-3.5" : "h-10 w-10 p-2.5",
            appearance === "primary" && "border-primary-600 bg-primary-600 text-cream hover:bg-primary-700",
            appearance === "light" && "border-cream/30 text-cream/80 hover:border-cream hover:bg-cream hover:text-charcoal",
            appearance === "outline" && "border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-cream",
          )}
        >
          <SocialIcon network={network} />
        </a>
      ))}
    </div>
  );
}
