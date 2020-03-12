import React from 'react'

import { HomeSection, HomeContainer } from './style'
import Particles from 'react-particles-js'
import nameSvg from '../../assets/img/all/name.svg'

/**
 * Home page
 * @author byron7cueva
 */
export const Home = () => {
  const config = {
    fps_limit: 10,
    particles: {
      number: { value: 25 },
      size: { value: 3 }
    }
  }

  return (
    <HomeSection className='container-viewport'>
      <Particles params={config} className='home__particles' />
      <HomeContainer>
        <div>
          <h6>SOY</h6>
          <img src={nameSvg} />
          <h5>Full Stack Developer</h5>
        </div>
      </HomeContainer>
    </HomeSection>
  )
}
