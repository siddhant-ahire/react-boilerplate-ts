import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string; // Custom Tailwind classes
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  className,
}) => {
  const baseStyles = 'rounded-lg font-semibold focus:outline-none focus:ring';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled || isLoading}
      aria-label={text}
    >
      {isLoading ? 'Loading...' : text}
    </button>
  );
};

export default Button;
