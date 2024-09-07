import React from 'react';
import clsx from 'clsx';

type IconProps = {
  src: string; // Path to the image file
  size?: 'small' | 'medium' | 'large'; // Different sizes for the logo
  color?: 'primary' | 'secondary' | 'white'; // Color variants for the logo
  className?: string; // Custom Tailwind classes if needed
};

const Icon: React.FC<IconProps> = ({
  src = 'string', // Path to the image file
  size = 'medium',
  color = 'primary',
  className,
}) => {
  // Define the base styles and variants for the logo component
  const baseStyles = 'flex items-center';

  const sizeStyles = {
    small: 'h-8 w-8', // Height and width for icon-only or image logos
    medium: 'h-10 w-10',
    large: 'h-12 w-12',
  };

  const colorStyles = {
    primary: 'text-neutral-800',
    secondary: 'text-gray-600',
    white: 'text-white',
  };

  return (
    <div
      className={clsx(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        className
      )}
    >
      <img src={src} alt="Logo Icon" className={sizeStyles[size]} />
    </div>
  );
};

export default Icon;
