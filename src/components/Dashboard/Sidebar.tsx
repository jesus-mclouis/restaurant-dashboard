"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import LogoComponent from "../atom/LogoComponent";
import SidebarItem from "../atom/SidebarItem";
import AddRestaurantButton from "@/components/atom/AddRestaurantButton";
import AddManagerButton from "@/components/atom/AddManagerButton"; // Import the AddManagerButton
import DashboardIcon from "../atom/icons/dashboard/dashboard.atom";
import OrdersIcon from "../atom/icons/order/order.atom";
import HamburgerIcon from "../atom/icons/hamburger/hamburger.atom";
import ProfileIcon from "../atom/icons/profile/profile.atom";
import PaymentIcon from "../atom/icons/payment/payment.atom";
import HandShakeIcon from "../atom/icons/handshake/handshake.atom";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { label: "Orders", icon: <OrdersIcon />, route: "/order" },
    { label: "Menu Dishes", icon: <HamburgerIcon />, route: "/menu" },
    { label: "Customers", icon: <ProfileIcon />, route: "/customers" },
    { label: "Payments", icon: <PaymentIcon />, route: "/payments" },
    { label: "Support", icon: <HandShakeIcon />, route: "/support" },
  ];

  const handleItemClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="overflow-auto scrollbar-hide flex flex-col max-w-[300px] border border-solid border-[#262525] border-opacity-50">
      {/* Logo Section */}
      <LogoComponent />

      {/* Menu Items */}
      <div className="flex flex-col mt-4 px-7 gap-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isSelected={pathname === item.route}
            onClick={() => handleItemClick(item.route)}
          />
        ))}
      </div>

      {/* Add Buttons Section */}
      <div className="mt-auto px-6 mb-4 flex flex-col gap-3">
        {/* Add Restaurant Button */}
        <AddRestaurantButton />

        {/* Add Manager Button */}
        <AddManagerButton />
      </div>
    </div>
  );
};

export default Sidebar;
