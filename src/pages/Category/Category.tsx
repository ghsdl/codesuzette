import { useState, useEffect } from 'react';
import { getResourcesByCategory } from '../Utils';
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
import './Category.scss';

interface CategoryPageProps {
  category: string;
}

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

type Resources = Resource[];

const CategoryPage = ({ category }: CategoryPageProps) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [resources, setResources] = useState<Resources>([]);
  console.log('👀 ~ resources', resources);
  const [resourcesFiltered, setResourcesFiltered] = useState<Resources>([]);
  console.log('👀 ~ resourcesFiltered', resourcesFiltered);
  const [prices, setPrices] = useState<{ name: string; label: string }[]>([]);
  const [locales, setLocales] = useState<{ name: string; label: string }[]>([]);
  const [codingLanguages, setCodingLanguages] = useState<
    { name: string; label: string }[]
  >([]);

  const resourceCategory = CATEGORIES.find(
    (CATEGORY) => CATEGORY.value === category
  );

  useEffect(() => {
    getResourcesByCategory(setResources, setLoading, category);
    resetFilters(setPrices, setLocales, setCodingLanguages);
  }, [resourceCategory]);

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
        <Breadcrumb category={resourceCategory} />
        {isEmpty(resources) && !loading && (
          <Paragraph className="categoryPage__paragraph">{`No resources found in the category ${category}.`}</Paragraph>
        )}
        <div className="categoryPage__container">
          <div className="categoryPage__container--left">
            {!loading && !isEmpty(resources) && (
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
            )}
          </div>
          <div className="categoryPage__container--right">
            {!loading && !isEmpty(resourcesFiltered) && (
              <Resources resources={resourcesFiltered} loading={loading} />
            )}
            {!isEmpty(resources) && isEmpty(resourcesFiltered) && !loading && (
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
