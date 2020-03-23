import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

  *:focus {outline:none}
  
body {
  font-size: 18px;
  font-family: 'Gill Sans';
  max-width: 460px;
  margin: 0 auto;
}

body::after {
  content: "";
  background: url("images/lemon.jpg");
  max-width: 460px;
  margin: 0 auto;
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1; 
}
`

export default GlobalStyles
