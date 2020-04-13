import styled from 'styled-components'

import figuresImage from '../../assets/img/phone/figures.png'
import { devices } from '../../settings/constants'

export const AboutSection = styled.section`
  overflow: hidden;
`

export const AboutContent = styled.section`
  display: flex;

  @media ${devices.phablet} {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const PhotoContainer = styled.figure`
  width: 40%;
  img {
    height: 297px;
    background-image: url(${figuresImage});
    background-repeat: no-repeat;
  }

  @media ${devices.phablet} {
    margin-bottom: 1em;
    width: 100%;
    img {
      width: 100%;
      object-fit: contain;
      background-position: center;
    }
  }
`
