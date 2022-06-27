import styled from "styled-components";
import HamburgueriaImg from '../../assets/hamburgueria.svg';
import ClickImg from '../../assets/clickfinder.svg';
import KenzieFoodImg from '../../assets/kenzieFood.svg';
import KenzieHubImg from '../../assets/kenzieHub.svg';
import FormCadastroImg from '../../assets/formCadastro.svg';
import { css } from "styled-components";

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
    width: 75vw;
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
    width: 75vw;
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
    width: 320px;
    height: 450px;

    background: #ECF9F7;
    border-radius: 35px;
    border-bottom: 15px solid #A9D2D5;
    margin-bottom: 20px;
    
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
background-image: url(${HamburgueriaImg});
width: 310px;
height: 250px;
justify-content: flex-start;

`; 

export const ClickFinder = styled.div`
display: flex;
background-image: url(${ClickImg});
width: 310px;
height: 250px;
justify-content: flex-start;

`; 

export const KenzieFood = styled.div`
display: flex;
background-image: url(${KenzieFoodImg});
width: 310px;
height: 250px;
justify-content: flex-start;

`; 

export const KenzieHub = styled.div`
display: flex;
background-image: url(${KenzieHubImg});
width: 310px;
height: 250px;
justify-content: flex-start;

`; 

export const FormCadastro = styled.div`
display: flex;
background-image: url(${FormCadastroImg});
width: 310px;
height: 250px;
justify-content: flex-start;

`; 