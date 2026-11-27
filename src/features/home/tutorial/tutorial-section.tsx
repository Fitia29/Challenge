import CardVideoTutorial from "./card-video-tutorial";
import DescriptionSection from "./description-section";
import MainVideoTutorial from "./main-video-tutorial";

const VIDEOS_DATA = [
  {
    src: "https://www.youtube.com/embed/3OF03q6IMYE?si=8K-25gfmDqia48DW",
  },
  {
    src: "https://www.youtube.com/embed/_G0UwhmFK0o?si=JeLXlCJJlhpCMvb_",
  },
  {
    src: "https://www.youtube.com/embed/RHgV-kUTYvQ?si=_bO6KwinUylknWEg",
  },
  {
    src: "https://www.youtube.com/embed/Mkuhus1taO4?si=DXhCp_vSyB2e-tAj",
  },
];

export default function TutorialSection() {
  return (
    <section className="flex flex-col px-2 sm:px-[50px] py-20 gap-[51px] items-center bg-card w-full">
      <div className="flex flex-col max-xl:gap-6 max-xl:items-center xl:flex-row xl:justify-between w-[92%]">
        <DescriptionSection />
        <MainVideoTutorial />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 justify-items-center 2xl:h-[349px] w-[92%]">
        {VIDEOS_DATA.map((video, index) => (
          <CardVideoTutorial key={index} src={video.src} />
        ))}
      </div>
    </section>
  );
}
