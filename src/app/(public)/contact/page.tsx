import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactSection from "@/features/contact/contact-section";

export const metadata: Metadata = {
  title: "Actualités & Blog | Tikety",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Contactez"
        highlight="- nous"
        description="Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
      />

      <ContactSection />
    </main>
  );
}
