"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, ContactLinks } from "@/components/ui";
import { navigation, businessInfo, whatsappUrl } from "@/data/business";
import { animalProductGroups } from "@/data/animalProducts";
import { StoreHours } from "@/components/ui/StoreHours";
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

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isProducts = item.href === "/products";
                if (!isProducts) {
                  return (
                    <li key={item.name}>
                      <Link href={item.href} className={cn("block rounded-sm px-4 py-3 text-lg font-medium transition-colors", pathname === item.href ? "bg-primary-50 text-primary-700" : "text-charcoal hover:bg-secondary-100")} onClick={onClose}>
                        {locale === "es" ? item.nameEs : item.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <details open={pathname.startsWith("/products")} className="group rounded-sm border border-secondary-200 bg-secondary-50/60">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-sm px-4 py-3 text-lg font-medium text-charcoal marker:hidden hover:bg-secondary-100 [&::-webkit-details-marker]:hidden">
                        {locale === "es" ? item.nameEs : item.name}
                        <svg className="h-5 w-5 text-primary-700 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <ul className="space-y-1 border-t border-secondary-200 px-3 py-3">
                        <li>
                          <Link href="/products#delhi" onClick={onClose} className="block rounded-sm px-3 py-2 text-sm font-bold text-primary-700 hover:bg-primary-50">
                            {locale === "es" ? "Todos los Productos" : "All Products"}
                          </Link>
                        </li>
                        {animalProductGroups.map((group) => (
                          <li key={group.id}>
                            <Link href={`/products/animals/${group.id}`} onClick={onClose} className={cn("flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-semibold transition-colors", pathname === `/products/animals/${group.id}` ? "bg-primary-100 text-primary-800" : "text-charcoal hover:bg-primary-50")}>
                              <span aria-hidden="true" className="text-lg">{group.icon}</span>
                              {locale === "es" ? group.nameEs : group.nameEn}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-secondary-200 space-y-4">
            <Button href="/contact" variant="primary" className="w-full">
              {t.visitUsToday}
            </Button>
            <div className="text-center text-sm text-charcoal-light space-y-1">
              <p>{businessInfo.phone}</p>
              <ContactLinks
                phone={businessInfo.phone}
                whatsappUrl={whatsappUrl}
                whatsappLabel={t.whatsapp}
                callLabel={t.callUs}
                className="justify-center py-2"
              />
              {businessInfo.addresses.map((location) => (
                <div key={location.slug} className="pt-3">
                  <p className="mb-1 font-medium">{location.label}</p>
                  <StoreHours location={location} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
