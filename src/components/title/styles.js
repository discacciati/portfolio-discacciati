import styled from "styled-components";
import myImage from '../../assets/myImage.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-bottom: 1px solid var(--white);
`;

export const Box = styled.div`
  display: flex;
  width: 75vw;
  height: 500px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0;

 `;

export const Div = styled.div`
  display: flex;
  width: 50vw;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;

 `;


export const NameTitle = styled.h1`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0;
font-family: 'Titillium Web', sans-serif;
color: var(--lilac);
font-weight: 400;
font-size: 56px;
line-height: 85px;
text-align: left;

`;

export const Text = styled.h3`
  display: flex;
  width: 75vw;
  height: 200px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  font-family: 'Titillium Web', sans-serif;
  color: var(--lilac);
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: left; 
  letter-spacing: 0.15em;

 `;

export const Div2 = styled.div`
display: flex;
width: 50vw;
flex-direction: column;
justify-content: space-around;
padding: 0;

`;

 export const FotoImg = styled.div`
    background-image: url(${myImage});
    border-radius: 300px;
    width: 375px;
    height: 411px;
    z-index: 1;
    
    
 `; 

export const Div3 = styled.div`
display: flex;
width: 100vw;
height: 200px;
background-color: var(--black);
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0;

`;