import Subtitle from '../../factory/Subtitle/Subtitle';
import Paragraph from '../../factory/Paragraph/Paragraph';
import CategoryCard from '../../factory/CategoryCard/CategoryCard';
import { CATEGORIES } from './ExploreConst.js';
import websites from '../../../assets/animations/websites.json';
import courses from '../../../assets/animations/courses.json';
import videos from '../../../assets/animations/videos.json';
import games from '../../../assets/animations/games.json';
import challenges from '../../../assets/animations/challenges.json';
import readings from '../../../assets/animations/readings.json';
import './Explore.scss';

const Explore = () => {
  const mock = [
    { name: 'websites', resources: [] },
    { name: 'courses', resources: [] },
    { name: 'videos', resources: [] },
    { name: 'readings', resources: [] },
    { name: 'games', resources: [] },
    { name: 'challenges', resources: [] }
  ];
  return (
    <div className="explore">
      <div className="explore__header">
        <Subtitle className="explore__header__title">
          Explorez les ressources
        </Subtitle>
        <Paragraph className="explore__header__details">
          6 catégories - 5 languages - 117 ressources
        </Paragraph>
      </div>
      <div className="explore__categoryCards">
        {mock.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              label={
                CATEGORIES.find((CAT) => {
                  return category?.name === CAT?.value;
                })?.label
              }
              ressourcesNumber={category.resources.length}
              animationData={
                category?.name === 'websites'
                  ? websites
                  : category?.name === 'courses'
                  ? courses
                  : category?.name === 'videos'
                  ? videos
                  : category?.name === 'games'
                  ? games
                  : category?.name === 'challenges'
                  ? challenges
                  : readings
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
