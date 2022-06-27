import styled from "styled-components";
import HamburgueriaImg from '../../assets/hamburgueria.svg';
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
  margin: 20px;
  
  @media (min-width: 430px){
    width: 75vw;
  }
`;

export const Text = styled.h5`
  display: flex;
  width: 75vw;
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



export const Rodape = styled.div`
 display: flex;
 flex-direction: column;
 width: 70vw;
 align-items: center;
 justify-content: center;
 padding: 10px;
`;