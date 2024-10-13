import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Image from "next/image";

interface StatsCardProps {
  title: string;
  count: number;
  percentage?: string;
  isIncrease?: boolean;
  description: string;
  iconSrc: string;
  backgroundStyle: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  percentage,
  isIncrease,
  description,
  iconSrc,
  backgroundStyle,
}) => {
  // Conditional border styles for "Total Revenue"
  const isTotalRevenue = title === "Total Revenue";

  return (
    <div
      className={`rounded-lg p-4 flex justify-between items-center ${backgroundStyle} border w-max`}
      style={{
        borderColor: isTotalRevenue ? "#075C29" : "rgba(17, 17, 17, 0.78)",
        borderWidth: isTotalRevenue ? "1px" : "0.38px",
        borderStyle: "solid",
        boxShadow: "0px 20px 60px rgba(165, 165, 165, 0.2)",
      }}
    >
      {/* Left Section */}
      <div>
        <div className="text-4xl font-bold">{count}</div>
        <div className="flex items-center space-x-1">
          {isIncrease ? (
            <FiArrowUpRight className="text-green-500" />
          ) : (
            <FiArrowDownRight className="text-red-500" />
          )}
          <span className="text-sm">{percentage}</span>
        </div>
        <div className="mt-1 font-medium">{title}</div>
        <div className="text-sm">{description}</div>
      </div>

      {/* Right Section */}
      <div className={`${isTotalRevenue ? "relative w-16 h-16" : "relative w-16 h-16"}`}>
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={`${isTotalRevenue ? 200 : 100}`}
          height={`${isTotalRevenue ? 200 : 100}`}
          className={`object-contain ${
            isTotalRevenue ? "" : "absolute -bottom-9"
          }`}
        />
      </div>
    </div>
  );
};

export default StatsCard;
