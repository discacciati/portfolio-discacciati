import React from "react";
import {Container, Box,Text, Line, Boton, Div, Card, CardTitle, CardText } from "./styles";


const Technologies = () => {

    return(
        <Container id="technologies">
            <Box >
                <Line></Line>
                <Boton>TECHNOLOGIES</Boton>

                <Div> 
                    <Card>
                        <CardTitle>FRONT-END</CardTitle>
                        <CardText> Javascript</CardText>
                        <CardText> HTML5 </CardText>
                        <CardText> CSS </CardText>
                        <CardText> Typescript </CardText>
                        <CardText> React.Js </CardText>
                    </Card>
                    
                    <Card>
                        <CardTitle>BACK-END</CardTitle>
                        <CardText> Node.Js </CardText>
                        <CardText> SQL </CardText>
                        <CardText> MySQL </CardText>
                        <CardText> PostgreSQL </CardText>
                        <CardText> Typescript </CardText>
                    
                    </Card>
                    
                
                
                </Div> 
                                              
            </Box>      
        </Container>
    )}
export default Technologies;