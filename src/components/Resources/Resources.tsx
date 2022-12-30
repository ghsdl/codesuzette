import Resource from '../Resource/Resource';
import Loader from '../Loader/Loader';
import isEmpty from 'lodash/isEmpty';
import './Resources.scss';

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

interface ResourcesProps {
  resources: Resource[];
  loading: boolean | null;
  className?: string;
}

const Resources = ({ resources, loading, className }: ResourcesProps) => {
  return (
    <div className={`resources ${className}`}>
      {!loading && !isEmpty(resources)
        ? resources.map((resource, index) => (
            <Resource key={index} resource={resource} />
          ))
        : resources.map((resource) => (
            <Loader key={resource.id} isResource={true} />
          ))}
    </div>
  );
};

export default Resources;
