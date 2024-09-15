import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Icon from '../../atoms/Icon';
import { LogoIcon } from '../../../assets/icons/Icons';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import HorizontalLine from '../../atoms/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import useTokenStore from '../../../store/tokenStore';
import { useMutation } from 'react-query';
import { login } from '../../../services/authService';
import GoogleButton from '../../molecules/GoogleButton';

// Define form input types
type LoginFormInputs = {
  user_email: string;
  user_password: string;
};

// Define the Yup schema for validation
const loginSchema = Yup.object().shape({
  user_email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  user_password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  // Initialize useForm with Yup schema resolver and "onChange" mode
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange', // This will trigger validation on change
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setToken(response.data);
      navigate('/dashboard/home');
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center transform -translate-y-10 gap-5">
        <Icon src={LogoIcon} />
        <p>Welcome Back</p>
        <Card size="large" className="bg-gray-10 flex flex-col gap-5 p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <h6>Email</h6>
              <Input
                reactHookFormRegister={{
                  ...register('user_email', { required: 'Email is required' }),
                }}
                type="text"
                label="Email"
                size="login"
                placeholder="Enter your email"
              />
              {errors.user_email && (
                <p className="text-red-500">{errors.user_email.message}</p>
              )}
            </div>
            <div>
              <h6>Password</h6>
              <Input
                reactHookFormRegister={{
                  ...register('user_password', {
                    required: 'Password is required',
                  }),
                }}
                type="password"
                label="Password"
                size="login"
                placeholder="Enter your password"
              />
              {errors.user_password && (
                <p className="text-red-500">{errors.user_password.message}</p>
              )}
            </div>
            <div>
              <Button
                text="Sign In"
                size="login"
                variant="primary"
                type="submit"
                isLoading={isSubmitting || mutation.isLoading}
                disabled={isSubmitting || mutation.isLoading}
              />
            </div>
          </form>
          <div className="flex justify-between">
            <Button
              text="forgot password"
              onClick={() => navigate('/auth/forgot-password')}
              size="none"
              variant="link"
            />
            <Button
              text="Sign Up"
              onClick={() => navigate('/auth/register')}
              size="none"
              variant="link"
            />
          </div>
          <HorizontalLine size="small" />
          <GoogleButton />
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
