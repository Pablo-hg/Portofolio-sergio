import { carrersData } from '../../data/careersData';
import Button from '../Button';
import CardStep from './CardStep';

const CareerPath = () => (
    <section className="flex bg-[--color-bg-surface] rounded-lg px-8 py-12 mb-40 justify-between">
        <div className="title">
            <h2 className="text-[--color-text-heading-strong]">Career Path</h2>
            <div className="flex mt-8">
                <Button className='btn-Primary' href='#' txt='Ver mi CV' />
            </div>
        </div>
        <div className="thread max-w-[568px] w-full">
            {carrersData.map((carrer, i) => (
                <div key={carrer.id || i}>
                    <CardStep {...carrer} />
                </div>
            ))}
        </div>
    </section>
);

export default CareerPath;
