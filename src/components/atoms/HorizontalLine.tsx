import React from 'react';
import clsx from 'clsx';

type HorizontalLineProps = {
  variant?: 'solid' | 'dashed' | 'dotted'; // Different line styles
  size?: 'small' | 'medium' | 'large'; // Different thickness of the line
  className?: string; // Custom Tailwind classes if needed
};

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  variant = 'solid',
  size = 'medium',
  className,
}) => {
  const variantStyles = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  const sizeStyles = {
    small: 'border-t-2',
    medium: 'border-t-4',
    large: 'border-t-8',
  };

  return (
    <hr
      className={clsx(
        'border-gray-200',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    />
  );
};

export default HorizontalLine;
