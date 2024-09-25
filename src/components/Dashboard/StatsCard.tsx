import React from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Image from "next/image";

interface StatsCardProps {
  title: string;
  count: number;
  percentage: string;
  isIncrease: boolean;
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
  return (
    <div
      className={`rounded-lg p-4 flex justify-between items-center ${backgroundStyle} border`}
      style={{
        borderImageSource:
          "linear-gradient(173.17deg, rgba(17, 17, 17, 0.78) 78%, rgba(40, 40, 40, 0) 0%)",
        borderWidth: "0.38px",
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
      <div className="w-16 h-16">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default StatsCard;
