import React from "react";

interface PlusIconProps {
  size?: number;
  stroke?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ size = 42, stroke = "black" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 21H21M21 21H29.75M21 21V12.25M21 21V29.75"
        stroke={stroke}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 36.75C29.6985 36.75 36.75 29.6985 36.75 21C36.75 12.3015 29.6985 5.25 21 5.25C12.3015 5.25 5.25 12.3015 5.25 21C5.25 29.6985 12.3015 36.75 21 36.75Z"
        stroke={stroke}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
