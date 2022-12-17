import Layout from '../../components/layout/layout/Layout';
import Discover from '../../components/features/Discover/Discover';
import Explore from '../../components/features/Explore/Explore';

const HomePage = () => {
  return (
    <Layout>
      <Discover />
      <Explore />
    </Layout>
  );
};

export default HomePage;
