import Image from "next/image";
import type { TicketItem } from "./ticket.types";

// Taille d'un ticket en pixels (le carrousel le réduit sur petits écrans)
export const TICKET_W = 330;
export const TICKET_H = 467;
// Identifiant utilisé par le <clipPath> défini dans tickets-carousel.tsx
export const TICKET_CLIP_ID = "ticket-clip";

// 20000 -> "20K", 1500000 -> "1,5M"
export function formatPrice(value: number) {
  const fmt = (n: number, unit: string) => `${Number(n.toFixed(1))}${unit}`.replace(".", ",");
  if (value >= 1_000_000) return fmt(value / 1_000_000, "M");
  if (value >= 1_000) return fmt(value / 1_000, "K");
  return String(value);
}

// Dessin du code-barres : [position x, largeur] de chaque barre
const BARCODE_W = 145;
const BARCODE_H = 36;
const BARCODE: ReadonlyArray<readonly [x: number, w: number]> = [
  [0, 1.5], [6.75, 3.75], [15.75, 3.75], [24.75, 4.5], [33.75, 4.5], [42.75, 4.5],
  [52.5, 3.75], [61.5, 3.75], [70.5, 3.75], [79.5, 3.75], [88.5, 3.75], [97.5, 4.5],
  [106.5, 4.5], [115.5, 4.5], [125.25, 3.75], [134.25, 3.75], [143.25, 1.5],
];

// Petits mots affichés au milieu du ticket
const BADGES = ["SPECTACLE", "LIVE", "AMBIANCE"];

export function TicketShell({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-navy ${className}`}
      style={{ width: TICKET_W, height: TICKET_H, clipPath: `url(#${TICKET_CLIP_ID})` }}
    >
      {children}
    </div>
  );
}

export default function TicketCard({ ticket }: { ticket: TicketItem }) {
  return (
    <TicketShell className="text-white">
      <div className="absolute inset-x-0 top-0 h-[80%] isolate">
        {ticket.imageUrl ? (
          <Image src={ticket.imageUrl} alt="" fill unoptimized sizes="330px" className="object-cover" />
        ) : (
          <div className="size-full bg-gradient-to-b from-[#1a2a6c] to-navy" />
        )}
        {ticket.tint && (
          <div className="absolute inset-0 opacity-60" style={{ backgroundColor: ticket.tint, mixBlendMode: "color" }} />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,18,61,.94) 0%, rgba(10,18,61,.72) 18%, rgba(10,18,61,.42) 40%, rgba(10,18,61,.48) 60%, rgba(10,18,61,.86) 82%, #0A123D 100%)",
          }}
        />
      </div>

      <div className="absolute inset-x-0 top-[53px] flex flex-col items-center px-8 text-center">
        <Image src="/images/logo.svg" alt="" width={44} height={36} className="h-auto w-11" />
        <span className="mt-[8px] text-[30px] font-bold leading-none">Tikety</span>
        <h3 className="mt-[17px] line-clamp-2 text-[29px] font-bold uppercase leading-[30px]">
          {ticket.title}
        </h3>
      </div>

      <ul className="absolute inset-x-0 top-[272px] flex items-center justify-center gap-5 text-[16px] font-semibold leading-none">
        {BADGES.map((b, i) => (
          <li key={b} className="flex items-center gap-5">
            {i > 0 && <span aria-hidden="true" className="h-[15px] w-px bg-white/70" />}
            {b}
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[307px] h-[1.5px]"
        style={{ backgroundImage: "repeating-linear-gradient(to right, #fff 0 8px, transparent 8px 18px)", backgroundPosition: "4px 0" }}
      />

      <p className="absolute left-4 top-[344px] text-[16px] font-semibold uppercase leading-none tracking-[-0.01em]">
        {ticket.kind}
      </p>

      <svg
        aria-hidden="true"
        width={BARCODE_W}
        height={BARCODE_H}
        viewBox={`0 0 ${BARCODE_W} ${BARCODE_H}`}
        className="absolute left-4 top-[372px]"
      >
        {BARCODE.map(([x, w]) => (
          <rect key={x} x={x} y={0} width={w} height={BARCODE_H} fill="#fff" />
        ))}
      </svg>

      <div className="absolute right-4 top-[364px] flex items-baseline gap-[6px] leading-none">
        <span className="text-[51px] font-extrabold leading-none tracking-[-0.02em]">{formatPrice(ticket.price)}</span>
        <span className="relative top-[1px] text-[16px] font-semibold">{ticket.currency}</span>
      </div>
    </TicketShell>
  );
}
