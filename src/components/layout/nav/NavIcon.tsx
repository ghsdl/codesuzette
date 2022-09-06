import './NavIcon.scss';
import Icon from '../../factory/Icon/Icon';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';

interface NavResponsiveProps {
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
  className?: string;
}

const NavIcon = ({
  className,
  isNavOpen,
  setIsNavOpen
}: NavResponsiveProps) => {
  return (
    <nav
      className={`navIcon ${className}`}
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      <Icon
        icon={isNavOpen ? <RiCloseFill /> : <RiMenu5Fill />}
        className="navIcon__icon"
      />
    </nav>
  );
};

export default NavIcon;
