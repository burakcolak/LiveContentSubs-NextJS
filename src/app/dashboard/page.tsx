import UtilityBox from "@/components/Utility/UtilityBox";
import UtilityList from "@/components/Utility/UtilityList";
import { getMembershipList } from "@/lib/services/MembershipService";
import React from "react";

const DashboardPage = async () => {
  const memberships = await getMembershipList();
  const utilities =
    memberships
      ?.filter((membership) => membership.utility !== null)
      .map((membership) => {
        return membership.utility!;
      }) || [];

  return (
    <main>
      <div className="container mx-auto">
        <section className="bg-gray-50 flex justify-center">
          <div className=" w-4/5 pt-8">
            <h1 className="text-3xl font-bold">Bot Control Manager</h1>
            <UtilityList utilities={utilities} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
