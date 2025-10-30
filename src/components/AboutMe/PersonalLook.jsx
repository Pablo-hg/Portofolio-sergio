import bgCastillo from '../../assets/img/bg/bgCastillo.webp';
import bgComida from '../../assets/img/bg/bgComida.webp';
import bgSergio2 from '../../assets/img/bg/bgSergio2.webp';
import bgValencia from '../../assets/img/bg/bgValencia.webp';


const MyProjects = () => (
    <section className="text-left mt-44">
        <h2 className="text-[--color-text-heading-strong]"> 📸 Un vistazo más personal</h2>
        <p className="text-description mt-6">
            Momentos, pasiones y detalles fuera del trabajo que también inspiran mi forma de diseñar.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-8">
            <img src={bgSergio2} className="rounded-2xl object-cover w-full h-full row-span-2" />
            <img src={bgCastillo} className="rounded-2xl object-cover w-full h-full" />
            <img src={bgComida} className="rounded-2xl object-cover w-full h-full row-span-2" />
            <img src={bgValencia} className="rounded-2xl object-cover w-full h-full" />
            
        </div>

    </section>
);

export default MyProjects;
