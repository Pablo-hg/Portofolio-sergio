import '../../styles/Projects.css';
import Card from '../Card';

const Designs = () => (
  <section className="pt-44 text-left design">
    <h2>️️🖌️ Visual & Graphic Design</h2>
    <p className="mt-6 mb-12 desc">Cada proyecto cuenta un reto distinto: aquí comparto cómo los abordé y qué aprendí en el proceso.</p>

    <Card
      urlImage='/src/assets/img/ImagenPusher.png'
      tags={['Música/Entretenimiento', 'Startup', 'APP']}
      title='Cartel alternativo para la película PUSHER I I'
      info='Creación de experiencias digitales para clientes en Portugal, Italia, Francia y Alemania, adaptando el producto a contextos y necesidades locales.'
      url='/iberdrola'
    />
    <hr className='my-12' />
     <Card
      urlImage='/src/assets/img/ImagenFlyers.png'
      tags={['Automoción', 'Startup', 'APP, Web & CarDrive']}
      title='Diseño de flyers para evento de juegos de mesa'
      info='Durante mi etapa en RoadStr ayudé a mejorar el flujo de trabajo del equipo de diseño y propuse nuevas funcionalidades para la app en iOS, Android y Carplay.'
      url='/roadstr'
    />
    <hr className='my-12' />
    <Card
      urlImage='/src/assets/img/ImagenLata.png'
      tags={['Música/Entretenimiento', 'Startup', 'APP']}
      title='Mejora de flujos y propuestas como Product Designer.'
      info='Rediseñé la aplicación completa de Sesh (UX/UI & Design System), enfocada en conectar artistas y fans. Desde la experiencia de usuario hasta el diseño visual y el sistema de diseño en Figma.'
      url='/sesh'
    />
  </section>
);

export default Designs;
