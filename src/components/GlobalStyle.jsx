import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: inherit;
 }


  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
 }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: #252f38;
    background-color: #e7ecf2;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
