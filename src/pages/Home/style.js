import styled from 'styled-components'

import { containerFull } from '../../styles/mixins/Containers'
import heroImage from '../../assets/img/phone/hero.jpg'

/**
 * Styles for Home Page
 */
export const HomeSection = styled.section`
  background-image: linear-gradient(rgba(32, 74, 123, 0.85), rgba(49, 84, 124, 0.85), rgba(27, 70, 118, 0.85)), url(${heroImage});
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-size: cover;
  .home__particles {
    ${containerFull}
  }
`
/**
 * Home Container Styles
 */
export const HomeContainer = styled.div`
  ${containerFull}
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
  }
`
