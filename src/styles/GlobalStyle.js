import { createGlobalStyle } from 'styled-components'

import { Variables } from './Variables'

export const GlobalStyle = createGlobalStyle`
  ${Variables}

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }
`
