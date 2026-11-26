"use client";
// import FloatingGlow from "@/components/FloatingGlow";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
// import SectionLabel from "../SectionLabel";
import Image from "next/image";

const reviews = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  name: "David R.",
  role: "Membre du club",
  text: "Avant de m’inscrire à cette newsletter, je ratais systématiquement les places pour les événements les plus attendus : tout partait en quelques heures et je devais souvent me rabattre sur des reventes beaucoup trop chères. Depuis que je suis abonné(e), tout a changé. J'ai reçu l'alerte de prévente 48 heures avant l'ouverture officielle pour mon artiste préféré, ce qui m'a permis de réserver les meilleures places au premier rang sans aucun stress. C'est devenu mon réflexe numéro un pour organiser mes sorties.",
}));

export default function TemoignageSection() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((i) => reviews[(start + i) % reviews.length]);
  return (
    <section className="w-full bg-white px-6 py-16 text-[#11183B] md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto flex flex-col gap-12.5">
        <header className="mx-auto text-center flex flex-col gap-4">
          <h2 className="text-title font-bold uppercase leading-tight">
            La confiance se partage,
            <span className="block text-[#2878F0] text-title font-bold">les expériences aussi</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-paragraph leading-relaxed text-[#727C97]">
            Découvrez les dernières nouveautés, les annonces importantes et les événements à ne pas manquer. Restez au courant de tout ce qui anime l'univers de Tikety.
          </p>
        </header>

        <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r, i) => (
            <figure
              key={`${r.id}-${i}`}
              className={`rounded-[20px] border border-[#C7D9FF] bg-[#FBFCFF] p-4 ${i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""}`}
            >
              <figcaption className="flex items-center gap-3">
                <Image
                  src="/b78e887ca55c0e1bfee24eadd5f621c69a0d5d17.jpg"
                  alt={r.name}
                  width={94}
                  height={94}
                  className="size-20 rounded-full object-cover"
                />
                <span>
                  <span className="block text-subtitle font-semibold text-[#202536]">{r.name}</span>
                  <span className="block text-paragraph text-[#5D6268]">{r.role}</span>
                  <span className="block text-xs tracking-wide text-[#11183B]" aria-label="5 étoiles sur 5">★★★★★</span>
                </span>
              </figcaption>
              <blockquote className="mt-4 text-paragraph leading-relaxed text-[#5D6268] max-w-lg">« {r.text} »</blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button
            onClick={() => setStart((s) => (s - 1 + reviews.length) % reviews.length)}
            aria-label="Précédent"
            className="flex size-9 items-center justify-center rounded-full border border-[#11183B] text-[#11183B] transition-colors hover:bg-[#F0F3FA]"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => setStart((s) => (s + 1) % reviews.length)}
            aria-label="Suivant"
            className="flex size-9 items-center justify-center rounded-full bg-[#11183B] text-white transition-colors hover:bg-[#252E59]"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
