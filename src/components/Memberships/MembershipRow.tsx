import React from "react";
import { MembershipListResponse } from "@/lib/services/MembershipService";

type Props = {
  membership: MembershipListResponse;
};

const MembershipRow = ({ membership }: Props) => {
  return (
    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
      <td className="p-3">
        <p>{membership.identifier}</p>
      </td>
      <td className="p-3">
        <p>{membership.utility?.name}</p>
      </td>
      <td className="p-3">
        <p>{`${membership.utility?.minCount}/${membership.utility?.maxCount}`}</p>
      </td>
      <td className="p-3">
        <p>{membership.startDate ?? "N/A"}</p>
      </td>
      <td className="p-3">
        <p>{membership.endDate ?? "N/A"}</p>
      </td>
    </tr>
  );
};

export default MembershipRow;
