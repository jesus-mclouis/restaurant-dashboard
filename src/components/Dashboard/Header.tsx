// components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-[#FFFBEC]">
      <div className="flex items-center">
        <img src="/path-to-logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl font-medium text-[#131313]">
          Loop Eats and Deliveries
        </h1>
      </div>
      <div className="text-[#131313]">☀️</div>{" "}
      {/* You can replace this with an actual icon */}
    </header>
  );
};

export default Header;
