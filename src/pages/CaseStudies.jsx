import Designs from "../components/CaseStudies/Designs";
import MyProjects from "../components/CaseStudies/Info";
import WorkTogether from "../components/CaseStudies/WorkTogether";
import Projects from "../components/Home/Projects";
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