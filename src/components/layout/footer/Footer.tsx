import './Footer.scss';
import Paragraph from '../.././factory/Paragraph/Paragraph';

const Footer = () => {
  return (
    <footer className="footer">
      <Paragraph className="footer__paragraph">
        {`© Code Suzette 2022 - ${new Date().getFullYear()}`}
      </Paragraph>
    </footer>
  );
};

export default Footer;
