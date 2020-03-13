import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }


body {
  margin: 0;
  font-size: 18px;
  font-family: monospace;

}
body::after {
  content: "";
  background: url("images/lemon.jpg");
  
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}


button:focus {outline:none}
`

export default GlobalStyles
