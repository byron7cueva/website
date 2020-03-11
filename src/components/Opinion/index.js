import React from 'react'

import { OpinionContainer } from './style'

export const Opinion = ({ message, writer, position, photo, onSpeech }) => {
  return (
    <OpinionContainer>
      <p className='opinion__message'>
        <span>{message}</span>
        <a href='#'> Ver más..</a>
      </p>
      <button className='btn-icon' onClick={onSpeech}>
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
}
