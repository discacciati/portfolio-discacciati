import React from "react";
import {Container, Box, Div, NameTitle, Text, Div1, Div2, Div3, Div4, FotoImg, DivFoto, Logos, LogosIMG, Foto} from "./styles";
import LogosImg from '../../assets/Logos.svg';
import myImage from "../../assets/myImage.svg";

const Title = () => {

    return(
        <Container >
            <Box >

                <Div> 
                    <DivFoto> 
                            <Foto><FotoImg src={myImage} alt=""/></Foto>
                    </DivFoto>
                    <Div1> 
                        <Text> Programar para mim é desvendar um novo mundo!</Text>
                        <NameTitle>Eliane Discacciati</NameTitle> 
                    </Div1>  
                </Div>
                <Div3>
                    <DivFoto></DivFoto>
                    <Div4><Logos><LogosIMG src={LogosImg} alt=""/></Logos></Div4>
                </Div3>             
            </Box>      
        </Container>
    )}
export default Title;