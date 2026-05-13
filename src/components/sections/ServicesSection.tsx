"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  serviceCategories,
  services,
  type ServiceCategory,
  type ServiceIcon,
} from "@/constants/services";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección de servicios tecnológicos de GuaTek.
 */
export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Todos");

  const filteredServices = useMemo(() => {
    if (activeCategory === "Todos") {
      return services;
    }

    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] to-[#EEF6FF] py-28 text-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[120px]" />

      <Container className="relative z-10">
        <SectionTitle
          theme="light"
          label="Servicios"
          title="Servicios tecnológicos para negocios reales."
          description="Desde una primera página web hasta sistemas internos completos. Empezamos simple y escalamos cuando tiene sentido."
        />

        {/* Filtros funcionales */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {serviceCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-300/60"
                    : "bg-white/80 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid de servicios */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredServices.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/80"
            >
              {/* Brillo decorativo en hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/15" />

              {/* Línea superior dinámica */}
              <div className="absolute left-7 right-7 top-0 h-[3px] scale-x-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition duration-500 group-hover:scale-x-100" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                <ServiceIcon icon={service.icon} />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 transition duration-300 group-hover:bg-blue-50 group-hover:text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

                <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition duration-300 group-hover:gap-3 group-hover:text-blue-700"
                    >
                    Quiero saber más
                    <span aria-hidden="true">→</span>
                </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * Renderiza el ícono correspondiente a cada servicio.
 */
function ServiceIcon({ icon }: { icon: ServiceIcon }) {
  const className = "h-5 w-5";

  if (icon === "web") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
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

  if (icon === "commerce") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M6 7h14l-1.5 8h-11L6 7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M6 7 5.5 4H3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9 20h.01M17 20h.01"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (icon === "automation") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M13 2L5 13h6l-1 9 8-12h-6l1-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "dashboard") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M5 19V10M12 19V5M19 19v-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 19h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "system") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 4 20 8 12 12 4 8 12 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 12 12 16 20 12M4 16 12 20 20 16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "consulting") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M9 18h6M10 22h4M12 3a6 6 0 0 0-3 11.2V16h6v-1.8A6 6 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "digital") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M4 16 16 4l4 4L8 20H4v-4Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M14 6l4 4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}