import React from 'react';
import clsx from 'clsx';

// Define the type for the loader props
type LoaderProps = {
  size?: 'none' | 'small' | 'medium' | 'large' | 'login'; // Define size prop
  variant?: 'primary' | 'secondary' | 'danger' | 'link'; // Define variant prop for colors
};

// Create the Loader component
const Loader: React.FC<LoaderProps> = ({
  size = 'medium',
  variant = 'primary',
}) => {
  // Define size styles for the loader
  const sizeStyles = {
    none: '',
    small: 'h-4 w-4',
    medium: 'h-5 w-5',
    large: 'h-6 w-6',
    login: 'h-8 w-8',
  };

  // Define color variants for the loader
  const variantStyles = {
    primary: 'text-white',
    secondary: 'text-gray-400',
    danger: 'text-red-500',
    link: '',
  };

  // Combine the styles using clsx
  const classes = clsx(
    'animate-spin',
    sizeStyles[size],
    variantStyles[variant]
  );

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
};

export default Loader;
