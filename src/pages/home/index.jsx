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

    return (
        <Container>
            <Header setAbout={setAbout} />
            <Title/>
            <Contact/>
            {about? <AboutMe /> : null}
            <Technologies />
            <Projects /> 
            <Footer/> 
        </Container>

    );
}
export default Home; 