import './Category.scss';
import { useState } from 'react';
import AnimatedIcon from '../AnimatedIcon/AnimatedIcon';
import Paragraph from '../Paragraph/Paragraph';

interface CategoryProps {
  label: string | undefined;
  ressourcesNumber: number;
  animationData: object;
  onClick: () => void;
  className?: string;
}

const Category = ({
  label,
  ressourcesNumber,
  animationData,
  onClick,
  className
}: CategoryProps) => {
  const [isStopped, setIsStopped] = useState(true);
  return (
    <div
      onMouseEnter={() => setIsStopped(!isStopped)}
      onMouseLeave={() => setIsStopped(!isStopped)}
      onClick={onClick}
      className={`category ${className}`}
    >
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
        className="category__icon"
      />
      <div className="category__labelContainer">
        <Paragraph className="category__labelContainer__label">
          {label}
        </Paragraph>
        <Paragraph className="category__labelContainer__ressources">{`${ressourcesNumber} ${
          ressourcesNumber > 0 ? 'ressources' : 'ressource'
        }`}</Paragraph>
      </div>
    </div>
  );
};

export default Category;
