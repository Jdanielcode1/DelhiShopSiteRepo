"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactLinks, Container, SocialLinks } from "@/components/ui";
import { navigation, businessInfo, whatsappUrl } from "@/data/business";
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
                    <Link
                      href={`/locations/${addr.slug}`}
                      className="hover:text-cream transition-colors"
                    >
                      <span className="text-cream/90 font-medium">{addr.label}:</span>{" "}
                      {addr.street}, {addr.city}, {addr.state} {addr.zip}
                    </Link>
                  </p>
                ))}
                <p>{businessInfo.phone}</p>
                <ContactLinks
                  phone={businessInfo.phone}
                  whatsappUrl={whatsappUrl}
                  whatsappLabel={t.whatsapp}
                  callLabel={t.callUs}
                  appearance="light"
                  compact
                  className="pt-1"
                />
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
                  {t.weekdays}: {t.fallWeekdays}
                </li>
                <li>
                  <span className="text-cream/90 font-medium">{t.springHours}</span>
                  <br />
                  {t.weekdays}: {t.springWeekdays}
                </li>
                <li>
                  <span className="text-cream/90 font-medium">{t.afterAugustHours}</span>
                  <br />
                  {t.weekdays}: {t.afterAugustWeekdays}
                </li>
                <li>{t.saturday}: {t.saturdayHours}</li>
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
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-end">
              {businessInfo.addresses.map((location) => (
                <div key={location.slug} className="flex items-center gap-3">
                  <span className="font-medium text-cream/80">{location.label}</span>
                  <SocialLinks
                    social={location.social}
                    storeName={location.label}
                    appearance="light"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
