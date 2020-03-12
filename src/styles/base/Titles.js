import { css } from 'styled-components'

/**
 * Styles for Titles
 */
export const Titles = css`
  h1, h2, h3, h5, h6 {
    font-family: var(--font-title-family);
  }

  h2 {
    position: relative;
    margin-bottom: 1em;
    margin-left: 2.3em;
    padding-left: 1em;
    font-size: 1.9em;
    font-weight: lighter;
    color: var(--color-first);
    ::before {
      position: absolute;
      left: 0;
      top: 50%;
      width: 0.8em;
      content: '';
      border-bottom: solid 0.13em;
    }
  }

  h4 {
    font-family: var(--font-title-article-family);
    font-size: 1.4em;
    font-weight: normal;
  }

  h5 {
    color: var(--color-second);
    font-size: 1.3em;
    font-weight: lighter;
  }

  h6 {
    color: var(--color-light);
    font-size: 1.5em;
    font-weight: normal;
  }
`
