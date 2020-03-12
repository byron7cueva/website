import { createGlobalStyle } from 'styled-components'

import { Fonts } from './settings/Fonts'
import { Variables } from './settings/Variables'
import { Defaults } from './settings/Defaults'
import { Icons } from './base/Icons'
import { Titles } from './base/Titles'
import { Buttons } from './base/Buttons'
import { Containers } from './base/Containers'

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
  ${Containers}
`
