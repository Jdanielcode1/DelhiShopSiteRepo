"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { navigation, businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-charcoal text-cream">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/delhiii-modified.png"
                  alt={businessInfo.name}
                  width={200}
                  height={200}
                  className="h-12 w-12 object-contain"
                  unoptimized
                />
                <div className="flex flex-col">
                  <span className="font-heading text-lg font-bold text-cream">
                    {businessInfo.name}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-cream/60">
                    {t.farmSupply}
                  </span>
                </div>
              </Link>
              <p className="text-cream/70 text-sm leading-relaxed">
                {t.footerDescription}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4 text-secondary-300">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-cream/70 hover:text-cream transition-colors"
                    >
                      {locale === "es" ? item.nameEs : item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4 text-secondary-300">
                {t.contactUs}
              </h3>
              <address className="not-italic space-y-2 text-cream/70 text-sm">
                {businessInfo.addresses.map((addr) => (
                  <p key={addr.label}>
                    <span className="text-cream/90 font-medium">{addr.label}:</span>{" "}
                    {addr.street}, {addr.city}, {addr.state} {addr.zip}
                  </p>
                ))}
                <p>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="hover:text-cream transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="hover:text-cream transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4 text-secondary-300">
                {t.storeHours}
              </h3>
              <ul className="space-y-2 text-cream/70 text-sm">
                <li>
                  <span className="text-cream/90 font-medium">{t.fallHours}</span>
                  <br />
                  {t.monSat}: {t.fallMonSat}
                </li>
                <li>
                  <span className="text-cream/90 font-medium">{t.springHours}</span>
                  <br />
                  {t.monSat}: {t.springMonSat}
                </li>
                <li>{t.sundayClosed}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
            <p>
              &copy; {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.facebook}
                className="hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href={businessInfo.social.instagram}
                className="hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
