import { useQuery } from "@tanstack/react-query";
import { getEvents, getPastEvents } from "@/entities/event/api/events.api";

export function useEvents(type: "upcoming" | "past" = "upcoming") {
  return useQuery({
    queryKey: ["events", type],
    queryFn: type === "past" ? getPastEvents : getEvents,
    staleTime: 5 * 60 * 1000,
  });
}
