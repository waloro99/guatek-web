import type { ReactNode } from "react";

/**
 * Propiedades del componente SectionTitle.
 */
type SectionTitleProps = {
    label?: string;
    title: string;
    description?: ReactNode;
    align?: "left" | "center";
};

/**
 * Título reutilizable para secciones principales.
 */
export function SectionTitle({
    label,
    title,
    description,
    align = "center",
}: SectionTitleProps) {
    const alignment = align === "center" ? "text-center mx-auto" : "text-left";

    return (
        <div className={`max-w-3xl ${alignment}`}>
        {label && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            {label}
            </p>
        )}

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
        </h2>

        {description && (
            <p className="mt-4 text-base leading-7 text-slate-300">
            {description}
            </p>
        )}
        </div>
    );
}