import Link from "next/link";
import React from "react";
import {
  HomeLink,
  KickViewerLink,
  TrovoViewerLink,
  TwitchFollowerLink,
  TwitchViewerLink,
  YoutubeViewerLink,
} from "../NavButtons/NavButtons";

const Navbar: React.FC = () => {
  return (
    <div>
      <header className="container flex items-center justify-start h-16 px-4 mx-auto rounded bg-gray-50">
        <div className="px-8">
          <Link className="text-3xl font-semibold text-gray-500" href="/">
            ViewerApps
          </Link>
        </div>
        <div className="items-center hidden space-x-8 lg:flex">
          <div className="space-x-8">
            <HomeLink />
            <TwitchViewerLink />
            <TrovoViewerLink />
            <KickViewerLink />
            <YoutubeViewerLink />
            <TwitchFollowerLink />
          </div>
        </div>
        <button className="flex items-center justify-center p-2 lg:hidden">
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
        </button>
      </header>
      <div className="bg-gray-50">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/12 text-center py-0 lg:py-md-0 flex items-center">
            <div className="inline-flex items-center space-x-2 py-5 hover:mb-0">
              <a
                data-anim-type="disabled"
                className="text-black font-bold btn btn-link p-0 text-sm inline-flex items-center"
                href="mailto:hello@viewerapps.com"
                target="_blank"
              >
                <i className="pixicon-email-1 pix-header-icon-format pix-mr-5 pix-header-icon-style"></i>
                <span></span>
              </a>
            </div>
            <div className="inline-flex self-stretch relative mx-2">
              <div
                className="bg-primary-light w-px sm:w-2 pix-header-divider"
                data-color="primary-light"
                data-scroll-color=""
              ></div>
            </div>
            <div
              data-anim-type="disabled"
              className="inline-flex items-center text-sm pix-header-text py-5 text-black font-bold mb-0"
            >
              <span>
                Live Chat: <span className="text-green-500">Online</span>
              </span>
            </div>
          </div>

          <div className="w-full lg:w-4/12 text-center py-0 lg:py-md-0 flex items-center justify-center">
            <div className="inline-flex items-center space-x-2 py-5 hover:mb-0">
              <a
                data-anim-type="disabled"
                className="text-black font-bold btn btn-link p-0 text-sm inline-flex items-center"
                href="/login/"
                target="_blank"
              >
                The easiest way to become Popular on Twitch!
                <i className="font-bold pixicon-angle-right pix-header-icon-format pix-hover-right ml-2"></i>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-4/12 text-center py-0 px-4 lg:py-md-0 flex items-center justify-center lg:justify-end">
            <div className="inline-flex items-center space-x-2 py-5 hover:mb-0">
              <a
                data-anim-type="disabled"
                className="text-black font-bold btn btn-link p-0 text-sm inline-flex items-center"
                href="/login"
              >
                <i className="pixicon-rocket-1 pix-header-icon-format pix-mr-5 pix-header-icon-style"></i>
                <span>Sign In</span>
              </a>
            </div>
            <div className="inline-flex self-stretch relative mx-2">
              <div
                className="bg-primary-light w-px sm:w-2 pix-header-divider"
                data-color="primary-light"
                data-scroll-color=""
              ></div>
            </div>
            <div className="inline-flex items-center space-x-2 py-5 hover:mb-0">
              <a
                data-anim-type="disabled"
                className="text-black font-bold btn btn-link p-0 text-sm inline-flex items-center"
                href="/register"
              >
                <i className="pixicon-crown-1 pix-header-icon-format pix-mr-5 pix-header-icon-style"></i>
                <span>Create an Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
