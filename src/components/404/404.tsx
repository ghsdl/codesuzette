import Picture from '../../components/Picture/Picture';
import cooking from '../../assets/animations/cooking.svg';
import notFound from '../../assets/images/NOT_FOUND.svg';
import './404.scss';

const FourZeroFour = () => {
  return (
    <div className="fourZeroFour">
      <Picture
        src={notFound}
        alt="cooking animation"
        className="fourZeroFour__logo"
      />
      <Picture
        src={cooking}
        alt="cooking animation"
        className="fourZeroFour__animation"
      />
    </div>
  );
};

export default FourZeroFour;
