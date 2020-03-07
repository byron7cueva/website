import styled from 'styled-components'

import figuresImage from '../../assets/img/phone/figures.png'

export const AboutSection = styled.section`
  padding: 1.5em;
  padding-top: 20%;
  overflow: hidden;
`

export const AboutContent = styled.section`
  display: flex;
`

export const PhotoContainer = styled.figure`
  width: 40%;
  img {
    background-image: url(${figuresImage});
    background-repeat: no-repeat;
    height: 297px;
  }
`
