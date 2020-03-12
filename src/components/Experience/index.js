import React from 'react'

import { ExperienceContainer } from './style'

export const Experience = ({ position, organization, description, logo, image }) => (
  <ExperienceContainer>
    <h4 className='experience__position'>{position}</h4>
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
