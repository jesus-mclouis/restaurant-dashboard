import React, { useState } from "react";
import Dropdown from "../atom/Dropdown";

const OrderSummary: React.FC = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
    // You can add any logic here to update data based on the selected timeframe
  };

  // Example logic to change the amount based on the timeframe
  const getTotalOrdersForTimeframe = () => {
    switch (timeframe) {
      case "Weekly":
        return "XAF 1,230,000"; // Example weekly data
      case "Annually":
        return "XAF 60,000,000"; // Example annual data
      default:
        return "XAF 5,130,000"; // Default is monthly
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/2">
      <h3 className="text-lg font-semibold mb-2">Orders Summary</h3>
      <p className="text-sm mb-4">
        Summary of total orders in Danshiki Restaurant
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl font-bold">{getTotalOrdersForTimeframe()}</div>
        <Dropdown onChange={handleTimeframeChange} />
      </div>
      <p className="text-sm text-gray-500">From XAF 500,000</p>
      <button className="mt-4 inline-flex items-center text-[#0211C2]">
        Manage Order <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default OrderSummary;
