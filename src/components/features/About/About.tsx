import Paragraph from '../../factory/Paragraph/Paragraph';
import Picture from '../../factory/Picture/Picture';
import Subtitle from '../../factory/Subtitle/Subtitle';
import AboutCard from '../../factory/AboutCard/AboutCard';
import CREPE from '../../../assets/images/CREPE.svg';
import AnimatedIcon from '../../factory/AnimatedIcon/AnimatedIcon';
import emoji from '../../../assets/animations/emoji.json';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <AnimatedIcon
          isStopped={false}
          width={50}
          height={50}
          options={{
            loop: true,
            autoplay: true,
            animationData: emoji,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          className="about__emoji"
        />
        <Subtitle>Heeeeey!</Subtitle>
      </div>
      <div className="about__mission">
        <Paragraph className="about__intro">
          Notre mission est de faciliter la recherche de ressources sur le
          développement web.
        </Paragraph>
        <Picture src={CREPE} alt="logo" className="about__logo" />
      </div>
      <section className="about__cards">
        <AboutCard
          title="Behind"
          label="L'histoire de ce projet a débuté pour deux raisons : mon amour pour le code et une forte envie de me rendre utile."
          isRed={true}
        />
        <AboutCard
          title="the"
          label="La mission première du site est et restera de faciliter l'accès à des ressources sur le développement web."
          isLightPurple={true}
        />
        <AboutCard
          title="scenes"
          label="Je suis Maëva et je suis Développeuse web. Code Suzette est un projet gratuit et maintenu autant que possible selon mon temps libre."
          isGreen={true}
        />
      </section>
    </div>
  );
};

export default About;
