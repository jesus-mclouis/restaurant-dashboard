// components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[24px] font-[400] leading-[29.04px] text-[#131313]"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="border-[1px] border-[#131313] rounded-[10px] p-2"
      />
    </div>
  );
};

export default InputField;
