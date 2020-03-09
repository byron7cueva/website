import styled, { css } from 'styled-components'

const styleClass = css`
  button {
    display: block;
    margin: 0 auto;
  }

  .opinion__message {
    min-height: 13em;
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
