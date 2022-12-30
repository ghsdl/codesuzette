import './DoubleFace.scss';
import Paragraph from '../Paragraph/Paragraph';
import Subtitle from '../Subtitle/Subtitle';
import classnames from 'classnames';

interface DoubleFaceProps {
  title: string | undefined;
  label: string | undefined;
  isRed?: boolean;
  isLightPurple?: boolean;
  isGreen?: boolean;
}

const DoubleFace = ({
  title,
  label,
  isRed,
  isLightPurple,
  isGreen
}: DoubleFaceProps) => {
  return (
    <div className="doubleFace">
      <div className="doubleFace__face doubleFace__back">
        <Paragraph className="doubleFace__label">{label}</Paragraph>
      </div>
      <div className="doubleFace__face doubleFace__front">
        <Subtitle
          className={classnames(`doubleFace__title`, {
            'doubleFace__title--red': isRed,
            'doubleFace__title--light-purple': isLightPurple,
            'doubleFace__title--green': isGreen
          })}
        >
          {title}
        </Subtitle>
      </div>
    </div>
  );
};

export default DoubleFace;
