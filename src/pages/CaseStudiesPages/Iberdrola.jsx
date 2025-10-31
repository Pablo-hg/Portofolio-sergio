import bgMolino from "../../assets/img/bg/bgMolinos.webp";
import LogoGaraje from "../../assets/img/logos/LogoGaraje.webp";
import LogoIberdrola from "../../assets/img/logos/LogoIberdrola.webp";

import bgCastillo from '../../assets/img/bg/bgCastillo.webp';
import bgComida from '../../assets/img/bg/bgComida.webp';
import bgIberdrola2 from '../../assets/img/bg/bgIberdrola2.webp';
import bgSergio2 from '../../assets/img/bg/bgSergio2.webp';

import Banner from "../../components/Home/Banner";
import RelatedProjects from "../../components/RelatedProjects";
import WorkTogether from "../../components/WorkTogether";

function Iberrola() {

    return (
        <>
            <section className="absolute left-0 top-0 w-full">
                <div className="h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${bgMolino})` }}>
                </div>
                <div className="bg-[--color-bg-green] h-[468px]"></div>
            </section>
            <section className="mb-20">
                <section className="animate-fade-up w-full flex justify-between mt-96">
                    <div className="max-w-[600px] text-left">
                        <div className="flex">
                            <img src={LogoIberdrola} className="h-10 mr-4" alt="" />
                            <img src={LogoGaraje} className="h-10" alt="" />
                        </div>
                        <h1 className="text-[--color-text-heading-strong] my-6">UX/UI en web y app para varios mercados europeos</h1>
                        <div className="flex">
                            <div className="tags flex mb-3 gap-2">
                                <div className="tag-toggle">
                                    Energía
                                </div>
                                <div className="tag-toggle">
                                    B2B
                                </div>
                                <div className="tag-toggle">
                                    Web & APP
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[600px] text-left text-paragraph text-[--color-text-description]">
                        <p className="mb-3">En Garaje de Ideas participé durante casi dos años en el proyecto de Iberdrola Internacional, cuyo objetivo era transformar y unificar la experiencia digital de la compañía en distintos mercados europeos. Mi trabajo se centró principalmente en Portugal, con fuerte implicación en la app móvil, el Área Cliente y Mis Gestiones Online, y también colaboré en las webs públicas de Italia, Francia y Alemania.
                        </p>
                        <p>
                            Iberdrola buscaba ofrecer a millones de usuarios una experiencia digital coherente, sencilla y moderna, independientemente del país en el que se encontraran. El reto era enorme: adaptar un producto global a contextos locales muy distintos, con regulaciones, lenguajes y expectativas diferentes.</p>
                    </div>
                </section>
                <section className="flex mt-40 text-left">
                    <h2 className="text-[--color-text-heading-strong]">Un poco de contexto del proyecto</h2>
                    <div className="max-w-[640px] text-paragraph text-[--color-text-body]">
                        <p>
                            Iberdrola es uno de los principales grupos energéticos a nivel mundial, con una fuerte presencia en Europa. El proyecto internacional tenía como meta redefinir su ecosistema digital, logrando:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong className="text-highlight">Consistencia</strong> global en diseño y marca, respetando la identidad corporativa.</li>
                            <li><strong className="text-highlight">Adaptación local en cada país</strong>, atendiendo a regulaciones específicas, idioma y particularidades culturales.</li>
                            <li><strong className="text-highlight">Mejora de la experiencia del cliente en canales digitales</strong>, reduciendo la complejidad en gestiones y trámites.</li>
                        </ul>
                        <p className="mt-3">
                            <strong>Mi rol dentro del equipo</strong><br></br>
                            Formé parte de un equipo compuesto por un UX Lead, un Project Manager y tres diseñadores más. Desde esta posición, mi contribución fue:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Portugal como foco principal: diseño de flujos de usuario y wireframes para Mi Área Cliente y Mis Gestiones Online. Rediseño de la app móvil, con énfasis en accesibilidad, claridad y facilidad de uso.</li>
                            <li>Web pública en otros mercados: adaptación de diseños responsive y localización de contenidos en Italia, Francia y Alemania.</li>
                            <li>Colaboración en el Design System global: definición y uso de componentes en Figma para garantizar coherencia visual y de interacción.</li>
                            <li>Trabajo cross-funcional: comunicación continua con desarrolladores y Product Managers para asegurar viabilidad técnica y alineación con negocio.</li>
                        </ul>
                        <hr className="mt-20" />
                        <div className="flex justify-between items-center py-5">
                            <h3>Cliente</h3><span>Iberdrola Internacional</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-5">
                            <h3>Fechas</h3><span>2023-2025</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-5">
                            <h3>Rol que ejercía</h3><span>UX/UI Designer</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center py-5">
                            <h3>Website asociados</h3><span>#</span>
                        </div>
                        <hr />
                    </div>
                </section>
                <section className="grid grid-cols-2 gap-8 mt-24">
                    <img src={bgSergio2} className="rounded-2xl object-cover w-full h-full row-span-2" />
                    <img src={bgCastillo} className="rounded-2xl object-cover w-full h-full" />
                    <img src={bgComida} className="rounded-2xl object-cover w-full h-full " />
                </section>
            </section>
            <Banner />
            <section className="pt-36 flex text-left justify-between">
                <h2 className="text-[--color-text-heading-strong]">Retos principales</h2>
                <ul className="list-disc max-w-[500px] text-paragraph text-[--color-text-base]">
                    <li>Diseñar para mercados múltiples, cada uno con sus regulaciones y particularidades.</li>
                    <li>Optimizar procesos complejos en el área de cliente y gestiones online.</li>
                    <li>Mejorar el Design System internacional para que sea escalable y adaptable a nuevos mercados.</li>
                </ul>
            </section>
            <section className="flex text-left justify-between mt-28">
                <div className="w-[360px] border-l-2 pl-8">
                    <p className="text-7xl mb-4 text-[--color-accent-primary]">4</p>
                    <span className="text-highlight text-[--color-text-base]">Países distintos</span>
                    <p className="text-description mt-2">Francia, Alemania, Italia y Portugal</p>
                </div>
                 <div className="w-[360px] border-l-2 pl-8">
                    <p className="text-7xl mb-4 text-[--color-accent-primary]">4</p>
                    <span className="text-highlight text-[--color-text-base]">Productos clave rediseñados</span>
                    <p className="text-description mt-2">(App Recarga Pública · Mis Gestiones Online · Smart Mobility Empresas · Área Cliente)</p>
                </div>
                 <div className="w-[360px] border-l-2 pl-8">
                    <p className="text-7xl mb-4 text-[--color-accent-primary]">6</p>
                    <span className="text-highlight text-[--color-text-base]">Equipos implicados</span>
                    <p className="text-description mt-2">Diseñadores, producto, negocio y desarrollo en distintos países</p>
                </div>
            </section>
            <section className="mt-28 flex text-left justify-between">
                <h2 className="text-[--color-text-heading-strong]">Key heading about the<br></br> project goes here</h2>
                <div className=" max-w-[500px] text-paragraph text-[--color-text-base]">
                    <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                    <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                </div>
            </section>
            <img className="mt-28" src={bgIberdrola2} alt="" />
            <section className="mt-28 flex text-left justify-between">
                <h2 className="text-[--color-text-heading-strong]">Resultados e impactoe</h2>
                <div className=" max-w-[500px] text-paragraph text-[--color-text-base]">
                    <p>Lanzamiento de las webs públicas en varios países europeos con un diseño coherente y responsive.</p>
                    <p>Mejora de la experiencia de cliente en Portugal, facilitando gestiones online y reduciendo fricciones.</p>
                    <p>Consolidación de un diseño unificado a nivel internacional, aplicable a nuevas funcionalidades y mercados futuros.</p>
                </div>
            </section>
            <RelatedProjects />
            <WorkTogether />
        </>
    )
}

export default Iberrola