import LOGO from '../../../assets/LOGO.png';
import TOP_WAVE from '../../../assets/TOP_WAVE.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={LOGO} alt="logo" className="header__logo" />
      <img src={TOP_WAVE} alt="logo" className="header__topWave" />
    </header>
  );
};

export default Header;
