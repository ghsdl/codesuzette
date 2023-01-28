import Paragraph from '../Paragraph/Paragraph';
import Picture from '../Picture/Picture';
import Subheading from '../Subheading/Subheading';
import DoubleFace from '../DoubleFace/DoubleFace';
import Icon from '../Icon/Icon';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import CREPE from '../../assets/images/CREPE.svg';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <Subheading className="about__hello">Bienvenue! ☺️</Subheading>
      <Paragraph className="about__intro">
        La mission de Code Suzette est de faciliter la recherche de ressources
        sur le développement web. La liste n'est pas exhaustive, il s'agit
        plutôt de donner des pistes pour se lancer ou parfaire ses acquis.
      </Paragraph>
      <section className="about__project">
        <Subheading className="about__subheading">Histoire</Subheading>
        <div className="about__cards">
          <DoubleFace
            title="Behind"
            label="Le projet est né d'une volonté d'avoir au même endroit des ressources dans lesquelles piocher selon le besoin ou pour explorer."
            isRed={true}
          />
          <DoubleFace
            title="the"
            label="La mission première du site sera toujours de faciliter l'accès à des ressources sur le développement web pour apprendre et s'entraîner."
            isLightPurple={true}
          />
          <DoubleFace
            title="scenes"
            label="Ce site est un projet perso gratuit et maintenu autant que possible selon mon temps libre et ma motivation."
            isGreen={true}
          />
        </div>
      </section>
      <section className="about__faq">
        <div className="about__faq--left">
          <Subheading className="about__subheading">
            Foire aux questions
          </Subheading>
          <Picture src={CREPE} alt="logo" className="about__faq--left__logo" />
        </div>
        <div className="about__faq--right">
          <FAQ />
        </div>
      </section>
      <section className="about__contact">
        <div className="about__contact--left">
          <Subheading className="about__subheading">Contact</Subheading>
          <Contact />
        </div>
        <div className="about__contact--right">
          <div>
            <Paragraph className="paragraph--bolder about__contact--right__paragraph">
              Tu préfères envoyer un mail ?
            </Paragraph>
            <div className="about__contact--right__row">
              <Icon
                icon={<MdOutlineMarkEmailUnread />}
                className="about__contact--right__icon icon--lightPurple"
              />
              <a href="mailto:maeva.ghsdl@gmail.com" rel="noreferrer">
                <Paragraph className="paragraph--underline">
                  maeva.ghsdl@gmail.com
                </Paragraph>
              </a>
            </div>
          </div>
          <div>
            <Paragraph className="paragraph--bolder about__contact--right__paragraph">
              Ou me contacter via Twitter ?
            </Paragraph>
            <div className="about__contact--right__row">
              <Icon
                icon={<RiTwitterLine />}
                className="about__contact--right__icon icon--lightPurple"
              />
              <a
                href="https://twitter.com/nowthisiscoding"
                target="_blank"
                rel="noreferrer"
              >
                <Paragraph className="paragraph--underline">
                  @nowthisiscoding
                </Paragraph>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
