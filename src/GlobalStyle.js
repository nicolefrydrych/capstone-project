import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

body {
  margin: 0;
  background-color: #f7f5e6;
  font-family: sans-serif;
  font-size: 18px;
}
`

export default GlobalStyle
