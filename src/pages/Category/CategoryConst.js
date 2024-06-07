import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';

const CATEGORIES = [
  {
    value: 'websites',
    label: 'Sites'
  },
  {
    value: 'courses',
    label: 'Cours'
  },
  {
    value: 'videos',
    label: 'Vidéos'
  },
  {
    value: 'readings',
    label: 'Lectures'
  },
  {
    value: 'games',
    label: 'Jeux'
  },
  {
    value: 'challenges',
    label: 'Challenges'
  }
];

const PRICES = [
  {
    name: 'free',
    label: 'Gratuit',
    icon: '♾️'
  },
  {
    name: 'freemium',
    label: 'Freemium',
    icon: '💰'
  },
  {
    name: 'premium',
    label: 'Payant',
    icon: '🤑'
  }
];

const LOCALES = [
  {
    name: 'fr_FR',
    label: 'Français',
    icon: '🇫🇷'
  },
  {
    name: 'en_EN',
    label: 'Anglais',
    icon: '🇬🇧'
  }
];

const CODING_LANGUAGES = [
  {
    name: 'html',
    label: 'HTML',
    icon: <FaHtml5 />,
    iconClassName: 'icon--red'
  },
  {
    name: 'css',
    label: 'CSS',
    icon: <FaCss3 />,
    iconClassName: 'icon--yellow'
  },
  {
    name: 'javascript',
    label: 'JavaScript',
    icon: <IoLogoJavascript />,
    iconClassName: 'icon--green'
  },
  {
    name: 'react',
    label: 'React',
    icon: <FaReact />,
    iconClassName: 'icon--lightBlue'
  },
  {
    name: 'typescript',
    label: 'TypeScript',
    icon: <SiTypescript />,
    iconClassName: 'icon--lightPurple'
  }
];

export { CATEGORIES, PRICES, LOCALES, CODING_LANGUAGES };
