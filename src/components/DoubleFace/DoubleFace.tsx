import Paragraph from '../Paragraph/Paragraph';
import Subheading from '../Subheading/Subheading';
import './DoubleFace.scss';

interface DoubleFaceProps {
  title: string | undefined;
  label: string | undefined;
  className: string;
}

const DoubleFace = ({ title, label, className }: DoubleFaceProps) => {
  return (
    <div className="doubleFace">
      <div className="doubleFace__face doubleFace__back">
        <Paragraph className="doubleFace__label">{label}</Paragraph>
      </div>
      <div className="doubleFace__face doubleFace__front">
        <Subheading className={className}>{title}</Subheading>
      </div>
    </div>
  );
};

export default DoubleFace;
