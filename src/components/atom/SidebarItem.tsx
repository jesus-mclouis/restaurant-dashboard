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
      className={`flex items-center px-2 py-3 cursor-pointer transition-colors ${
        isSelected
          ? "border border-solid border-[#0211C2] shadow-[0px_4px_4px_0px_rgba(2,17,194,1)] bg-white bg-opacity-80 rounded-[10px]"
          : "hover:bg-gray-100"
      }`}
      onClick={onClick} // Calls the onClick handler passed from the parent (Sidebar)
    >
      <div className="mr-4">{icon}</div>
      <span
        className={`text-2xl font-fredoka font-normal ${
          isSelected ? "text-[#0211C2]" : "text-[#131313]"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default SidebarItem;
