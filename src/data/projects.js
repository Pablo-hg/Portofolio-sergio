import DefaultImage from '../assets/img/Image.png'; // fallback opcional
import ImagenIberdrola from '../assets/img/ImagenIberdrola.png';
import LogoRoadstr from '../assets/img/Logo_Roadstr.png';
import LogoIberdrola from '../assets/img/LogoIberdrola.png';
import LogoSesh from '../assets/img/LogoSesh.png';

export const projects = [
  {
    id: 1,
    urlImage: ImagenIberdrola,
    urlLogo: LogoIberdrola,
    nameCard: 'Proyecto Iberdrola',
    tags: ['Energía', 'B2B', 'Web & APP'],
    title: 'UX/UI en web y app para varios mercados europeos',
    info: 'Creación de experiencias digitales para clientes en Portugal, Italia, Francia y Alemania, adaptando el producto a contextos y necesidades locales.',
    url: '/iberdrola'
  },
  {
    id: 2,
    urlImage: DefaultImage,
    urlLogo: LogoRoadstr,
    nameCard: 'Proyecto Roadstr',
    tags: ['Automoción', 'Startup', 'APP, Web & CarDrive'],
    title: 'Mejora de flujos y propuestas como Product Designer',
    info: 'Durante mi etapa en RoadStr ayudé a mejorar el flujo de trabajo del equipo de diseño y propuse nuevas funcionalidades para la app en iOS, Android y Carplay.',
    url: '/roadstr'
  },
  {
    id: 3,
    urlImage: DefaultImage,
    urlLogo: LogoSesh,
    nameCard: 'Proyecto Sesh',
    tags: ['Música/Entretenimiento', 'Startup', 'APP'],
    title: 'Rediseño completo de la app para artistas y fans',
    info: 'Rediseñé la aplicación completa de Sesh (UX/UI & Design System), enfocada en conectar artistas y fans. Desde la experiencia de usuario hasta el diseño visual y el sistema de diseño en Figma.',
    url: '/sesh'
  }
];
