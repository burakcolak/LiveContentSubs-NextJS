import React from "react";

const MemberNav = () => {
  return (
    <div className="text-center flex flex-1 justify-center lg:justify-end items-center space-x-2 divide-x-4">
      <a className="text-black font-bold text-sm" href="/memberships">
        <span>Membership</span>
      </a>
      <a className="text-black font-bold text-sm pl-2" href="/orders">
        <span>My Orders</span>
      </a>
    </div>
  );
};

export default MemberNav;
