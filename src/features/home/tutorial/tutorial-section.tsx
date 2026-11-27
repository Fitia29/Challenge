import CardVideoTutorial from "./card-video-tutorial";
import DescriptionSection from "./description-section";
import MainVideoTutorial from "./main-video-tutorial";

export default function TutorialSection() {
  return (
    <section className="flex flex-col px-2 sm:px-[50px] py-20 gap-[51px] items-center bg-card w-full">
      <div className="flex flex-col max-xl:gap-6 max-xl:items-center xl:flex-row xl:justify-around w-full">
        <DescriptionSection />
        <MainVideoTutorial />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-12 justify-items-center 2xl:h-[349px]">
        {Array(4)
          .fill(0)
          .map((v, index) => (
            <CardVideoTutorial key={index} />
          ))}
      </div>
    </section>
  );
}
