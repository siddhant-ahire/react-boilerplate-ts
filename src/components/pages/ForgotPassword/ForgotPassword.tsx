import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import { useNavigate } from 'react-router-dom';
import Card from '../../atoms/Card';
import { useMutation } from 'react-query';
import { forgot_password } from '../../../services/authService';
import { toast } from 'react-toastify';

// Define form input types
type ForgotPasswordFormInputs = {
  email: string;
};

// Define the Yup schema for validation
const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Initialize useForm with Yup schema resolver and "onChange" mode
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormInputs>({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onChange', // This will trigger validation on change
  });

  const mutation = useMutation({
    mutationFn: forgot_password,
    onSuccess: (response) => {
      toast.success(response.message || 'Password reset email sent');
      setResetEmailSent(true);
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<ForgotPasswordFormInputs> = async (data) => {
    // Perform your API call for password reset here
    // Example: await api.resetPassword(data.email);
    mutation.mutate(data);
    // For demonstration purposes, redirecting to login page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center transform -translate-y-10 gap-5">
        <Card
          size="medium"
          className="bg-gray-10 flex flex-col gap-5 p-10 text-center"
        >
          <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
          {!resetEmailSent ? (
            <>
              <p className="text-gray-600 mb-4">
                Enter your email address below, and we will send you
                instructions to reset your password.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    reactHookFormRegister={{
                      ...register('email', {
                        required: 'Email is required',
                      }),
                    }}
                    type="email"
                    label="Email"
                    size="medium"
                    placeholder="Enter your email"
                    className="text-center w-64"
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
                <Button
                  text="Send Reset Instructions"
                  type="submit"
                  size="medium"
                  variant="primary"
                  isLoading={isSubmitting || mutation.isLoading}
                  disabled={isSubmitting || mutation.isLoading}
                />
              </form>
            </>
          ) : (
            <p className="text-gray-600 mb-4">
              An email has been sent to your email address. Please follow the
              instructions to reset your password.
            </p>
          )}
          <Button
            text="Back to Login"
            onClick={() => navigate('/auth/login')}
            size="none"
            variant="link"
          />
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
