import React from "react";
import {Container, Box,Line, Boton, Div, Div2, Text, DivLink, Card, Rodape, CardTitle, CardText, Hamburgueria, DivImgs } from "./styles";
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {

    return(
        <Container >
            <Box >
                <Line></Line>

                <Rodape> 
                    <Text> Construído por Eliane Discacciati <AiOutlineCopyrightCircle/> </Text> 
                </Rodape>
                                              
            </Box>      
        </Container>
    )}
export default Footer;