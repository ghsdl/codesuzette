import Paragraph from '../Paragraph/Paragraph';
import Subheading from '../Subheading/Subheading';
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
  categories: string;
  tags: string[];
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
}

const Explore = ({ resources, categories, tags }: ExploreProps) => {
  return (
    <div className="explore">
      <div className="explore__header">
        <Subheading>Explorez les ressources</Subheading>
        <Paragraph className="explore__header__details">
          {`${size(categories)} catégories - ${size(tags)} languages - ${size(
            resources
          )} ressources`}
        </Paragraph>
      </div>
      <Categories categories={categories} />
    </div>
  );
};

export default Explore;
