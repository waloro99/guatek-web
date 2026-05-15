import type { MetadataRoute } from "next";

/**
 * Configuración de robots para motores de búsqueda.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://guatekgt.com/sitemap.xml",
  };
}