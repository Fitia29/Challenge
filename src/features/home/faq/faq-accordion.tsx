"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

// Une question de la FAQ. C'est ce type que tu remplis dans faq-section.tsx
export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  /** Numéro de la question ouverte au chargement (0 = la première, null = toutes fermées) */
  defaultOpenIndex?: number | null;
};

// Met un espace insécable avant ? ! : ; pour éviter un signe seul en fin de ligne
const keepPunctuation = (text: string) => text.replace(/ ([?!:;])/g, "\u00A0$1");

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  // Numéro de la question actuellement ouverte (null = aucune)
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div role="list" aria-label="Questions fréquentes" className="flex flex-col justify-center gap-4 text-secondary">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            role="listitem"
            key={`${item.question}-${index}`}
            className="overflow-hidden rounded-[2rem] border border-[#C3D5EB]"
          >
            {/* La question : un clic ouvre ou ferme la réponse */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center gap-2.5 bg-transparent px-4 py-4 text-left sm:px-5 sm:py-[18px]"
            >
              {isOpen ? (
                <Minus className="size-9 shrink-0" strokeWidth={1.2} aria-hidden="true" />
              ) : (
                <Plus className="size-9 shrink-0" strokeWidth={1.2} aria-hidden="true" />
              )}
              {/* Texte plus petit sur mobile ; à partir de lg il s'adapte à la largeur d'écran */}
              <span className="text-base font-bold leading-[1.25] sm:text-lg lg:text-[clamp(1rem,1.7vw,1.5625rem)]">
                {keepPunctuation(item.question)}
              </span>
            </button>

            {/* La réponse : apparaît en glissant */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-[3.75rem] pr-6 text-sm leading-[1.35] text-[#354166]/50 sm:pl-[4.25rem] lg:pl-[88px] lg:text-[clamp(0.75rem,0.95vw,0.875rem)]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
