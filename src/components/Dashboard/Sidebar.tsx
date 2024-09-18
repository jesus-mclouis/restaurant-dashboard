"use client";

import React, { useState } from "react";

import LogoComponent from "../atom/LogoComponent";
import SidebarItem from "../atom/SidebarItem";
import AddManagerButton from "../atom/AddManagerButton";
import DashboardIcon from "../atom/icons/dashboard/dashboard.atom";
import OrdersIcon from "../atom/icons/order/order.atom";
import HamburgerIcon from "../atom/icons/hamburger/hamburger.atom";
import ProfileIcon from "../atom/icons/profile/profile.atom";
import PaymentIcon from "../atom/icons/payment/payment.atom";
import HandShakeIcon from "../atom/icons/handshake/handshake.atom";

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Orders", icon: <OrdersIcon /> },
    { label: "Menu Dishes", icon: <HamburgerIcon />},
    { label: "Customers", icon: <ProfileIcon />},
    { label: "Payments", icon: <PaymentIcon />},
    { label: "Support", icon: <HandShakeIcon />},
  ];

  return (
    <div className="overflow-auto scrollbar-hide flex flex-col h-screen max-h-screen w-[300px] border border-solid border-[#262525] border-opacity-50">
      <LogoComponent />
      <div className="flex flex-col mt-4 px-4 gap-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isSelected={selected === item.label}
            onClick={() => setSelected(item.label)}
          />
        ))}
      </div>
      <div className="mt-auto px-6 mb-4 flex items-center cursor-pointer">
        <AddManagerButton />
      </div>
    </div>
  );
};

export default Sidebar;
