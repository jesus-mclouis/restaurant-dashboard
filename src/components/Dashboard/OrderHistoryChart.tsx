import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", orders: 50 },
  { month: "Feb", orders: 80 },
  { month: "Mar", orders: 120 },
  { month: "Apr", orders: 150 },
  { month: "May", orders: 90 },
  { month: "Jun", orders: 130 },
  { month: "Jul", orders: 50 },
  { month: "Aug", orders: 120 },
  { month: "Sep", orders: 70 },
  { month: "Oct", orders: 122 },
  { month: "Nov", orders: 130 },
  { month: "Dec", orders: 65 },
];

const OrderStatisticsChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <h3 className="text-lg font-semibold mb-2">Orders Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderStatisticsChart;
