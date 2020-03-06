import { createGlobalStyle } from 'styled-components'

import { Variables } from './Variables'
import { Fonts } from './Fonts'
import { Icons } from './Icons'

export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}
  ${Icons}

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    color: var(--color-dark);
    background-color: var(--background-color);
    font-family: var(--font-content-family);
    font-size: var(--font-content-size);
  }

  a {
    text-decoration: none;
  }
`
