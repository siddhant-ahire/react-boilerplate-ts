import axiosInstance from '../config/axiosConfig';

export const getUser = async (id: string) => {
  const { data } = await axiosInstance.get(`/users/${id}`);
  return data;
};
