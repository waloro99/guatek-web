import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
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
        <UnderConstructionSection />
      </main>
    </>
  );
}