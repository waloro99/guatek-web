import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Propiedades del componente Button.
 */
type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: "primary" | "secondary";
};

/**
 * Botón reutilizable para enlaces principales del sitio.
 */
export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

    const variants = {
        primary:
        "bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20",
        secondary:
        "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    };

    return (
        <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
        </a>
    );
}