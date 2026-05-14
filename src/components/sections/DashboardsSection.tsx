import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección enfocada en dashboards, reportes e indicadores.
 */
export function DashboardsSection() {
  const whatsappUrl = getServiceWhatsAppUrl("Dashboards y reportes");

  return (
    <section
      id="dashboards"
      className="relative overflow-hidden bg-gradient-to-b from-[#DDEBFF] to-[#CFE2FF] py-28 text-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-blue-300/35 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-[460px] w-[460px] rounded-full bg-violet-300/30 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contenido */}
          <div>
            <SectionTitle
              theme="light"
              align="left"
              label="Dashboards"
              title="Convierte tus datos en decisiones claras."
              description="Creamos reportes ejecutivos, tableros de ventas e indicadores para que puedas entender tu negocio sin depender de hojas sueltas o procesos manuales."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Indicadores claros",
                  description:
                    "Ventas, costos, cumplimiento, clientes, productos y operación en una sola vista.",
                },
                {
                  title: "Menos trabajo manual",
                  description:
                    "Reducimos reportes repetitivos y consolidaciones hechas a mano.",
                },
                {
                  title: "Mejor seguimiento",
                  description:
                    "Facilita revisar avances, detectar problemas y tomar decisiones con datos.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/70 bg-white/75 p-5 shadow-sm shadow-blue-100/60 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/80"
                >
                  <div className="mb-4 h-2 w-10 rounded-full bg-blue-500 transition duration-300 group-hover:w-16 group-hover:bg-violet-500" />
                
                  <h3 className="text-base font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Cotizar dashboard
            </a>
          </div>

          {/* Mockup visual */}
          <div className="dashboard-card group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-xl shadow-blue-100/80 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/80">
            <div className="flex h-11 items-center gap-2 border-b border-slate-200 px-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />

              <div className="ml-2 flex-1 rounded-full bg-slate-100 px-4 py-1 text-center text-xs font-semibold tracking-[0.15em] text-slate-400">
                analytics.guatekgt.com
              </div>
            </div>

            <div className="p-6">
              {/* KPIs */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Ventas", "Q184k", "+24.6%"],
                  ["Clientes", "128", "+12.8%"],
                  ["Cumplimiento", "92%", "+8.4%"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition duration-300 group-hover:-translate-y-1 group-hover:bg-blue-50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-3 text-2xl font-bold text-slate-950">
                      {value}
                    </p>
                    <p className="mt-1 text-sm font-bold text-emerald-500">
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gráfica */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      Ventas mensuales
                    </p>
                    <p className="text-xs text-slate-500">
                      Seguimiento de rendimiento
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                    Activo
                  </span>
                </div>

                <div className="flex h-48 items-end gap-3">
                  {[42, 56, 48, 72, 64, 82, 76, 90, 86, 100].map(
                    (height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="dashboard-bar w-full rounded-t-xl bg-gradient-to-t from-blue-300 to-blue-600 transition duration-300 group-hover:from-blue-400 group-hover:to-violet-600"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Tabla */}
              <div className="mt-6 grid gap-3">
                {[
                  ["Producto A", "Q42,500", "Alto"],
                  ["Producto B", "Q31,800", "Medio"],
                  ["Producto C", "Q18,200", "Bajo"],
                ].map(([name, amount, status]) => (
                  <div
                    key={name}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-slate-700">{name}</span>
                    <span className="font-bold text-blue-600">{amount}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}