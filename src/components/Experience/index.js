import React from 'react'

import { ExperienceContainer } from './style'

export const Experience = ({ position, organization, description, logo, image }) => (
  <ExperienceContainer className='experience'>
    <h3 className='experience__position'>{position}</h3>
    <div className='experience__organization'>
      <figure>
        <img src={logo} alt={organization} />
      </figure>
      <p>{organization}</p>
    </div>
    <figure className='experience__photo'>
      <img src={image} />
    </figure>
    <div className='expereience__description' dangerouslySetInnerHTML={{ __html: description }} />
  </ExperienceContainer>
)
