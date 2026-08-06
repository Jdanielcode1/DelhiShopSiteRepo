"use client";

import { ContactLinks, Heading, SocialLinks } from "@/components/ui";
import { businessInfo, whatsappUrl } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

export function LocationInfo() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div>
        <Heading as="h3" size="md" className="text-charcoal mb-4">
          {t.visitOurStore}
        </Heading>
        <div className="space-y-4">
          {businessInfo.addresses.map((addr) => (
            <address key={addr.label} className="not-italic text-charcoal-light leading-relaxed">
              <p className="mb-1">
                <strong className="text-charcoal">{addr.label} {t.location}</strong>
              </p>
              <p>
                {addr.street}
                <br />
                {addr.city}, {addr.state} {addr.zip}
              </p>
            </address>
          ))}
        </div>
      </div>

      <div>
        <Heading as="h3" size="md" className="text-charcoal mb-4">
          {t.followOurStores}
        </Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {businessInfo.addresses.map((location) => (
            <div key={location.slug} className="rounded-sm border border-secondary-200 bg-cream p-4">
              <p className="mb-3 font-heading font-bold text-charcoal">{location.label}</p>
              <SocialLinks social={location.social} storeName={location.label} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading as="h3" size="md" className="text-charcoal mb-4">
          {t.contactInfo}
        </Heading>
        <ul className="space-y-3 text-charcoal-light">
          <li>
            <p className="mb-3 font-medium text-charcoal">{businessInfo.phone}</p>
            <ContactLinks
              phone={businessInfo.phone}
              whatsappUrl={whatsappUrl}
              whatsappLabel={t.whatsapp}
              callLabel={t.callUs}
            />
          </li>
          <li className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-primary-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href={`mailto:${businessInfo.email}`}
              className="hover:text-primary-600 transition-colors"
            >
              {businessInfo.email}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Heading as="h3" size="md" className="text-charcoal mb-4">
          {t.storeHours}
        </Heading>
        <ul className="space-y-3 text-charcoal-light">
          <li>
            <span className="text-charcoal font-medium block text-sm">{t.fallHours}</span>
            <span className="flex justify-between">
              <span>{t.weekdays}</span>
              <span className="text-charcoal">{t.fallWeekdays}</span>
            </span>
          </li>
          <li>
            <span className="text-charcoal font-medium block text-sm">{t.springHours}</span>
            <span className="flex justify-between">
              <span>{t.weekdays}</span>
              <span className="text-charcoal">{t.springWeekdays}</span>
            </span>
          </li>
          <li>
            <span className="text-charcoal font-medium block text-sm">{t.afterAugustHours}</span>
            <span className="flex justify-between">
              <span>{t.weekdays}</span>
              <span className="text-charcoal">{t.afterAugustWeekdays}</span>
            </span>
          </li>
          <li className="flex justify-between pt-1 border-t border-secondary-200">
            <span>{t.saturday}</span>
            <span className="text-charcoal">{t.saturdayHours}</span>
          </li>
          <li className="flex justify-between pt-1 border-t border-secondary-200">
            <span>{t.sunday}</span>
            <span className="text-charcoal">{t.closed}</span>
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-secondary-200 space-y-3">
        {businessInfo.addresses.map((addr) => (
          <a
            key={addr.label}
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {t.getDirections} — {addr.label}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
