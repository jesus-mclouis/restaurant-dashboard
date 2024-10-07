// pages/dashboard.tsx
"use client";

import React from "react";
import PageLayout from "./layout";
import StatsCardSection from "../Dashboard/sections/StatsCardSection";
import PaymentHistory from "../Dashboard/PaymentHistoryChart";
import Notifications from "../Dashboard/Notification";
import OrderDetailsTable from "../Dashboard/OrderDetailsTable";

const DashboardPage: React.FC = () => {
  return (
    <PageLayout>
      <StatsCardSection />
      <div className="flex gap-4">
        <PaymentHistory />
        <Notifications />
      </div>
      <OrderDetailsTable />
    </PageLayout>
  );
};

export default DashboardPage;
