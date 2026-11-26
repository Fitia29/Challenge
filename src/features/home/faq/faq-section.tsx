import FaqAccordion, { type FaqItem } from "./faq-accordion";
import FaqHeader from "./faq-header";

// Pour modifier la FAQ : ajoute, supprime ou édite les éléments ci-dessous.
const faqItems: FaqItem[] = [
  {
    question: "Qu'est-ce que Tikety et comment fonctionne la plateforme ?",
    answer:
      "Tikety est une plateforme de billetterie numérique qui permet de simplifier la gestion des événements. Elle facilite la réservation, l'achat et la gestion des billets tout en offrant aux organisateurs un meilleur suivi des participants.",
  },
  {
    question: "Comment acheter ou réserver un billet sur Tikety ?",
    answer:
      "Choisissez l'événement qui vous intéresse, sélectionnez vos billets puis suivez les étapes de réservation et de paiement. Votre billet numérique sera ensuite disponible depuis votre compte.",
  },
  {
    question:
      "Comment les organisateurs peuvent-ils utiliser Tikety pour leurs événements ?",
    answer:
      "Les organisateurs peuvent créer leur événement, configurer les types de billets et suivre les réservations depuis leur espace de gestion.",
  },
  {
    question: "Les billets numériques sont-ils sécurisés ?",
    answer:
      "Oui. Les billets numériques sont associés à votre réservation afin de faciliter leur vérification à l'entrée de l'événement. Gardez votre billet privé et accessible le jour J.",
  },
  {
    question: "Puis-je modifier ou annuler ma réservation ?",
    answer:
      "Les possibilités de modification ou d'annulation dépendent des conditions fixées par l'organisateur. Consultez les informations de l'événement ou contactez son équipe pour obtenir de l'aide.",
  },
];

export default function FaqSection() {
  return (
    <section className="grid grid-cols-1 items-stretch gap-12 bg-[#E7F1FE] px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-8 lg:py-32">
      <FaqHeader />
      <FaqAccordion items={faqItems} defaultOpenIndex={0} />
    </section>
  );
}
