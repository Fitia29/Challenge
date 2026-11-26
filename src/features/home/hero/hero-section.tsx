import CTAButton from "@/components/cta-button";
import {
  Hero,
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroHighlight,
  HeroTitle,
} from "@/components/hero";
import TicketsCarousel from "./tickets/tickets-carousel";
import UsersBadge from "./users-badge";

export default function HeroSection() {
  return (
    // pb-[...] = espace réservé en bas pour le carrousel de tickets (il est collé en bas).
    // Plus l'écran est petit, plus le carrousel est réduit, donc moins d'espace.
    <Hero size="full" className="pb-[300px] sm:pb-[370px] lg:pb-[420px]">
      <HeroContent>
        <UsersBadge />

        <HeroTitle className="mt-3">
          <span className="block">
            Vos billets, <HeroHighlight fade="soft">en quelques clics.</HeroHighlight>
          </span>
          <span className="block">
            Vos événements, <HeroHighlight fade="deep">sans limites</HeroHighlight>
          </span>
        </HeroTitle>

        <HeroDescription>
          Avec Tikety, simplifiez et modernisez la gestion de votre billetterie
          grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu
          aux files d&apos;attente, aux billets papier et aux contraintes
          logistiques
        </HeroDescription>

        <HeroActions>
          <CTAButton message="Réserver un ticket" />
          <CTAButton message="Découvrir l'évènements" variant="customOutline" withArrow={false} />
        </HeroActions>
      </HeroContent>

      <TicketsCarousel />
    </Hero>
  );
}
