import './Resource.scss';
import { getPriceLabel, getCodingLanguages } from './ResourceUtils';
import Picture from '../Picture/Picture';
import Paragraph from '../Paragraph/Paragraph';
import englishFlag from '../../assets/images/english.png';
import frenchFlag from '../../assets/images/french.png';
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
    categories: number;
    tagsName: [];
  };
}

const Resource = ({ resource }: ResourceProps) => {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="resource"
    >
      <header className="resource__header">
        <Picture
          className="resource__header__picture"
          src={`${process.env.REACT_APP_API_ASSETS}/${resource.image}`}
          alt="resource screenshot"
        />
      </header>
      <div className="resource__content">
        <div className="resource__content__titleContainer">
          <Paragraph className="resource__content__title">
            {resource.name}
          </Paragraph>
          <Picture
            src={
              isEqual(get(resource, 'locale', ''), 'en_EN')
                ? englishFlag
                : frenchFlag
            }
            alt="country flag"
            className="resource__content__locale"
          />
        </div>
        <Paragraph className="resource__content__price">
          {getPriceLabel(resource)}
        </Paragraph>
        <Paragraph className="resource__content__description">
          {resource.description}
        </Paragraph>
      </div>
      <footer className="resource__footer">
        {getCodingLanguages(resource)}
      </footer>
    </a>
  );
};

export default Resource;
