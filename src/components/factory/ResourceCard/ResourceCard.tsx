import { useState, useEffect } from 'react';
import './ResourceCard.scss';
import Picture from '../Picture/Picture';
import Paragraph from '../Paragraph/Paragraph';
import HTML from '../../../assets/icons/html5.svg';
import CSS from '../../../assets/icons/css3.svg';
import JS from '../../../assets/icons/javascript.svg';
import TS from '../../../assets/icons/typescript.svg';
import REACT from '../../../assets/icons/react.svg';
import englishFlag from '../../../assets/images/english.png';
import frenchFlag from '../../../assets/images/french.png';
import { RESOURSE_PRICE_CONST } from './ResourceCardConst';
import { getTags, getResourcesTags } from '../../../pages/Utils';

interface ResourceCardProps {
  resource: {
    id: number;
    name: string;
    url: string;
    description: string;
    image: string;
    locale: string;
    price: string;
    categories: number;
    tags: [];
  };
}

interface Tag {
  id: number;
  name: string;
  resources: object[];
}

interface ResourceTag {
  id: number;
  resources_id: number;
  tags_id: number;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loadingResourcesTag, setLoadingResourcesTag] = useState<
    boolean | null
  >(null);
  const [resourcesTags, setResourcesTags] = useState<ResourceTag[]>([]);

  useEffect(() => {
    getTags(setTags, setLoading);
  }, []);

  useEffect(() => {
    getResourcesTags(setLoadingResourcesTag, setResourcesTags);
  }, []);

  const price = RESOURSE_PRICE_CONST?.find((price) => {
    return price?.value === resource?.price;
  });

  const getFlag = () => {
    if (resource?.locale === 'en_EN') {
      return (
        <Picture
          src={englishFlag}
          alt="english flag"
          className="resourceCard__footer__flag"
        />
      );
    } else if (resource?.locale === 'fr_FR') {
      return (
        <Picture
          src={frenchFlag}
          alt="french flag"
          className="resourceCard__footer__flag"
        />
      );
    }
  };

  return (
    <a href={resource.url} target="_blank" rel="noreferrer">
      <div className="resourceCard">
        <div className="resourceCard__header">
          <Picture
            className="resourceCard__header__picture"
            src={`http://localhost:8055/assets/${resource.image}`}
            alt="resource screenshot"
          />
        </div>
        <div className="resourceCard__content">
          <div className="resourceCard__content__titleContainer">
            <Paragraph className="resourceCard__content__title">
              {resource.name}
            </Paragraph>
            <Paragraph className="resourceCard__content__locale">
              {getFlag()}
            </Paragraph>
          </div>
          <Paragraph className="resourceCard__content__price">
            {price?.label}
          </Paragraph>
          <Paragraph className="resourceCard__content__description">
            {resource.description}
          </Paragraph>
        </div>
        <div className="resourceCard__footer">
          {!loadingResourcesTag &&
            !loading &&
            resourcesTags?.map((resourceTag) => {
              if (resourceTag.resources_id === resource.id) {
                return tags?.map((tag, index) => {
                  if (tag.id === resourceTag.tags_id) {
                    if (tag.name === 'html') {
                      return (
                        <Picture
                          key={index}
                          src={HTML}
                          alt="html icon"
                          className="resourceCard__footer__icon"
                        />
                      );
                    } else if (tag.name === 'css') {
                      return (
                        <Picture
                          key={index}
                          src={CSS}
                          alt="css icon"
                          className="resourceCard__footer__icon"
                        />
                      );
                    } else if (tag.name === 'javascript') {
                      return (
                        <Picture
                          key={index}
                          src={JS}
                          alt="javascript icon"
                          className="resourceCard__footer__icon"
                        />
                      );
                    } else if (tag.name === 'typescript') {
                      return (
                        <Picture
                          key={index}
                          src={TS}
                          alt="typescript icon"
                          className="resourceCard__footer__icon"
                        />
                      );
                    } else if (tag.name === 'react') {
                      return (
                        <Picture
                          key={index}
                          src={REACT}
                          alt="react icon"
                          className="resourceCard__footer__icon"
                        />
                      );
                    }
                  }
                });
              }
            })}
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
