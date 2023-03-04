import Layout from '../../components/Layout/Layout';
import FourZeroFour from '../../components/404/404';
import Redirect from '../../components/Redirect/Redirect';
import Recipe from '../../components/Recipe/Recipe';
import './NotFound.scss';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="notFoundPage">
        <div className="notFoundPage__left">
          <FourZeroFour />
        </div>
        <div className="notFoundPage__right">
          <Redirect />
          <Recipe />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
