import React from 'react';
import SearchBar from '../molecules/SearchBar';

const Navbar: React.FC = () => (
  <nav>
    <h1>Logo</h1>
    <SearchBar />
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

export default Navbar;
