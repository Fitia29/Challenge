import Image from "next/image";
import CTADescription from "./cta-description";

export default function CTASection() {
  return (
    <section className="relative flex flex-col gap-0 lg:gap-[100px] overflow-hidden mb-0 ">
      <CTADescription />

      <figure className="absolute -right-30 max-sm:-top-0 md:-top-20 lg:-top-40  w-[80%] h-full ">
        <div className="relative w-full h-full">
          <Image
            src={"/cta-tickets.png"}
            alt="cta tickets"
            fill
            className="object-contain"
          />
        </div>
      </figure>

      <div className="relative">
        <div className="relative z-10 w-full aspect-[1440/304] lg:aspect-auto lg:h-[403px]">
          <Image
            src={"/cta-people.png"}
            alt="cta people"
            fill
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-navy" />
        </div>

        <div className="absolute bottom-0 z-1 w-full aspect-[1440/1256] translate-y-[21%] lg:bottom-auto lg:-top-60 lg:aspect-auto lg:h-[503px] lg:translate-y-0">
          <Image
            src={"/cta-people-background.png"}
            alt="cta people"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}