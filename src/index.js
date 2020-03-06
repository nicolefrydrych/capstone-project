import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyle'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
