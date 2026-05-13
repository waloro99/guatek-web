import { siteConfig } from "@/constants/site";

/**
 * Construye la URL oficial de WhatsApp con mensaje inicial general.
 */
export function getWhatsAppUrl() {
  const message = encodeURIComponent(siteConfig.whatsappMessage);

  return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
}

/**
 * Construye una URL de WhatsApp con mensaje específico por servicio.
 */
export function getServiceWhatsAppUrl(serviceName: string) {
  const message = encodeURIComponent(
    `Hola GuaTek, quiero más información sobre el servicio de ${serviceName}.`
  );

  return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
}