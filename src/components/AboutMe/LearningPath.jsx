import { learningsData } from '../../data/learningsData';
import Button from '../Button';
import CardStep from './CardStep';

const LearningPath = () => (
    <section className="flex bg-[--color-bg-surface] rounded-lg px-8 py-12 mb-40 justify-between">
        <div className="title">
            <h2 className="text-[--color-text-heading-strong]">Learning Path</h2>
            <div className="flex mt-8">
                <Button className='btn-Primary' href='#' txt='Ver mi CV' />
            </div>
        </div>
        <div className="thread max-w-[568px] w-full">
            {learningsData.map((learning, i) => (
                <div key={learning.id || i}>
                    <CardStep {...learning} />
                </div>
            ))}
        </div>
    </section>
);

export default LearningPath;
