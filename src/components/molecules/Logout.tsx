import React from 'react';
import { logout } from '../../services/authService';
import Button from './Button';
import useTokenStore from '../../store/tokenStore';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  async function reloadLogout(): Promise<void> {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
    setToken('');
    navigate('/auth/login');
  }
  return (
    <>
      <Button text="Logout" onClick={reloadLogout} />
    </>
  );
};

export default Logout;
