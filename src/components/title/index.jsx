import React from "react";
import {Container, Box, Div, NameTitle, Text, Div1, Div2, Div3, Div4, FotoImg, DivFoto, Logos} from "./styles";

const Title = () => {

    return(
        <Container >
            <Box >

                <Div> 
                    <DivFoto> 
                        <Div2 >
                            <FotoImg></FotoImg>
                        </Div2>
                    </DivFoto>
                    <Div1> 
                        <Text> Programar para mim é desvendar um novo mundo!</Text>
                        <NameTitle>Eliane Discacciati</NameTitle> 
                    </Div1>  
                </Div>
                <Div3>
                    <DivFoto></DivFoto>
                    <Div4><Logos></Logos></Div4>
                </Div3>             
            </Box>      
        </Container>
    )}
export default Title;