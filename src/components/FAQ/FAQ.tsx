import { Accordion, AccordionSection } from 'react-rainbow-components';
import './FAQ.scss';

const FAQ = () => {
  return (
    <Accordion className="faq">
      <AccordionSection
        className="faq__section"
        label="D'autres langages seront-ils ajoutés ?"
      >
        Cela dépendra de la demande et du temps libre de la créatrice. Si tu
        souhaites que d'autres langages soient ajoutés, tu peux te rendre dans
        le formulaire de contact et envoyer un message.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="J'ai remarqué un bug ou un lien cassé"
      >
        Tu peux te rendre dans le formulaire de contact et envoyer un message.
        Ou me contacter sur Twitter si tu préfères.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="Je crée du contenu qui pourrait figurer sur le site"
      >
        Tu peux te rendre dans le formulaire de contact et envoyer un message.
        Ou me contacter sur Twitter si tu préfères.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="Pourquoi avoir choisi ce nom ?"
      >
        Je cherchais un nom d'un truc que j'aime bien manger couplé à un truc en
        lien avec le web. J'ai donc choisi le nom de la recette de crêpes
        suzette.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="C'est quoi la stack technique du site ?"
      >
        TypeScript et React pour le front, Postgres pour la base de données et
        Directus pour l'API.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="Et sinon, c'est bon les crêpes suzette ?"
      >
        Très! D'ailleurs, la recette est quelque part sur le site, si on cherche
        mal on la trouve.
      </AccordionSection>
    </Accordion>
  );
};

export default FAQ;
