// pages/dashboard.tsx
"use client";

import React from "react";
import PageLayout from "./layout";
import OrderDetailsTable from "../Dashboard/OrderDetailsTable";
import OrderSummary from "../Dashboard/OrderSummary";
import OrderStatisticsChart from "../Dashboard/OrderHistoryChart";

const OrderPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex gap-4">
        <OrderSummary />
        <OrderStatisticsChart />
      </div>
      <OrderDetailsTable />
    </PageLayout>
  );
};

export default OrderPage;
