import React, { useRef } from 'react';
import Icon from '../../atoms/Icon';
import { LogoIcon } from '../../../assets/icons/Icons';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import HorizontalLine from '../../atoms/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import useTokenStore from '../../../store/tokenStore';
import { useMutation } from 'react-query';
import { googleLoginAPI, login } from '../../../services/authService';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setToken(response.data);
      navigate('/dashboard/home');
    },
  });

  const handleLoginSubmit = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log('data', { email, password });

    if (!email || !password) {
      return alert('Please enter email and password');
    }

    mutation.mutate({ user_email: email, user_password: password });
  };

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
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center transform -translate-y-10 gap-5">
        <Icon src={LogoIcon} />
        <p>Welcome Back</p>
        <Card size="large" className="bg-gray-10 flex flex-col gap-5 p-10">
          <div>
            <h6>Email</h6>
            <Input
              ref={emailRef}
              type="email"
              label="Email"
              size="login"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <h6>Password</h6>
            <Input
              ref={passwordRef}
              type="password"
              label="Password"
              size="login"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Button
              text="Sign In"
              size="login"
              variant="primary"
              onClick={handleLoginSubmit}
              isLoading={mutation.isLoading}
              disabled={mutation.isLoading}
            />
          </div>
          <p>Forgot Password</p>
          <HorizontalLine size="small" />
          <div className="mx-auto">
            <GoogleLogin
              width={'100%'}
              useOneTap
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
