import { siteConfig } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Encabezado principal del sitio.
 */
export function Header() {
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
            <a href="#inicio" className="text-xl font-bold tracking-tight text-white">
            GuaTek
            </a>

            <Navbar />

            <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Cotizar ahora
            </Button>
        </Container>
        </header>
    );
}