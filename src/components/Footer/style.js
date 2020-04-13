import styled from 'styled-components'

import banner from '../../assets/img/all/banner.svg'
import { zIndex } from '../../settings/constants'
import { saturacionMask } from '../../styles/mixins/Background'

export const FooterContainer = styled.footer`
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 4em;
  .footer__background {
    position: absolute;
    z-index: ${zIndex.bar};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mask-image: url(${banner});
    mask-size: cover;
    background: linear-gradient(30deg,rgba(29, 209, 161, 0.8) 0%,rgba(255, 255, 255, 0.4) 60%);
    ${saturacionMask}
  }
  .footer__content {
    position: absolute;
    z-index: ${zIndex.bar + 1};
    padding: 0.5em;
    p {
      margin: 0;
      font-family: var(--font-title-family);
      font-weight: lighter;
      line-height: 1.2em;
    }
    p.icons {
      margin-top: 0.3em;
    }
    a {
      color: var(--color-dark);
      padding-right: 0.5em;
    }
  }
`
