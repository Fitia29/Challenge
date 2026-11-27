import { tiketyApi } from "@/lib/axios";
import type { EventItem } from "../model/types";

function extractEvents(payload: unknown): EventItem[] {
  if (Array.isArray(payload)) {
    return payload as EventItem[];
  }

  if (payload && typeof payload === "object") {
    const response = payload as Record<string, unknown>;
    for (const key of ["data", "items", "events", "result", "value", "$values"]) {
      const value = response[key];
      if (Array.isArray(value)) return value as EventItem[];
      if (value && typeof value === "object") {
        try {
          return extractEvents(value);
        } catch {
          // Try the other common response envelope keys.
        }
      }
    }
  }

  throw new Error(
    "Format de réponse des événements inattendu : aucune liste d'événements trouvée.",
  );
}

export async function getEvents(): Promise<EventItem[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error(
      "URL du backend manquante : configurez NEXT_PUBLIC_API_URL dans .env.local.",
    );
  }

  const { data } = await tiketyApi.get<unknown>("/api/Event");
  return extractEvents(data);
}

export async function getPastEvents(): Promise<EventItem[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error(
      "URL du backend manquante : configurez NEXT_PUBLIC_API_URL dans .env.local.",
    );
  }

  const { data } = await tiketyApi.get<unknown>("/api/Event/Past");
  return extractEvents(data);
}
