import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
