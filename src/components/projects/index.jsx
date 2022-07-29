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
  CardText,
  Hamburgueria,
  ClickFinder,
  KenzieFood,
  KenzieHub,
  FormCadastro, Image,
} from "./styles";
import { BsGithub } from "react-icons/bs";
import HamburgueriaImg from '../../assets/hamburgueria.svg';
import ClickImg from '../../assets/clickfinder.svg';
import KenzieFoodImg from '../../assets/kenzieFood.svg';
import KenzieHubImg from '../../assets/kenzieHub.svg';
import FormCadastroImg from '../../assets/formCadastro.svg';
import ApiM4Img from '../../assets/API-M4.png';
import CRUDImg from '../../assets/CRUD-usuario.png';

const Projects = () => {
  return (
    <Container id="projects">
      <Box>
        <Line></Line>
        <Boton>PROJECTS</Boton>

        <Div>
          <Card>
            <ButtonA
              href="https://capstone-m3-grupo-5-vilson.vercel.app/"
              target="_blank"
            >
              <ClickFinder><Image src={ClickImg} alt=""/></ClickFinder>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de uma aplicação com funcionalidades de cadastro, login,
              portfolio e mais.
            </CardText>
            <ButtonA
              href="https://capstone-m3-grupo-5-vilson.vercel.app/"
              target="_blank"
            >
              LINK PARA O PROJETO |
            </ButtonA>
            <ButtonA
              href="https://github.com/pifaria/capstone-m3-grupo-5-vilson/tree/developer"
              target="_blank"
            >
                              REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
            
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://api-kenziefood-m2-discacciati.vercel.app/"
              target="_blank"
            >
              <KenzieFood><Image src={KenzieFoodImg} alt=""/></KenzieFood>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de e-commerce com funcionalidades de carrinho de compras,
              busca de produtos e mais.
            </CardText>
            <ButtonA
              href="https://api-kenziefood-m2-discacciati.vercel.app/"
              target="_blank"
            >
               LINK PARA O PROJETO | 
            </ButtonA>
            <ButtonA
              href="https://github.com/discacciati/api-kenziefood-m2-discacciati"
              target="_blank"
            >
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
            
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://react-entrega-s1-hamburgueria-da-kenzie-discacciati.vercel.app/ "
              target="_blank"
            >
              <Hamburgueria><Image src={HamburgueriaImg} alt=""/></Hamburgueria>
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
               LINK PARA O PROJETO | 
            </ButtonA>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-discacciati"
              target="_blank"
            >
             
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
        
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://react-entrega-s2-kenzie-hub-discacciati-discacciati.vercel.app/ "
              target="_blank"
            >
              <KenzieHub><Image src={KenzieHubImg} alt=""/></KenzieHub>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de cadastro com funcionalidades de login e cadastro entre outras.
            </CardText>
            <ButtonA
              href="https://react-entrega-s2-kenzie-hub-discacciati-discacciati.vercel.app/ "
              target="_blank"
            >
               LINK PARA O PROJETO | 
            </ButtonA>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-discacciati"
              target="_blank"
            >
             
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
        
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://react-entrega-s2-formulario-de-cadastro-discacciati-discacciati.vercel.app/"
              target="_blank"
            >
              <FormCadastro><Image src={FormCadastroImg} alt=""/></FormCadastro>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de aplicação com formulário de cadastro e outras funcionalidades.
            </CardText>
            <ButtonA
              href="https://react-entrega-s2-formulario-de-cadastro-discacciati-discacciati.vercel.app/ "
              target="_blank"
            >
               LINK PARA O PROJETO | 
            </ButtonA>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-discacciati"
              target="_blank"
            >
             
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
        
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://github.com/almeida-raniery/capstone-grupo-6-felipe"
              target="_blank"
            >
              <FormCadastro><Image src={ApiM4Img} alt=""/></FormCadastro>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de backend feito em Node.JS, que cria um banco de dados e cria uma API REST para leitura, inclusão, atualização e deleção de dados no Banco.
            </CardText>
            <ButtonA
              href="https://github.com/almeida-raniery/capstone-grupo-6-felipe"
              target="_blank"
            >
             
                REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
        
            </ButtonA>
          </Card>

          <Card>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint1-discacciati"
              target="_blank"
            >
              <FormCadastro><Image src={CRUDImg} alt=""/></FormCadastro>
            </ButtonA>
            <CardText>
              {" "}
              Projeto de backend feito em Node.JS, que desenvolve um CRUD de usuário, com permissão de administrador. Possui uma API REST, e permite criar, listar, atualizar e deletar usuários de um banco de dados.
            </CardText>
            <ButtonA
              href="https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint1-discacciati"
              target="_blank"
            > REPOSITÓRIO{" "}
                <DivLink>
                  {" "}
                  <BsGithub />{" "}
                </DivLink>{" "}
        
            </ButtonA>
          </Card>


        </Div>
      </Box>
    </Container>
  );
};
export default Projects;
