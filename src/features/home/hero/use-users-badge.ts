import { useQuery } from "@tanstack/react-query";
import { getUsersBadge } from "./users-badge.api";

export function useUsersBadge() {
  return useQuery({
    queryKey: ["users-badge"],
    queryFn: getUsersBadge,
    staleTime: 5 * 60 * 1000,
  });
}
