import styled from "styled-components";

import { css } from "styled-components";
import { style } from "@mui/system";

const BebasFont = css`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
`;


export const Box = styled.div`
  display: flex;
  width: 95vw;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 0;

  @media (min-width: 430px){
    width: 85vw;
  }
`;

export const Line = styled.div`
  display: flex;
  width: 95vw;
  height: 1px;
  border: 1px solid #A9D2D5;
  background-color: #A9D2D5 ;
  border-radius: 10px;

  
  @media (min-width: 430px){
    width: 85vw;
  }
`;

export const Boton = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 35px;
    background: #A9D2D5;
    border-radius: 8px;
    margin-top: 35px;
    margin-left: 10px;
    margin-bottom: 15px;

    font-family: ${BebasFont};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #4B6062;
`;

export const Text = styled.h5`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  font-family: 'Titillium Web', sans-serif;
  color: var(--pastellilac);
  font-weight: 400;
  font-size: 1em;
  line-height: 30px;
  text-align: left; 
  letter-spacing: 0.1em;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 8px;

  @media (min-width: 769px){
  font-size: 16px;
  }

 `;

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 450px;

    background: #ECF9F7;
    border-radius: 35px;
    border-bottom: 15px solid #A9D2D5;
    margin-bottom: 20px;

    @media (min-width: 760px){
      width: 320px;
      height: 450px;
    }

    @media (min-width: 1020px){
      width: 360px;
      height: 450px;
    }
    
`;

export const CardTitle = styled.div`
    display: flex;
    font-family: ${BebasFont};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.15em;
    color: #947EB0;
    padding: 5px;

`;

export const CardText = styled.h5`
    display: flex;
    font-family: 'Titillium Web', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.15em;
    color: #808D8E;
    flex-wrap: wrap;
    padding: 10px;
`;


export const DivLink = styled.div`
 display: flex;
 padding: 3px;
 align-items: center;
 justify-content: center;


`;

export const ButtonA = styled.a`
 display: flex;
 align-items: center;
 font-family: ${BebasFont};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
    letter-spacing: 0.15em;
    color: #947EB0;
    padding: 5px;
 justify-content: center;
 background: transparent;
 margin: none;
 text-decoration:none;
 &:hover {
  color: #A3A5C3;;
  transition: 0.2s;
 }
`;

export const Hamburgueria = styled.div`
display: flex;
width: 295px;
justify-content: flex-start;
margin-top: 15px;
border-radius: 5px;

@media (min-width: 1020px){
      width: 350px;
    }

`; 

export const ClickFinder = styled.div`
display: flex;
width: 295px;
justify-content: flex-start;
margin-top: 15px;
border-radius: 5px;

@media (min-width: 1020px){
      width: 350px;
    }

`; 

export const KenzieFood = styled.div`
display: flex;
width: 295px;
justify-content: flex-start;
margin-top: 15px;
border-radius: 5px;

@media (min-width: 1020px){
      width: 350px;
    }

`; 

export const KenzieHub = styled.div`
display: flex;
width: 295px;
margin-top: 15px;
justify-content: flex-start;
border-radius: 5px;

@media (min-width: 1020px){
      width: 350px;
    }

`; 

export const FormCadastro = styled.div`
display: flex;
width: 295px;
justify-content: flex-start;
margin-top: 15px;
border-radius: 5px;

@media (min-width: 1020px){
      width: 350px;
    }

`; 

export const Image = styled.img`
width: 295px;
@media (min-width: 1020px){
      width: 350px;
    }


`;