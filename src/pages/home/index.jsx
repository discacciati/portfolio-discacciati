import Header from "../../components/header";
import { Container} from "./styles";
import Title from "../../components/title";
import AboutMe from "../../components/aboutme"
import Contact from "../../components/contacts";
import Technologies from "../../components/technologies";


const Home = () => {

    return (
        <Container>
            <Header></Header>
            <Title></Title>
            <Contact></Contact>
            <AboutMe></AboutMe>
            <Technologies></Technologies>

        </Container>

    );
}
export default Home; 