import { css } from 'styled-components'

/**
 * Default and reset styles
 */
export const Defaults = css`
  * {
    box-sizing: border-box;
  }

  html, body, section, figure, article, p, h2, h4, h5, h6 {
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

  p {
    line-height: var(--line-height-content);
    font-weight: lighter;
  }
`
