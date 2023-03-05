import './Category.scss';
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
  return (
    <div onClick={onClick} className={`category ${className}`}>
      <AnimatedIcon
        animationData={animationData}
        style={{ width: '100px', height: '100px' }}
        hover={true}
        className="category__icon"
      />
      <div className="category__labelContainer">
        <Paragraph className="category__labelContainer__label">
          {label}
        </Paragraph>
        <Paragraph className="category__labelContainer__ressources">{`${ressourcesNumber} ${
          ressourcesNumber > 1 ? 'ressources' : 'ressource'
        }`}</Paragraph>
      </div>
    </div>
  );
};

export default Category;
