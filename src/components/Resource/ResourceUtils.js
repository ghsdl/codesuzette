import Picture from '../Picture/Picture';
import { RESOURSE_PRICE_CONST, RESOURSE_TAG_CONST } from './ResourceConst';
import HTML from '../../assets/icons/html5.svg';
import CSS from '../../assets/icons/css3.svg';
import JS from '../../assets/icons/javascript.svg';
import TS from '../../assets/icons/typescript.svg';
import REACT from '../../assets/icons/react.svg';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

const getPriceLabel = (resource) => {
  return RESOURSE_PRICE_CONST.find((RESOURSE_PRICE) => {
    return isEqual(RESOURSE_PRICE.value, resource.price);
  }).label;
};

const getCodingLanguages = (resource) => {
  const tags = get(resource, 'tags', []).map((tag) => {
    return RESOURSE_TAG_CONST.find((RESOURSE_TAG) => {
      return isEqual(RESOURSE_TAG.label, tag);
    }).label;
  });

  return tags.map((tag, index) => {
    if (isEqual(tag, 'html')) {
      return (
        <Picture
          key={index}
          src={HTML}
          alt="html icon"
          className="resource__footer__icon"
        />
      );
    } else if (isEqual(tag, 'css')) {
      return (
        <Picture
          key={index}
          src={CSS}
          alt="css icon"
          className="resource__footer__icon"
        />
      );
    } else if (isEqual(tag, 'javascript')) {
      return (
        <Picture
          key={index}
          src={JS}
          alt="javascript icon"
          className="resource__footer__icon"
        />
      );
    } else if (isEqual(tag, 'typescript')) {
      return (
        <Picture
          key={index}
          src={TS}
          alt="typescript icon"
          className="resource__footer__icon"
        />
      );
    } else if (isEqual(tag, 'react')) {
      return (
        <Picture
          key={index}
          src={REACT}
          alt="react icon"
          className="resource__footer__icon"
        />
      );
    }
  });
};

export { getPriceLabel, getCodingLanguages };
