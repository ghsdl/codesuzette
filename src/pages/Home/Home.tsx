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
  categories: string;
  tags: string[];
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
}

const HomePage = ({ resources, categories, tags }: HomePageProps) => {
  return (
    <Layout>
      <Discover />
      <Explore resources={resources} categories={categories} tags={tags} />
    </Layout>
  );
};

export default HomePage;
