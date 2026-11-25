import { Handbag, Search, UserRound } from "lucide-react";

export const EVENTS_LABEL = "Événements";

export const navlink = [
  { href: "/", label: "Accueil" },
  { href: "/events", label: EVENTS_LABEL },
  { href: "/organisateur", label: "Devenir organisateur" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const eventsMenu = [
  { href: "/events/upcoming", label: "Événements à venir" },
  { href: "/events/past", label: "Événements passés" },
];

export const iconNavlink = [
  { href: "/search", label: "Recherche", icon: Search },
  { href: "/cart", label: "Panier", icon: Handbag },
  { href: "/account", label: "Mon compte", icon: UserRound },
];

export function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
