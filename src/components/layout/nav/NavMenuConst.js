import {
  BsLaptop,
  BsClipboardCheck,
  BsBook,
  BsCameraVideo,
  BsController,
  BsClockHistory
} from 'react-icons/bs';

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
        icon: <BsController />,
        label: 'Jeux',
        to: '/games'
      },
      {
        icon: <BsClockHistory />,
        label: 'Challenges',
        to: '/challenges'
      }
    ]
  },
  { label: 'À propos', to: '/about' }
];
