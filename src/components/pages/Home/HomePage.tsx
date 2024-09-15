import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Logout from '../../molecules/Logout';
import useUserStore from '../../../store/userStore';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useAuth();
  const { user, setUser, clearUser } = useUserStore();

  useEffect(() => {
    if (data) {
      setUser(data.data);
    }
  }, [data, setUser]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome {user?.user_name}</h1>
      <Logout />
    </div>
  );
};

export default HomePage;
