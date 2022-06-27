import styled from "styled-components";
import Linkedin from '../../assets/linkedin-original.svg';

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
  height: 300px;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 30px;

  @media (min-width: 430px){
    width: 75vw;
  }
`;

export const Text = styled.h3`
  display: flex;
  width: 75vw;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  font-family: 'Titillium Web', sans-serif;
  color: var(--pastellilac);
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-align: left; 
  letter-spacing: 0.15em;
  flex-wrap: wrap;
  margin-bottom: 25px;

  @media (min-width: 769px){
  font-size: 16px;
  }

 `;

export const Paragraph = styled.p`

`;


export const ImageIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50px;
    background-image: url(${Linkedin});
`;