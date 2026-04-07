import type { Metadata } from "next";
import { libreBaskerville, sourceSans } from "./fonts";
import { Header, Footer } from "@/components/layout";
import { GrainOverlay } from "@/components/ui";
import { LanguageProvider } from "@/lib/LanguageContext";
import { businessInfo, siteUrl } from "@/data/business";
import "./globals.css";

const defaultDescription =
  "Your trusted local farm supply store, proudly serving the agricultural community with quality animal feed, farm equipment, and expert advice.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessInfo.name} | Farm Supply`,
    template: `%s | ${businessInfo.name}`,
  },
  description: defaultDescription,
  keywords: [
    "farm supply",
    "animal feed",
    "livestock feed",
    "poultry feed",
    "farm equipment",
    "Delhi",
    "agricultural supplies",
  ],
  icons: {
    icon: [{ url: "/favicon.png", sizes: "48x48", type: "image/png" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Farm Supply`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Farm Supply`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${sourceSans.variable} antialiased`}
      >
        <LanguageProvider>
          <GrainOverlay />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
