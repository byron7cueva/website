import React from 'react'
import { Button } from './style'

export const MenuButton = ({ onClick, isClicked }) => (
  <Button onClick={onClick} className={isClicked ? 'clicked' : ''}>
    <span className='menu-button__line1' />
    <span className='menu-button__line2' />
    <span className='menu-button__line3' />
  </Button>
)
