import React from "react";

interface Props {}

const DrawerButton: React.FC<Props> = () => {
  return (
    <button
      title="button"
      className="flex appearance-none p-1 text-gray-500 md:hidden"
    >
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 256 256">
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    </button>
  );
};

export default DrawerButton;
