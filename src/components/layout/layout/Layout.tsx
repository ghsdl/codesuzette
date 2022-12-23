import { useState } from 'react';
import ScrollToTop from '../../features/ScrollToTop/ScrollToTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={isNavOpen ? 'layout layout--isOpened' : 'layout'}>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <ScrollToTop />
      <div className="layout__content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
