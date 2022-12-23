import { getData } from './Handlers.js';

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

interface GenericObject {
  id: number;
  name: string;
  resources: object[];
}

interface ResourceTag {
  id: number;
  resources_id: number;
  tags_id: number;
}

const getResources = async (
  setResources: React.Dispatch<React.SetStateAction<Resource[]>>,
  setLoadingResources: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<Resource[]> => {
  setLoadingResources(true);
  const resources = await getData('http://localhost:8055/items/resources');
  setResources(resources.data);
  setLoadingResources(false);
  return resources.data;
};

const getCategories = async (
  setCategories: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingCategories: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingCategories(true);
  const categories = await getData('http://localhost:8055/items/categories');
  setCategories(categories.data);
  setLoadingCategories(false);
  return categories.data;
};

const getLevels = async (
  setLevels: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingLevels: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingLevels(true);
  const levels = await getData('http://localhost:8055/items/levels');
  setLevels(levels.data);
  setLoadingLevels(false);
  return levels.data;
};

const getTags = async (
  setTags: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingTags: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingTags(true);
  const tags = await getData('http://localhost:8055/items/tags');
  setTags(tags.data);
  setLoadingTags(false);
  return tags.data;
};

const getResourcesByCategory = async (
  setResourcesByCategory: React.Dispatch<React.SetStateAction<Resource[]>>,
  setLoadingResourcesByCategory: React.Dispatch<
    React.SetStateAction<boolean | null>
  >,
  name: string
): Promise<Resource[]> => {
  setLoadingResourcesByCategory(true);
  const categories = await getData('http://localhost:8055/items/categories');
  const category = categories.data.find(
    (category: GenericObject) => category.name === name
  );
  const resourcesByCategory = await getData(
    `http://localhost:8055/items/resources?filter[categories][_eq]=${category.id}`
  );
  const sortedResources = resourcesByCategory.data.sort(
    (a: Resource, b: Resource) => a.name.localeCompare(b.name)
  );
  setResourcesByCategory(sortedResources);
  setLoadingResourcesByCategory(false);
  return sortedResources;
};

const getResourcesLevels = async (
  setLoadingResourcesLevels: React.Dispatch<
    React.SetStateAction<boolean | null>
  >,
  setResourcesLevels: React.Dispatch<React.SetStateAction<GenericObject[]>>
): Promise<GenericObject[]> => {
  setLoadingResourcesLevels(true);
  const resourcesLevels = await getData(
    'http://localhost:8055/items/resources_levels'
  );
  setResourcesLevels(resourcesLevels.data);
  setLoadingResourcesLevels(false);
  return resourcesLevels.data;
};

const getResourcesTags = async (
  setLoadingResourcesTag: React.Dispatch<React.SetStateAction<boolean | null>>,
  setResourcesTags: React.Dispatch<React.SetStateAction<ResourceTag[]>>
): Promise<ResourceTag[]> => {
  setLoadingResourcesTag(true);
  const resourcesTags = await getData(
    'http://localhost:8055/items/resources_tags'
  );
  setResourcesTags(resourcesTags.data);
  setLoadingResourcesTag(false);
  return resourcesTags.data;
};

export {
  getResources,
  getCategories,
  getLevels,
  getTags,
  getResourcesByCategory,
  getResourcesLevels,
  getResourcesTags
};
