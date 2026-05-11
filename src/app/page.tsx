/**
 * Página principal de GuaTek.
 */
export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            GuaTek
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Tecnología práctica para hacer crecer tu negocio.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Creamos páginas web, automatizaciones, reportes y sistemas
            a la medida para empresas, negocios y marcas personales.
          </p>
        </div>
      </section>
    </main>
  );
}