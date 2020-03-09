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

  html, body, section, figure, article, p, h2, h4, h5 {
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

  h1, h2, h3, h4, h5 {
    font-family: var(--font-title-family);
  }

  h2 {
    position: relative;
    font-size: 1.9em;
    color: var(--color-first);
    font-weight: lighter;
    margin-bottom: 0.5em;
    padding-left: 1em;
    ::before {
      content: '';
      width: 0.8em;
      border-bottom: solid 0.13em;
      position: absolute;
      left: 0;
      top: 50%;
    }
  }

  h4 {
    color: var(--color-light);
    font-size: 1.5em;
    font-weight: normal;
  }

  h5 {
    color: var(--color-second);
    font-size: 1.3em;
    font-weight: lighter;
  }

  p {
    font-weight: lighter;
  }

  .section-viewport {
    width: 100%;
    height: 100vh;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-icon {
    margin: 1em 0;
    color: var(--color-gray-2);
    border: none;
    background: transparent;
    outline: none;
  }
`
