import '../../styles/Home.css';

const Hello = () => (
    <section className="py-36 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[250px]">
        <div className='hello max-w-[640px] w-full animate-fade-up'>
            <h1 className="mb-4 text-left text-[--color-text-heading-strong]">
                🌐Diseño <span className='text-[--color-accent-primary]'>claro</span> y<br></br>
                <span className='text-[--color-accent-primary]'>escalable</span>.
            </h1>
            <p className="text-left mb-6 mt-6 text-paragraph text-[--color-text-heading-subtle]">
                Product Designer con perfil técnico.
            </p>
            <p className="text-left text-paragraph text-[--color-text-description]">
                Transformo ideas en experiencias digitales sólidas, uniendo estrategia, diseño y tecnología para ayudar a equipos y empresas a escalar productos con impacto y coherencia.            </p>
        </div>
        <div className="skills max-w-[450px] w-full text-left animate-fade-up">
            <p className="mb-2 text-highlight text-[--color-text-heading-subtle]">Mis principales Skills</p>
            <ul className="pt-4">
                {[
                    "Estrategia de Product & UX flows",
                    "Figma Design Systems & UI Escalable",
                    "Tests de Usabilidad & Accesibilidad",
                ].map((texto) => (
                    <li
                        key={texto}
                        className="relative pb-3 mb-5 overflow-hidden border-b-2 border-[--color-text-link] hover:border-[--color-border-hover] cursor-pointer group animate text-cta"
                    >
                        {/* Flecha */}
                        <span
                            className="absolute top-[3px] left-[15px] opacity-0 group-hover:opacity-100  flecha animate"
                            aria-hidden="true"
                        >

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.14453 0.5C8.21548 0.500668 8.27733 0.517317 8.33887 0.560547L8.40039 0.613281L15.3486 7.56152C15.4018 7.61569 15.4275 7.65782 15.4395 7.68652V7.6875C15.4546 7.72385 15.4629 7.7639 15.4629 7.81152C15.4629 7.85914 15.4543 7.89825 15.4395 7.93359V7.93457C15.4276 7.96304 15.4022 8.00538 15.3486 8.05957L8.39453 15.0078C8.30317 15.0981 8.22456 15.124 8.1416 15.124C8.06091 15.1239 7.98874 15.0994 7.90527 15.0137L7.90039 15.0088L7.84863 14.9482C7.80653 14.8886 7.79201 14.8306 7.79199 14.7656C7.79199 14.701 7.80676 14.6433 7.84863 14.584L7.90039 14.5234L14.2617 8.16211H0.851562C0.729469 8.16207 0.657228 8.12693 0.59668 8.06641H0.595703C0.53483 8.0055 0.500002 7.93256 0.5 7.81055C0.5 7.68853 0.534835 7.6156 0.595703 7.55469H0.59668C0.657231 7.49416 0.72946 7.45902 0.851562 7.45898H14.2617L7.90625 1.10352C7.84494 1.04216 7.81315 0.983763 7.80078 0.918945L7.79492 0.851562C7.79401 0.761613 7.82017 0.68803 7.90039 0.607422L7.90137 0.606445C7.98151 0.525858 8.05488 0.499224 8.14453 0.5Z" fill="black" stroke="black" />
                            </svg>
                        </span>

                        {/* Texto */}
                        <span
                            className="relative z-10 block group-hover:translate-x-12 text animate"
                        >
                            {texto}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Hello;
