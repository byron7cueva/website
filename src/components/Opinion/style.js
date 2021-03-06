import styled, { css } from 'styled-components'

const styleClass = css`
  button {
    display: block;
    margin: 0 auto;
  }

  .opinion__message {
    min-height: 13em;
    margin-bottom: 1em;
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
    display: inline-flex;
    width: 90%;
    margin-top: 1em;
    img {
      width: 4em;
      border-radius: 50%;
    }
    div {
      text-align: left;
      margin-left: 1em;
      font-size: 0.9em;
    }
  }
`

export const OpinionContainer = styled.article`
  text-align: center;
  ${styleClass}
`
