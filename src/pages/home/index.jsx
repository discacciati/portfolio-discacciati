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

    const winSize = window.screen.width
    console.log(winSize)

    return (
        <Container>
            {window.screen.width > 430 ? <Header setAbout={setAbout} /> : null} 
            <Title/>
            <Contact/>
            {window.screen.width > 430 ?  about ? <AboutMe /> : null : <AboutMe />} 
            <Technologies />
            <Projects /> 
            <Footer/> 
        </Container>

    );
}
export default Home; 