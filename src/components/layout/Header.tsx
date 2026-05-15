"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/constants/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Encabezado principal del sitio.
 */
export function Header() {
  const whatsappUrl = getWhatsAppUrl();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Cierra el menú móvil después de seleccionar una opción.
   */
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full pt-4">
      <Container>
        <div className="relative rounded-full border border-slate-200/80 bg-white/90 px-5 shadow-lg shadow-slate-200/70 backdrop-blur-xl">
          {/* Barra principal */}
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Marca principal */}
            <a href="#inicio" onClick={closeMenu} className="flex items-center gap-2">
              <Image
                src="/logos/logo-guatek.png"
                alt="Logo de GuaTek"
                width={34}
                height={34}
                priority
                className="h-8 w-8 object-contain"
              />

              <span className="text-xl font-bold tracking-tight">
                <span className="text-slate-950">Gua</span>
                <span className="text-blue-600">Tek</span>
              </span>
            </a>

            {/* Navegación desktop */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-2">
              <Button href={whatsappUrl} target="_blank" rel="noreferrer">
                Cotizar ahora
              </Button>

              {/* Botón menú móvil */}
              <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 lg:hidden"
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
              >
                <span className="relative h-5 w-5">
                  <span
                    className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-slate-950 transition ${
                      isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-slate-950 transition ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-slate-950 transition ${
                      isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Menú móvil */}
            <div
            className={`absolute left-0 right-0 top-[76px] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-300/60 backdrop-blur-xl transition-all duration-300 lg:hidden ${
                isMenuOpen
                ? "max-h-[520px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }`}
            >
            <nav className="grid gap-1 p-4">
                {navigationItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                    {item.label}
                </a>
                ))}
            </nav>
            </div>
        </div>
      </Container>
    </header>
  );
}