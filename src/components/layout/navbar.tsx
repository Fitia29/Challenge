"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { iconLinks, isActiveLink, mainLinks } from "@/data/navigation";
import Logo from "./logo";

export default function Navbar() {
  // true = le menu mobile (hamburger) est ouvert
  const [menuOpen, setMenuOpen] = useState(false);
  // Adresse de la page affichée, ex. "/actualites"
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy text-primary-foreground">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 xl:px-12 xl:py-4">
        <Logo />

        {/* MENU DESKTOP : visible seulement à partir de xl (1280px) */}
        <ul className="hidden items-center gap-8 xl:flex">
          {mainLinks.map((link) => (
            <li key={link.href} className="relative">
              {/* Faisceau de lumière derrière le lien de la page actuelle */}
              {isActiveLink(pathname, link.href) && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-y-7 left-1/2 w-28 -translate-x-1/2 bg-gradient-to-b from-primary/45 to-primary/15 [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]"
                />
              )}
              {link.subLinks ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    {link.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-auto rounded-xs bg-navy text-primary-foreground"
                  >
                    {link.subLinks.map((sub) => (
                      <DropdownMenuItem key={sub.href} render={<Link href={sub.href} />}>
                        {sub.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          {iconLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} aria-label={label}>
              <Icon size={20} />
            </Link>
          ))}

          {/* Bouton hamburger : caché à partir de xl */}
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer xl:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE : s'affiche sous la barre quand menuOpen est vrai */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-4 md:px-8 xl:hidden">
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 font-semibold ${
                  isActiveLink(pathname, link.href) ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>

              {/* Sous-liens affichés directement, légèrement décalés */}
              {link.subLinks?.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1.5 pl-4 text-sm text-white/70"
                >
                  {sub.label}
                </Link>
              ))}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
