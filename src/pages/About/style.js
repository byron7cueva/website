import styled from 'styled-components'

import figuresImage from '../../assets/img/phone/figures.png'

export const AboutSection = styled.section`
  overflow: hidden;
`

export const AboutContent = styled.section`
  display: flex;
`

export const PhotoContainer = styled.figure`
  width: 40%;
  img {
    height: 297px;
    background-image: url(${figuresImage});
    background-repeat: no-repeat;
  }
`
