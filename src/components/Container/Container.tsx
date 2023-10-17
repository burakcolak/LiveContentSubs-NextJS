import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1/3 max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
        {children}
      </div>
    </div>
  );
};

export default Container;
