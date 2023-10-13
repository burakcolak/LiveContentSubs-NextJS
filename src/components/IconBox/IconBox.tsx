import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JsxAttribute } from "typescript";

type Props = {
  icon: JSX.Element;
  text?: string;
};

function IconBox({ icon, text }: Props) {
  return (
    <div className="flex items-center justify-center h-24 p-2 space-x-4 rounded-2xl bg-gray-50">
      <div className="w-8 h-8  text-sky-500 flex items-center justify-center ">
        {icon}
      </div>
      {text && (
        <p className="text-xl font-semibold">
          <b>{text}</b>
        </p>
      )}
    </div>
  );
}

export default IconBox;
