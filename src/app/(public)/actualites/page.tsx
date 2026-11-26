import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import FeaturedSection from "@/features/actualites/featured";
import DiscoverSection from "../../../features/actualites/discover";

export const metadata: Metadata = {
  title: "Actualités & Blog | Tikety",
};

export default function ActualitesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Actualités &"
        highlight="Blog"
        description="Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
      />
      <FeaturedSection/>
      <DiscoverSection/>
    </main>
  );
}
