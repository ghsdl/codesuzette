import { useNavigate } from 'react-router-dom';
import Loading from '../../factory/Loading/Loading';
import Paragraph from '../../factory/Paragraph/Paragraph';
import CategoryCard from '../../factory/CategoryCard/CategoryCard';
import { getLabel, getAnimatedIcon } from './ExploreUtils';
import size from 'lodash/size';
import './Explore.scss';

interface Resource {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
  locale: string;
  price: string;
  categories: number;
  tags: [];
}

interface GenericObject {
  id: number;
  name: string;
  resources: object[];
}

interface ExploreProps {
  categories: GenericObject[];
  tags: GenericObject[];
  resources: Resource[];
  loadingResources: boolean | null;
  loadingCategories: boolean | null;
  loadingTags: boolean | null;
}

const Explore = ({
  resources,
  categories,
  tags,
  loadingResources,
  loadingCategories,
  loadingTags
}: ExploreProps) => {
  const navigate = useNavigate();
  return (
    <div className="explore">
      <div className="explore__header">
        <Paragraph className="explore__header__title">
          Explorez les ressources
        </Paragraph>
        <Paragraph className="explore__header__details">
          {`${size(categories)} catégories - ${size(tags)} languages - ${size(
            resources
          )} ressources`}
        </Paragraph>
      </div>
      <div className="explore__categoryCards">
        {(loadingCategories || loadingResources || loadingTags) && <Loading />}
        {!loadingCategories &&
          !loadingResources &&
          !loadingTags &&
          categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                label={getLabel(category)}
                ressourcesNumber={category.resources.length}
                animationData={getAnimatedIcon(category)}
                onClick={() => navigate(`/${category.name}`)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Explore;
