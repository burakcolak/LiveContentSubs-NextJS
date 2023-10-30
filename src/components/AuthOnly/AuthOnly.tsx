"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

export function AuthOnly({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          You need to be logged in to view this page
        </h2>
        <a
          href="/login"
          className="px-8 py-3 m-2 text-lg font-semibold rounded bg-teal-600 text-gray-50"
        >
          Login
        </a>
      </div>
    );
  }

  return children;
}
