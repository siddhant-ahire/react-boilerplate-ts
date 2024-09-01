import { useQuery } from 'react-query';
import { getAuthStatus } from '../services/authService';

const useAuth = () => {
  return useQuery('authStatus', getAuthStatus);
};

export default useAuth;
