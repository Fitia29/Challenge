"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useUsersBadge } from "./use-users-badge";

const MAX_AVATARS = 3;

export default function UsersBadge() {
  const { data, isPending, isError } = useUsersBadge();

  if (isPending) {
    return <div aria-hidden="true" className="h-8 w-[260px] animate-pulse rounded-full bg-white/10" />;
  }

  if (isError || !data) return <div className="h-8" />;

  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {data.users.slice(0, MAX_AVATARS).map((user) => (
          <span
            key={user.id}
            className="-ml-2 flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-navy bg-slate-300 text-navy first:ml-0"
          >
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={32}
                height={32}
                unoptimized
                className="size-full object-cover"
              />
            ) : (
              <UserRound className="size-4" aria-label={user.name} />
            )}
          </span>
        ))}
      </div>
      <span className="text-xs text-white/80">{data.label}</span>
    </div>
  );
}
