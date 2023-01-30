import ContentLoader from 'react-content-loader';
import './Loader.scss';

interface LoaderProps {
  isResource?: boolean;
}

const Loader = ({ isResource }: LoaderProps) => {
  return isResource ? (
    <ContentLoader
      speed={2}
      width={300}
      height={430}
      viewBox="0 0 300 430"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="loader"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="430" />
    </ContentLoader>
  ) : (
    <ContentLoader
      speed={2}
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="loader"
    >
      <rect x="0" y="0" rx="2" ry="2" width="400" height="200" />
    </ContentLoader>
  );
};

export default Loader;
