import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/images/LOGO.svg';
import Picture from '../../factory/Picture/Picture';
import NavMenu from '../nav/NavMenu';
import NavResponsive from '../nav/NavResponsive';
import NavIcon from '../nav/NavIcon';
import './Header.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <Picture src={LOGO} alt="logo" className="header__logo" />
      </Link>
      <NavMenu className="header__navMenu" />
      <NavResponsive isNavOpen={isNavOpen} />
      <NavIcon
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        className="header__navIcon"
      />
    </header>
  );
};

export default Header;
