// pages/payment.tsx
"use client";

import React from "react";
import PageLayout from "./layout";
import StatsCardSection from "../Dashboard/sections/StatsCardSection";
import PaymentHistory from "../Dashboard/PaymentHistoryChart";
import Notifications from "../Dashboard/Notification";

// Define a mock list of payments with customer name, amount, date, and status
const paymentData = [
  { id: 1, customer: "John Doe", amount: 150000, date: "2024-10-10", status: "Completed" },
  { id: 2, customer: "Jane Smith", amount: 200000, date: "2024-10-09", status: "Pending" },
  { id: 3, customer: "Samuel Adams", amount: 120500, date: "2024-10-08", status: "Failed" },
  { id: 4, customer: "Alice Johnson", amount: 180000, date: "2024-10-07", status: "Completed" },
  { id: 5, customer: "Bob Marley", amount: 75000, date: "2024-10-06", status: "Pending" },
  { id: 6, customer: "Michael Carter", amount: 90000, date: "2024-10-05", status: "Completed" },
  { id: 7, customer: "Nancy Davis", amount: 110000, date: "2024-10-04", status: "Completed" },
  { id: 8, customer: "Peter Johnson", amount: 95000, date: "2024-10-03", status: "Failed" },
  { id: 9, customer: "Linda White", amount: 145000, date: "2024-10-02", status: "Pending" },
  { id: 10, customer: "George Harrison", amount: 130000, date: "2024-10-01", status: "Completed" },
];

const PaymentsPage: React.FC = () => {
  return (
    <PageLayout>
      {/* Payment History and Notifications above the table */}
      <div className="flex gap-4 mb-8">
        <PaymentHistory />
        <Notifications />
      </div>

      <StatsCardSection />
      
      {/* Payment List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Customer Payments</h2>
        
        <table className="min-w-full table-auto bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Amount (CFA)</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{payment.customer}</td>
                <td className="px-4 py-2">{formatCurrency(payment.amount)}</td>
                <td className="px-4 py-2">{payment.date}</td>
                <td className={`px-4 py-2 font-semibold ${getStatusClass(payment.status)}`}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
};

// Function to determine status class for styling
const getStatusClass = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-600";
    case "Pending":
      return "text-yellow-500";
    case "Failed":
      return "text-red-500";
    default:
      return "text-gray-600";
  }
};

// Function to format amount in CFA
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(amount);
};

export default PaymentsPage;
