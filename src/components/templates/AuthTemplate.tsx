import React from 'react';
import Footer from '../organisms/Footer';

type AuthTemplateProps = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default AuthTemplate;
