import Picture from '../Picture/Picture';
import CREPE from '../../assets/images/CREPE_SCHOLAR.svg';
import { Accordion, AccordionSection } from 'react-rainbow-components';
import FAQ_CONST from './FAQConst';
import './FAQ.scss';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__left">
        <Accordion>
          {FAQ_CONST.map((section, index) => {
            return (
              <AccordionSection
                key={index}
                label={section.label}
                className={section.className}
              >
                {section.content}
              </AccordionSection>
            );
          })}
        </Accordion>
      </div>
      <div className="faq__right">
        <Picture
          src={CREPE}
          alt="logo"
          style={{ width: '400px' }}
          className="faq__left__logo"
        />
      </div>
    </div>
  );
};

export default FAQ;
