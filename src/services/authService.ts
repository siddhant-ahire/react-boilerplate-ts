import axiosInstance from '../config/axiosConfig';
import { LoginPayload } from '../types/auth';

export const login = async (payload: LoginPayload) => {
  const { data } = await axiosInstance.post('/api/v1/user/login', payload);
  return data;
};

export const getAuthStatus = async () => {
  const { data } = await axiosInstance.get('/api/v1/user');
  return data;
};
