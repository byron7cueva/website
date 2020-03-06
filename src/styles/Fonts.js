import { css } from 'styled-components'

import iconEot from '../assets/font/icon.eot'
import iconSvg from '../assets/font/icon.svg'
import iconTtf from '../assets/font/icon.ttf'
import iconWoff from '../assets/font/icon.woff'

export const Fonts = css`
  @font-face {
    font-family: 'icon';
    src:  url('${iconEot}?vrcole');
    src:  url('${iconEot}?vrcole#iefix') format('embedded-opentype'),
      url('${iconTtf}?vrcole') format('truetype'),
      url('${iconWoff}?vrcole') format('woff'),
      url('${iconSvg}?vrcole#icon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`
