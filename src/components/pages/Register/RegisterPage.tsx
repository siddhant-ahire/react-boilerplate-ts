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
import GoogleButton from '../../molecules/GoogleButton';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { register_user } from '../../../services/authService';
import { toast } from 'react-toastify';

// Define form input types
type RegisterFormInputs = {
  user_name: string;
  user_email: string;
  user_password: string;
  confirm_password: string;
};

// Define the Yup schema for validation
const registerSchema = Yup.object().shape({
  user_name: Yup.string().required('Name is required'),
  user_email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  user_password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('user_password'), ''], 'Passwords must match')
    .required('Please confirm your password'),
});

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  // Initialize useForm with Yup schema resolver and "onChange" mode
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
    mode: 'onChange', // Trigger validation on every change
  });

  const mutation = useMutation({
    mutationFn: register_user,
    onSuccess: (response) => {
      console.log(response);
      toast.success(response.message || 'User registered successfully');
      navigate('/auth/login');
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    const { confirm_password, ...rest } = data; // Remove confirm_password before sending to server
    mutation.mutate(rest);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center gap-5">
        <Icon src={LogoIcon} />
        <p>Create your account</p>
        <Card size="large" className="bg-gray-10 flex flex-col gap-5 p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <h6>Name</h6>
              <Input
                reactHookFormRegister={{
                  ...register('user_name', { required: 'Name is required' }),
                }}
                type="text"
                label="Name"
                size="login"
                placeholder="Enter your name"
              />
              {errors.user_name && (
                <p className="text-red-500">{errors.user_name.message}</p>
              )}
            </div>
            <div>
              <h6>Email</h6>
              <Input
                reactHookFormRegister={{
                  ...register('user_email', { required: 'Email is required' }),
                }}
                type="email"
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
              <h6>Confirm Password</h6>
              <Input
                reactHookFormRegister={{
                  ...register('confirm_password', {
                    required: 'Password is required',
                  }),
                }}
                type="password"
                label="Confirm Password"
                size="login"
                placeholder="Confirm your password"
              />
              {errors.confirm_password && (
                <p className="text-red-500">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <div>
              <Button
                text="Sign Up"
                size="login"
                variant="primary"
                type="submit"
                isLoading={isSubmitting || mutation.isLoading}
                disabled={isSubmitting || mutation.isLoading}
              />
            </div>
          </form>
          <div className="flex justify-between">
            <p>Already have an account?</p>
            <Button
              text="Sign In"
              onClick={() => navigate('/auth/login')}
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

export default RegisterPage;
