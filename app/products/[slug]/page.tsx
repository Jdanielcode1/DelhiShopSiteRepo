import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomFeedDetail } from "@/components/products/CustomFeedDetail";
import { siteUrl } from "@/data/business";
import { customFeeds, getCustomFeed } from "@/data/customFeeds";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return customFeeds.map((feed) => ({ slug: feed.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const feed = getCustomFeed(slug);

  if (!feed) {
    return {};
  }

  const title = `${feed.name} Feed – ${feed.weight} | Delhi & Denair, CA`;
  const description = `${feed.name} is a ${feed.protein} crude protein custom feed in a ${feed.weight} bag. Contact Delhi Feed and Supply in Delhi or Denair, CA for availability.`;
  const canonical = `${siteUrl}/products/${feed.slug}`;

  return {
    title,
    description,
    keywords: [
      feed.name,
      `${feed.name} near me`,
      "custom animal feed",
      "game bird feed",
      "poultry feed",
      "Delhi CA feed store",
      "Denair CA feed store",
    ],
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: feed.image, alt: `${feed.name} feed label` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [feed.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const feed = getCustomFeed(slug);

  if (!feed) {
    notFound();
  }

  const productUrl = `${siteUrl}/products/${feed.slug}`;
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: feed.name,
    image: [`${siteUrl}${feed.image}`],
    description: feed.description,
    brand: {
      "@type": "Brand",
      name: "Farmer’s Best Feed",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Farmers Warehouse Company",
    },
    category: "Custom Poultry and Game Bird Feed",
    weight: {
      "@type": "QuantitativeValue",
      value: feed.weight.replace(" lb", ""),
      unitCode: "LBR",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Minimum Crude Protein",
        value: feed.protein,
      },
      {
        "@type": "PropertyValue",
        name: "Best For",
        value: feed.bestFor,
      },
    ],
  };
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: `${siteUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: feed.name,
        item: productUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <CustomFeedDetail feed={feed} />
    </>
  );
}
