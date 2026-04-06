"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container, Button } from "@/components/ui";
import { navigation, businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";
import { MobileMenu } from "./MobileMenu";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t, toggleLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Spanish banner */}
        <div
          className={cn(
            "bg-primary-800 text-cream text-center py-1.5 px-4 text-xs sm:text-sm transition-all duration-300 overflow-hidden",
            isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 opacity-100"
          )}
        >
          <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
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
            Se habla Español — We speak Spanish!
            <button
              type="button"
              onClick={toggleLocale}
              className="underline underline-offset-2 hover:text-secondary-300 transition-colors font-medium"
            >
              {locale === "en" ? "Ver en Español" : "View in English"}
            </button>
          </span>
        </div>

        {/* Main nav */}
        <div
          className={cn(
            "transition-all duration-300",
            isScrolled
              ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3"
              : "bg-transparent py-4"
          )}
        >
          <Container>
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 group"
                aria-label="Delhi Feed and Supply Home"
              >
                <Image
                  src="/images/delhiii-modified.png"
                  alt={businessInfo.name}
                  width={200}
                  height={200}
                  className="h-12 w-12 object-contain"
                  priority
                  unoptimized
                />
                <span
                  className={cn(
                    "font-heading text-lg font-bold leading-none transition-colors duration-300",
                    isScrolled ? "text-charcoal" : "text-cream"
                  )}
                >
                  {businessInfo.name}
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative font-medium transition-colors duration-200",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
                      "after:bg-current after:transition-all after:duration-200",
                      "hover:after:w-full",
                      pathname === item.href
                        ? isScrolled
                          ? "text-primary-600 after:w-full"
                          : "text-cream after:w-full"
                        : isScrolled
                          ? "text-charcoal hover:text-primary-600"
                          : "text-cream/90 hover:text-cream"
                    )}
                  >
                    {locale === "es" ? item.nameEs : item.name}
                  </Link>
                ))}
                <LanguageToggle variant={isScrolled ? "dark" : "light"} />
                <Button
                  href="/contact"
                  variant={isScrolled ? "primary" : "secondary"}
                  size="sm"
                  className={cn(
                    !isScrolled && "border-cream text-cream hover:bg-cream/10"
                  )}
                >
                  {t.visitUs}
                </Button>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <LanguageToggle variant={isScrolled ? "dark" : "light"} />
                <button
                  type="button"
                  className={cn(
                    "p-2 -mr-2 transition-colors duration-200",
                    isScrolled ? "text-charcoal" : "text-cream"
                  )}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </Container>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
