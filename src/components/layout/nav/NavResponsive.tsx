import { NavLink } from 'react-router-dom';
import { menus } from './NavMenuConst.js';
import Icon from '../../factory/Icon/Icon';
import './NavResponsive.scss';

interface NavResponsiveProps {
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
  className?: string;
}

const NavResponsive = ({
  isNavOpen,
  setIsNavOpen,
  className
}: NavResponsiveProps) => {
  return (
    <nav
      className={
        isNavOpen ? 'navResponsive--isOpened' : `navResponsive ${className}`
      }
    >
      {menus.map((menu, index) => (
        <div key={index} className="navResponsive__container">
          <NavLink to={menu.to} className="navResponsive__link">
            {menu.label}
            <div className="navResponsive__line"></div>
          </NavLink>
          {menu && menu.submenus && (
            <div className="navResponsive__submenusContainer">
              {menu.submenus.map((submenu, index) => (
                <div
                  key={index}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="navResponsive__submenuContainer"
                >
                  <NavLink to={submenu.to} className="navResponsive__submenu">
                    {submenu.icon && (
                      <Icon
                        icon={submenu.icon}
                        className="navMenu__submenu__icon"
                      />
                    )}
                    {submenu.label}
                  </NavLink>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavResponsive;
