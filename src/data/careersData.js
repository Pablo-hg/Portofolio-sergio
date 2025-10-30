import logoGaraje from '../assets/img/logos/logoGaraje.png';
import LogoRoadstr from '../assets/img/logos/logoRoadstr.png';
import logoSesh from '../assets/img/logos/logoSesh.png';
import CarIcon from '../assets/svg/CarIcon.svg';
import SingIcon from '../assets/svg/SingIcon.svg';
import WebIcon from '../assets/svg/WebIcon.svg';

export const carrersData = [
  {
    id: 1,
    urlImage: LogoRoadstr,
    dateStarted: "2025 • JUL",
    dateEnded: "SEP",
    title: 'Product Owner & Designer',
    info: 'Me encargué de centralizar y mejorar el proceso de diseño, alineando equipos y documentando decisiones. También diseñé nuevas funcionalidades como SOS alerts y waypoint routing, que aumentaron notablemente la interacción de los usuarios.',
    url: 'https://roadstr.io/es/',
    icon: CarIcon
  },
  {
    id: 2,
    urlImage: logoGaraje,
    dateStarted: "2023 • ABR",
    dateEnded: "2025 • JUL",
    title: 'UX/UI Designer',
    info: 'Participé en el proyecto internacional de Iberdrola, trabajando en apps y webs de distintos mercados europeos. Me enfoqué en mejorar la usabilidad, definir flujos y contribuir al design system global.',
    url: 'https://www.garajedeideas.com/es',
    icon: WebIcon
  },
  {
    id: 3,
    urlImage: logoSesh,
    dateStarted: "2022 • MAR",
    dateEnded: "2023 • ABR",
    title: 'UX/UI Designer',
    info: 'Rediseñé por completo la app de Sesh para iOS y Android, priorizando la experiencia de artistas y fans. Además, produje contenido visual y coordiné pruebas de usabilidad para optimizar la interacción.',
    url: 'https://www.joinsesh.ai/es',
    icon: SingIcon
  },
];
