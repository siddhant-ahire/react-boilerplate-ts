import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenStore from '../../store/tokenStore';
import { useMutation } from 'react-query';
import { googleLoginAPI } from '../../services/authService';
import { GoogleLogin } from '@react-oauth/google';

const GoogleButton: React.FC = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  const googleLoginMutation = useMutation({
    mutationFn: googleLoginAPI,
    onSuccess: (response) => {
      setToken(response.data);
      navigate('/dashboard/home');
    },
  });

  const handleGoogleLogin = (response: any) => {
    googleLoginMutation.mutate({ token: response.credential });
  };
  return (
    <div className="mx-auto">
      <GoogleLogin
        width="500"
        logo_alignment="center"
        text="continue_with"
        useOneTap
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};

export default GoogleButton;
