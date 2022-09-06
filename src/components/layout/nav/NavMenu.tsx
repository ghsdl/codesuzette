import { NavLink } from 'react-router-dom';
import Icon from '../../factory/Icon/Icon';
import { HiChevronDown } from 'react-icons/hi';
import { menus } from './NavMenuConst.js';
import './NavMenu.scss';

interface NavMenuProps {
  className?: string;
}

const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={`navMenu ${className}`}>
      {menus.map((menu, index) => (
        <div key={index} className="navMenu__container">
          <NavLink to={menu.to} className="navMenu__link">
            {menu.label}
            {menu.icon && (
              <Icon icon={<HiChevronDown />} className="navMenu__icon" />
            )}
          </NavLink>
          {menu && menu.submenus && (
            <div className="navMenu__submenusContainer">
              {menu.submenus.map((submenu, index) => (
                <div key={index} className="navMenu__submenuContainer">
                  <NavLink to={submenu.to} className="navMenu__submenu">
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

export default NavMenu;
