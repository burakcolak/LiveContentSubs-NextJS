"use client";
import React from "react";
import UtilityBox from "./UtilityBox";
import { UtilityResponse } from "@/lib/services/MembershipService";
import EmptyView from "../Box/EmptyView";
import { createBotRequest } from "@/lib/services/BotRequestService";

type Props = {
  utilities: UtilityResponse[];
};

function UtilityList({ utilities }: Props) {
  async function createBotRequest(
    viewerCount: number,
    utilityIdentifier: string
  ): Promise<boolean> {
    try {
      const response = await fetch(`/api/bot-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ viewerCount, utilityIdentifier }),
      });

      if (response.status === 200) {
        console.log("response success", response);
        return true;
      }

      console.log("button clicked", viewerCount, utilityIdentifier, response);
      return false;
    } catch (error: any) {
      console.log("Error creating bot request", error);
      return false;
    }
  }

  return (
    <>
      {utilities ? (
        <div className="grid grid-cols-3 justify-between gap-8 py-12">
          {utilities.map((utility) => {
            return (
              <UtilityBox
                utilityIdentifier={utility.identifier}
                utility={utility}
                botRequest={createBotRequest}
              />
            );
          })}
        </div>
      ) : (
        <EmptyView message="No Utility available" />
      )}
    </>
  );
}

export default UtilityList;
