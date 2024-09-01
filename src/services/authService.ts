import axiosInstance from '../config/axiosConfig';

export const getAuthStatus = async () => {
  const { data } = await axiosInstance.get('/auth/status');
  return data;
};
