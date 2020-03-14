import React from 'react'
import { ItemMenu } from '../ItemMenu'

import { Nav } from './style'

export const Menu = ({ isShow }) => (
  <Nav className={isShow ? 'show' : ''}>
    <div className='menu__mask' />
    <ul className='menu__content'>
      <ItemMenu to='/' label='Inicio' />
      <ItemMenu to='/about' label='Sobre mi' />
      <ItemMenu to='/opinions' label='Que dicen de mi trabajo' />
      <ItemMenu to='/experience' label='Experiencia' />
      <ItemMenu to='/skills' label='Habilidades' />
      <ItemMenu to='/contact' label='Escribeme' />
    </ul>
  </Nav>
)
