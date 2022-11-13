import './CategoryCard.scss';
import { useState } from 'react';
import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import Paragraph from '../Paragraph/Paragraph';

interface CategoryCardProps {
  label: string | undefined;
  ressourcesNumber: number;
  animationData: object;
  className?: string;
}

const CategoryCard = ({
  label,
  ressourcesNumber,
  animationData
}: CategoryCardProps) => {
  const [isStopped, setIsStopped] = useState(true);
  return (
    <div
      onMouseEnter={() => setIsStopped(!isStopped)}
      onMouseLeave={() => setIsStopped(!isStopped)}
      className="categoryCard"
    >
      <div className="categoryCard__header">
        <AnimatedIcon
          isStopped={isStopped}
          width={100}
          height={100}
          options={{
            loop: 0,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
        />
      </div>
      <div className="categoryCard__footer">
        <Paragraph className="categoryCard__footer__label">{label}</Paragraph>
        <Paragraph className="categoryCard__footer__ressources">{`${ressourcesNumber} ressources`}</Paragraph>
      </div>
    </div>
  );
};

export default CategoryCard;