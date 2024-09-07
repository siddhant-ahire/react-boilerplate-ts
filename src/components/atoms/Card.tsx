import React from 'react';
import clsx from 'clsx';

type CardProps = {
  size?: 'small' | 'medium' | 'large'; // Different sizes for the card
  className?: string; // Custom Tailwind classes if needed
  children?: React.ReactNode; // Allows any content to be passed as children
};

const Card: React.FC<CardProps> = ({
  size = 'medium',
  className,
  children,
}) => {
  const sizeStyles = {
    small: 'w-64 h-32', // Example dimensions for small
    medium: 'w-80 h-40', // Example dimensions for medium
    large: 'min-w-96', // Example dimensions for large
  };

  return (
    <div
      className={clsx(
        'border border-gray-300 rounded p-4', // Base styles
        sizeStyles[size], // Apply size styles
        className // Custom classes if needed
      )}
    >
      {children} {/* Render children content */}
    </div>
  );
};

export default Card;
