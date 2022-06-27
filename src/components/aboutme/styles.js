import styled from "styled-components";
import Linkedin from '../../assets/linkedin-original.svg';
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

export const ImageIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50px;
    background-image: url(${Linkedin});
`;