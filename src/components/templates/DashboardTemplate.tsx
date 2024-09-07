import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

type DashboardTemplateProps = {
  children: React.ReactNode;
};

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default DashboardTemplate;
