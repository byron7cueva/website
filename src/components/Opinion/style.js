import styled, { css } from 'styled-components'

const styleClass = css`
  button {
    margin: 1em 0;
    color: var(--color-gray-2);
    border: none;
    background: transparent;
    outline: none;
  }

  .opinion__message span {
    &:after, &:before {
      font-family: var(--font-icons-family);
      font-size: 1.5em;
      content: '\\e905';
    }
    &:before {
      display: inline-block;
      transform: scale(-1);
    }
  }
  .opinion__writer {
    width: 90%;
    display: inline-flex;
    img {
      width: 4em;
      border-radius: 50%;
    }
    div {
      margin-left: 1em;
      font-size: 0.9em;
      text-align: left;
    }
  }
`

export const OpinionContainer = styled.article`
  text-align: center;
  ${styleClass}
`
