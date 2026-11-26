import AnimatedTitle from "@/components/animated-title";
import CTAButton from "@/components/cta-button";
import AnimatedParagraph from "@/components/animated-paragraph";

export default function DescriptionSection() {
  return (
    <article className="flex flex-col gap-[16px] max-xl:items-center ">
      <AnimatedTitle>
        Vos billets, en quelques clics. Vos événements,{" "}
        <span className="text-primary">{"sans limites"}</span>
      </AnimatedTitle>

      <AnimatedParagraph className="max-xl:text-center font-[400] w-full sm:w-[70%] xl:w-[548px] text-[13px] sm:text-paragraph text-secondary-foreground">
        {
          "Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
        }
      </AnimatedParagraph>

      <CTAButton
        message="Devenir organisateur"
        className="min-h-[70px]! py-[12px] px-[16px] w-[229px]"
      />
    </article>
  );
}
