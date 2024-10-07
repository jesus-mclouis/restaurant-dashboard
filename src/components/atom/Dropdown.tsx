import React, { useState } from "react";

interface DropdownProps {
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onChange }) => {
  const [selected, setSelected] = useState("Monthly");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange(value); // Trigger onChange prop to inform the parent component
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="p-2 border rounded-md text-black bg-white shadow-md"
    >
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Annually">Annually</option>
    </select>
  );
};

export default Dropdown;
