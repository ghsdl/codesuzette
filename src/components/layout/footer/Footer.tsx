import './Footer.scss';
import Paragraph from '../.././factory/Paragraph/Paragraph';

const Footer = () => {
  return (
    <footer className="footer">
      <Paragraph className="footer__paragraph paragraph--white">
        {`© Code Suzette ${new Date().getFullYear()}`}
      </Paragraph>
      <Paragraph className="footer__paragraph paragraph--white">
        {` Created with TypeScrit, React et Directus by Maeva`}
      </Paragraph>
    </footer>
  );
};

export default Footer;
