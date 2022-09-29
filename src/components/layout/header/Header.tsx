import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/images/CREPE.png';
import Picture from '../../factory/Picture/Picture';
import Paragraph from '../../factory/Paragraph/Paragraph';
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
        <Paragraph className="header__paragraph">CS</Paragraph>
      </Link>
      <NavMenu className="header__navMenu" />
      <NavResponsive className="header__navResponsive" />
      <NavIcon
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        className="header__navIcon"
      />
      {isNavOpen && <NavResponsive />}
    </header>
  );
};

export default Header;
