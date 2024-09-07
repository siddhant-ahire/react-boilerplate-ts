import React from 'react';
import Footer from '../organisms/Footer';
import { Outlet } from 'react-router-dom';

const AuthTemplate: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AuthTemplate;
