"use client";
import { ChangeEvent } from "react";
import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  placeholder: string;
  onChange: (e: string) => void;
  value: string;
}

const Input = ({
  className,
  onChange,
  value,
  placeholder,
  ...props
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};

export default Input;
