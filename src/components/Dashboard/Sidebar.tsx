"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation"; // Use usePathname

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
  const pathname = usePathname(); // Get the current route
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { label: "Orders", icon: <OrdersIcon />, route: "/order" },
    { label: "Menu Dishes", icon: <HamburgerIcon />, route: "/menu" },
    { label: "Customers", icon: <ProfileIcon />, route: "/customers" },
    { label: "Payments", icon: <PaymentIcon />, route: "/payments" },
    { label: "Support", icon: <HandShakeIcon />, route: "/support" },
  ];

  // Handler to navigate to the respective route
  const handleItemClick = (route: string) => {
    router.push(route); // Programmatically navigate to the route
  };

  return (
    <div className="overflow-auto scrollbar-hide flex flex-col max-w-[300px] border border-solid border-[#262525] border-opacity-50">
      <LogoComponent />
      <div className="flex flex-col mt-4 px-7 gap-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            // Compare current route with the item's route to highlight the selected one
            isSelected={pathname === item.route}
            onClick={() => handleItemClick(item.route)}
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
