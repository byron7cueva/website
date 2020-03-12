import { css } from 'styled-components'

const buttonBase = css`
  border: none;
  cursor: pointer;
  outline: none;
`

/**
 * Styles for Buttons
 */
export const Buttons = css`
  .btn-icon {
    ${buttonBase}
    margin: 1em 0;
    color: var(--color-gray-2);
    background: transparent;
  }

  .btn {
    ${buttonBase}
    padding: 1em 2em;
    transition-property: background;
    transition-duration: 0.2;
    transition-timing-function: ease-out;
    color: var(--color-text-alternative);
    border-radius: 24px;
    background: linear-gradient(278deg, var(--color-alternative), var(--color-first));
    opacity: 0.8;
    &:hover {
      background: var(--color-first);
    }
  }
`
