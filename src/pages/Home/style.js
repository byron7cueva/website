import styled from 'styled-components'

import heroImage from '../../assets/img/phone/hero.jpg'

export const HomeSection = styled.section`
  background-image: linear-gradient(rgba(32, 74, 123, 0.85), rgba(49, 84, 124, 0.85), rgba(27, 70, 118, 0.85)), url(${heroImage});
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-size: cover;
  .home__particles {
    height: 100%;
    width: 100%;
  }
`

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
  }
`
