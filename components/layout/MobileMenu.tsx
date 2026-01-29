"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { navigation, businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { locale, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream z-50 transform transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-secondary-200">
            <span className="font-heading text-lg font-bold text-charcoal">
              {businessInfo.name}
            </span>
            <button
              type="button"
              className="p-2 -mr-2 text-charcoal hover:text-primary-600 transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 px-4 rounded-sm text-lg font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary-50 text-primary-700"
                        : "text-charcoal hover:bg-secondary-100"
                    )}
                    onClick={onClose}
                  >
                    {locale === "es" ? item.nameEs : item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-secondary-200 space-y-4">
            <Button href="/contact" variant="primary" className="w-full">
              {t.visitUsToday}
            </Button>
            <div className="text-center text-sm text-charcoal-light space-y-1">
              <p>{businessInfo.phone}</p>
              <p>{t.fallSchedule} ({t.fallHours})</p>
              <p>{t.sundayClosed}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
