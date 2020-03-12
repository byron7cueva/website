import { css } from 'styled-components'

export const Inputs = css`
  input, textarea {
    width: 100%;
    padding: 1em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    border: 1px solid var(--color-gray);
    font-family: var(--font-content-family);
    font-size: var(--font-content-size);
    outline: none;
    &:hover {
      border-color: var(--color-gray-4);
    }
  }

  textarea {
    height: 10em;
  }
`
