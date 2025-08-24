import React from "react";

interface ButtonProps {
  titleBtn: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ titleBtn, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase cursor-pointer mt-8 tracking-widest transition-all duration-300
                 ${className || ""}`}
    >
      {titleBtn}
    </button>
  );
};

export default Button;
