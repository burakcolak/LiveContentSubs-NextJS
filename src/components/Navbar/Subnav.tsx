"use client";
import React from "react";
import MemberNav from "./MemberNav";
import AuthenticationNav from "./AuthenticationNav";
import { useSession } from "next-auth/react";

const Subnav = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-50 py-4 ">
      <div className="flex flex-col lg:flex-row mx-4">
        <div className="text-center text-sm text-black font-bold flex flex-1 justify-center lg:justify-start items-center ">
          <span>
            Live Chat: <span className="text-green-500">Online</span>
          </span>
        </div>
        <div className="text-center flex flex-1  justify-center items-center">
          <a
            className="text-black font-bold text-sm items-center"
            href="/login/"
          >
            The easiest way to become Popular on Twitch!
          </a>
        </div>
        {/* TODO: handle expired token & session */}
        {/* {session && session.user ? <MemberNav /> : <AuthenticationNav />} */}
        <MemberNav /> <AuthenticationNav />
      </div>
    </div>
  );
};

export default Subnav;
