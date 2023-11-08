import Link from "next/link";
import React from "react";
import {
  HomeLink,
  KickViewerLink,
  TrovoViewerLink,
  TwitchFollowerLink,
  TwitchViewerLink,
  YoutubeViewerLink,
} from "./NavButtons/NavButtons";
import Subnav from "./Subnav";
import { AuthProvider } from "../AuthProvider/AuthProvider";

const Navbar: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-start h-16 px-4 mx-auto rounded bg-gray-50">
        <div className="pr-8">
          <Link className="text-3xl font-semibold text-gray-500" href="/">
            ViewerApps
          </Link>
        </div>
        <div className="flex justify-between space-x-8">
          <HomeLink />
          <TwitchViewerLink />
          <TrovoViewerLink />
          <KickViewerLink />
          <YoutubeViewerLink />
          <TwitchFollowerLink />
        </div>

        {/* <button className="flex items-center justify-center p-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
      </header>
      <AuthProvider>
        <Subnav />
      </AuthProvider>
    </div>
  );
};

export default Navbar;
