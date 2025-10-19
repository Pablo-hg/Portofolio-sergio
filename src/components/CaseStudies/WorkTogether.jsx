import '../../styles/Hello.css';
import Button from '../Button';

const MyProjects = () => (
    <section className="py-36 worktohether w-full">
        <div className="mx-auto info">
            <h2>💡¿Trabajamos juntos? </h2>
            <p className="my-6 desc">
                Estoy abierto a nuevas oportunidades, proyectos interesantes o simplemente a charlar sobre diseño y producto. Puedes escribirme directamente por correo o conectar conmigo en LinkedIn.
            </p>
        </div>
        <div className="flex justify-center gap-4 work">
            <Button className='btn-Primary' href='case-studies' txt='Enviar un email' />
            <Button className='btn-Secondary' href='case-studies' txt='Conectar en Linkedin' />
        </div>

    </section>
);

export default MyProjects;
