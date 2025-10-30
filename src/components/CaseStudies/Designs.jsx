import { designsData } from '../../data/designs';
import '../../styles/Projects.css';
import Card from '../Card';

const Designs = () => (
  <section className="pt-44 text-left design">
    <h2 className='text-[--color-text-heading-strong]'>🖌️ Visual & Graphic Design</h2>
    <p className="mt-6 mb-12 text-description">
      Proyectos de diseño visual, gráfico y experimental donde exploré estilos, composición y branding.
    </p>

    {designsData.map((design, i) => (
      <div key={design.id || i}>
        <Card {...design} />
        {i !== designsData.length - 1 && <hr className="my-12" />}
      </div>
    ))}
  </section>
);

export default Designs;
