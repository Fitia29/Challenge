import CustomSubtitle from "@/components/custom-subtitle";
import TitleBadge from "@/components/title-badge";
import HistoryDescriptionCard from "./history-description-card";
import { Files, Smartphone } from "lucide-react";

const DATA = [
  {
    icon: <Smartphone color="white" />,
    title: "100% numérique",
    paragraph:
      "Identifiez et étudiez les caractéristiques de vos pierres avec précision grâce à notre expertise gemmologique.",
  },
  {
    icon: <Files color="white" />,
    title: "0 utilisation de papier",
    paragraph:
      "Identifiez et étudiez les caractéristiques de vos pierres avec précision grâce à notre expertise gemmologique.",
  },
];

export default function HistoryDescription() {
  return (
    <article className="flex-1 flex flex-col gap-4 xl:gap-2 2xl:gap-[52px] xl:pr-20">
      <div className="flex">
        <TitleBadge label="Notre histoire" />
      </div>

      <CustomSubtitle
        title="Pourquoi nous"
        span="avons créé Tikety"
        className="max-sm:text-[40px]"
      />

      <div className="flex flex-col  gap-6 font-[400] leading-[24px] text-paragraph text-secondary-foreground">
        <p>
          {
            "orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra lectus at felis euismod fringilla. Phasellus ut eros in urna sagittis interdum. In scelerisque risus vitae nibh iaculis varius. Pellentesque porta a nulla nec imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus in eros dolor. Donec massa lectus, pretium ac est quis, venenatis dignissim erat"
          }
        </p>

        <p>
          {
            "Curabitur efficitur placerat efficitur. Suspendisse condimentum mi id elementum fringilla. Aenean vestibulum urna lacus, non accumsan felis maximus vel. Sed eget dolor lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id blandit justo. Morbi cursus dignissim congue. Integer eget turpis ac leo cursus tempus ut ac ante. Aliquam cursus est nec eros consectetur mattis."
          }
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-[32px]">
        {DATA.map((d, index) => (
          <HistoryDescriptionCard
            key={index}
            icon={d.icon}
            title={d.title}
            paragraph={d.paragraph}
          />
        ))}
      </div>
    </article>
  );
}
