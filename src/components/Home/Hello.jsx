
const Hello = () => (
    <section className="bg-bgColor-header">
        <div className='container animate-fade-up py-32 '>
            <h1 className="mb-6 text-textColor-heading-strong">
                Diseño digital <span className='text-accentColor-primary'>claro</span> y <span className='text-accentColor-primary'>escalable</span>.
            </h1>
            <h5 className="mb-6 text-textColor-heading-subtle">
                <span className='text-accentColor-primary'>Product Designer</span> con perfil y background <span className='text-accentColor-primary'>técnico</span>.
            </h5>
            <p className="mb-6">
                Transformo ideas en experiencias digitales sólidas, uniendo estrategia, diseño y tecnología para ayudar a equipos y empresas a escalar productos con impacto y coherencia.</p>
            <div className="flex gap-3">
                <div className="tag-toggle">
                    Estrategia de Producto
                </div>
                <div className="tag-toggle">
                    UX flows
                </div>
                <div className="tag-toggle">
                    Design Systems
                </div>
                <div className="tag-toggle">
                    UI Escalable
                </div>
                <div className="tag-toggle">
                    Tests de Usabilidad
                </div>
                <div className="tag-toggle">
                    Accesibilidad
                </div>
            </div>
        </div>
    </section>
);

export default Hello;
