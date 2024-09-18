import React from "react";

interface SidebarItemProps {
  label: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center px-6 py-4 cursor-pointer transition-colors ${
        isSelected
          ? "border-[1px_2px_3px_1px] border-solid border-[#0211C2] shadow-[0px_4px_4px_0px_rgba(2,17,194,1)] bg-white bg-opacity-80 rounded-[10px]"
          : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="mr-4">{icon}</div>
      <span className="text-2xl text-[#131313] font-medium">{label}</span>
    </div>
  );
};

export default SidebarItem;
