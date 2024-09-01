import React from 'react';
import Input from '../atoms/Input';

type FormGroupProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormGroup: React.FC<FormGroupProps> = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <Input placeholder={label} value={value} onChange={onChange} />
  </div>
);

export default FormGroup;
