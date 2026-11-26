import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import HistorySection from "@/features/about/history/history-section";
import HowItWorksSection from "@/features/about/how-it-works/how-it-works-section";
import WhySection from "@/features/about/why/why-section";

export const metadata: Metadata = {
  title: "Actualités & Blog | Tikety",
};

export default function AproposPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="A propos"
        highlight="de Tikety"
        description="Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
      />

      <HistorySection />

      <HowItWorksSection />

      <WhySection />
    </main>
  );
}
