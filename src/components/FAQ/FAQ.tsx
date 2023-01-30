import { Accordion, AccordionSection } from 'react-rainbow-components';
import './FAQ.scss';

const FAQ = () => {
  return (
    <Accordion className="faq">
      <AccordionSection
        className="faq__section"
        label="D'autres langages seront-ils ajoutés ?"
      >
        Il y a évidemment énormément de possibilités, et pour l'instant je me
        suis concentrée uniquement sur le front-end parce que ce sont les
        ressources que je connais le mieux. Si tu souhaites que d'autres
        langages soient ajoutés, tu peux me contacter via la section ci-dessous.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="J'ai remarqué un bug ou un lien cassé"
      >
        C'est nul ça, du coup tu peux me contacter via la section ci-dessous et
        je regarderai dès que possible pour pallier ce problème.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="Je crée du contenu qui pourrait figurer sur le site"
      >
        Je n'ai pas la prétention d'avoir épuisé toutes les ressources citées
        ici donc si tu penses que ton contenu est pertinent, tu peux me
        contacter via la section ci-dessous et je regarderai si je peux
        l'ajouter.
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
        label="Y aura-t-il des nouvelles fonctionnalités ou des améliorations ?"
      >
        Tellement que je voudrais mettre en place, en vrac : le "petit lexique
        du dév", un espace personnel pour mettre en favoris des ressources et se
        créer un véritable chemin d'apprentissage, une page par ressource pour
        développer le contenu, une recherche globale sur le site, une
        pagination, un dark mode, un filtre par niveau etc.
      </AccordionSection>
      <AccordionSection
        className="faq__section"
        label="Pourquoi avoir choisi ce nom ?"
      >
        Je cherchais un nom d'un truc que j'aime bien manger couplé à un truc en
        lien avec le code triplé à une référence à ma Bretagne natale. J'ai donc
        choisi le nom de la recette des crêpes suzette.
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
