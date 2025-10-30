import BgSergioNegro from '../../assets/img/bg/bgSergioNegro.webp';


const ItsMe = () => (
    <section className="itsme flex items-center justify-center py-36">
        <img src={BgSergioNegro} className='absolute left-0 top-0 rounded-br-lg max-h-[656px]' />
        <div className="hola w-1/2"></div>
        <div className="name w-full max-w-[500px] animate-fade-up my-6">
            <h1 className='text-left text-[--color-text-heading-strong]'>✨ <span className='text-[--color-accent-primary]'>Sergio Díaz</span>, sí, ese soy yo. </h1>
            <p className='text-left mt-6 text-description'>Madrileño de nacimiento, abulense de corazón y praguense de adopción. Siempre he sido una persona curiosa, con ganas de aprender y con una gran pasión por los idiomas.</p>
        </div>
    </section>
);
export default ItsMe;
