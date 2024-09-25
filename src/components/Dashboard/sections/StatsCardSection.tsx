import React from "react";
import StatsCard from "../StatsCard";

const StatsCardSection: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <StatsCard
        title="Total Menus"
        count={102}
        percentage="37.8%"
        isIncrease={true}
        description="5 new menus added"
        iconSrc="/path/to/menus-icon.png"
        backgroundStyle="bg-gradient-to-b from-[#0211C2] via-[#6248FF] to-[#0211C2]"
      />
      <StatsCard
        title="Total Orders"
        count={58}
        percentage="5.2%"
        isIncrease={false}
        description="2 new orders just now"
        iconSrc="/path/to/orders-icon.png"
        backgroundStyle="bg-gradient-to-b from-[#FF4876] via-[#FF6A55] to-[#FF4848]"
      />
      <StatsCard
        title="Total Customers"
        count={192}
        percentage="15.2%"
        isIncrease={true}
        description="15 new clients"
        iconSrc="/path/to/customers-icon.png"
        backgroundStyle="bg-gradient-to-b from-[#FFFFFF] via-[#075C29] to-[#075C29]"
      />
    </div>
  );
};

export default StatsCardSection;
