"use client";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HTMLAttributes, ElementType } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
}

export function ScrollReveal({
  as: Component = "div",
  delay = 0,
  className,
  children,
  style,
  ...props
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      className={cn("scroll-reveal", isVisible && "visible", className)}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
