import Header from "../../components/header";
import { Container} from "./styles";
import Title from "../../components/title";

const Home = () => {

    return (
        <Container 
        component="main"
        sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white.1",
        width:"3500px",
        }}>
            <Header></Header>
            <Title></Title>

        </Container>

    );
}
export default Home; 