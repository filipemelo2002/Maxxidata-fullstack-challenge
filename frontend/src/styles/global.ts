import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    color: #666666;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a { 
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }

  input {
    font-family: 'Roboto', sans-serif;
    color: #3d3d3d;
    font-size: 16px;
  }

`;
