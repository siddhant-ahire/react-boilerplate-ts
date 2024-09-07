import React from 'react';
import clsx from 'clsx';

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'number'; // Different input types
  size?: 'small' | 'medium' | 'large' | 'login'; // Different sizes for the input
  placeholder?: string; // Placeholder text
  lable?: string;
  value?: string; // Controlled value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Custom Tailwind classes if needed
  disabled?: boolean; // Disable input
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'medium',
  placeholder,
  lable,
  value,
  onChange,
  className,
  disabled = false,
}) => {
  const sizeStyles = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-3 py-2',
    large: 'text-lg px-4 py-3',
    login: 'w-full px-2 py-2 text-base',
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      aria-label={lable}
      onChange={onChange}
      className={clsx(
        'border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500',
        sizeStyles[size],
        disabled && 'bg-gray-100 cursor-not-allowed',
        className
      )}
      disabled={disabled}
    />
  );
};

export default Input;
