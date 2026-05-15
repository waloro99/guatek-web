import type { MetadataRoute } from "next";

/**
 * Sitemap principal del sitio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://guatekgt.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}