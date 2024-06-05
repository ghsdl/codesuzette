import Resource from '../Resource/Resource';
import Paragraph from '../Paragraph/Paragraph';
import Loader from '../Loader/Loader';
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';
import './Resources.scss';

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

interface ResourcesProps {
  resources: Resource[];
  className?: string;
}

const Resources = ({ resources, className }: ResourcesProps) => {
  return (
    <div className={`resources ${className}`}>
      <Paragraph className="resources__paragraph paragraph--bold">
        {`${size(resources)}   
          ${size(resources) > 1 ? 'résultats' : 'résultat'}
          `}
      </Paragraph>
      <div className="resources__cards">
        {!isEmpty(resources)
          ? resources.map((resource, index) => (
              <Resource key={index} resource={resource} />
            ))
          : resources.map((resource) => (
              <Loader key={resource.id} isResource={true} />
            ))}
      </div>
    </div>
  );
};

export default Resources;
