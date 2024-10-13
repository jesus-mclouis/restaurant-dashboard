// components/PageLayout.tsx
"use client";

import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "../Dashboard/Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1 space-y-4 bg-[#DFD7FF] bg-opacity-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
