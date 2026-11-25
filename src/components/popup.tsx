"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function Popup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-40 flex items-center justify-between gap-4 bg-primary px-12 py-3 text-primary-foreground">
      <p className="min-w-0 truncate text-paragraph font-bold">
        Concentrez-vous sur votre événement, nous simplifions votre billetterie
      </p>

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
