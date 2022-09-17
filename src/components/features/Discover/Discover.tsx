import Title from '../../factory/Title/Title';
import Paragraph from '../../factory/Paragraph/Paragraph';
import AnimatedIcon from '../../factory/AnimatedIcon/AnimatedIcon';
import scrollDown from '../../../assets/animations/scrollDown.json';
import Picture from '../../factory/Picture/Picture';
import HOMEPAGE_ILLUSTRATION from '../../../assets/images/HOMEPAGE_ILLUSTRATION.svg';
import './Discover.scss';

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover--left">
        <Title className="discover--left__title title--yellow">
          Code Suzette
        </Title>
        <Paragraph className="discover--left__intro">
          Un condensé de ressources sur le développement web
        </Paragraph>
        <div className="discover--left__scrollDown">
          <Paragraph className="discover--left__scrollDown__paragraph paragraph--green">
            Découvrir
          </Paragraph>
          <AnimatedIcon
            width={30}
            height={30}
            options={{
              loop: true,
              autoplay: true,
              animationData: scrollDown,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
          />
        </div>
      </div>
      <div className="discover--right">
        <Picture
          src={HOMEPAGE_ILLUSTRATION}
          alt="illustration"
          className="discover--right__picture"
        />
      </div>
    </div>
  );
};

export default Discover;
