import Paragraph from '../Paragraph/Paragraph';
import Categories from '../Categories/Categories';
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
  tagsName: [];
}

interface GenericObject {
  id: number;
  name: string;
  resources: number[];
}

interface ExploreProps {
  resources: Resource[];
  categories: GenericObject[];
  tags: GenericObject[];
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
      <Categories
        categories={categories}
        loadingResources={loadingResources}
        loadingCategories={loadingCategories}
        loadingTags={loadingTags}
      />
    </div>
  );
};

export default Explore;
