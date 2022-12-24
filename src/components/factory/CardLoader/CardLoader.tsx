import ContentLoader from 'react-content-loader';
import './CardLoader.scss';

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={450}
    viewBox="0 0 350 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="cardLoader"
  >
    <rect x="0" y="0" rx="2" ry="2" width="350" height="450" />
  </ContentLoader>
);

export default CardLoader;
