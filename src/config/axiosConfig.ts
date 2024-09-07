import axios from 'axios';
import useTokenStore from '../store/tokenStore';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5002',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token; // Retrieve the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.withCredentials = true; // Ensure credentials are included
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
