import React from 'react';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
  <input placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
