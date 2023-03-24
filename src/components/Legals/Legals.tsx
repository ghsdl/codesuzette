import Paragraph from '../Paragraph/Paragraph';
import Subheading from '../Subheading/Subheading';
import './Legals.scss';

const Legals = () => {
  return (
    <div className="legals">
      <Subheading className="legals__title">Mentions légales</Subheading>
      <div className="legals__content">
        <Paragraph>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site Code Suzette l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </Paragraph>
        <div className="legals__container">
          <Paragraph className="paragraph--bold">Edition du site</Paragraph>
          <Paragraph>
            Le présent site, accessible à l'URL codesuzette.dev (le « Site »),
            est édité par : Maeva Saïdali Bacar
          </Paragraph>
        </div>
        <div className="legals__container">
          <Paragraph className="paragraph--bold">Hébergement</Paragraph>
          <Paragraph>
            Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann -
            BP 80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email :
            1007).
          </Paragraph>
        </div>
        <div className="legals__container">
          <Paragraph className="paragraph--bold">
            Directrice de publication
          </Paragraph>
          <Paragraph>
            La Directrice de la publication du Site est Maeva Saïdali Bacar.
          </Paragraph>
        </div>
        <div className="legals__container">
          <Paragraph className="paragraph--bold">Contact</Paragraph>
          <div className="legals__contact">
            <Paragraph>Adresse électronique : </Paragraph>
            <a href="mailto:maeva.ghsdl@gmail.com" rel="noreferrer">
              <Paragraph className="paragraph--underline">
                maeva.ghsdl@gmail.com
              </Paragraph>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legals;
