import FaqSection from "@/features/home/faq/faq-section";
import HeroSection from "@/features/home/hero/hero-section";
import TemoignageSection from "@/features/temoignage/TemoignageSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FaqSection />
      <TemoignageSection />
    </main>
  );
}
