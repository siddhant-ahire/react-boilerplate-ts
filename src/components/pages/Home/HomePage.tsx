import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Logout from '../../molecules/Logout';
import useUserStore from '../../../store/userStore';

const HomePage: React.FC = () => {
  const { data, error, isLoading } = useAuth();
  const { user, setUser, clearUser } = useUserStore();

  // useEffect(() => {
  //   console.log(data);
  //   if(data) {
  //     setUser(data.data);
  //   }
  // }, [data])
  // useEffect(() =>  {
  //   console.log(user)
  // }, [user])
  return (
    <>
      Welcome {user?.user_name}
      <Logout />
    </>
  );
};

export default HomePage;
