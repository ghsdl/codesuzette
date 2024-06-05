import { useState, useEffect } from 'react';
import { CATEGORIES } from './CategoryConst';
import {
  getResourcesFiltered,
  getPrices,
  getLocales,
  getCodingLanguages,
  resetFilters
} from './CategoryUtils';
import Layout from '../../components/Layout/Layout';
import Resources from '../../components/Resources/Resources';
import Filters from '../../components/Filters/Filters';
import NoResource from '../../components/NoResource/NoResource';
import Paragraph from '../../components/Paragraph/Paragraph';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import size from 'lodash/size';
import './Category.scss';

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

type Resources = Resource[];

interface ResourcesProps {
  resources: Resource[];
}

const CategoryPage = ({ resources }: ResourcesProps) => {
  const [resourcesFiltered, setResourcesFiltered] = useState<Resources>([]);
  const [prices, setPrices] = useState<{ name: string; label: string }[]>([]);
  const [locales, setLocales] = useState<{ name: string; label: string }[]>([]);
  const [codingLanguages, setCodingLanguages] = useState<
    { name: string; label: string }[]
  >([]);

  useEffect(() => {
    getResourcesFiltered(
      prices,
      locales,
      codingLanguages,
      resources,
      setResourcesFiltered
    );
  }, [prices, locales, codingLanguages, resources]);

  return (
    <Layout>
      <div className="categoryPage">
        {/* <Breadcrumb category={resourceCategory} />
        {isEmpty(resources) && (
          <Paragraph className="categoryPage__paragraph">{`Aucune ressource dans la catégorie ${get(
            resourceCategory,
            'label',
            ''
          )}.`}</Paragraph>
        )} */}
        <div className="categoryPage__container">
          {!isEmpty(resources) && size(resources) > 1 && (
            <div
              className={
                size(resources) > 1
                  ? 'categoryPage__container--left'
                  : 'categoryPage__container--fullWidth'
              }
            >
              <Filters
                resetFilters={() => {
                  resetFilters(setPrices, setLocales, setCodingLanguages);
                }}
                codingLanguages={codingLanguages}
                prices={prices}
                locales={locales}
                setCodingLanguages={setCodingLanguages}
                setPrices={setPrices}
                setLocales={setLocales}
                codingLanguagesCheckboxes={getCodingLanguages(resources)}
                pricesCheckboxes={getPrices(resources)}
                localesCheckboxes={getLocales(resources)}
              />
            </div>
          )}
          <div
            className={
              size(resources) > 1
                ? 'categoryPage__container--right'
                : 'categoryPage__container--fullWidth'
            }
          >
            {!isEmpty(resourcesFiltered) && (
              <Resources resources={resourcesFiltered} />
            )}
            {!isEmpty(resources) && isEmpty(resourcesFiltered) && (
              <div className="categoryPage__container--right__noResource">
                <NoResource />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
