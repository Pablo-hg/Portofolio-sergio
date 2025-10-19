import Button from '../components/Button';
import Banner from "../components/Home/Banner";
import Hello from "../components/Home/Hello";
import Info from "../components/Home/Info";
import Projects from "../components/Home/Projects";
import Reviews from "../components/Home/Reviews";

function Home() {

    return (
        <>
            <div className="home">
                <Hello />
                <Banner />
                <Info />
                <Projects />
                <div className="flex justify-center mt-16">
                    <Button className='btn-Primary' href='case-studies' txt='Ver todos los proyectos' />
                </div>
                <Reviews />
            </div>
        </>
    )
}

export default Home