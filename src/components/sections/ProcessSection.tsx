import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "@/constants/process";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección del proceso de trabajo de GuaTek.
 */
export function ProcessSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF6FF] to-[#E6F0FF] py-28 text-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Título lateral */}
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              theme="light"
              align="left"
              label="Proceso"
              title="De una idea a una solución funcionando."
              description="Trabajamos con un proceso simple para avanzar sin complicar el proyecto desde el inicio."
            />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Empezar mi proyecto
            </a>
          </div>

          {/* Flujo de pasos */}
          <div className="relative">
            {/* Línea de flujo tipo pulso */}
            <div className="absolute left-0 top-8 hidden h-[calc(100%-4rem)] w-16 md:block">
              <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 64 640"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M32 0 V120 L20 138 L44 158 L32 178 V300 L20 318 L44 338 L32 358 V500 L20 518 L44 538 L32 558 V620"
                  fill="none"
                  stroke="rgba(37,99,235,0.22)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  className="process-pulse-path"
                  d="M32 0 V120 L20 138 L44 158 L32 178 V300 L20 318 L44 338 L32 358 V500 L20 518 L44 538 L32 558 V620"
                  fill="none"
                  stroke="url(#processGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  className="process-arrow"
                  d="M24 608 L32 624 L40 608"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <defs>
                  <linearGradient id="processGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="55%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/80 md:ml-24"
                >
                  {/* Brillo dinámico */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/15" />

                  {/* Línea superior en hover */}
                  <div className="absolute left-7 right-7 top-0 h-[3px] scale-x-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition duration-500 group-hover:scale-x-100" />

                  {/* Número visible del paso */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-300/80 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-blue-500/30 md:absolute md:-left-[72px] md:top-7">
                    {step.number}
                  </div>

                  <div className="relative md:pl-2">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}