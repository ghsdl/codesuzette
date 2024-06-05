import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import Loader from '../Loader/Loader';
import size from 'lodash/size';
import isEmpty from 'lodash/isEmpty';
import { getLabel, getAnimatedIcon } from './CategoriesUtils';
import { getResourcesByCategory } from '../../Utils';
import './Categories.scss';

interface Category {
  id: number;
  name: string;
  resources: number[];
}

interface CategoriesProps {
  categories: Category[];
  className?: string;
}

const Categories = ({ categories, className }: CategoriesProps) => {
  const navigate = useNavigate();
  return (
    <div className={`categories ${className}`}>
      {!isEmpty(categories)
        ? categories.map((category, index) => (
            <Category
              key={index}
              label={getLabel(category)}
              ressourcesNumber={size(getResourcesByCategory(category.name))}
              animationData={getAnimatedIcon(category)}
              onClick={() => navigate(`/${category.name}`)}
            />
          ))
        : categories.map((category) => <Loader key={category.id} />)}
    </div>
  );
};

export default Categories;
