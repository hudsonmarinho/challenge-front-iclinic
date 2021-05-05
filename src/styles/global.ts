import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.page.background};
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    transition: all .2s ease-in-out;
  }

  body, input, button{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width: 890px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
