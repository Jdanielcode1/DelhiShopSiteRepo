import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "cream" | "primary" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
}

const variantStyles = {
  default: "bg-background",
  cream: "bg-cream-dark",
  primary: "bg-primary-600 text-cream",
  dark: "bg-charcoal text-cream",
};

const paddingStyles = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
};

export function Section({
  variant = "default",
  padding = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
