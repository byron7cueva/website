import styled from 'styled-components'

import { zIndex } from '../../settings/constants'

export const Button = styled.button`
  z-index: ${zIndex.buttonMenu};
  position: fixed;
  display: block;
  bottom: 35px;
  right: 3%;
  width: 3em;
  height: 3em;
  padding: 0 0.7em;
  /* background: linear-gradient(127deg, var(--color-alternative), var(--color-first)); */
  background-color: var(--color-first);
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(39, 44, 74, .5);
  font-size: var(--font-content-size);
  
  span {
    display: block;
    height: 0.1em;
    margin: 0.21em 0;
    background-color: var(--color-light);
    transition: 0.5s;
    transition-property: transform;
    will-change: transform, opacity;
  }
  .menu-button__line1 {
    transform-origin: top left;
  }
  .menu-button__line2 {
    opacity: 1;
  }
  .menu-button__line3 {
    transform-origin: bottom left;
  }
  &.clicked {
    padding: 0 0.4em 0 1em;
    span {
      margin: 0.5em 0;
    }
    .menu-button__line1 {
      transform: rotateZ(50deg);
    }
    .menu-button__line2 {
      opacity: 0;
    }
    .menu-button__line3 {
      transform: rotateZ(-50deg);
    }
  }
`
