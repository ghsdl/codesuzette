import Subheading from '../Subheading/Subheading';
import Picture from '../Picture/Picture';
import Paragraph from '../Paragraph/Paragraph';
import CREPE from '../../assets/images/CREPE.svg';
import './NoResource.scss';

interface NoResourceProps {
  className?: string;
}

const NoResource = ({ className }: NoResourceProps) => {
  return (
    <div className={`noResource ${className}`}>
      <Subheading>Oopsie...</Subheading>
      <Picture src={CREPE} alt="logo" className="noResource__logo" />
      <Paragraph className="noResource__paragraph">
        Cette combinaison de filtres n'a retourné aucune ressource.
      </Paragraph>
    </div>
  );
};

export default NoResource;
