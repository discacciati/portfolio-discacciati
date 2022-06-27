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
  flex-direction: column;
  justify-content: flex-end;
  align-items: space-between;
  padding: 0;

  @media (min-width: 430px){
    flex-direction: row;
    height: 200px;
    
  
  }

  @media (min-width: 769px){
    width: 75vw;
  }

 `;

export const Div = styled.div`
width: 55vw;
color: var(--white);

@media (min-width: 769px){
  width: 45vw;
}

`;


  