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
import { ProductSearch } from "./ProductSearch";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, t, toggleLocale } = useLanguage();
  const isDenairPage =
    pathname === "/locations/denair" || pathname.startsWith("/products/denair");
  const isStoreLocationPage =
    pathname === "/locations/delhi" || pathname === "/locations/denair";
  const headerBusinessName = isDenairPage
    ? "Denair Feed and Supply"
    : businessInfo.name;

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
                aria-label={`${headerBusinessName} Home`}
              >
                <Image
                  src="/images/delhiii-modified.png"
                  alt={headerBusinessName}
                  width={200}
                  height={200}
                  className="h-12 w-12 object-contain"
                  priority
                  unoptimized
                />
                <span className="flex flex-col">
                  <span
                    className={cn(
                      "font-heading text-lg font-bold leading-none transition-colors duration-300",
                      isScrolled ? "text-charcoal" : "text-cream"
                    )}
                  >
                    {headerBusinessName}
                  </span>
                  {!isStoreLocationPage && !isDenairPage && (
                    <span
                      className={cn(
                        "mt-1 font-heading text-lg font-bold leading-none transition-colors duration-300",
                        isScrolled ? "text-charcoal" : "text-cream"
                      )}
                    >
                      Denair Feed and Supply
                    </span>
                  )}
                </span>
              </Link>

              <div className="hidden lg:flex items-center gap-5 xl:gap-7">
                {navigation.map((item) => {
                  const isProducts = item.href === "/products";
                  const isActive = isProducts ? pathname.startsWith("/products") : pathname === item.href;
                  const navLink = (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-1 font-medium transition-colors duration-200",
                        "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0",
                        "after:bg-current after:transition-all after:duration-200 hover:after:w-full",
                        isActive
                          ? isScrolled ? "text-primary-600 after:w-full" : "text-cream after:w-full"
                          : isScrolled ? "text-charcoal hover:text-primary-600" : "text-cream/90 hover:text-cream"
                      )}
                    >
                      {isProducts
                        ? locale === "es"
                          ? "Productos Disponibles En"
                          : "Products Available At"
                        : locale === "es"
                          ? item.nameEs
                          : item.name}
                      {isProducts && (
                        <svg className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                    </Link>
                  );

                  if (!isProducts) return <div key={item.name}>{navLink}</div>;

                  return (
                    <div key={item.name} className="group relative py-2">
                      {navLink}
                      <div className="pointer-events-none invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <div className="rounded-sm border border-secondary-200 bg-cream p-4 shadow-xl">
                          <div className="mb-3 border-b border-secondary-200 pb-3">
                            <span className="font-heading font-bold text-charcoal">{locale === "es" ? "Elija Su Tienda" : "Choose Your Store"}</span>
                          </div>
                          <div className="space-y-1">
                            {businessInfo.addresses.map((store) => (
                              <Link key={store.label} href={`/products/${store.label.toLowerCase()}`} className="flex items-center gap-3 rounded-sm px-3 py-3 text-sm font-semibold text-charcoal transition hover:bg-primary-50 hover:text-primary-700">
                                <span aria-hidden="true" className="text-xl">📍</span>
                                <span>
                                  <span className="block">{store.label}</span>
                                  <span className="block text-xs font-normal text-charcoal-light">{store.street}, {store.city}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <ProductSearch appearance={isScrolled ? "dark" : "light"} />
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

              <div className="flex items-center gap-2 lg:hidden">
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
