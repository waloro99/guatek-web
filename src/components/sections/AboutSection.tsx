import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sección institucional sobre GuaTek.
 */
export function AboutSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="sobre-guatek"
      className="relative overflow-hidden bg-gradient-to-b from-[#CFE2FF] to-[#BFD8FA] py-28 text-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-20 h-[440px] w-[440px] rounded-full bg-blue-300/35 blur-[130px]" />
      <div className="absolute right-0 bottom-20 h-[440px] w-[440px] rounded-full bg-violet-300/25 blur-[130px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Contenido principal */}
          <div>
             <SectionTitle
                theme="light"
                align="left"
                label="Sobre GuaTek"
                title="Tecnología clara, útil y pensada para negocios reales."
                description="GuaTek ayuda a empresas, emprendimientos y marcas personales a implementar soluciones digitales prácticas, ordenadas y escalables."
            />

            {/* Mensaje destacado */}
            <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-sm shadow-blue-100/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-blue-100/80">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Nuestra forma de trabajar
                </p>

                <p className="mt-4 text-xl font-bold leading-8 text-slate-950">
                No buscamos complicar tu negocio con tecnología innecesaria. Buscamos
                entender tu operación y construir herramientas que realmente puedas usar.
                </p>
            </div>

            {/* Puntos clave */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                {
                    value: "01",
                    label: "Entender",
                    text: "Primero revisamos el problema real.",
                },
                {
                    value: "02",
                    label: "Ordenar",
                    text: "Luego definimos una solución clara.",
                },
                {
                    value: "03",
                    label: "Construir",
                    text: "Finalmente entregamos algo funcional.",
                },
                ].map((item) => (
                <div
                    key={item.value}
                    className="group rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm shadow-blue-100/50 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/80"
                >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {item.value}
                    </div>

                    <h3 className="text-base font-bold text-slate-950">{item.label}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
                ))}
            </div>

            <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
            >
            Hablar con GuaTek
            </a>
          </div>

          {/* Panel visual */}
          <div className="group relative rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-blue-100/80 backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/80">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/15" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Enfoque
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Menos procesos manuales. Más orden. Mejores decisiones.
              </h3>

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Práctico",
                    description:
                      "Soluciones pensadas para funcionar en el día a día, no solo para verse bien.",
                  },
                  {
                    title: "Escalable",
                    description:
                      "Empezamos con lo necesario y dejamos espacio para crecer.",
                  },
                  {
                    title: "Medible",
                    description:
                      "Buscamos que cada solución ayude a mejorar tiempos, control o resultados.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100 bg-white/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/60"
                  >
                    <h4 className="text-lg font-bold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                  GuaTek
                </p>
                <p className="mt-3 text-xl font-bold">
                  Soluciones digitales desde Guatemala para negocios que quieren
                  avanzar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}