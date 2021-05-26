import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  body{
    background-color: white;
    font-family: -apple-system;
  }
  a{
    text-decoration: none;
    color: black;
  }
  strong{
    font-weight: 700;
    font-size: 23px;
  }
`;

export default globalStyles;