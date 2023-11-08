import Link from "next/link";
import React from "react";

type Props = {
  message: string;
};

const EmptyView = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-gray-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </svg>
      <p className="text-gray-600 text-lg my-4">{message}</p>
      <Link
        href="/"
        className="px-8 py-3 font-semibold rounded bg-teal-600 text-gray-50"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default EmptyView;
