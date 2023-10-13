"use client";

import { User } from "next-auth";
import { useSession } from "next-auth/react";

export function AuthActions() {
  // const { data: session } = useSession();
  const session = useSession();

  const user = session.data?.user;
  return (
    <div>
      {user?.email} token: {user?.token}
    </div>
  );
}
