import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import { Outlet } from 'react-router-dom';

const DashboardTemplate: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardTemplate;
