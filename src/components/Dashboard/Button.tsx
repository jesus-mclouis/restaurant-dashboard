// components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-[10px]"
      style={{
        borderWidth: "0.5px 0.5px 4px 0.5px",
        borderStyle: "solid",
        borderImageSource: `linear-gradient(0deg, #131313, #131313)`, 
                            
      }}
    >
      {text}
    </button>
  );
};

export default Button;
