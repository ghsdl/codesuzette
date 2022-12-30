import Layout from '../../components/Layout/Layout';
import Discover from '../../components/Discover/Discover';
import Explore from '../../components/Explore/Explore';

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

interface HomePageProps {
  resources: Resource[];
  categories: GenericObject[];
  tags: GenericObject[];
  loadingResources: boolean | null;
  loadingCategories: boolean | null;
  loadingTags: boolean | null;
}

const HomePage = ({
  resources,
  categories,
  tags,
  loadingResources,
  loadingCategories,
  loadingTags
}: HomePageProps) => {
  return (
    <Layout>
      <Discover />
      <Explore
        resources={resources}
        categories={categories}
        tags={tags}
        loadingResources={loadingResources}
        loadingCategories={loadingCategories}
        loadingTags={loadingTags}
      />
    </Layout>
  );
};

export default HomePage;
