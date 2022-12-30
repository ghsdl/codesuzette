import { useState } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
