import { BACK_URL } from "@/lib/env";
import type { EventResponse } from "@/types/event/event-types";
import type { TicketItem } from "./ticket.types";

function resolveImageUrl(url: string | null | undefined) {
  const value = url?.trim();
  if (!value) return null;
  if (/^https?:\/\//i.test(value) || value.startsWith("/")) return value;
  return BACK_URL ? `${BACK_URL}/${value}` : null;
}

export function mapEventToTicket(event: EventResponse, index = 0): TicketItem {
  const category = event.categoryName?.trim();

  return {
    id: event.id,
    title: event.title,
    imageUrl: resolveImageUrl(event.coverImage),
    kind: category ? `BILLET ${category.toUpperCase()}` : "BILLET",
    price: event.price ?? null,
  };
}
