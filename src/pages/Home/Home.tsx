import Layout from '../../components/layout/Layout/Layout';
import Discover from '../../components/features/Discover/Discover';
import Explore from '../../components/features/Explore/Explore';

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
