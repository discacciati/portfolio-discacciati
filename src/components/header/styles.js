import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-color: var(--white);
`;

export const Box = styled.div`
  display: flex;
  width: 95vw;
  height: 200px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: space-between;
  padding: 0;

  @media (min-width: 430px){
    flex-direction: row;
    height: 200px;  
  }

  @media (min-width: 760px){
    width: 90vw;
  }

  @media (min-width: 1020px){
    width: 80vw;
  }

  @media (min-width: 1400px){
    width: 75vw;
  }

  @media (min-width: 1400px){
    width: 60vw;
  }

 `;

export const Div = styled.div`
width: 55vw;
color: var(--white);

@media (min-width: 769px){
  width: 45vw;
}

`;

export const ButtonA = styled.a`
 display: flex;
 align-items: center;
 justify-content: center;
 background: transparent;
 margin: none;
 text-decoration:none;
 &:hover {
  color: #A3A5C3;;
  transition: 0.2s;
 }
`;


  