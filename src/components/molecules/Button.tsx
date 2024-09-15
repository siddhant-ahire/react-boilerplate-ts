import React from 'react';
import clsx from 'clsx';
import Loader from '../atoms/Loader'; // Import the Loader component

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'link'; // Add 'link' as a variant
  size?: 'none' | 'small' | 'medium' | 'large' | 'login';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string; // Custom Tailwind classes
};

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  className,
}) => {
  const baseStyles =
    'rounded-lg font-semibold focus:outline-none focus:ring flex items-center justify-center';
  const variantStyles = {
    primary:
      'bg-neutral-800 text-white hover:bg-neutral-900 focus:ring-neutral-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    link: 'text-blue-500 hover:underline focus:ring-transparent', // Add link-specific styles
  };

  const sizeStyles = {
    none: '',
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
    login: 'w-full px-2 py-2 text-base',
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
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled || isLoading}
      aria-label={text}
    >
      {isLoading ? <Loader size={size} variant={variant} /> : text}
    </button>
  );
};

export default Button;
