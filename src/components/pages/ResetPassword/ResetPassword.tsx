import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from '../../atoms/Card';
import { useMutation } from 'react-query';
import { reset_password } from '../../../services/authService';
import { toast } from 'react-toastify';

// Define form input types
type ResetPasswordFormInputs = {
  new_password: string;
  confirm_new_password: string;
};

// Define the Yup schema for validation
const resetPasswordSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_new_password: Yup.string()
    .oneOf([Yup.ref('new_password'), ''], 'Passwords must match')
    .required('Please confirm your password'),
});

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token') || ''; // Get the value of the query param 'paramName'

  // Initialize useForm with Yup schema resolver and "onChange" mode
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange', // This will trigger validation on change
  });

  const mutation = useMutation({
    mutationFn: reset_password,
    onSuccess: (response) => {
      toast.success(response.message || 'password reset successful');
      setResetEmailSent(true);
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = async (data) => {
    // Perform your API call for password reset here
    const payload = { token, new_password: data.new_password };
    mutation.mutate(payload);
    // For demonstration purposes, redirecting to login page
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center transform -translate-y-10 gap-5">
        <Card
          size="medium"
          className="bg-gray-10 flex flex-col gap-5 p-10 text-center"
        >
          {!resetEmailSent ? (
            <>
              <h1 className="text-2xl font-bold mb-6">Reset your password</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <Input
                    reactHookFormRegister={{
                      ...register('new_password', {
                        required: 'Password is required',
                      }),
                    }}
                    type="password"
                    label="New Password"
                    size="medium"
                    placeholder="Enter your new password"
                    className="text-center w-64"
                  />
                  {errors.new_password && (
                    <p className="text-red-500 mt-1">
                      {errors.new_password.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    reactHookFormRegister={{
                      ...register('confirm_new_password', {
                        required: 'Please confirm your password',
                      }),
                    }}
                    type="password"
                    label="Confirm Password"
                    size="medium"
                    placeholder="Enter your new password again"
                    className="text-center w-64"
                  />
                  {errors.confirm_new_password && (
                    <p className="text-red-500 mt-1">
                      {errors.confirm_new_password.message}
                    </p>
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
              Your password has been reset successfully.
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

export default ResetPasswordPage;
