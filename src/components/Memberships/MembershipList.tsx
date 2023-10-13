import React from "react";
import { getMembershipList } from "@/lib/services/MembershipService";
import MembershipRow from "./MembershipRow";

const MembershipList: () => Promise<JSX.Element> = async () => {
  const memberships = await getMembershipList();

  if (!memberships || memberships.length === 0) {
    return <div>No memberships found</div>;
  }

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading">Memberships</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Id#</th>
                <th className="p-3">Utility Name</th>
                <th className="p-3">Min/Max Count</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">End Date</th>
              </tr>
            </thead>
            <tbody>
              {memberships &&
                memberships.map((membership) => {
                  return (
                    <MembershipRow
                      key={membership.identifier}
                      membership={membership}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MembershipList;
