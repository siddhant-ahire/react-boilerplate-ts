import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        variant="danger"
        text="Search"
        onClick={() => console.log('Searching for:', searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
