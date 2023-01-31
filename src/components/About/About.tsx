import Paragraph from '../Paragraph/Paragraph';
import Subheading from '../Subheading/Subheading';
import DoubleFaces from '../DoubleFaces/DoubleFaces';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <Paragraph className="about__intro">
        La mission de <strong>Code Suzette</strong> est de faciliter la
        recherche de ressources sur le <strong>développement web</strong>.
      </Paragraph>
      <section className="about__section">
        <Subheading className="about__subheading">Histoire</Subheading>
        <DoubleFaces />
      </section>
      <section className="about__section">
        <Subheading className="about__subheading">
          Foire aux questions
        </Subheading>
        <FAQ />
      </section>
      <section className="about__section">
        <Subheading className="about__subheading">Contact</Subheading>
        <Contact />
      </section>
    </div>
  );
};

export default About;
