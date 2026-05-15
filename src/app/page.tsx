import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DashboardsSection } from "@/components/sections/DashboardsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

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
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}