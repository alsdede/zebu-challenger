import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0f0f0;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: sans-serif;
    font-size:16px;
  }

  #root {
    /* max-width:960px; */
    /* margin:0 auto; */

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:500;
  }

  button {
    border:0;
    padding:10px;
    border-radius:5px;
    overflow:hidden;
    color: #FFF;
    margin-top:20px;
    background:#ea1d2c;
    font-weight:700;
    cursor: pointer;

  }
`;
