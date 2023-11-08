"use client";
import { useSession } from "next-auth/react";

export function AuthActions() {
  const session = useSession();

  const user = session.data?.user;
  return (
    <div>
      {user?.email} token: {user?.token}
    </div>
  );
}
