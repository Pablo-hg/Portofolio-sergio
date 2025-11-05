import Button from '../../components/Button';
import { projectsData } from '../../data/projectsData';
import '../../styles/Projects.css';
import CardCase from '../CardCase';

const Projects = () => (
  <section className="container py-24">
    <h2 className='text-textColor-heading-strong'>📱 Producto & Diseño UX/UI</h2>
    <p className="mt-6 mb-12 text-description">
      Cada proyecto cuenta un reto distinto: aquí comparto cómo los abordé y qué aprendí en el proceso.
    </p>

    {projectsData.map((project, i) => (
      <div key={project.id || i}>
        <CardCase {...project} />
        {i !== projectsData.length - 1 && <hr className="my-12" />}
      </div>
    ))}
    <div className="flex justify-center mt-16">
      <Button className='btn-Primary' href='case-studies' txt='Ver todos los proyectos' />
    </div>
  </section>
);

export default Projects;
