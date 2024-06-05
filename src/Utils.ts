import { resources } from './data/resources.js';

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

const getResourcesByCategory = (name: string) => {
  const resourcesByCategory = resources.filter((resource: Resource) => {
    return resource.categories === name;
  });
  return resourcesByCategory;
};

export { getResourcesByCategory };
