import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <div>content</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
