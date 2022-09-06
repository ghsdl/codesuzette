import {
  BsLaptop,
  BsClipboardCheck,
  BsBook,
  BsCameraVideo
} from 'react-icons/bs';
import { BiGame } from 'react-icons/bi';
import { GiSandsOfTime } from 'react-icons/gi';

export const menus = [
  {
    label: 'Explorer',
    to: '/',
    icon: true,
    submenus: [
      {
        icon: <BsLaptop />,
        label: 'Sites',
        to: '/websites'
      },
      {
        icon: <BsClipboardCheck />,
        label: 'Cours',
        to: '/courses'
      },
      {
        icon: <BsBook />,
        label: 'Lectures',
        to: '/readings'
      },
      {
        icon: <BsCameraVideo />,
        label: 'Vidéos',
        to: '/videos'
      },
      {
        icon: <BiGame />,
        label: 'Jeux',
        to: '/games'
      },
      {
        icon: <GiSandsOfTime />,
        label: 'Challenges',
        to: '/challenges'
      }
    ]
  },
  { label: 'À propos', to: '/about' }
];
