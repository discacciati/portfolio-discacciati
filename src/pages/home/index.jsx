import Header from "../../components/header";
import { Container} from "./styles";
import Title from "../../components/title";
import AboutMe from "../../components/aboutme"
import Contact from "../../components/contacts";
import Technologies from "../../components/technologies";
import Projects from "../../components/projects";
import Footer from "../../components/footer";
import { useState } from "react";


const Home = () => {

    const [about,setAbout]=useState(false);
    const [tech,setTech]=useState(false);
    const [project,setProject]=useState(false);

    return (
        <Container>
            <Header setAbout={setAbout} setTech={setTech} setProject={setProject}/>
            <Title/>
            <Contact/>
            {about? <AboutMe /> : null}
            {tech? <Technologies /> : null}
            {project? <Projects /> : null}
            <Footer/>
        </Container>

    );
}
export default Home; 