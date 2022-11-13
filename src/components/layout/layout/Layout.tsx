import React from 'react';
import ScrollToTop from '../../features/ScrollToTop/ScrollToTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Header />
      <div className="layout__content">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
