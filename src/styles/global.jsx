import { createGlobalStyle, css } from "styled-components";

const TitilliumFont = css`
 @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;700&display=swap');
`;

const BebasFont = css`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

const GlobalStyle = createGlobalStyle`
    ${TitilliumFont}
    ${BebasFont}
	*{
	 margin: 0;
	 padding:0;
	 box-sizing: border-box;
	 outline: 0; 
	}
	
	:root{     
	
	  --white: #f5f5f5;    
	  --lilac: #947EB0;
    --pastellilac: #DCD6F7;
	  --black: #0A0A0B;
	  --green: #A9D2D5;
	}
  
        body{ 
          background-color: var(--black);
          color: var (--pastellilac);
        }
        
        body, input, button{
          font-family: 'Titillium Web', sans-serif;
          font-size: 1rem;
        }
        
        h1,h2,h3,h4,h5,h6{
          font-family: 'Bebas Neue', cursive;
          font-weight:700;
        }
        
        button{
          cursor:pointer;
        }
        
        a{
          text-decoration:none;
        }
`

export default GlobalStyle