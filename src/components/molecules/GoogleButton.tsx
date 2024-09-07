import React from 'react';
import clsx from 'clsx';
import Loader from '../atoms/Loader'; // Import the Loader component
import Icon from '../atoms/Icon';
import { GoogleIcon } from '../../assets/icons/Icons';

type GoogleButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'login';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string; // Custom Tailwind classes
};

const GoogleButton: React.FC<GoogleButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  className,
}) => {
  const baseStyles =
    'rounded-lg font-semibold focus:outline-none focus:ring flex items-center justify-center gap-2';
  const variantStyles = {
    primary: 'bg-white text-black hover:bg-gray-50 focus:ring-gray-200',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  };
  const sizeStyles = {
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
      onClick={onClick}
      className={classes}
      disabled={disabled || isLoading}
      aria-label={text}
    >
      {isLoading ? (
        <Loader size={size} variant="secondary" />
      ) : (
        <>
          <Icon src={GoogleIcon} size="small" />
          {text}
        </>
      )}
    </button>
  );
};

export default GoogleButton;
