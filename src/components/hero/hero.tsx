// Brique "Hero" réutilisable sur TOUTES les pages (Accueil, Actualités, Événements...).
//
// Ce qui est FIXE (jamais à refaire dans une page) :
//   - le fond étoilé (<StarryBackground />), toujours présent
//   - le scintillement qui traverse le titre sur toute sa largeur
//   - les styles du titre, de la description et des boutons
//
// Ce qui CHANGE d'une page à l'autre :
//   - la taille de la section  -> prop `size` ("compact" | "full")
//   - les textes et les éléments en plus (badge, carrousel, boutons...)
//
// ─── Exemple : page simple (Actualités, Galeries, Contact...) ──────────────
//   <Hero size="compact">
//     <HeroContent>
//       <HeroTitle>
//         Actualités & <HeroHighlight>Blog</HeroHighlight>
//       </HeroTitle>
//       <HeroDescription>Un petit texte.</HeroDescription>
//     </HeroContent>
//   </Hero>
//
// ─── Exemple : accueil (grand hero + éléments en plus) ─────────────────────
//   <Hero size="full" className="pb-[420px]">
//     <HeroContent>
//       <UsersBadge />
//       <HeroTitle>...</HeroTitle>
//       <HeroDescription>...</HeroDescription>
//       <HeroActions>...boutons...</HeroActions>
//     </HeroContent>
//     <TicketsCarousel />   // collé en bas, directement dans <Hero>
//   </Hero>
//
// Pour ajouter une nouvelle taille : une ligne dans SIZES ci-dessous.

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import StarryBackground from "./starry-background";

// ---------- Tailles de la section ----------
// compact = pages intérieures | full = grand hero de la page d'accueil
const SIZES = {
  compact: "py-12 md:py-16 lg:py-20",
  full: "pt-10 sm:pt-12 lg:min-h-[860px]",
} as const;

export type HeroSize = keyof typeof SIZES;

type HeroProps = {
  size?: HeroSize;
  className?: string; // ex. espace réservé en bas pour un carrousel
  children: ReactNode;
};

export function Hero({ size = "compact", className, children }: HeroProps) {
  return (
    // data-size + group/hero : permettent aux enfants (ex. le titre) de
    // s'adapter à la taille du hero sans que la page ait à le préciser.
    <section
      data-size={size}
      className={cn(
        "group/hero relative isolate flex flex-col items-center overflow-clip px-4 text-center text-white sm:px-6",
        SIZES[size],
        className,
      )}
    >
      <StarryBackground />
      {children}
    </section>
  );
}

// Colonne centrée qui contient les textes. Elle passe AU-DESSUS du fond étoilé.
export function HeroContent({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative z-[1] flex flex-col items-center", className)}>{children}</div>
  );
}

// ---------- Titre avec scintillement ----------
// Astuce : on affiche le titre deux fois.
//   1. le vrai titre (visible, lisible par les lecteurs d'écran)
//   2. une copie transparente posée exactement par-dessus, qui ne contient
//      qu'une bande de lumière blanche (voir .hero-shimmer dans globals.css).
// La bande glisse de gauche à droite et traverse donc tout le texte.
export function HeroTitle({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h1
      className={cn(
        "relative w-fit uppercase leading-[1.2] text-[#e6e7ec]",
        "text-[clamp(2rem,5.6vw,5rem)] font-bold",
        "group-data-[size=full]/hero:text-[clamp(1.875rem,5.2vw,3.75rem)] group-data-[size=full]/hero:font-semibold",
        className,
      )}
    >
      {children}
      <span aria-hidden="true" className="hero-shimmer pointer-events-none absolute inset-0 select-none">
        {children}
      </span>
    </h1>
  );
}

// Partie du titre en bleu. `fade` = léger dégradé vers un bleu plus sombre.
const FADES = {
  none: "text-primary",
  soft: "bg-linear-to-r from-primary from-50% to-[#4a68a6] bg-clip-text text-transparent",
  deep: "bg-linear-to-r from-primary from-35% to-[#2c4a8f] bg-clip-text text-transparent",
} as const;

export function HeroHighlight({
  fade = "none",
  children,
}: {
  fade?: keyof typeof FADES;
  children: ReactNode;
}) {
  return <span className={FADES[fade]}>{children}</span>;
}

export function HeroDescription({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("mt-4 max-w-[42rem] text-sm leading-6 text-white/70 sm:text-base", className)}>
      {children}
    </p>
  );
}

// Boutons : l'un sous l'autre sur mobile, côte à côte ensuite
export function HeroActions({ children }: { children: ReactNode }) {
  return <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">{children}</div>;
}
