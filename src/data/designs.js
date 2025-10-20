// src/data/designs.js
import ImagenFlyers from '../assets/img/ImagenFlyers.png';
import ImagenLata from '../assets/img/ImagenLata.png';
import ImagenPusher from '../assets/img/ImagenPusher.png';

export const designs = [
  {
    id: 1,
    urlImage: ImagenPusher,
    tags: ['Música/Entretenimiento', 'Cartel', 'Cine'],
    title: 'Cartel alternativo para la película PUSHER II',
    info: 'Diseño gráfico experimental para reinterpretar la estética visual de la película PUSHER II, explorando el uso de color, textura y composición.',
    url: '/pusher'
  },
  {
    id: 2,
    urlImage: ImagenFlyers,
    tags: ['Eventos', 'Diseño gráfico', 'Print'],
    title: 'Diseño de flyers para evento de juegos de mesa',
    info: 'Diseño de material promocional físico combinando ilustración digital y tipografía para captar la atención en espacios públicos.',
    url: '/flyers'
  },
  {
    id: 3,
    urlImage: ImagenLata,
    tags: ['Branding', 'Packaging', 'Creatividad'],
    title: 'Diseño conceptual de lata para marca ficticia',
    info: 'Proyecto de branding y packaging inspirado en la estética pop, explorando cómo los elementos visuales transmiten identidad y tono de marca.',
    url: '/lata'
  }
];
