import type { Metadata } from "next";
import { libreBaskerville, sourceSans } from "./fonts";
import { Header, Footer } from "@/components/layout";
import { GrainOverlay } from "@/components/ui";
import { LanguageProvider } from "@/lib/LanguageContext";
import { businessInfo } from "@/data/business";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | Farm Supply`,
    template: `%s | ${businessInfo.name}`,
  },
  description:
    "Your trusted local farm supply store, proudly serving the agricultural community with quality animal feed, farm equipment, and expert advice.",
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
    icon: "/favicon.png",
    apple: "/apple-icon.png",
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
