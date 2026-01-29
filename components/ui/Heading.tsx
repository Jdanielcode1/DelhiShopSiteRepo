import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeStyles = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl lg:text-4xl",
  xl: "text-3xl md:text-4xl lg:text-5xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl",
};

export function Heading({
  as: Component = "h2",
  size = "lg",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-heading font-bold leading-tight tracking-tight",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
