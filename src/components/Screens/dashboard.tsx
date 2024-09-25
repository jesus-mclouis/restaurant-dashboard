import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";
import StatsCardSection from "../Dashboard/sections/StatsCardSection";
import LoginForm from "../Auth/LoginForm";


const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1 grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <StatsCardSection />
            {/* <PaymentHistory />
            <PopularMenuDishes /> */}
          </div>
          {/* <div className="space-y-4">
            <Notifications />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
