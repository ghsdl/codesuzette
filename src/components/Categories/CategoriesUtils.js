import { CATEGORIES } from '../../pages/Category/CategoryConst.js';
import websites from '../../assets/animations/websites.json';
import courses from '../../assets/animations/courses.json';
import videos from '../../assets/animations/videos.json';
import games from '../../assets/animations/games.json';
import challenges from '../../assets/animations/challenges.json';
import readings from '../../assets/animations/readings.json';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

const getLabel = (category) => {
  return CATEGORIES.find((CATEGORY) => {
    return isEqual(get(category, 'name', ''), CATEGORY.value);
  }).label;
};

const getAnimatedIcon = (category) => {
  return isEqual(get(category, 'name', ''), 'websites')
    ? websites
    : isEqual(get(category, 'name', ''), 'courses')
    ? courses
    : isEqual(get(category, 'name', ''), 'videos')
    ? videos
    : isEqual(get(category, 'name', ''), 'games')
    ? games
    : isEqual(get(category, 'name', ''), 'challenges')
    ? challenges
    : readings;
};

export { getLabel, getAnimatedIcon };
