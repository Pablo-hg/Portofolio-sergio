import Banner from "../components/Banner";
import Hello from "../components/Home/Hello";
import Info from "../components/Home/Info";
import Projects from "../components/Home/Projects";
import Reviews from "../components/Home/Reviews";

function Home() {

    return (
        <>
            <Hello />
            <Info />
            <Projects />
            <Banner />
            <Banner />
            <Reviews />
        </>
    )
}

export default Home