import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isLoading = false,
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`rounded-[25px] text-[16px] transition-all px-8 hover:shadow-button font-[500] py-3 ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
