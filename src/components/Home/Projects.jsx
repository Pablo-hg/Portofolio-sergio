import { projectsData } from '../../data/projects';
import '../../styles/Projects.css';
import Card from '../Card';

const Projects = () => (
  <section className="text-left projects">
    <h2>📂Mis proyectos destacados</h2>
    <p className="mt-6 mb-12 desc">
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
