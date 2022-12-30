import './Footer.scss';
import Paragraph from '../Paragraph/Paragraph';
import Picture from '../Picture/Picture';
import LOGO from '../../assets/images/LOGO_VERTICAL_WHITE.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <Picture src={LOGO} alt="logo" className="footer__logo" />
        <div className="footer__menu">
          <Paragraph className="paragraph--white">Twitter</Paragraph>
          <Paragraph className="paragraph--white">A propos</Paragraph>
          <Paragraph className="paragraph--white">Mentions légales</Paragraph>
        </div>
      </div>
      <Paragraph className="paragraph--white footer__bottom">{`© Code Suzette ${new Date().getFullYear()} — Coded with a keyboard from my couch`}</Paragraph>
    </footer>
  );
};

export default Footer;
