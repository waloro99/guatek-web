import { Container } from "@/components/ui/Container";

/**
 * Sección temporal para apartados pendientes de construcción.
 */
export function UnderConstructionSection() {
    return (
        <section
        id="en-construccion"
        className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] to-[#EAF2FF] py-28 text-slate-950"
        >
        <Container>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-blue-100 bg-white/80 px-8 py-14 text-center shadow-xl shadow-blue-100/60 backdrop-blur">
            {/* Animación de engranajes */}
            <div className="mb-8 flex items-center justify-center gap-4">
                <GearIcon className="h-14 w-14 animate-spin text-blue-600 [animation-duration:5s]" />
                <GearIcon className="h-10 w-10 animate-spin text-sky-500 [animation-duration:3.5s] [animation-direction:reverse]" />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Sección en construcción
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Estamos preparando esta parte del sitio.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Muy pronto encontrarás más información sobre nuestros servicios,
                proyectos, proceso de trabajo y formas de contacto. Mientras tanto,
                puedes solicitar una cotización directamente por WhatsApp.
            </p>
            </div>
        </Container>
        </section>
    );
}

/**
 * Ícono SVG de engranaje para animación visual.
 */
function GearIcon({ className }: { className?: string }) {
    return (
        <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
        >
        <path
            d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 0 0 12 8.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <path
            d="M19.4 13.5C19.5 13 19.5 12.5 19.5 12C19.5 11.5 19.5 11 19.4 10.5L21.2 9.1L19.2 5.7L17.1 6.6C16.3 6 15.5 5.5 14.5 5.2L14.2 3H10.2L9.9 5.2C8.9 5.5 8 6 7.3 6.6L5.2 5.7L3.2 9.1L5 10.5C4.9 11 4.9 11.5 4.9 12C4.9 12.5 4.9 13 5 13.5L3.2 14.9L5.2 18.3L7.3 17.4C8 18 8.9 18.5 9.9 18.8L10.2 21H14.2L14.5 18.8C15.5 18.5 16.3 18 17.1 17.4L19.2 18.3L21.2 14.9L19.4 13.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
        />
        </svg>
    );
}