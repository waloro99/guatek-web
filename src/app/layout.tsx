import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/constants/site";

/**
 * Metadata principal del sitio.
 */
export const metadata: Metadata = {
  title: `${siteConfig.name} | Soluciones tecnológicas`,
  description: siteConfig.description,
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}