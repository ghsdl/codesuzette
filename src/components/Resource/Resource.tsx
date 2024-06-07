import './Resource.scss';
import { getPriceLabel, getCodingLanguages } from './ResourceUtils';
import Picture from '../Picture/Picture';
import Paragraph from '../Paragraph/Paragraph';
import bus from '../../assets/images/bus.png';
import baguette from '../../assets/images/baguette.png';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

interface ResourceProps {
  resource: {
    id: number;
    name: string;
    url: string;
    description: string;
    image: string;
    locale: string;
    price: string;
    categories: string;
    tags: string[];
  };
}

const Resource = ({ resource }: ResourceProps) => {
  return (
    <div className="resource">
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="resource__link"
      >
        <div className="resource__bg"></div>
        <header className="resource__header">
          <Paragraph className="resource__title">{resource.name}</Paragraph>
        </header>
        <div className="resource__subtitle">
          <Paragraph className="resource__price">
            {getPriceLabel(resource)}
          </Paragraph>
          <Picture
            src={isEqual(get(resource, 'locale', ''), 'en_EN') ? bus : baguette}
            alt="country emoji"
            className="resource__locale"
          />
        </div>
        <div className="resource__content">
          <Paragraph className="resource__description">
            {resource.description}
          </Paragraph>
        </div>
        <footer className="resource__footer">
          {getCodingLanguages(resource)}
        </footer>
      </a>
    </div>
  );
};

export default Resource;
