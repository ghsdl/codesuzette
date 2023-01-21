import Paragraph from '../Paragraph/Paragraph';
import Picture from '../Picture/Picture';
import Subtitle from '../Subtitle/Subtitle';
import Subheading from '../Subheading/Subheading';
import DoubleFace from '../DoubleFace/DoubleFace';
import FAQ from '../FAQ/FAQ';
import CREPE from '../../assets/images/CREPE.svg';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <Subtitle className="about__subtitle">Heeeeey! ☺️</Subtitle>
      <Paragraph className="about__intro">
        La mission est de faciliter la recherche de ressources sur le
        développement web.
      </Paragraph>
      <section className="about__cards">
        <DoubleFace
          title="Behind"
          label="Le projet est né d'une volonté d'avoir au même endroit des ressources dans lesquelles piocher selon le besoin ou pour explorer."
          isRed={true}
        />
        <DoubleFace
          title="the"
          label="La mission première du site sera toujours de faciliter l'accès à des ressources sur le développement web pour apprendre et s'entraîner."
          isLightPurple={true}
        />
        <DoubleFace
          title="scenes"
          label="Ce site est un projet perso gratuit et maintenu autant que possible selon le temps libre de sa créatrice."
          isGreen={true}
        />
      </section>
      <section className="about__faq">
        <div className="about__faq--left">
          <Subheading>Questions you could be asking yourself*</Subheading>
          <Picture src={CREPE} alt="logo" className="about__faq--left__logo" />
          <Paragraph className="about__faq--left__paragraph">
            *Let's not pretend they're frequently asked
          </Paragraph>
        </div>
        <div className="about__faq--right">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default About;
