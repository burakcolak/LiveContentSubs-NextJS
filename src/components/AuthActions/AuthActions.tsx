"use client";

import { useSession } from "next-auth/react";

export function AuthActions() {
  const { data: session } = useSession();
  return <div>{session?.user?.email}</div>;
}
