import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { UnderConstructionSection } from "@/components/sections/UnderConstructionSection";

/**
 * Página principal de GuaTek.
 */
export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <UnderConstructionSection />
      </main>
    </>
  );
}