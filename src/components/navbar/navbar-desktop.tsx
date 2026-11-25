import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../logo";
import { EVENTS_LABEL, eventsMenu, iconNavlink, navlink } from "./navlink";

export default function NavBarDesktop() {
  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between bg-[#0A123D] px-12 py-4 text-primary-foreground">
      <Logo />

      <ul className="flex items-center gap-8">
        {navlink.map((item) =>
          item.label === EVENTS_LABEL ? (
            <li key={item.href}>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer">
                  {EVENTS_LABEL}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-auto rounded-xs bg-[#0A123D] text-primary-foreground"
                >
                  {eventsMenu.map((sub) => (
                    <DropdownMenuItem
                      key={sub.href}
                      render={<Link href={sub.href} />}
                    >
                      {sub.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ) : (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ),
        )}
      </ul>

      <div className="flex gap-5">
        {iconNavlink.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} aria-label={label}>
            <Icon size={20} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
