import React from 'react'

import { AboutSection, AboutContent, PhotoContainer } from './style'
import photoImage from '../../assets/img/phone/photo.png'

/**
 * About me page
 */
export const About = () => (
  <AboutSection className='container-page'>
    <h2>Sobre mi</h2>
    <AboutContent>
      <p>
        Soy Ingeniero en Sistemas Computacionales, tengo 6 años de experiencia en desarrollo de software. Me apasiona la tecnología e investigación, me gustan los retos mucho mejor si estos involucran el aprendizaje. Pienso que la mejor manera de viajar acorde al tiempo es automatizando procesos y que un buen trabajo depende de cuánto y cómo lo mides o validas.
      </p>
      <PhotoContainer>
        <img src={photoImage} alt='Byron Cueva' />
      </PhotoContainer>
    </AboutContent>
  </AboutSection>
)
