import CustomSubtitle from "@/components/custom-subtitle";

export default function WhyTitleSection() {
  return (
    <article className="flex flex-col max-sm:gap-2 sm:flex-row justify-between items-center">
      <CustomSubtitle title="Pourquoi" span="Choisir" lastText="Tikety ?" className="max-md:text-[40px]"/>

      <p className="font-[400] text-paragraph leading-[24px] text-secondary-foreground">
        {
          "Tout ce qu’il faut pour vivre vos événements sans stress, de l’achat du billet à l’entrée en salle."
        }
      </p>
    </article>
  );
}
