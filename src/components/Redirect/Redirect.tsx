import Subheading from '../../components/Subheading/Subheading';
import Paragraph from '../../components/Paragraph/Paragraph';
import './Redirect.scss';

const Redirect = () => {
  return (
    <div className="redirect">
      <Subheading>Oops!</Subheading>
      <Paragraph className="redirect__notFound paragraph--uppercase paragraph--bold">
        la page recherchée est <strong>introuvable</strong>
      </Paragraph>
      <div className="redirect__back">
        <Paragraph>Apprenez à faire des crêpes suzette ou</Paragraph>
        <a href="/">
          <Paragraph className="paragraph--underline paragraph--lightPurple paragraph--bolder">
            retournez à l'accueil
          </Paragraph>
        </a>
      </div>
    </div>
  );
};

export default Redirect;
