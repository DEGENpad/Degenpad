import React from 'react';

type ButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const CustomButton = ({
  disabled=false,
  isLoading,
  label = 'submit',
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Loading' : null}
      {label}
      {children}
    </button>
  );
};

export default CustomButton;