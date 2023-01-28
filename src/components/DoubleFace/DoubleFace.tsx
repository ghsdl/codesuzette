import './DoubleFace.scss';
import Paragraph from '../Paragraph/Paragraph';
import Subheading from '../Subheading/Subheading';
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
        <Subheading
          className={classnames(`doubleFace__title`, {
            'doubleFace__title--red': isRed,
            'doubleFace__title--light-purple': isLightPurple,
            'doubleFace__title--green': isGreen
          })}
        >
          {title}
        </Subheading>
      </div>
    </div>
  );
};

export default DoubleFace;
