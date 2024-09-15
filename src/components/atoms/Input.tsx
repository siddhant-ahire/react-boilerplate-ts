import React, { forwardRef } from 'react';
import clsx from 'clsx';

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'number'; // Different input types
  size?: 'small' | 'medium' | 'large' | 'login'; // Different sizes for the input
  placeholder?: string; // Placeholder text
  label?: string; // Corrected typo from `lable` to `label`
  value?: string; // Controlled value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  className?: string; // Custom Tailwind classes if needed
  disabled?: boolean; // Disable input
  reactHookFormRegister?: any; // React Hook Form register function
};

// Forward the ref to the input element with a display name
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      size = 'medium',
      placeholder,
      label, // Corrected `lable` to `label`
      value,
      onChange,
      className,
      disabled = false,
      reactHookFormRegister,
    },
    ref // `ref` comes as the second parameter
  ) => {
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
        aria-label={label} // Corrected `lable` to `label`
        ref={ref}
        onChange={onChange}
        className={clsx(
          'border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500',
          sizeStyles[size],
          disabled && 'bg-gray-100 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        {...reactHookFormRegister}
      />
    );
  }
);

// Set display name for better debugging
Input.displayName = 'Input';

export default Input;
