import axiosInstance from '../config/axiosConfig';
import { LoginPayload } from '../types/auth';

export const login = async (payload: LoginPayload) => {
  const { data } = await axiosInstance.post('/api/v1/auth/login', payload, {
    withCredentials: true, // Ensure credentials are included
  });
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
