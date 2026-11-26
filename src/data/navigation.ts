import { Handbag, Search, UserRound } from "lucide-react";

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

export const iconLinks = [
  { label: "Recherche", href: "/search", icon: Search },
  { label: "Panier", href: "/cart", icon: Handbag },
  { label: "Mon compte", href: "/account", icon: UserRound },
];

export function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
