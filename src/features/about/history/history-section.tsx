import Image from "next/image";
import HistoryDescription from "./history-description";

export default function HistorySection() {
  return (
    <div className="flex flex-col xl:flex-row gap-[32px] px-4 sm:px-10 bg-card items-center justify-center py-[83px]">
      <div className="relative w-full xl:w-[556px] 2xl:w-[756px] h-[490px] sm:h-[590px] 2xl:h-[690px] ">
        <Image
          src={"/about-movie-tickets.jpg"}
          alt="movie tickets image"
          fill
          className="rounded-[20px] object-cover"
        />
      </div>

      <HistoryDescription />
    </div>
  );
}
