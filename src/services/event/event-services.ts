import { genericGetList } from "@/services/common";
import { API_URL } from "@/lib/env";
import type { EventResponse, GetAllEventsParams } from "@/types/event/event-types";

const EVENTS_URL = "/Event";

const REQUEST_TIMEOUT_MS = 8000;

export async function getAllEvents(params?: GetAllEventsParams) {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL n'est pas défini");
  }

  return genericGetList<EventResponse>(EVENTS_URL, { ...params }, { timeout: REQUEST_TIMEOUT_MS });
}
