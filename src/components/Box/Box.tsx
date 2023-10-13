import React from "react";

type Props = {
  text: string;
};

function Box({ text }: Props) {
  return (
    <div className="flex items-center justify-center h-24 p-2 space-x-4 rounded-2xl bg-gray-50">
      <p className="text-xl font-semibold">
        <b>{text}</b>
      </p>
    </div>
  );
}

export default Box;
