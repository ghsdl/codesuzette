import { getData } from './Handlers';

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

interface GenericObject {
  id: number;
  name: string;
  resources: number[];
}

interface TagLevelObject {
  id: number;
  name: string;
}

interface ResourceTag {
  id: number;
  resources_id: number;
  tags_id: number;
}

interface LevelTag {
  id: number;
  resources_id: number;
  levels_id: number;
}

const getResources = async (
  setResources: React.Dispatch<React.SetStateAction<Resource[]>>,
  setLoadingResources: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<Resource[]> => {
  setLoadingResources(true);
  const resources = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/resources?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  setResources(resources.data);
  setLoadingResources(false);
  return resources.data;
};

const getCategories = async (
  setCategories: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingCategories: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingCategories(true);
  const categories = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/categories?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  setCategories(categories.data);
  setLoadingCategories(false);
  return categories.data;
};

const getTags = async (
  setTags: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingTags: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingTags(true);
  const tags = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/tags?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  setTags(tags.data);
  setLoadingTags(false);
  return tags.data;
};

const getLevels = async (
  setLevels: React.Dispatch<React.SetStateAction<GenericObject[]>>,
  setLoadingLevels: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<GenericObject[]> => {
  setLoadingLevels(true);
  const levels = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/levels?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  setLevels(levels.data);
  setLoadingLevels(false);
  return levels.data;
};

const getResourcesLevels = async (): Promise<LevelTag[]> => {
  const resourcesLevels = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/resources_levels?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  return resourcesLevels.data;
};

const getResourcesTags = async (): Promise<ResourceTag[]> => {
  const resourcesTags = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/resources_tags?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  return resourcesTags.data;
};

const getResourcesByCategory = async (
  setResourcesByCategory: React.Dispatch<React.SetStateAction<Resource[]>>,
  setLoadingResourcesByCategory: React.Dispatch<
    React.SetStateAction<boolean | null>
  >,
  name: string
): Promise<Resource[]> => {
  setLoadingResourcesByCategory(true);
  const categories = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/categories?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  const category = categories.data.find(
    (category: GenericObject) => category.name === name
  );
  const resourcesByCategory = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/resources?filter[categories][_eq]=${category.id}`
  );
  const tags = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/tags?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  const resourcesTags = await getResourcesTags();
  const levels = await getData(
    `${process.env.REACT_APP_API_ENDPOINT}/levels?limit=${process.env.REACT_APP_API_LIMIT}`
  );
  const resourcesLevels = await getResourcesLevels();

  const enhancedResources = resourcesByCategory.data
    .map((resource: Resource) => {
      let categoryName;
      const tagsName: TagLevelObject[] = [];
      const levelsName: TagLevelObject[] = [];
      categories.data.filter((category: GenericObject) => {
        if (resource.categories === category.id) {
          return (categoryName = category.name);
        }
      });
      resourcesTags.map((resourceTag: ResourceTag) => {
        if (resourceTag.resources_id === resource.id) {
          return tags.data.map((tag: TagLevelObject) => {
            if (resourceTag.tags_id === tag.id) {
              return tagsName.push({
                id: tag.id,
                name: tag.name
              });
            }
          });
        }
      });
      resourcesLevels.map((resourceLevel: LevelTag) => {
        if (resourceLevel.resources_id === resource.id) {
          return levels.data.map((level: TagLevelObject) => {
            if (resourceLevel.levels_id === level.id) {
              return levelsName.push({
                id: level.id,
                name: level.name
              });
            }
          });
        }
      });
      return {
        ...resource,
        categoryName: categoryName,
        tagsName: tagsName,
        levelsName: levelsName
      };
    })
    .flat()
    .sort((a: Resource, b: Resource) => a.name.localeCompare(b.name));
  setResourcesByCategory(enhancedResources);
  setLoadingResourcesByCategory(false);
  return enhancedResources;
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
