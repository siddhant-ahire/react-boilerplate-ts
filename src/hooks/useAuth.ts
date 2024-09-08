import { useQuery } from 'react-query';
import { getAuthStatus } from '../services/authService';

const useAuth = () => {
  return useQuery('authStatus', getAuthStatus, {
    // staleTime: 1000 * 60 * 5, // Cache user data for 5 minutes
    retry: false, // Disable retries in case of authentication errors
  });
};

export default useAuth;
