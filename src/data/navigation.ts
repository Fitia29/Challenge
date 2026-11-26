import { Handbag, Search, UserRound } from "lucide-react";

// Liens du menu principal.
// Pour ajouter un sous-menu, ajoute simplement "subLinks" à un lien.
export type NavLink = {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
};

export const mainLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Événements",
    href: "/events",
    subLinks: [
      { label: "Événements à venir", href: "/events/upcoming" },
      { label: "Événements passés", href: "/events/past" },
    ],
  },
  { label: "Devenir organisateur", href: "/organisateur" },
  { label: "À propos", href: "/a-propos" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

// Petites icônes à droite de la barre de navigation.
export const iconLinks = [
  { label: "Recherche", href: "/search", icon: Search },
  { label: "Panier", href: "/cart", icon: Handbag },
  { label: "Mon compte", href: "/account", icon: UserRound },
];

// Vrai si le lien correspond à la page affichée (sert à mettre le lien en surbrillance)
export function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
