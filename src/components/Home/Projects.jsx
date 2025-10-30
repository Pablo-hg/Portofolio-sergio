import { projectsData } from '../../data/projectsData';
import '../../styles/Projects.css';
import CardCase from '../CardCase';

const Projects = () => (
  <section className="text-left projects mt-12">
    <h2 className='text-[--color-text-heading-strong]'>📱 Producto & Diseño UX/UI</h2>
    <p className="mt-6 mb-12 text-description">
      Cada proyecto cuenta un reto distinto: aquí comparto cómo los abordé y qué aprendí en el proceso.
    </p>

    {projectsData.map((project, i) => (
      <div key={project.id || i}>
        <CardCase {...project} />
        {i !== projectsData.length - 1 && <hr className="my-12" />}
      </div>
    ))}
  </section>
);

export default Projects;
