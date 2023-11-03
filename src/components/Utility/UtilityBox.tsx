"use client";
import React from "react";
import Slider from "../Box/Slider";
import { UtilityResponse } from "@/lib/services/MembershipService";

type UtilityProps = {
  utilityIdentifier: string;
  utility: UtilityResponse;
  botRequest: (
    viewerCount: number,
    utilityIdentifier: string
  ) => Promise<boolean>;
};

const UtilityBox = ({
  utilityIdentifier,
  utility,
  botRequest,
}: UtilityProps) => {
  const [sliderSelectedValue, setSliderSelectedValue] = React.useState(
    utility.minCount
  );
  const [isLoading, setIsLoading] = React.useState(false);
  function handleChange(sliderSelectedValue: number) {
    setSliderSelectedValue(sliderSelectedValue);
    console.log(sliderSelectedValue);
  }

  async function handleButtonClick() {
    setIsLoading(true);
    const response = await botRequest(sliderSelectedValue, utilityIdentifier);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("waited response is ", response);
    setIsLoading(false);
  }

  return (
    <div className="border-indigo-600 border-2 shadow-xl rounded-md">
      <div className="p-8">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{utility.name}</span>
          <span className="bg-indigo-600 rounded-md text-white p-1 text-sm">
            {utility.maxCount} Viewers
          </span>
        </div>
        <div className="py-4">
          <span>Viewer Count: {sliderSelectedValue}</span>
          <Slider
            min={utility.minCount}
            max={utility.maxCount}
            step={5}
            value={sliderSelectedValue}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleButtonClick}
          disabled={isLoading}
          className={`w-full px-8 py-4 font-semibold rounded-md bg-indigo-600 text-gray-50 mt-4
          ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
              <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
            </div>
          ) : (
            "START & UPDATE"
          )}
        </button>
      </div>
    </div>
  );
};

export default UtilityBox;
