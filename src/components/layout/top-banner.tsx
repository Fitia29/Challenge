"use client";

import { useState } from "react";
import { X } from "lucide-react";

const BANNER_TEXT =
  "Concentrez-vous sur votre événement, nous simplifions votre billetterie";

export default function TopBanner() {
  // true = le bandeau est affiché, false = l'utilisateur l'a fermé
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-40 flex items-center justify-between gap-4 bg-primary px-4 py-3 text-primary-foreground md:px-12">
      <p className="text-sm font-bold md:text-base">{BANNER_TEXT}</p>

      <button
        type="button"
        aria-label="Fermer le bandeau"
        onClick={() => setVisible(false)}
        className="shrink-0 cursor-pointer"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
