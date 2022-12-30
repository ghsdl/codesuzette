import { useNavigate } from 'react-router-dom';
import Category from '../Category/Category';
import Loader from '../Loader/Loader';
import size from 'lodash/size';
import isEmpty from 'lodash/isEmpty';
import { getLabel, getAnimatedIcon } from './CategoriesUtils';
import './Categories.scss';

interface Category {
  id: number;
  name: string;
  resources: number[];
}

interface CategoriesProps {
  categories: Category[];
  loadingResources: boolean | null;
  loadingCategories: boolean | null;
  loadingTags: boolean | null;
  className?: string;
}

const Categories = ({
  categories,
  loadingResources,
  loadingCategories,
  loadingTags,
  className
}: CategoriesProps) => {
  const navigate = useNavigate();
  return (
    <div className={`categories ${className}`}>
      {!loadingResources &&
      !loadingCategories &&
      !loadingTags &&
      !isEmpty(categories)
        ? categories.map((category, index) => (
            <Category
              key={index}
              label={getLabel(category)}
              ressourcesNumber={size(category.resources)}
              animationData={getAnimatedIcon(category)}
              onClick={() => navigate(`/${category.name}`)}
            />
          ))
        : categories.map((category) => <Loader key={category.id} />)}
    </div>
  );
};

export default Categories;
