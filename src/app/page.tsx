import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { DashboardsSection } from "@/components/sections/DashboardsSection";
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
        <ProjectsSection />
        <DashboardsSection />
        <UnderConstructionSection />
      </main>
    </>
  );
}