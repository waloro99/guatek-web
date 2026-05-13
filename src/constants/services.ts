/**
 * Servicios principales ofrecidos por GuaTek.
 */

export const serviceCategories = [
  "Todos",
  "Webs",
  "Procesos",
  "Datos",
  "Sistemas",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export const services = [
  {
    title: "Páginas web profesionales",
    description:
      "Sitios corporativos, landing pages y páginas para negocios o marcas personales.",
    tags: ["Landing", "Corporativo", "Marca personal"],
    icon: "web",
    category: "Webs",
  },
  {
    title: "Tiendas en línea / E-commerce",
    description:
      "Catálogo, carrito de compras, formularios de pedido y conexión con redes sociales.",
    tags: ["Catálogo", "Carrito", "Ventas"],
    icon: "commerce",
    category: "Webs",
  },
  {
    title: "Sistemas a medida",
    description:
      "Control de clientes, órdenes, inventario, servicios y procesos administrativos internos.",
    tags: ["CRM", "Órdenes", "Inventario"],
    icon: "system",
    category: "Sistemas",
  },
  {
    title: "Automatización de procesos",
    description:
      "Flujos automáticos con formularios, notificaciones, archivos y tareas repetitivas.",
    tags: ["Procesos", "Formularios", "Notificaciones"],
    icon: "automation",
    category: "Procesos",
  },
  {
    title: "Dashboards y reportes",
    description:
      "Reportes ejecutivos, indicadores de ventas, análisis operativo y visualización de datos.",
    tags: ["Power BI", "KPIs", "Reportes"],
    icon: "dashboard",
    category: "Datos",
  },
  {
    title: "Consultoría tecnológica",
    description:
      "Diagnóstico de necesidades, recomendaciones de herramientas y mejora de procesos.",
    tags: ["Diagnóstico", "Tools", "Procesos"],
    icon: "consulting",
    category: "Procesos",
  },
  {
    title: "Digitalización del negocio",
    description:
      "Acompañamos la transición de procesos manuales hacia flujos digitales ordenados.",
    tags: ["Migración", "Orden", "Escala"],
    icon: "digital",
    category: "Procesos",
  },
  {
    title: "Mantenimiento y soporte",
    description:
      "Ajustes, mejoras y acompañamiento posterior sobre las soluciones construidas.",
    tags: ["Soporte", "Mejoras", "Ajustes"],
    icon: "support",
    category: "Sistemas",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];