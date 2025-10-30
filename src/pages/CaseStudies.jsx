import Designs from "../components/CaseStudies/Designs";
import MyProjects from "../components/CaseStudies/Info";
import Projects from "../components/Home/Projects";
import WorkTogether from "../components/WorkTogether";
import '../styles/CaseStudies.css';

function CaseStudies() {

    return (
        <>
        <MyProjects />
        <Projects />
        <Designs />
        <WorkTogether />
        </>
    )
}

export default CaseStudies