import React from "react";
import {
  Container,
  Box,
  Line,
  ButtonA,
  Boton,
  Div,
  DivLink,
  Card,
  CardTitle,
  CardText,
  Hamburgueria,
  DivImgs,
} from "./styles";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <Container>
      <Box>
        <Line></Line>
        <Boton>PROJECTS</Boton>

        <Div>
          <Card>
            <ButtonA
              href="https://react-entrega-s1-hamburgueria-da-kenzie-discacciati.vercel.app/ "
              target="_blank"
            >
              <Hamburgueria></Hamburgueria>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de e-commerce com funcionalidades de busca por produtos e
              carrinho de compras
            </CardText>
            <ButtonA
              href="https://react-entrega-s1-hamburgueria-da-kenzie-discacciati.vercel.app/ "
              target="_blank"
            >
              <CardTitle> LINK PARA O PROJETO | </CardTitle>
            </ButtonA>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-discacciati"
              target="_blank"
            >
              <CardTitle>
                {" "}
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
              </CardTitle>{" "}
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://react-entrega-s1-hamburgueria-da-kenzie-discacciati.vercel.app/ "
              target="_blank"
            >
              <Hamburgueria></Hamburgueria>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de e-commerce com funcionalidades de busca por produtos e
              carrinho de compras
            </CardText>
            <ButtonA
              href="https://react-entrega-s1-hamburgueria-da-kenzie-discacciati.vercel.app/ "
              target="_blank"
            >
              <CardTitle> LINK PARA O PROJETO | </CardTitle>
            </ButtonA>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-discacciati"
              target="_blank"
            >
              <CardTitle>
                {" "}
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
              </CardTitle>{" "}
            </ButtonA>
          </Card>
        </Div>
      </Box>
    </Container>
  );
};
export default Projects;
