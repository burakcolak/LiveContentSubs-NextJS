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
import { ShoppingCartIcon } from "../Icons/ShoppingCartIcon";

const Navbar: React.FC = () => {
  return (
    <div className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="text-lg">ViewerApps</div>
      <div className="space-x-4">
        <HomeLink />
        <TwitchViewerLink />
        <TrovoViewerLink />
        <KickViewerLink />
        <YoutubeViewerLink />
        <TwitchFollowerLink />
      </div>
      <div className="ml-4">
        Cart:
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Navbar;
