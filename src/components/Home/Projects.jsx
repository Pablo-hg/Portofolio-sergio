import '../../styles/Projects.css';
import Card from '../Card';

const Projects = () => (
  <section className="text-left projects">
    <h2>📂Mis proyectos destacados</h2>
    <p className="mt-6 mb-12 desc">Cada proyecto cuenta un reto distinto: aquí comparto cómo los abordé y qué aprendí en el proceso.</p>

    <Card
      urlImage='/src/assets/img/ImagenIberdrola.png'
      urlLogo='/src/assets/img/LogoIberdrola.png'
      nameCard='Proyecto Iberdrola'
      tags={['Energía', 'B2B', 'Web & APP']}
      title='UX/UI en web y app para varios mercados europeos'
      info='Creación de experiencias digitales para clientes en Portugal, Italia, Francia y Alemania, adaptando el producto a contextos y necesidades locales.'
      url='/iberdrola'
    />
    <hr className='my-12' />
     <Card
      urlLogo='/src/assets/img/Logo_Roadstr.png'
      nameCard='Proyecto Roadstr'
      tags={['Automoción', 'Startup', 'APP, Web & CarDrive']}
      title='Mejora de flujos y propuestas como Product Designer'
      info='Durante mi etapa en RoadStr ayudé a mejorar el flujo de trabajo del equipo de diseño y propuse nuevas funcionalidades para la app en iOS, Android y Carplay.'
      url='/roadstr'
    />
    <hr className='my-12' />
    <Card
      urlLogo='/src/assets/img/LogoSesh.png'
      nameCard='Proyecto Sesh'
      tags={['Música/Entretenimiento', 'Startup', 'APP']}
      title='Rediseño completo de la app para artistas y fans'
      info='Rediseñé la aplicación completa de Sesh (UX/UI & Design System), enfocada en conectar artistas y fans. Desde la experiencia de usuario hasta el diseño visual y el sistema de diseño en Figma.'
      url='/sesh'
    />
  </section>
);

export default Projects;
