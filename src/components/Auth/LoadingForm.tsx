import React from "react";

const LoadingForm = () => {
  return (
    <div>
      <div className="h-48 rounded-t bg-gray-300"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
        <div className="flex items-center justify-center space-x-8">
          <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
          <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
          <div className="w-4 h-4 rounded-full animate-ping bg-teal-600"></div>
        </div>
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-3/4 h-6 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LoadingForm;
