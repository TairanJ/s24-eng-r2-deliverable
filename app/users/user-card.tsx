"use client";

import type { Database } from "@/lib/schema";

type Users = Database["public"]["Tables"]["profiles"]["Row"];

export default function UserCard({ users }: { users: Users }) {
  return (
    <div className="m-4 w-72 min-w-72 flex-none rounded border-2 p-3 shadow">
      <h3 className="mt-3 text-2xl font-semibold">{users.display_name}</h3>
      <h4 className="text-lg font-light italic">{users.email}</h4>
      <p>{users.biography ? users.biography : ""}</p>
    </div>
  );
}
