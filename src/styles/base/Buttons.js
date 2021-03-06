import { css } from 'styled-components'

/**
 * Styles for Buttons
 */
export const Buttons = css`
  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
  }

  .btn-icon {
    margin: 1em 0;
    color: var(--color-gray-2);
    background: transparent;
    i {
      font-size: var(--font-icon-btn-size);
    }
  }

  .btn {
    padding: 1em 2em;
    transition-property: background;
    transition-duration: 0.2;
    transition-timing-function: ease-out;
    color: var(--color-dark);
    border-radius: 24px;
    background: linear-gradient(278deg, var(--color-alternative), var(--color-first));
    opacity: 0.8;
    &:hover {
      background: var(--color-first);
    }
  }
`
