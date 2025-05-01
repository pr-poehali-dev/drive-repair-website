
import React from "react";
import { LucideProps, icons } from "lucide-react";

export interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  const IconComponent = icons[name as keyof typeof icons] || icons[fallback];
  
  return <IconComponent {...props} />;
};

export default Icon;
