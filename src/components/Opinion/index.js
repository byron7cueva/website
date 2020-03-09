import React from 'react'

import { OpinionContainer } from './style'

export const Opinion = ({ message, writer, position, photo }) => (
  <OpinionContainer>
    <p className='opinion__message'>
      <span>{message}</span>
      <a href='#'> Ver más..</a>
    </p>
    <button className='btn-icon'>
      <i className='icon-ondas' />
    </button>
    <div className='opinion__writer'>
      <figure>
        <img src={photo} alt={writer} />
      </figure>
      <div>
        <p>{writer}</p>
        <p>{position}</p>
      </div>
    </div>
  </OpinionContainer>
)
