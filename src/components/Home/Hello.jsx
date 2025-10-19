import '../../styles/Hello.css';


const Hello = () => (
    <section className="py-36 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[250px]">
        <div className='hello w-full animate-fade-up'>
            <h1 className="mb-4 text-left">
                🌐<span className='text-primary'>Product Designer</span> con background técnico.
            </h1>
            <p className="text-left mb-6 mt-6">
                Ayudo a startups y equipos SaaS a crear experiencias digitales claras, escalables y que generan impacto real.
            </p>
            <p className="text-left">
                En los últimos años he trabajado en proyectos internacionales de energía, música y automoción, mejorando procesos, diseño de producto y resultados de negocio.
            </p>
        </div>
        <div className="skills w-full text-left animate-fade-up">
            <h3 className="mb-2">Mis principales Skills</h3>
            <ul className="pt-4">
                {[
                    "Estrategia de Product & UX flows",
                    "Figma Design Systems & UI Escalable",
                    "Tests de Usabilidad & Accesibilidad",
                ].map((texto) => (
                    <li
                        key={texto}
                        className="relative pb-3 mb-5 overflow-hidden border-b-2 cursor-pointer group animate"
                    >
                        {/* Flecha */}
                        <span
                            className="absolute left-2 top-1 opacity-0 group-hover:opacity-100  flecha animate"
                            aria-hidden="true"
                        >
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99512 1.18945C9.06607 1.19012 9.12792 1.20677 9.18945 1.25L9.25098 1.30273L16.1992 8.25098C16.2524 8.30514 16.2781 8.34727 16.29 8.37598V8.37695C16.3052 8.4133 16.3135 8.45336 16.3135 8.50098C16.3134 8.54859 16.3048 8.58771 16.29 8.62305V8.62402C16.2782 8.6525 16.2527 8.69483 16.1992 8.74902L9.24512 15.6973C9.15376 15.7875 9.07515 15.8135 8.99219 15.8135C8.91149 15.8134 8.83932 15.7889 8.75586 15.7031L8.75098 15.6982L8.69922 15.6377C8.65712 15.5781 8.64259 15.52 8.64258 15.4551C8.64258 15.3904 8.65735 15.3328 8.69922 15.2734L8.75098 15.2129L15.1123 8.85156H1.70215C1.58005 8.85153 1.50781 8.81638 1.44727 8.75586H1.44629C1.38542 8.69495 1.35059 8.62202 1.35059 8.5C1.35059 8.37798 1.38542 8.30505 1.44629 8.24414H1.44727C1.50782 8.18361 1.58005 8.14847 1.70215 8.14844H15.1123L8.75684 1.79297C8.69552 1.73162 8.66374 1.67322 8.65137 1.6084L8.64551 1.54102C8.6446 1.45107 8.67076 1.37748 8.75098 1.29688L8.75195 1.2959C8.8321 1.21531 8.90546 1.18868 8.99512 1.18945Z" fill="#1A1A1A" stroke="#1A1A1A" />
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
