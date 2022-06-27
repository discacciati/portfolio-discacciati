import React from "react";
import {Container, Box,Line, Boton, Div, DivLink, Card,  CardTitle, CardText, Hamburgueria, DivImgs } from "./styles";
import {BsGithub} from 'react-icons/bs';

const Projects = () => {

    return(
        <Container >
            <Box >
                <Line></Line>
                <Boton>PROJECTS</Boton>

                <Div> 
                                 
                    <Card>
                        <Hamburgueria></Hamburgueria>
                        <CardText> Projeto de e-commerce com funcionalidades de busca por produtos e carrinho de compras</CardText>
                        <CardTitle> LINK PARA O PROJETO | </CardTitle>
                        <CardTitle> REPOSITÓRIO  <DivLink> <BsGithub/> </DivLink>  </CardTitle>   
                            
                    </Card>
                    
                    <Card>
                        <Hamburgueria></Hamburgueria>
                        <CardText> Projeto de e-commerce com funcionalidades de busca por produtos e carrinho de compras</CardText>
                        <CardTitle> LINK PARA O PROJETO | </CardTitle>
                        <CardTitle> REPOSITÓRIO  <DivLink> <BsGithub/> </DivLink>  </CardTitle>   
                            
                    </Card>
                    <Card>
                        <Hamburgueria></Hamburgueria>
                        <CardText> Projeto de e-commerce com funcionalidades de busca por produtos e carrinho de compras</CardText>
                        <CardTitle> LINK PARA O PROJETO | </CardTitle>
                        <CardTitle> REPOSITÓRIO  <DivLink> <BsGithub/> </DivLink>  </CardTitle>   
                            
                    </Card>
                    <Card>
                        <Hamburgueria></Hamburgueria>
                        <CardText> Projeto de e-commerce com funcionalidades de busca por produtos e carrinho de compras</CardText>
                        <CardTitle> LINK PARA O PROJETO | </CardTitle>
                        <CardTitle> REPOSITÓRIO  <DivLink> <BsGithub/> </DivLink>  </CardTitle>   
                            
                    </Card>
                    
                
                
                </Div> 
                                    
            </Box>      
        </Container>
    )}
export default Projects;