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

      <div className="relative max-sm:-mt-40">
        <div className="relative w-full h-[403px] z-10">
          <Image
            src={"/cta-people.png"}
            alt="cta people"
            fill
            className="object-contain lg:object-cover"
          />
        </div>

        <div className="absolute -top-30 sm:-top-[40%] lg:-top-60 w-full z-1">
          <div className="relative w-full h-[503px]">
            <Image
              src={"/cta-people-background.png"}
              alt="cta people"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
