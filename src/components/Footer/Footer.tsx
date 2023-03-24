import { NavLink } from 'react-router-dom';
import './Footer.scss';
import Paragraph from '../Paragraph/Paragraph';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <Paragraph className="paragraph--white">
          {`© Code Suzette ${new Date().getFullYear()} — Coded with a keyboard from my couch ✨`}
        </Paragraph>
        <NavLink to="/legals" className="paragraph--white footer__legals">
          {` — Mentions Légales`}
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
