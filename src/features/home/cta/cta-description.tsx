"use client";

import CTAButton from "@/components/cta-button";
import AnimatedTitle from "@/components/animated-title";
import AnimatedParagraph from "@/components/animated-paragraph";

export default function CTADescription() {
  return (
    <article className="flex flex-col gap-[16px] max-xl:items-center p-[48px]">
      <AnimatedTitle>
        {"Vos billets,"}{" "}
        <span className="text-primary">{"en quelques clics."}</span>{" "}
        {"Vos événements,"}{" "}
        <span className="text-primary">{"sans limites"}</span>
      </AnimatedTitle>

      <AnimatedParagraph>
        {
          "Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
        }
      </AnimatedParagraph>

      <CTAButton
        message="Devenir organisateur"
        className="h-[70px] py-[12px] px-[16px] w-[229px]"
      />
    </article>
  );
}
