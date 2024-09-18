import React from "react";

interface HandShakeIconProps {
  size?: number;
  stroke?: string;
}

const HandShakeIcon: React.FC<HandShakeIconProps> = ({
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
        d="M16.5 12L14.1334 10.8167C13.7169 10.6084 13.2575 10.5 12.7918 10.5H11.7426C10.947 10.5 10.1839 10.8161 9.62131 11.3787L8.37869 12.6213C7.81607 13.1839 7.5 13.947 7.5 14.7426V22.3944C7.5 23.3975 8.0013 24.3342 8.8359 24.8906L14.6362 28.7574C15.7416 29.4945 17.2002 29.4165 18.2208 28.566L25.5 22.5"
        stroke={stroke}
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
      <path
        d="M21.6823 19.3713C20.7772 18.1593 19.1115 17.8108 17.7964 18.5581L15.0135 20.1399C14.1195 20.648 12.9962 20.4962 12.269 19.7691C11.3191 18.819 11.3899 17.2584 12.4219 16.3984L18.6655 11.1953C19.2048 10.746 19.8843 10.5 20.5861 10.5H21.7918C22.2576 10.5 22.7169 10.6084 23.1334 10.8167L26.8416 12.6708C27.858 13.179 28.5 14.2178 28.5 15.3542V19.4694C28.5 22.3555 24.8233 23.577 23.0964 21.2646L21.6823 19.3713Z"
        stroke={stroke}
        strokeWidth="2.66667"
        strokeLinecap="square"
      />
      <path
        d="M1.5 25.5V12"
        stroke={stroke}
        strokeWidth="2.66667"
        strokeLinecap="square"
      />
      <path
        d="M34.5 25.5V12"
        stroke={stroke}
        strokeWidth="2.66667"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default HandShakeIcon;
