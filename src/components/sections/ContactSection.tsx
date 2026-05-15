"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/constants/site";
import { getServiceWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección final de contacto comercial.
 */
export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const contactOptions = [
    {
      title: "Quiero una página web",
      description:
        "Landing page, sitio corporativo o página para marca personal.",
      href: getServiceWhatsAppUrl("Páginas web profesionales"),
    },
    {
      title: "Quiero automatizar un proceso",
      description:
        "Formularios, notificaciones, tareas repetitivas o flujos internos.",
      href: getServiceWhatsAppUrl("Automatización de procesos"),
    },
    {
      title: "Quiero un dashboard",
      description:
        "Reportes, KPIs, ventas, indicadores o análisis de información.",
      href: getServiceWhatsAppUrl("Dashboards y reportes"),
    },
  ];

  /**
   * Envía el formulario al endpoint interno de contacto.
   */
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-b from-[#BFD8FA] via-[#7EAEEB] to-[#06142B] py-28 text-white"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-20 h-[460px] w-[460px] rounded-full bg-blue-400/30 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-300/20 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle
            label="Contacto"
            title="¿Listo para construir una solución digital para tu negocio?"
            description={
              <span className="font-medium text-white">
                Cuéntanos qué necesitas. Podemos empezar con una idea simple y
                convertirla en una solución funcional, ordenada y escalable.
              </span>
            }
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-white shadow-xl shadow-green-950/20 transition duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D]"
            >
              Escribir por WhatsApp
            </a>

            <a
              href="#servicios"
              className="inline-flex rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Opciones rápidas */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div className="mb-5 h-2 w-10 rounded-full bg-cyan-300 transition duration-300 group-hover:w-16 group-hover:bg-white" />

              <h3 className="text-xl font-bold text-white">{option.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/85">
                {option.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition duration-300 group-hover:gap-3 group-hover:text-white">
                Solicitar información
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>

        {/* Formulario por correo */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Correo
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
              También puedes enviarnos tu consulta por correo.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/85">
              Completa el formulario y tu mensaje será enviado directamente al
              correo de ventas de GuaTek.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-950/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Correo de ventas
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                {siteConfig.email}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/15 bg-white/95 p-7 text-slate-950 shadow-2xl shadow-blue-950/20"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Nombre
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700">
                  Correo
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-slate-700">
                Servicio de interés
              </label>
              <select
                required
                value={formData.service}
                onChange={(event) =>
                  setFormData({ ...formData, service: event.target.value })
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
              >
                <option value="">Selecciona una opción</option>
                <option value="Página web">Página web</option>
                <option value="Automatización">Automatización</option>
                <option value="Dashboard o reporte">Dashboard o reporte</option>
                <option value="Sistema a medida">Sistema a medida</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-sm font-bold text-slate-700">
                Mensaje
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                placeholder="Cuéntanos qué necesitas construir o mejorar."
              />
            </div>

            {status === "success" && (
              <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                Mensaje enviado correctamente.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                No se pudo enviar el mensaje. Intenta nuevamente o escríbenos
                por WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading"
                ? "Enviando..."
                : "Enviar consulta por correo"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}