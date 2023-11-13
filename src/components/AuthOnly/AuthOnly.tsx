"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";
import Loading from "../Views/Loading";
import { PagePaths } from "@/models/pagePaths";

export const AuthOnly = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <div className="flex flex-col justify-center items-center space-y-4 py-16 bg-gray-50">
        <Loading />
      </div>
    );

  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          You need to be logged in to view this page
        </h2>
        <a
          href={PagePaths.Login}
          className="px-8 py-3 m-2 text-lg font-semibold rounded bg-teal-600 text-gray-50"
        >
          Login
        </a>
      </div>
    );
  }

  if (session && session.user?.isTokenExpired) {
    signOut({ redirect: false });
    return (
      <div className="flex flex-col justify-center items-center space-y-4 py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          Your session has expired, please login again
        </h2>
        <a
          href={PagePaths.Login}
          className="px-8 py-3 m-2 text-lg font-semibold rounded bg-teal-600 text-gray-50"
        >
          Login
        </a>
      </div>
    );
  }

  return children;
};
