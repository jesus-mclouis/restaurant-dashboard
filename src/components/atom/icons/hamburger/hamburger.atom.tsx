import React from "react";

interface HamburgerIconProps {
  size?: number;
  stroke?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  size = 36,
  stroke = "black",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9H30M6 18H30M6 27H30"
        stroke={stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
