import React from 'react';
import useAuth from '../../../hooks/useAuth';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useAuth();
  console.log(data, error, isLoading);
  return <>Dashboard template</>;
};

export default HomePage;
