import axios from "axios";
import type { TicketItem } from "./ticket.types";

const USE_MOCK = true;

const MOCK_TICKETS: TicketItem[] = [
  { id: "1", title: "LIVE PERFOMANCE AUREANDO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET CONCERT", price: 20000, currency: "MGA", tint: "#7a3cff" },
  { id: "2", title: "FESTIVAL GLOBAL CULTURAL", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET FESTIVAL", price: 10000, currency: "MGA", tint: "#22b573" },
  { id: "3", title: "LIVE PERFOMANCE MIRADO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET CONCERT", price: 15000, currency: "MGA", tint: "#1d6bff" },
  { id: "4", title: "LIVE PERFOMANCE MIRADO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET CONCERT", price: 25000, currency: "MGA", tint: "#ff7a1a" },
  { id: "5", title: "NUIT ÉLECTRO ANTANANARIVO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET SOIRÉE", price: 30000, currency: "MGA", tint: "#e23b3b" },
  { id: "6", title: "LIVE PERFOMANCE AUREANDO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET CONCERT", price: 20000, currency: "MGA", tint: "#1d6bff" },
  { id: "7", title: "GALA DE DANSE", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET SPECTACLE", price: 12000, currency: "MGA", tint: "#e0359a" },
  { id: "8", title: "LIVE PERFOMANCE MIRADO", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET CONCERT", price: 18000, currency: "MGA", tint: "#ff9d1a" },
  { id: "9", title: "FESTIVAL DES ARTS", imageUrl: "/images/tickets/718a97296f7cdb033ffedafea347b87cb7e662db.jpg", kind: "BILLET FESTIVAL", price: 8000, currency: "MGA", tint: "#22b5b5" },
];

export async function getTickets(): Promise<TicketItem[]> {
  if (USE_MOCK) {
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return MOCK_TICKETS;
  }

  const { data } = await axios.get<TicketItem[]>(`${process.env.NEXT_PUBLIC_API_URL}/tickets`);
  return data;
}
