import { useState, useEffect } from 'react';
import { getResourcesByCategory } from '../Utils';
import { CATEGORIES } from './CategoryConst';
import Layout from '../../components/layout/Layout/Layout';
import CardLoader from '../../components/factory/CardLoader/CardLoader';
import ResourceCard from '../../components/factory/ResourceCard/ResourceCard';
import Paragraph from '../../components/factory/Paragraph/Paragraph';
import Breadcrumb from '../../components/features/Breadcrumb/Breadcrumb';
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
  tags: [];
}

type Resources = Resource[];

const CategoryPage = ({ category }: CategoryPageProps) => {
  const [loadingResourcesByCategory, setLoadingResourcesByCategory] = useState<
    boolean | null
  >(null);
  const [resourcesByCategory, setResourcesByCategory] = useState<Resources>([]);

  const filteredCategory = CATEGORIES.find(
    (CATEGORY) => CATEGORY.value === category
  );

  useEffect(() => {
    getResourcesByCategory(
      setResourcesByCategory,
      setLoadingResourcesByCategory,
      category
    );
  }, [filteredCategory]);

  return (
    <Layout>
      <div className="category">
        {loadingResourcesByCategory &&
          resourcesByCategory.map((resource) => {
            return <CardLoader key={resource.id} />;
          })}
        <Breadcrumb category={filteredCategory} />
        {isEmpty(resourcesByCategory) && !loadingResourcesByCategory && (
          <Paragraph className="category__paragraph">{`No resources found in ${category}`}</Paragraph>
        )}
        <div className="category__cards">
          {!loadingResourcesByCategory &&
            !isEmpty(resourcesByCategory) &&
            resourcesByCategory.map((resource) => {
              return <ResourceCard key={resource.id} resource={resource} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
