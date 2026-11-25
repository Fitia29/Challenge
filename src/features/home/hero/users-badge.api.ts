import axios from "axios";
import type { UsersBadgeData } from "./users-badge.types";

const USE_MOCK = true;

const MOCK_USERS_BADGE: UsersBadgeData = {
  label: "1,2k utilisateurs de tikety",
  users: [
    { id: "1", name: "Utilisateur 1", avatarUrl: "/images/hero/users2 (1).svg" },
    { id: "2", name: "Utilisateur 2", avatarUrl: "/images/hero/users2 (2).svg" },
    { id: "3", name: "Utilisateur 3", avatarUrl: "/images/hero/users2 (3).svg" },
  ],
};

export async function getUsersBadge(): Promise<UsersBadgeData> {
  if (USE_MOCK) {
    await new Promise((resolve) => setTimeout(resolve, 400)); 
    return MOCK_USERS_BADGE;
  }

  const { data } = await axios.get<UsersBadgeData>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/badge`,
  );
  return data;
}
