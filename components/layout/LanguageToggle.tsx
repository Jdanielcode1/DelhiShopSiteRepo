"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageToggle({ variant = "dark", className }: LanguageToggleProps) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-sm font-medium",
        "border transition-all duration-200",
        "hover:scale-[1.02] active:scale-[0.98]",
        variant === "light"
          ? "border-cream/40 text-cream hover:bg-cream/10"
          : "border-primary-300 text-primary-700 hover:bg-primary-50",
        className
      )}
      aria-label={locale === "en" ? "Traducir al Español" : "Translate to English"}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      {locale === "en" ? "Español" : "English"}
    </button>
  );
}
