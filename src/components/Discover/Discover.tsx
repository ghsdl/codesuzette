import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import scrollDown from '../../assets/animations/scrollDown.json';
import Picture from '../Picture/Picture';
import HOMEPAGE_ILLUSTRATION from '../../assets/images/HOMEPAGE_ILLUSTRATION.svg';
import './Discover.scss';

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover--left">
        <div className="discover--left__titleContainer">
          <Title>Des ressources dédiées au développement web</Title>
          <Paragraph className="discover--left__titleContainer__intro">
            Un condensé de liens pour apprendre à coder, s'informer, monter en
            compétences et réaliser son potentiel dans la programmation.
          </Paragraph>
          <div className="discover--left__scrollDown">
            <Paragraph className="discover--left__scrollDown__paragraph paragraph--green">
              Découvrir
            </Paragraph>
            <AnimatedIcon
              animationData={scrollDown}
              style={{ width: '30px', height: '30px' }}
              loop={true}
              autoplay={true}
              speed={2}
            />
          </div>
        </div>
      </div>
      <div className="discover--right">
        <div className="discover--right__pictureContainer">
          <Picture
            src={HOMEPAGE_ILLUSTRATION}
            alt="illustration"
            className="discover--right__picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
