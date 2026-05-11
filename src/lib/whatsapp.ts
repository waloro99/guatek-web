import { siteConfig } from "@/constants/site";

/**
 * Construye la URL oficial de WhatsApp con mensaje inicial.
 */
export function getWhatsAppUrl() {
    const message = encodeURIComponent(siteConfig.whatsappMessage);

    return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
}