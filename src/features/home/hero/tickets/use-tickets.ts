import { useQuery } from "@tanstack/react-query";
import { getTickets } from "./ticket.api";

export function useTickets() {
  return useQuery({
    queryKey: ["hero-tickets"],
    queryFn: getTickets,
    staleTime: 5 * 60 * 1000,
  });
}