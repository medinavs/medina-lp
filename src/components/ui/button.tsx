import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  size = "sm",
}) => {
  const style = `inline-flex items-center justify-center
    cursor-pointer whitespace-nowrap rounded-md text-sm
    font-medium transition-colors focus-visible:outline-none
    focus-visible:ring-1 focus-visible:ring-ring
    disabled:pointer-events-none disabled:opacity-50
    `;

  const variants = {
    default:
      "bg-[hsl(210,100%,30%)] text-[hsl(0,0%,100%)] shadow hover:bg-[hsl(210,100%,40%)] transition-all duration-400",
    secondary: "",
  };

  const sizeMap = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${variants[variant]} ${sizeMap[size]} ${style} ${className}`}
    >
      {children}
    </button>
  );
};
