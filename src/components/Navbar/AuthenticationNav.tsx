import { PagePaths } from "@/models/pagePaths";
import React from "react";

const AuthenticationNav = () => {
  return (
    <div className="text-center flex flex-1 justify-center lg:justify-end items-center space-x-2 divide-x-4">
      <a className="text-black font-bold text-sm" href={PagePaths.Login}>
        <span>Sign In</span>
      </a>
      <a
        className="text-black font-bold text-sm pl-2"
        href={PagePaths.Register}
      >
        <span>Create an Account</span>
      </a>
    </div>
  );
};

export default AuthenticationNav;
