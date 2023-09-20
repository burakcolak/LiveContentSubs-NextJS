"use client";

import { User } from "next-auth";
import { useSession } from "next-auth/react";

export function AuthActions() {
  const { data: session } = useSession();
  const user: User | undefined = session?.user;
  return (
    <div>
      {session?.user?.email} token: {session?.user?.token}
    </div>
  );
}
