import './AboutCard.scss';
import Paragraph from '../Paragraph/Paragraph';
import Subtitle from '../Subtitle/Subtitle';
import classnames from 'classnames';

interface AboutCardProps {
  title: string | undefined;
  label: string | undefined;
  isRed?: boolean;
  isLightPurple?: boolean;
  isGreen?: boolean;
}

const AboutCard = ({
  title,
  label,
  isRed,
  isLightPurple,
  isGreen
}: AboutCardProps) => {
  return (
    <div className="aboutCard">
      <div className="aboutCard__face aboutCard__back">
        <Paragraph className="aboutCard__label">{label}</Paragraph>
      </div>
      <div className="aboutCard__face aboutCard__front">
        <Subtitle
          className={classnames(`aboutCard__title`, {
            'aboutCard__title--red': isRed,
            'aboutCard__title--light-purple': isLightPurple,
            'aboutCard__title--green': isGreen
          })}
        >
          {title}
        </Subtitle>
      </div>
    </div>
  );
};

export default AboutCard;
