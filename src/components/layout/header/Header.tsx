import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/LOGO.png';
import NavMenu from '../nav/NavMenu';
import NavResponsive from '../nav/NavResponsive';
import NavIcon from '../nav/NavIcon';
import './Header.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={LOGO} alt="logo" className="header__logo" />
      </Link>
      <div className="header__wave">
        <NavMenu className="header__navMenu" />
      </div>
      <NavResponsive className="header__navResponsive" />
      <NavIcon
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        className="header__navIcon"
      />
      {isNavOpen && <NavResponsive className="header__responsive" />}
    </header>
  );
};

export default Header;
