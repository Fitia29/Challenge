"use client";

import { useEffect, useState } from "react";

const words = [
  "des prochains mois",
  "des événements à venir",
  "de notre communauté",
];

export default function RotatingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text.length === currentWord.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 70
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
  <span className="text-primary inline-block min-w-[340px]">
    {text}
  </span>
);
}