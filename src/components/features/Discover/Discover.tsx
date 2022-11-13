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
        <div className="discover--left__titleContainer">
          <Title className="discover--left__titleContainer__title title--lightPurlple">
            Un condensé de ressources sur le développement web
          </Title>
          <Paragraph className="discover--left__titleContainer__intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nunc nisl aliquet nisl, quis
            aliquam nunc nisl sit amet nunc.
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
      </div>
      <div className="discover--right">
        <div className="discover--left__titleContainer">
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
