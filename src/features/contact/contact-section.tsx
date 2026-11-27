import CustomSubtitle from "@/components/custom-subtitle";
import ContactFormSection from "./contact-form-section";

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-[50px] items-center py-8 md:py-[85px] px-4 sm:px-[126px] w-full">
      <div className="flex flex-col gap-2 md:gap-[16px] items-center">
        <CustomSubtitle
          title="Créons quelque chose"
          span="d'unique ensemble"
          className=" w-[75%] text-center max-md:text-subtitle gap-0 max-md:leading-6"
        />

        <p className="text-paragraph leading-[24px] text-center text-secondary-foreground w-[95%] md:w-[50%]">
          {
            "Prêt à donner vie à vos idées ? Partagez-nous les détails de votre projet et commençons l'aventure dès aujourd'hui."
          }
        </p>
      </div>

      <ContactFormSection />
    </div>
  );
}
