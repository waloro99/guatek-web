import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección principal de bienvenida del sitio.
 */
export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F7FAFF] pt-32 text-slate-950"
    >
      {/* Fondo con cuadrícula y reflejos suaves */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-blue-200/50 blur-[120px]" />
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-cyan-200/40 blur-[120px]" />

      {/* Contenido principal */}
      <Container className="relative z-10 grid items-center gap-16 py-24 lg:grid-cols-[1fr_0.95fr]">
        {/* Contenido textual */}
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              GT
            </span>

            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="radar-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span>Estudio tecnológico desde Guatemala gt</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl xl:text-7xl">
            Soluciones tecnológicas para hacer crecer{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              tu negocio.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            En GuaTek ayudamos a empresas, emprendimientos y marcas personales a
            crear páginas web, automatizar procesos, desarrollar sistemas a la
            medida y convertir datos en decisiones.
          </p>

          {/* Acciones principales */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappUrl} target="_blank" rel="noreferrer">
              Cotizar gratis por WhatsApp
            </Button>

            <Button href="#en-construccion" variant="secondary">
              Ver proyectos realizados
            </Button>
          </div>

          {/* Indicadores */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-slate-950">+12</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Soluciones
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-950">100%</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Personalizado
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-950">24h</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Respuesta
              </p>
            </div>
          </div>
        </div>

        {/* Visual derecho */}
        <div className="relative hidden min-h-[620px] lg:block">
          {/* Figura central */}
          <div className="absolute left-[58%] top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[56px] bg-gradient-to-br from-blue-400 via-blue-600 to-violet-700 shadow-2xl shadow-blue-500/30">
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 bg-white/95 shadow-inner" />
          </div>

          {/* Tarjetas flotantes */}
          <FloatingServiceCard
            number="01"
            title="Páginas web"
            icon="web"
            animationClass="float-card-1"
            className="right-4 top-8 w-[360px]"
            />

            <FloatingServiceCard
            number="02"
            title="Automatizaciones"
            icon="automation"
            animationClass="float-card-2"
            className="left-2 top-38 w-[350px]"
            />

            <FloatingServiceCard
            number="03"
            title="Sistemas a medida"
            icon="system"
            animationClass="float-card-3"
            className="right-2 bottom-22 w-[360px]"
            />

            <FloatingServiceCard
            number="04"
            title="Reportes y datos"
            icon="data"
            animationClass="float-card-4"
            className="left-10 bottom-0 w-[350px]"
            />

          {/* Mini tarjeta de datos */}
          <div className="absolute left-2 bottom-30 z-30 w-[220px] rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-xl shadow-slate-300/60 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Ventas / mes
              </p>
              <span className="text-xs text-slate-400">↑</span>
            </div>

            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold text-slate-950">Q184k</p>
              <p className="pb-1 text-sm font-semibold text-emerald-500">
                +24.6%
              </p>
            </div>

            <div className="mt-5 flex h-10 items-end gap-2">
              {[45, 60, 50, 78, 68, 90, 96].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-full rounded-t-md bg-gradient-to-t from-blue-300 to-blue-600"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Propiedades de tarjeta flotante de servicio.
 */
type FloatingServiceCardProps = {
  number: string;
  title: string;
  icon: "web" | "automation" | "system" | "data";
  className?: string;
  animationClass?: string;
};

/**
 * Tarjeta flotante usada en el Hero.
 */
function FloatingServiceCard({
  number,
  title,
  icon,
  className = "",
  animationClass = "",
}: FloatingServiceCardProps) {
  return (
    <div
        className={`group absolute z-20 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl shadow-slate-300/60 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:[animation-play-state:paused] ${animationClass} ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <ServiceIcon icon={icon} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {number}
        </p>
        <p className="mt-1 font-semibold text-slate-950">{title}</p>
      </div>
    </div>
  );
}

/**
 * Íconos simples para las tarjetas del Hero.
 */
function ServiceIcon({ icon }: { icon: FloatingServiceCardProps["icon"] }) {
  if (icon === "web") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 6.5h16v11H4v-11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M4 10h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "automation") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M13 2L5 13h6l-1 9 8-12h-6l1-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "system") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 0 0 12 8.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19 13.3c.1-.4.1-.8.1-1.3s0-.9-.1-1.3l1.6-1.2-1.7-3-1.9.8c-.6-.5-1.3-.9-2.1-1.1L14.6 4h-3.4l-.3 2.2c-.8.2-1.5.6-2.1 1.1l-1.9-.8-1.7 3 1.6 1.2c-.1.4-.1.8-.1 1.3s0 .9.1 1.3l-1.6 1.2 1.7 3 1.9-.8c.6.5 1.3.9 2.1 1.1l.3 2.2h3.4l.3-2.2c.8-.2 1.5-.6 2.1-1.1l1.9.8 1.7-3-1.6-1.2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 19V10M12 19V5M19 19v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
