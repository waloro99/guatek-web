import type { ReactNode } from "react";

/**
 * Propiedades del componente SectionTitle.
 */
type SectionTitleProps = {
    label?: string;
    title: string;
    description?: ReactNode;
    align?: "left" | "center";
    theme?: "light" | "dark";
};

/**
 * Título reutilizable para secciones principales.
 */
export function SectionTitle({
    label,
    title,
    description,
    align = "center",
    theme = "dark",
}: SectionTitleProps) {
    const alignment = align === "center" ? "text-center mx-auto" : "text-left";

    const titleColor = theme === "light" ? "text-slate-950" : "text-white";
    const descriptionColor = theme === "light" ? "text-slate-600" : "text-slate-300";

    return (
        <div className={`max-w-3xl ${alignment}`}>
        {label && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            {label}
            </p>
        )}

        <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl ${titleColor}`}>
            {title}
        </h2>

        {description && (
            <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionColor}`}>
            {description}
            </p>
        )}
        </div>
    );
}