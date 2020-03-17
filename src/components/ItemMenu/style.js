import styled from 'styled-components'

import { colors, fonts } from '../../settings/constants'

export const Li = styled.li`
  position: relative;

  a {
    color: ${colors.dark};
    font-family: ${fonts.title};
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: lighter;
  }

  div {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    height: 100%;
    width: 10%;
    background-color: rgba(27, 121, 209, 0.3);
  }

  &.active {
    border-bottom: 1px solid var(--color-first);
    div {
      display: block;
    }
  }
`
