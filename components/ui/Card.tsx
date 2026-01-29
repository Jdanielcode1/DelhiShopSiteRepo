import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-cream rounded-sm overflow-hidden",
        "border border-secondary-200",
        hover && [
          "transition-all duration-300 ease-out",
          "hover:shadow-lg hover:shadow-charcoal/10",
          "hover:-translate-y-1",
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden aspect-[4/3]",
        "group-hover:scale-105 transition-transform duration-500",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
