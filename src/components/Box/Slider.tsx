"use client";
import React from "react";

type SliderProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

const Slider = ({ min, max, step, value, onChange }: SliderProps) => {
  const sliderRangeElements = [];
  for (let i = min; i <= max; i += step) {
    sliderRangeElements.push(i);
  }

  return (
    <div className="flex flex-col space-y-2 p-2 w-80">
      <input
        type="range"
        className="w-full accent-indigo-600"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {/* <ul className="flex justify-between w-full px-[10px]">
        {sliderRangeElements.map((val, index) => (
          <li key={index} className="flex justify-center relative">
            <span className="absolute">{val}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Slider;
