import styled from "styled-components";
import myImage from '../../assets/myImage.svg';
import LogosImg from '../../assets/Logos.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
`;

export const Box = styled.div`
  display: flex;
  width: 100vw;
  height: 400px;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0;
`;

export const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 450px;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  @media (min-width: 430px){
    flex-direction: row;
  }

`;

export const DivFoto = styled.div`
  display: flex;
  width: 50vw;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;

  @media (min-width: 430px){
    width: 35vw;
  }
  @media (min-width: 1400px){
    width: 35vw;
  }


`;

export const Div2 = styled.div`
display: flex;
width: 30vw;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 0;

`;



export const FotoImg = styled.div`
display: flex;
justify-content: flex-end;
background-image: url(${myImage});
border-radius: 300px;
width: 280px;
height: 340px;

@media (min-width: 430px){
  z-index: 1;
  border-radius: 300px;
  width: 310px;
  height: 340px;
  }

`; 


export const Div1 = styled.div`
  display: flex;
  width: 80vw;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  @media (min-width: 430px){
    width: 55vw;
  }
  @media (min-width: 1400px){
    width: 45vw;
  }


 `;

export const NameTitle = styled.h1`
display: flex;
width: 45vw;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0;
font-family: 'Titillium Web', sans-serif;
color: var(--lilac);
font-weight: 400;
font-size: 24px;
line-height: 85px;
text-align: left;

@media (min-width: 456px){
  font-size: 36px;
  }


@media (min-width: 769px){
  font-size: 56px;
  }

`;

export const Text = styled.h3`
  display: flex;
  width: 45vw;
  height: 200px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  font-family: 'Titillium Web', sans-serif;
  color: var(--lilac);
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: left; 
  letter-spacing: 0.15em;
  flex-wrap: wrap;

  @media (min-width: 769px){
  font-size: 20px;
  }

 `;





export const Div3 = styled.div`
display: flex;
width: 100vw;
height: 250px;
background-color: var(--black);
flex-direction: row;
justify-content: center;
padding: 30px 0;

`;

export const Div4 = styled.div`
display: flex;
width: 70vw;
background-color: var(--black);
justify-content: flex-start;
padding: 0 20px;

@media (min-width: 769px){
  width: 50vw;
  }

`;

export const Logos = styled.div`
display: flex;
background-image: url(${LogosImg});
width: 390px;
height: 166px;
justify-content: flex-start;


`; 