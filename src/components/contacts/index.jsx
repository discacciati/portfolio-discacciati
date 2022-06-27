import React from "react";
import {Container, Box,Text, Paragraph, DivLink, ButtonA } from "./styles";
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';


const Contact = () => {

    return(
        <Container >
            <Box >
                <Text> Olá, sou desenvolvedora fullstack, apaixonada por tecnologias e meu compromisso é trazer soluções criativas e inovadoras que facilitem a vida das pessoas! 
                </Text>

                <Paragraph/>
                <Paragraph/>
                <Text>Contact-me: </Text>   
                
                <Text>          
                <ButtonA
                    href="mailto: discacciati@gmail.com"
                    target="_blank"
                >E-mail <DivLink><SiGmail/></DivLink> 
                </ButtonA> |  
                <ButtonA
                    href="https://www.linkedin.com/in/eliane-discacciati/"
                    target="_blank"
                >LinkedIn <DivLink><BsLinkedin/> </DivLink> 
                </ButtonA> | 
                 <ButtonA
                    href="https://github.com/discacciati"
                    target="_blank"
                > GitHub <DivLink> <BsGithub/> </DivLink> 
                </ButtonA> 
                </Text>
                  
            </Box>      
        </Container>
    )}
export default Contact;