import { AuthOnly } from "@/components/AuthOnly/AuthOnly";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import MembershipList from "@/components/Memberships/MembershipList";
import React from "react";

const MembershipPage = () => {
  return (
    <>
      <AuthProvider>
        <AuthOnly>
          <MembershipList />
        </AuthOnly>
      </AuthProvider>
    </>
  );
};

export default MembershipPage;
