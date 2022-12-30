import './Footer.scss';
import Paragraph from '../Paragraph/Paragraph';

const Footer = () => {
  return (
    <footer className="footer">
      <Paragraph className="paragraph--white footer__bottom">{`© Code Suzette ${new Date().getFullYear()} — Coded with a keyboard from my couch - Mentions Légales`}</Paragraph>
    </footer>
  );
};

export default Footer;
