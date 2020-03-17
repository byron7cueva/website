import React from 'react'

import { FooterContainer } from './style'

export const Footer = () => (
  <FooterContainer>
    <div className='footer__background' />
    <div className='footer__content'>
      <p>2020 - Byron Cueva</p>
      <p className='icons'>
        <a href='https://www.linkedin.com/in/byron7cueva/' className='icon-linkedin' target='noopener noreferrer' />
        <a href='https://github.com/byron7cueva' className='icon-github' target='noopener noreferrer' />
        <a href='https://twitter.com/byron7cueva' className='icon-twitter' target='noopener noreferrer' />
      </p>
    </div>
  </FooterContainer>
)
