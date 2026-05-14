import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/constants/projects";

/**
 * Sección de proyectos reales publicados por GuaTek.
 */
export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-gradient-to-b from-[#E6F0FF] to-[#DDEBFF] py-28 text-slate-950"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute left-0 top-24 h-[420px] w-[420px] rounded-full bg-violet-200/35 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-[120px]" />

      <Container className="relative z-10">
        <SectionTitle
          theme="light"
          label="Proyectos"
          title="Soluciones que ya están funcionando ahí afuera."
          description="Algunos proyectos reales publicados, desarrollados para distintos tipos de necesidades."
        />

        {/* Grid interactivo de proyectos */}
        <div className="projects-grid mt-16 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="project-card group relative flex h-full min-h-[650px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-200/60"
            >
              {/* Línea animada del borde */}
              <span className="project-border-line project-border-top" />
              <span className="project-border-line project-border-right" />
              <span className="project-border-line project-border-bottom" />
              <span className="project-border-line project-border-left" />

              {/* Brillo decorativo */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/0 blur-3xl transition duration-500 group-hover:bg-blue-500/15" />

              {/* Mockup del proyecto */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 transition duration-500 group-hover:border-blue-200">
                <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-white px-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />

                  <div className="ml-2 flex-1 truncate rounded-full bg-slate-100 px-4 py-1 text-center text-xs font-semibold tracking-[0.12em] text-slate-400">
                    {project.previewDomain}
                  </div>
                </div>

                <ProjectPreview variant={project.variant} />

                {/* Overlay interactivo */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition duration-500 group-hover:bg-slate-950/30 group-hover:opacity-100"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 shadow-xl">
                    Abrir proyecto ↗
                  </span>
                </a>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 transition duration-300 group-hover:bg-blue-50 group-hover:text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                {project.title}
              </h3>

              <p className="mt-3 min-h-[112px] text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition duration-300 group-hover:gap-3 group-hover:text-blue-700"
                >
                  Ver proyecto
                  <span aria-hidden="true">↗</span>
                </a>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {project.year} · {project.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * Renderiza una vista previa visual del proyecto.
 */
function ProjectPreview({
  variant,
}: {
  variant: "business" | "event" | "quote";
}) {
  if (variant === "business") {
    return (
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-700 to-violet-700 p-7 text-white">
        {/* Reflejo decorativo */}
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />

        <div className="relative mb-8 flex items-center justify-between text-xs font-semibold">
          <span>TIASA</span>
          <span>Inicio · Servicios · Contacto</span>
        </div>

        <h4 className="relative max-w-xs text-3xl font-bold leading-tight">
          Soluciones técnicas para industria.
        </h4>

        <div className="relative mt-6 space-y-2">
          <span className="block h-1.5 w-40 rounded-full bg-white/40 transition duration-500 group-hover:w-48" />
          <span className="block h-1.5 w-32 rounded-full bg-white/40 transition duration-500 group-hover:w-40" />
          <span className="block h-1.5 w-24 rounded-full bg-white/40 transition duration-500 group-hover:w-32" />
        </div>

        <button className="relative mt-8 rounded-full bg-white px-5 py-2 text-xs font-bold text-blue-700 transition duration-300 group-hover:translate-x-2">
          Contáctanos →
        </button>
      </div>
    );
  }

  if (variant === "event") {
    return (
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-rose-200 p-7">
        {/* Partículas decorativas */}
        <span className="absolute left-14 top-10 h-3 w-3 rounded-full bg-pink-500 transition duration-500 group-hover:scale-150" />
        <span className="absolute right-16 top-16 h-3 w-3 rounded-full bg-white transition duration-500 group-hover:scale-150" />
        <span className="absolute bottom-12 left-20 h-2 w-2 rounded-full bg-rose-400 transition duration-500 group-hover:scale-150" />

        <div className="relative rotate-[-3deg] rounded-2xl bg-white px-10 py-8 text-center shadow-xl transition duration-500 group-hover:rotate-0 group-hover:scale-105">
          <p className="text-2xl font-bold italic text-rose-500">Te invita</p>
          <h4 className="mt-2 text-3xl font-bold text-slate-950">Sofía</h4>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
            15 años · 2026
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden bg-[#F8FAFC] p-6">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.10),_transparent_40%)]" />

      {/* Cabecera */}
      <div className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Cotización
          </p>
          <p className="text-sm font-bold text-slate-700">
            Resumen de servicios
          </p>
        </div>

        <div className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
          Demo
        </div>
      </div>

      {/* Líneas de cotización */}
      <div className="relative space-y-3 transition duration-500 group-hover:-translate-y-2">
        {[
          ["Servicio A", "x2", "Q 1,200"],
          ["Servicio B", "x1", "Q 850"],
          ["Mantenimiento", "x3", "Q 450"],
        ].map(([name, qty, amount]) => (
          <div
            key={name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition duration-300 group-hover:border-blue-100 group-hover:shadow-md group-hover:shadow-blue-100/60"
          >
            <span className="font-medium text-slate-700">{name}</span>
            <span className="text-xs font-semibold text-slate-400">{qty}</span>
            <span className="font-bold text-blue-600">{amount}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="relative mt-4 rounded-2xl bg-slate-950 px-4 py-4 text-white shadow-lg transition duration-500 group-hover:-translate-y-2 group-hover:bg-blue-600">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Total
          </span>
          <span className="text-2xl font-bold">Q 2,500</span>
        </div>
      </div>

      {/* Documento PDF */}
      <div className="absolute bottom-10 right-6 rotate-6 rounded-xl border border-slate-200 bg-white px-3 py-4 text-[11px] font-bold text-blue-600 shadow-xl transition duration-500 group-hover:-translate-y-4 group-hover:rotate-0">
        PDF
      </div>

      {/* Indicador inferior */}
      <div className="absolute bottom-4 left-7 flex gap-1">
        <span className="h-1.5 w-8 rounded-full bg-blue-600" />
        <span className="h-1.5 w-5 rounded-full bg-blue-200" />
        <span className="h-1.5 w-3 rounded-full bg-blue-100" />
      </div>
    </div>
  );
}