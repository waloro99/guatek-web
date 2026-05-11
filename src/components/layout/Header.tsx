import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Encabezado principal del sitio.
 */
export function Header() {
    const whatsappUrl = getWhatsAppUrl();

    return (
        <header className="fixed left-0 top-0 z-50 w-full pt-5">
        <Container>
            <div className="flex h-16 items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-6 shadow-lg shadow-slate-200/70 backdrop-blur-xl">
            {/* Marca principal */}
            <a href="#inicio" className="flex items-center gap-2">
                <Image
                src="/logos/logo-guatek.png"
                alt="Logo de GuaTek"
                width={32}
                height={32}
                priority
                className="h-8 w-8 object-contain"
                />

                <span className="text-xl font-bold tracking-tight">
                <span className="text-slate-950">Gua</span>
                <span className="text-blue-600">Tek</span>
                </span>
            </a>

            <Navbar />

            <Button href={whatsappUrl} target="_blank" rel="noreferrer">
                Cotizar ahora
            </Button>
            </div>
        </Container>
        </header>
    );
}