import React from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

type HomeTemplateProps = {
  children: React.ReactNode;
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default HomeTemplate;
