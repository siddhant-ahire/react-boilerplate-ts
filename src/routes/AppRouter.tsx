import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import HomePage from '../components/pages/Home/HomePage';
import AuthTemplate from '../components/templates/AuthTemplate';
import LoginPage from '../components/pages/Login/LoginPage';
import RegisterPage from '../components/pages/Register/RegisterPage';
import useAuthStore from '../store/authStore';
import { useCookies } from 'react-cookie';
import ErrorPage from '../components/pages/Error/ErrorPage';

// Component to protect routes
const ProtectedRoute = ({ element }: { element: React.JSX.Element }) => {
  const [cookies] = useCookies(['refreshToken']); // Fetch the 'refreshToken' cookie
  const token = cookies.refreshToken;
  const { login, isAuthenticated } = useAuthStore();
  if (token) {
    try {
      if (!isAuthenticated) login();
      return element;
    } catch (error) {
      console.log(error);
      return <Navigate to="/auth/login" />;
    }
  } else {
    return <Navigate to="/auth/login" />;
  }
};

// Component to public routes
// Component to restrict access to public routes (e.g., login, register)
const PublicRoute = ({ element }: { element: React.JSX.Element }) => {
  const [cookies] = useCookies(['refreshToken']); // Fetch the 'refreshToken' cookie
  const token = cookies.refreshToken;
  // If the token exists, redirect to the dashboard
  return token ? <Navigate to="/dashboard" /> : element;
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard',
    element: <ProtectedRoute element={<DashboardTemplate />} />, // Protect dashboard route
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />, // Redirect /dashboard to /dashboard/home
      },
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: 'auth',
    element: <PublicRoute element={<AuthTemplate />} />, // Protect login/register for authenticated users
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to="login" />, // Redirect /auth to /auth/login
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default AppRouter;
