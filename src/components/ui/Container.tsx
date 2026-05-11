import type { ReactNode } from "react";

/**
 * Propiedades del componente Container.
 */
type ContainerProps = {
    children: ReactNode;
    className?: string;
};

/**
 * Contenedor global para mantener el ancho consistente del sitio.
 */
export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
        {children}
        </div>
    );
}