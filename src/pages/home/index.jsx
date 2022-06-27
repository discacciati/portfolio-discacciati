import Header from "../../components/header";
import { Container} from "./styles";
import Title from "../../components/title";
import AboutMe from "../../components/aboutme"
import Contact from "../../components/contacts";
import Technologies from "../../components/technologies";
import Projects from "../../components/projects";
import Footer from "../../components/footer";


const Home = () => {

    return (
        <Container>
            <Header/>
            <Title/>
            <Contact/>
            <AboutMe/>
            <Technologies/>
            <Projects/>
            <Footer/>
        </Container>

    );
}
export default Home; 