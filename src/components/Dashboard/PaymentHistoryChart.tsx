import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Jan", revenue: 171958 },
  { name: "Feb", revenue: 721155 },
  { name: "Mar", revenue: 181932 },
  { name: "Apr", revenue: 1464414 },
  { name: "May", revenue: 309178 },
  { name: "Jun", revenue: 944646 },
  { name: "Jul", revenue: 560533 },
  { name: "Aug", revenue: 1227061 },
  { name: "Sep", revenue: 1796525 },
  { name: "Oct", revenue: 1204320 },
  { name: "Nov", revenue: 1347752 },
  { name: "Dec", revenue: 640193 },
];

const PaymentHistory: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <h3 className="text-lg font-semibold mb-4">Payment History</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentHistory;
