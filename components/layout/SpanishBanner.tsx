"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function SpanishBanner() {
  const { toggleLocale, locale } = useLanguage();

  return (
    <div className="bg-primary-700 text-cream text-center py-2 px-4 text-sm">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <svg
          className="w-4 h-4 flex-shrink-0"
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
        <span>
          {locale === "en"
            ? "Se habla Español — We speak Spanish!"
            : "Hablamos Español — We speak Spanish!"}
        </span>
        <button
          type="button"
          onClick={toggleLocale}
          className="underline underline-offset-2 hover:text-secondary-300 transition-colors font-medium ml-1"
        >
          {locale === "en" ? "Ver en Español" : "View in English"}
        </button>
      </span>
    </div>
  );
}
