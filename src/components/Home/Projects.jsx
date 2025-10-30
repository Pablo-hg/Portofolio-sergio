import { projectsData } from '../../data/projects';
import '../../styles/Projects.css';
import Card from '../Card';

const Projects = () => (
  <section className="text-left projects mt-12">
    <h2 className='text-[--color-text-heading-strong]'>📱 Producto & Diseño UX/UI</h2>
    <p className="mt-6 mb-12 text-description">
      Cada proyecto cuenta un reto distinto: aquí comparto cómo los abordé y qué aprendí en el proceso.
    </p>

    {projectsData.map((project, i) => (
      <div key={project.id || i}>
        <Card {...project} />
        {i !== projectsData.length - 1 && <hr className="my-12" />}
      </div>
    ))}
  </section>
);

export default Projects;
