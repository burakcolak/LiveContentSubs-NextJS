"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

export function AuthOnly({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  if (!session) {
    return <div>this page is auth only</div>;
  }

  return children;
}
