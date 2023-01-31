import Form from '../Form/Form';
import Paragraph from '../Paragraph/Paragraph';
import Icon from '../Icon/Icon';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__left">
        <Form />
      </div>
      <div className="contact__right">
        <Paragraph className="paragraph--bolder contact__right__paragraph">
          Tu préfères envoyer un mail ?
        </Paragraph>
        <div className="contact__right__row">
          <Icon
            icon={<MdOutlineMarkEmailUnread />}
            className="contact__right__icon icon--lightPurple"
          />
          <a href="mailto:maeva.ghsdl@gmail.com" rel="noreferrer">
            <Paragraph className="paragraph--underline">
              maeva.ghsdl@gmail.com
            </Paragraph>
          </a>
        </div>
        <Paragraph className="paragraph--bolder contact__right__paragraph">
          Ou me contacter via Twitter ?
        </Paragraph>
        <div className="contact__right__row">
          <Icon
            icon={<RiTwitterLine />}
            className="contact__right__icon icon--lightPurple"
          />
          <a
            href="https://twitter.com/nowthisiscoding"
            target="_blank"
            rel="noreferrer"
          >
            <Paragraph className="paragraph--underline">
              @nowthisiscoding
            </Paragraph>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
