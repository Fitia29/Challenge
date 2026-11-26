export type BadgeUser = {
  id: string;
  name: string;
  avatarUrl: string | null;
};

export type UsersBadgeData = {
  label: string;
  users: BadgeUser[];
};
