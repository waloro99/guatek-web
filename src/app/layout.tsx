import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/constants/site";

/**
 * Metadata principal del sitio.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GuaTek | Soluciones tecnológicas en Guatemala",
    template: "%s | GuaTek",
  },
  description:
    "GuaTek crea páginas web, automatizaciones, dashboards, reportes y sistemas a la medida para empresas, negocios y marcas personales en Guatemala.",
  keywords: [
    "GuaTek",
    "Guatek Guatemala",
    "GuaTek GT",
    "páginas web Guatemala",
    "automatizaciones Guatemala",
    "dashboards Guatemala",
    "Power BI Guatemala",
    "sistemas a medida Guatemala",
    "soluciones tecnológicas Guatemala",
  ],
  authors: [{ name: "GuaTek" }],
  creator: "GuaTek",
  publisher: "GuaTek",
  openGraph: {
    title: "GuaTek | Soluciones tecnológicas en Guatemala",
    description:
      "Páginas web, automatizaciones, dashboards, reportes y sistemas a la medida para empresas, negocios y marcas personales.",
    url: siteConfig.url,
    siteName: "GuaTek",
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GuaTek | Soluciones tecnológicas en Guatemala",
    description:
      "Páginas web, automatizaciones, dashboards, reportes y sistemas a la medida para empresas, negocios y marcas personales.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

/**
 * Layout raíz de la aplicación.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-GT">
      <body>{children}</body>
    </html>
  );
}