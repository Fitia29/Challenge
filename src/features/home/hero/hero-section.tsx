import StarryBackground from "@/components/starry-background";
import CTAButton from "@/components/cta-button";
import UsersBadge from "./users-badge";
import TicketsCarousel from "./tickets/tickets-carousel";

export default function HeroSection() {
  return (
    <main className="relative isolate flex min-h-[860px] flex-1 flex-col items-center overflow-clip px-6 pt-12 text-center text-white">
      <StarryBackground />

      <div className="relative z-[1] flex flex-col items-center">
        <UsersBadge />

        <h1 className="mt-3 text-[clamp(1.875rem,5.2vw,3.75rem)] font-semibold uppercase leading-[1.2] text-[#e6e7ec]">
          <span className="block">
            Vos billets,{" "}
            <span className="bg-linear-to-r from-primary from-50% to-[#4a68a6] bg-clip-text text-transparent">
              en quelques clics.
            </span>
          </span>
          <span className="block">
            Vos événements,{" "}
            <span className="bg-linear-to-r from-primary from-35% to-[#2c4a8f] bg-clip-text text-transparent">
              sans limites
            </span>
          </span>
        </h1>

        <p className="mt-[14px] max-w-[42rem] text-paragraph leading-6 text-white/70">
          Avec Tikety, simplifiez et modernisez la gestion de votre billetterie
          grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu
          aux files d&apos;attente, aux billets papier et aux contraintes
          logistiques
        </p>

        <div className="mt-[14px] flex flex-wrap items-center justify-center gap-5">
          <CTAButton message="Réserver un ticket" />
          <CTAButton message="Découvrir l'évènements" variant="customOutline" withArrow={false} />
        </div>
      </div>

      <TicketsCarousel />
    </main>
  );
}
