import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Pie de página principal del sitio.
 */
export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  const services = [
        {
            label: "Páginas web",
            href: "#servicios",
        },
        {
            label: "Automatizaciones",
            href: "#servicios",
        },
        {
            label: "Dashboards",
            href: "#servicios",
        },
        {
            label: "Sistemas a medida",
            href: "#servicios",
        },
    ];

  const navigationColumns = [
    navigationItems.slice(0, 4),
    navigationItems.slice(4),
  ];

  return (
    <footer className="bg-[#06142B] py-12 text-white">
      <Container>
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_1fr_0.8fr_0.9fr]">
          {/* Marca */}
          <div>
            <a href="#inicio" className="text-2xl font-bold tracking-tight">
              <span className="text-white">Gua</span>
              <span className="text-blue-400">Tek</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Soluciones tecnológicas para empresas, negocios y marcas
              personales que buscan mejorar procesos, presencia digital y toma
              de decisiones.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Navegación
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
              {navigationColumns.map((column, index) => (
                <div key={index} className="space-y-3">
                  {column.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Servicios
            </h3>

            <div className="mt-4 space-y-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Contacto
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-sm text-white/70 transition hover:text-white"
              >
                Teléfono: +502 4600 2405
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-white/70 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Redes sociales */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de GuaTek"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <WhatsAppIcon />
              </a>

              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de GuaTek"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-blue-600"
              >
                <FacebookIcon />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de GuaTek"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-pink-600"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} GuaTek. Todos los derechos reservados.
          </p>

          <p>Hecho en Guatemala.</p>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Ícono de WhatsApp.
 */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.39a9.86 9.86 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.25-4.36c0-4.54 3.69-8.23 8.24-8.23a8.23 8.23 0 0 1-.01 16.45Zm4.51-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

/**
 * Ícono de Facebook.
 */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.31H8v3.1h2.74V22h2.76Z" />
    </svg>
  );
}

/**
 * Ícono de Instagram.
 */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}