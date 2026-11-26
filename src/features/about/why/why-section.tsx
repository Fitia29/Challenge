import WhyCard from "./why-card";
import WhyTitleSection from "./why-title-section";

const DATA = [
  {
    title: "Achat en moins d’une minute",
    description:
      "Choisissez votre événement, payez et recevez votre billet directement sur votre téléphone. Plus besoin de vous déplacer ni de faire la queue.",
  },
  {
    title: "Paiement 100 % local",
    description:
      "Payez avec MVola, Orange Money, Airtel Money ou par carte bancaire, selon ce qui vous convient.",
  },
  {
    title: "Billets sécurisés",
    description:
      "Chaque ticket possède un QR code unique, impossible à copier. Fini les faux billets et les arnaques.",
  },
  {
    title: "Soutien aux organisateurs locaux",
    description:
      "Chaque billet vendu aide les artistes, les associations et les organisateurs malgaches à faire vivre leurs événements",
  },
  {
    title: "Billet toujours avec vous",
    description:
      "Votre ticket est enregistré dans votre compte, même sans impression. Il reste accessible hors connexion une fois téléchargé.",
  },
  {
    title: "Remboursement et assistance",
    description:
      "En cas d’annulation d’un événement, vous êtes informé tout de suite et remboursé. Une équipe répond à vos questions par message ou par téléphone.",
  },
];

export default function WhySection() {
  return (
    <div className="flex flex-col gap-[60px] bg-card py-[103px] px-[48px]">
      <WhyTitleSection />

      <div className="flex flex-wrap justify-center gap-[24px]">
        {DATA.map((d, index) => (
          <WhyCard key={index} title={d.title} description={d.description} />
        ))}
      </div>
    </div>
  );
}
