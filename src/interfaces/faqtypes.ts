export type FaqPage = "accueil" | "produits" | "realisations";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqContent {
  badge: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export type FaqVariante = "centree" | "colonnes";
