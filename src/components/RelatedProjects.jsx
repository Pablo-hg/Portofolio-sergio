import Default from "../assets/img/bg/bgDefault.webp";
import Button from './Button';

const RelatedProjects = () => (
    <section className="mt-20 flex text-left">
        <div className="card w-full max-w-[600px]">
            <figure>
                <img
                    src={Default}
                    alt="Shoes" />
            </figure>
            <div className="text-left">
                <h3 className="text-[--color-text-heading-strong]">Diseño de flyer para evento de juegos de mesa.</h3>
                <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className="flex">
                    <Button className='btn-Secondary' href='#' txt='Ver proyecto' />
                </div>
            </div>
        </div>
        <div className="card w-full max-w-[600px]">
            <figure>
                <img
                    src={Default}
                    alt="Shoes" />
            </figure>
            <div className="text-left">
                <h3 className="text-[--color-text-heading-strong]">Diseño de flyer para evento de juegos de mesa.</h3>
                <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <div className="flex">
                    <Button className='btn-Secondary' href='#' txt='Ver proyecto' />
                </div>
            </div>
        </div>
    </section>
);

export default RelatedProjects;
