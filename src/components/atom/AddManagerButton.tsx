"use client";
import React, { useState } from "react";
import PlusIcon from "./icons/plus/plus.atom"; // Correct path to PlusIcon
import AddManagerForm from "../AddManagerForm"; // Correct path to AddManagerForm

const AddManagerButton: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Add Manager Button */}
      <button
        type="button"
        onClick={toggleForm}
        className="w-full flex gap-3 px-6 py-4 items-center cursor-pointer text-xl mt-auto bg-white border border-solid border-[#1E1E1E] shadow-[0_4px_4px_0_rgba(0,0,0,0.4)] rounded-[10px] transition-colors hover:bg-opacity-90"
      >
        <PlusIcon />
        Add Manager
      </button>

      {/* Full-Page Overlay for the Form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50 shadow-lg">
          {/* Close Button */}
          <button
            onClick={toggleForm}
            className="absolute top-6 right-6 text-2xl font-bold text-gray-600 hover:text-gray-800"
          >
            &times; {/* '×' Close icon */}
          </button>

          {/* Add Manager Form */}
          <div className="w-[90%] md:w-[50%] p-6 border rounded-lg shadow-lg bg-gray-100">
            <AddManagerForm/> {/* Pass the onClose prop */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddManagerButton;
