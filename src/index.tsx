import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routes/AppRouter';
import { CookiesProvider } from 'react-cookie';
import { logout, refreshAccessToken } from './services/authService';
import useTokenStore from './store/tokenStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a QueryClient instance with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      onError: (error: any) => {
        if (error.response?.status === 401) {
          handleRefreshToken();
        } else {
          console.error('Global Query Error:', error.message);
          toast.error(error.message);
        }
      },
    },
    mutations: {
      onError: (error: any) => {
        if (error.response?.status === 401) {
          handleRefreshToken();
        } else {
          console.error('Global Query Mutation Error:', error.message);
          toast.error(error.response.data.message);
        }
      },
    },
  },
});

// Handle refresh token logic
const handleRefreshToken = async () => {
  const setToken = useTokenStore.getState().setToken;
  try {
    const response = await refreshAccessToken();
    setToken(response.data);
  } catch (error) {
    console.log(error);
    // Handle the failure to refresh token (e.g., redirect to login)
    setToken('');
    logout();
  }
};

// Render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <RouterProvider router={AppRouter} />
      <ToastContainer />
    </CookiesProvider>
  </QueryClientProvider>
);

// Report web vitals
reportWebVitals();
