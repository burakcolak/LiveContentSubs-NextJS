import React from "react";
import { getMembershipList } from "@/lib/services/MembershipService";
import MembershipRow from "./MembershipRow";
import EmptyView from "../Views/EmptyView";

const MembershipList = async () => {
  const memberships = await getMembershipList();

  if (!memberships || memberships.length === 0) {
    <EmptyView message="No memberships found" />;
  }

  const headers = [
    { label: "Id#", key: "id" },
    { label: "Utility Name", key: "utilityName" },
    { label: "Min/Max Count", key: "minMaxCount" },
    { label: "Start Date", key: "startDate" },
    { label: "End Date", key: "endDate" },
  ];

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading">Memberships</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-left">
                {headers.map((header) => (
                  <th key={header.key} className="p-3">
                    {header.label}
                  </th>
                ))}
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
