// components/Divider.tsx
import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`bg-[#285478] w-full h-[1px] ${className}`} />;
};

export default Divider;
