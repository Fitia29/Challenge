import HeroSection from "@/features/home/hero/hero-section";
import FuturEvent from "@/features/home/event/futur-event";
import TutorialSection from "@/features/home/tutorial/tutorial-section";
import LastEventSection from "@/features/home/event/last-event";
import FaqSection from "@/features/home/faq/faq-section";
import CTASection from "@/features/home/cta/cta-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FuturEvent />
      <TutorialSection />
      <LastEventSection />
      <FaqSection />
      <CTASection />
    </main>
  );
}
