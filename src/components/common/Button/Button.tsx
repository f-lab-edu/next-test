"use client";
import React from "react";

interface Buttonprops {
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  onClick,
  className,
  children,
  disabled,
  ...props
}: Buttonprops) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
