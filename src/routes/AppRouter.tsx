import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import HomePage from '../components/pages/Home/HomePage';
import AuthTemplate from '../components/templates/AuthTemplate';
import LoginPage from '../components/pages/Login/LoginPage';
import RegisterPage from '../components/pages/Register/RegisterPage';
import ErrorPage from '../components/pages/Error/ErrorPage';
import useTokenStore from '../store/tokenStore';
import ForgotPasswordPage from '../components/pages/ForgotPassword/ForgotPassword';
import ResetPasswordPage from '../components/pages/ResetPassword/ResetPassword';

// Component to protect routes
const ProtectedRoute = ({ element }: { element: React.JSX.Element }) => {
  const { token } = useTokenStore();
  if (token) {
    return element;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

// Component to public routes
// Component to restrict access to public routes (e.g., login, register)
const PublicRoute = ({ element }: { element: React.JSX.Element }) => {
  const { token } = useTokenStore(); // If the token exists, redirect to the dashboard
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
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

export default AppRouter;
