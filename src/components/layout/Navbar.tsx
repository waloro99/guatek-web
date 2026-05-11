import { navigationItems } from "@/constants/navigation";

/**
 * Barra de navegación principal.
 */
export function Navbar() {
    return (
        <nav className="hidden items-center gap-8 md:flex">
        {navigationItems.map((item) => (
            <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
            {item.label}
            </a>
        ))}
        </nav>
    );
}