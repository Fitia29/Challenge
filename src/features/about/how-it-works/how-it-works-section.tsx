import DescriptionSection from "./description-section";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-[32px] px-4 sm:px-10  items-center justify-center py-[83px]">
      <DescriptionSection />

      <div className="relative w-full xl:w-[556px] 2xl:w-[856px] h-[490px] sm:h-[590px] xl:h-[790px] overflow-hidden rounded-[20px]">
        <Image
          src={"/how-background.png"}
          alt="how background image"
          fill
          className="rounded-[20px] object-cover"
        />

        <div className="absolute -bottom-40 lg:bottom-0 max-lg:left-[20%]  lg:right-0">
          <div className="relative w-[480px] h-[612px]">
            <Image
              src={"/how-girl.png"}
              alt="how girl image"
              fill
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>

        <div className="absolute max-lg:w-[90%] max-xl:w-[50%] max-xl:top-[30%] max-lg:top-[5%] xl:top-[5%] 2xl:top-[10%] left-[5%]">
          <h3 className="font-bold text-[20px] lg:text-[40px] leading-[48px] text-secondary">
            {" Qu'est-ce que Tikety et comment fonctionne la plateforme ?"}
          </h3>
        </div>
      </div>
    </div>
  );
}
