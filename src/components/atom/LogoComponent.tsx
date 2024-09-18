import Image from "next/image";
import React from "react";

const LogoComponent: React.FC = () => {
  return (
    <div className="flex items-center pl-0 py-4">
      <Image
        src="/images/logo.png"
        alt="Loop Eats & Deliveries Logo"
        width={400}
        height={400}
        className="w-full h-full"
      />
    </div>
  );
};

export default LogoComponent;
