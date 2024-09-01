import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePageComponent from '../components/pages/Home/HomePage';
import LoginPageComponent from '../components/pages/Login/LoginPage';

const AppRouter = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: '/login',
  },
]);

export default AppRouter;
