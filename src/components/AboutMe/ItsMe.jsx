import BgSergioNegro from '../../assets/img/bg/bgSergioNegro.webp';
import '../../styles/Hello.css';

const MyProjects = () => (
    <section className="itsme flex items-center justify-center py-36">
        <img src={BgSergioNegro} alt="" className='absolute left-0 top-0 rounded-br-lg'  />
        <div className="hola w-full"></div>
        <div className="name w-full animate-fade-up">
            <p className="text-left my-6 desc w-full">
           <h1 className='text-left'>✨ <span className='text-primary'>Sergio Díaz</span>, sí, ese soy yo. </h1>
           <p className='text-left mt-6'>Madrileño de nacimiento, abulense de corazón y praguense de adopción. Siempre he sido una persona curiosa, con ganas de aprender y con una gran pasión por los idiomas.</p>
        </p>
        </div>
        
    </section>
    
);
export default MyProjects;
