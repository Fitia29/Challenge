import CustomSubtitle from "@/components/custom-subtitle";
import TitleBadge from "@/components/title-badge";
import {
  FileChartColumnIncreasing,
  Files,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import CustomDescriptionCard from "@/components/custom-description-card";

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
  {
    icon: <FileChartColumnIncreasing color="white" />,
    title: "Fiable a 99%",
    paragraph:
      "Identifiez et étudiez les caractéristiques de vos pierres avec précision grâce à notre expertise gemmologique.",
  },
  {
    icon: <ShieldCheck color="white" />,
    title: "Facile à utiliser",
    paragraph:
      "Identifiez et étudiez les caractéristiques de vos pierres avec précision grâce à notre expertise gemmologique.",
  },
];

export default function DescriptionSection() {
  return (
    <article className="flex-1 flex flex-col gap-4 xl:gap-2 2xl:gap-[52px] xl:pr-10">
      <CustomSubtitle
        title="ce qu’il faut savoir sur"
        span="la plateforme tikety"
        className="max-sm:text-[40px]"
      />

      <div className="flex flex-col  gap-6 font-[400] leading-[24px] text-paragraph text-secondary-foreground">
        <p>
          {
            "Avec Tikety, simplifiez et modernisez la gestion de votre billetterie grâce à une solution numérique rapide, sécurisée et fiable. Dites adieu aux files d'attente, aux billets papier et aux contraintes logistiques"
          }
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
        {DATA.map((d, index) => (
          <CustomDescriptionCard
          className="w-[90%]"
            color="secondary"
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
