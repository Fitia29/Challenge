import CTAButton from "@/components/cta-button";

export default function DescriptionSection() {
  return (
    <article className="flex flex-col gap-[16px] max-xl:items-center ">
      <h2 className="text-secondary font-bold text-subtitle sm:text-[40px] max-xl:text-center max-md:w-full max-xl:w-[80%] xl:text-title uppercase xl:w-[670.5px] leading-[120%]">
        Vos billets, en quelques clics. Vos événements,{" "}
        <span className="text-primary">{"sans limites"}</span>
      </h2>

      <p className="max-xl:text-center font-[400] w-full sm:w-[70%] xl:w-[548px] text-[13px] sm:text-paragraph text-secondary-foreground">
        {
          "Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
        }
      </p>

      <CTAButton
        message="Devenir organisateur"
        className="h-[70px] py-[12px] px-[16px] w-[229px]"
      />
    </article>
  );
}
