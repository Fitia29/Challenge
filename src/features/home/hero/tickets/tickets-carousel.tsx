"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TicketCard, { TICKET_CLIP_ID, TICKET_H, TICKET_W, TicketShell } from "./ticket-card";
import { TICKET_CLIP_PATH } from "./ticket-shape";
import { useTickets } from "./use-tickets";

const GAP = 28; 
const PITCH = TICKET_W + GAP; 
const ACTIVE_GAP = 52; 
const VIEW_H = 420; 
const BASE_TOP = 139; 
const REVEAL_MARGIN = -22; 

const ACTIVE_SCALE = 1.18;
const ACTIVE_Y = -64;
const ACTIVE_ROTATE = 3;

const SKELETON_COUNT = 9; 

const ARROW_CLASSES =
  "absolute top-[40%] z-30 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur disabled:opacity-40 lg:hidden";

function positionFromActive(index: number, active: number, total: number) {
  const half = Math.floor(total / 2);
  return ((((index - active + half) % total) + total) % total) - half;
}

function revealY(scale: number) {
  return VIEW_H - REVEAL_MARGIN - BASE_TOP - TICKET_H / 2 - (TICKET_H * scale) / 2;
}

export default function TicketsCarousel() {
  const { data: tickets, isPending } = useTickets();
  const reduceMotion = useReducedMotion();

  const [{ active, prev }, setState] = useState({ active: 2, prev: 2 });
  const [hovered, setHovered] = useState<number | null>(null);

  const items = tickets ?? [];
  const total = isPending ? SKELETON_COUNT : items.length;
  const half = Math.floor(total / 2);

  function goTo(index: number) {
    setState({ active: index, prev: active });
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-[1] overflow-x-clip" style={{ height: VIEW_H }}>
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={TICKET_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path d={TICKET_CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      <ul
        className="relative size-full origin-bottom scale-[0.65] sm:scale-[0.85] lg:scale-100"
        aria-label="Événements à la une"
      >
        {Array.from({ length: total }, (_, i) => {
          const rel = positionFromActive(i, active, total);
          const relPrev = positionFromActive(i, prev, total);
          const wrapped = rel - relPrev !== prev - active; 
          const isActive = rel === 0;
          const hidden = Math.abs(rel) === half; 
          const revealed = !isPending && !hidden && hovered === i;

          const transition =
            reduceMotion || wrapped
              ? { duration: 0 }
              : { type: "spring" as const, stiffness: 150, damping: 22, mass: 0.9 };

          const revealScale = 0.94;
          const animate = {
            y: revealed ? revealY(revealScale) : isActive ? ACTIVE_Y : 0,
            scale: revealed ? revealScale : isActive ? ACTIVE_SCALE : 1,
            rotate: isActive ? ACTIVE_ROTATE : 0,
            opacity: hidden ? 0 : 1,
          };

          const ticket = items[i];
          const x = rel * PITCH + Math.sign(rel) * ACTIVE_GAP - TICKET_W / 2;

          return (
            <motion.li
              key={ticket?.id ?? i}
              className="absolute left-1/2"
              style={{
                top: BASE_TOP,
                width: TICKET_W,
                height: TICKET_H,
                zIndex: revealed ? 30 : 10 - Math.abs(rel),
              }}
              initial={{ x, opacity: 1 }}
              animate={{ x }}
              transition={transition}
              onMouseEnter={() => !isPending && !hidden && setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              onFocus={() => !isPending && !hidden && setHovered(i)}
              onBlur={() => setHovered((h) => (h === i ? null : h))}
            >
              <motion.button
                type="button"
                disabled={isPending}
                aria-label={ticket ? `${ticket.title}, ${ticket.kind}` : "Chargement"}
                aria-current={isActive ? "true" : undefined}
                onClick={() => !isActive && goTo(i)}
                initial={{ ...animate, y: 90, opacity: 0 }}
                animate={animate}
                transition={transition}
                className={`block cursor-pointer outline-none transition-[filter] duration-300 disabled:cursor-default ${
                  isActive || revealed ? "drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]" : ""
                }`}
                style={{ width: TICKET_W, height: TICKET_H, transformOrigin: "50% 50%" }}
              >
                {ticket ? <TicketCard ticket={ticket} /> : <TicketShell className="animate-pulse !bg-white/10" />}
              </motion.button>
            </motion.li>
          );
        })}
      </ul>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-navy to-transparent"
      />

      <button
        type="button"
        aria-label="Ticket précédent"
        disabled={isPending}
        onClick={() => goTo((active - 1 + total) % total)}
        className={`${ARROW_CLASSES} left-2 sm:left-6`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Ticket suivant"
        disabled={isPending}
        onClick={() => goTo((active + 1) % total)}
        className={`${ARROW_CLASSES} right-2 sm:right-6`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
