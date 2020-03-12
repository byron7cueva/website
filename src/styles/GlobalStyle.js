import { createGlobalStyle } from 'styled-components'

import { Fonts } from './settings/Fonts'
import { Variables } from './settings/Variables'
import { Defaults } from './settings/Defaults'
import { Icons } from './base/Icons'
import { Titles } from './base/Titles'
import { Buttons } from './base/Buttons'

/**
 * Global styles
 */
export const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}
  ${Defaults}
  ${Icons}
  ${Titles}
  ${Buttons}

  .section-viewport {
    width: 100%;
    height: 100vh;
  }

  .section-container {
    padding: 1.5em;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart {
    width: 100%;
    height: 200px;
  }
`
