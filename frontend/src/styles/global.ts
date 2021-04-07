import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
  body {
    background: #f3f3f3;
  }
  a { 
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;