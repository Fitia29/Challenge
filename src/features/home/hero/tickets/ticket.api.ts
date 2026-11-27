import { ENABLE_MOCKS } from "@/lib/env";
import { EVENTS_GET_ALL_MOCK } from "@/mocks/data/events-get-all-mock";
import { getAllEvents } from "@/services/event/event-services";
import type { EventResponse } from "@/types/event/event-types";
import { mapEventToTicket } from "./ticket.mapper";
import type { TicketItem } from "./ticket.types";

// Nombre maximum d'événements demandés / affichés dans le carrousel.
const MAX_TICKETS = 9;
// Le carrousel masque les tickets des extrémités : en dessous de ce nombre il n'afficherait
// presque rien (voire rien avec 1 seul événement). On répète donc la liste jusqu'à ce seuil.
const MIN_TICKETS = 7;

function fillToMin(tickets: TicketItem[]): TicketItem[] {
  if (tickets.length === 0 || tickets.length >= MIN_TICKETS) return tickets;
  return Array.from({ length: MIN_TICKETS }, (_, i) => {
    const ticket = tickets[i % tickets.length];
    return i < tickets.length ? ticket : { ...ticket, id: `${ticket.id}-${i}` };
  });
}

function toTickets(events: EventResponse[]): TicketItem[] {
  return fillToMin(events.slice(0, MAX_TICKETS).map((event, index) => mapEventToTicket(event, index)));
}

export async function getTickets(): Promise<TicketItem[]> {
  try {
    const { data, meta } = await getAllEvents({ page: 1, limit: MAX_TICKETS });

    // L'API répond mais ne renvoie aucun événement : mocks si autorisés (sinon liste vide → message en UI).
    if (data.length === 0 && ENABLE_MOCKS) {
      console.warn("[tickets] l'API a renvoyé 0 événement, utilisation des données fictives. meta :", meta);
      return toTickets(EVENTS_GET_ALL_MOCK);
    }

    return toTickets(data);
  } catch (error) {
    // NEXT_PUBLIC_ENABLE_MOCKS=false : pas de mock, l'erreur remonte jusqu'à l'UI.
    if (!ENABLE_MOCKS) throw error;

    console.warn(
      "[tickets] API indisponible, utilisation des données fictives :",
      error instanceof Error ? error.message : error,
    );
    return toTickets(EVENTS_GET_ALL_MOCK);
  }
}
