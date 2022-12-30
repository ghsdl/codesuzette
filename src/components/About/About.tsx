import Paragraph from '../Paragraph/Paragraph';
import Picture from '../Picture/Picture';
import Subtitle from '../Subtitle/Subtitle';
import DoubleFace from '../DoubleFace/DoubleFace';
import CREPE from '../../assets/images/CREPE.svg';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <Picture src={CREPE} alt="logo" className="about__logo" />
        <Subtitle>Heeeeey!</Subtitle>
      </div>
      <div className="about__mission">
        <Paragraph className="about__intro">
          Notre mission est de faciliter la recherche de ressources sur le
          développement web.
        </Paragraph>
      </div>
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
          label="Code Suzette est un projet perso gratuit et maintenu autant que possible selon le temps libre de sa créatrice."
          isGreen={true}
        />
      </section>
    </div>
  );
};

export default About;
