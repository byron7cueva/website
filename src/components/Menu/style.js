import styled from 'styled-components'

import { zIndex } from '../../settings/constants'

export const Nav = styled.nav`
  z-index: ${zIndex.menu};
  position: fixed;
  top: 0;
  right: -70%;
  width: 70%;
  height: 75vh;
  opacity: 0;
  transition-property: right, opacity;
  transition-duration: 0.5s, 0.6s;
  transition-timing-function: ease-out;
  box-shadow: 0px 0px 5px rgba(39, 44, 74, .5);

  .menu__mask {    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: linear-gradient(230deg,rgba(29, 209, 161, 0.8) 0%,rgba(255, 255, 255, 0.4) 60%);
    backdrop-filter: saturate(180%) blur(20px);
    /* background: rgba(255, 255, 255, 0.72); */
  }

  .menu__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: inherit;
    width: 100%;
    list-style: none;
  }

  &.show {
    right: 0;
    opacity: 1;
  }
`
