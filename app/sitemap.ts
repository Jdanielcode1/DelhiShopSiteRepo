import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/business";
import { customFeeds } from "@/data/customFeeds";

export const dynamic = "force-static";

const routes = [
  "",
  "/locations",
  "/locations/delhi",
  "/locations/denair",
  "/products",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = customFeeds.map((feed) => ({
    url: `${siteUrl}/products/${feed.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
