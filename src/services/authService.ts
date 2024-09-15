import axiosInstance from '../config/axiosConfig';
import {
  ForgotPasswordPayload,
  GoogleLoginPayload,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
} from '../types/auth';

export const login = async (payload: LoginPayload) => {
  const { data } = await axiosInstance.post('/api/v1/auth/login', payload, {
    withCredentials: true, // Ensure credentials are included
  });
  return data;
};

export const register_user = async (payload: RegisterPayload) => {
  const { data } = await axiosInstance.post('/api/v1/auth/register', payload, {
    withCredentials: true, // Ensure credentials are included
  });
  return data;
};

export const forgot_password = async (payload: ForgotPasswordPayload) => {
  const { data } = await axiosInstance.post(
    '/api/v1/auth/forgot-password',
    payload,
    {
      withCredentials: true, // Ensure credentials are included
    }
  );
  return data;
};

export const reset_password = async (payload: ResetPasswordPayload) => {
  const { data } = await axiosInstance.post(
    '/api/v1/auth/reset-password',
    payload,
    {
      withCredentials: true, // Ensure credentials are included
    }
  );
  return data;
};

export const googleLoginAPI = async (payload: GoogleLoginPayload) => {
  const { data } = await axiosInstance.post(
    '/api/v1/auth/google-login',
    payload,
    {
      withCredentials: true, // Ensure credentials are included
    }
  );
  return data;
};

export const refreshAccessToken = async () => {
  const { data } = await axiosInstance.post(
    '/api/v1/auth/refresh-token',
    {},
    {
      withCredentials: true, // Ensure credentials are included
    }
  );
  return data;
};

export const logout = async () => {
  await axiosInstance.post(
    '/api/v1/auth/logout',
    {},
    {
      withCredentials: true, // Ensures that cookies are sent with the request
    }
  );
};

export const getAuthStatus = async () => {
  const { data } = await axiosInstance.get('/api/v1/auth');
  return data;
};
