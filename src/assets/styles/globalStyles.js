import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 10px 60px;
    font-family: 'Teko';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Teko';
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;