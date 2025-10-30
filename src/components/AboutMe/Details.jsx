


const MyProjects = () => (
    <section className="text-left">
        <h2 className="text-[--color-text-heading-strong]">🌟 Pequeños detalles que hablan de quién soy.</h2>
        <p className="text-description mt-6">
            Soy una persona curiosa, me encanta aprender sobre otras culturas y formas de ver el mundo. Disfruto del arte, los videojuegos, y tengo una conexión especial con los animales, en especial con los perros. Valoro mucho la familia y vivo mi trabajo con verdadera pasión.
        </p>
        <div className="flex gap-3 justify-between mt-12">
            <div className="w-auto max-w-[362px]">
                <div className="bg-[--color-bg-blue] h-[240px] text-8xl rounded-2xl grid content-center text-center">📖🎭</div>
                <h3 className="text-[--color-text-heading-strong] mt-6">Curiosidad cultural</h3>
                <p className="text-description mt-3">
                    Siempre abierto a descubrir nuevas formas de pensar y expresarme, aprendiendo de cada contexto.
                </p>
            </div>
            <div className="w-auto max-w-[362px]">
                <div className="bg-[--color-bg-green] h-[240px] text-8xl rounded-2xl grid content-center text-center">☀️🌱</div>
                <h3 className="text-[--color-text-heading-strong] mt-6">Mi inspiración</h3>
                <p className="text-description mt-3">
                    Encuentro inspiración en películas, videojuegos, arte y libros; todos ellos amplían mi mirada y me ayudan a diseñar con mayor creatividad.
                </p>
            </div>
            <div className="w-auto max-w-[362px]">
                <div className="bg-[--color-bg-grey] h-[240px] text-8xl rounded-2xl grid content-center text-center">🎯🤝</div>
                <h3 className="text-[--color-text-heading-strong] mt-6">Trabajo con propósito</h3>
                <p className="text-description mt-3">
                    Me importa aportar valor real a través del diseño, creando productos que no solo sean útiles, sino que también generen impacto positivo en las personas.
                </p>
            </div>
        </div>
    </section>
);

export default MyProjects;
