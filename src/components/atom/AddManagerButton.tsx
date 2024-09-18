import React from "react";
import PlusIcon from "./icons/plus/plus.atom";

const AddManagerButton: React.FC = () => {
  return (
    <button className="w-full flex gap-3 px-6 py-4 items-center cursor-pointer text-xl mt-auto bg-white border border-solid border-[1px_2px_3px_1px] border-[#1E1E1E] shadow-[0_4px_4px_0_rgba(0,0,0,0.4)] rounded-[10px] transition-colors hover:bg-opacity-90">
      <PlusIcon />
      Add Manager
    </button>
  );
};

export default AddManagerButton;
